import React,{useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import Foodlist from './foodList';
import Foodsaved from './foodSave';
import { useDispatch } from 'react-redux';
import { getPosts } from '../redux/getBlogSlice';
import Foodview from './foodView';

export default function Food ()
{
    const [query,setQuery] = useState('apple')
    const [saved,setSaved] = useState([])
    const [open, setOpen] = useState(false);
    const [current,setCurrent] = useState({})
       const dispatch = useDispatch()
      useEffect(()=>{
        dispatch(getPosts({
          query: query,from: 1,to:5
        }))
      },[])
      const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });
      const handleClickOpen = (value) => {
        setOpen(value);
      };
    
      const findFood = (e)=>{
        dispatch(getPosts({
          query: query,from:1,to:5
        }))
      } 
    return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            <MicrowaveIcon/> Recipes Made Simple 
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Box className="m-1 p-1">
    {    open? <Foodview current={current} handleClickOpen={()=>handleClickOpen(false)} Img={Img}/> : <Grid container>
<Grid  xs={6}>
        <Foodlist query={query} setQuery={(value)=>setQuery(value)} findFood={(value)=>findFood(value)} handleClickOpen={()=>handleClickOpen(true)} setSaved={(value)=>setSaved(value)} setCurrent={(value)=>setCurrent(value)} Img={Img} saved={saved}/>
        </Grid>
        <Grid  xs={6}>
           <Foodsaved query={query} setQuery={(value)=>setQuery(value)} findFood={(value)=>findFood(value)} setSaved={(value)=>setSaved(value)} handleClickOpen={()=>handleClickOpen(true)} setCurrent={(value)=>setCurrent(value)} Img={Img} saved={saved}/>
        </Grid>
      </Grid>}
      </Box>
    </>
}




