import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';
import { getPosts } from '../redux/getBlogSlice';
import { toast } from 'react-toastify';
import { maxPage, options } from '../utils';

export default function Foodlist({query,setQuery,findFood,saved,setSaved,setCurrent,handleClickOpen,Img})
{
  const [page,setPage] = React.useState(1)
    const state = useSelector((state) => state)
    const diapatch = useDispatch();
    const getPage =(pageNo)=>{
      //To Make Pagination
      diapatch(getPosts({
  query: query, from : ((pageNo+1)*maxPage)-maxPage,to: (pageNo+1)*maxPage
}))
    }
    const check = (res)=>{
      if(saved.indexOf(res)==-1)
      {
        setSaved([...saved,res])
        toast.success("Recipe Saved")
      }
      else
      {
        toast.error("Recipe is Already Saved")                
      }
    }
    return <Paper className="m-3 p-3">
            <Typography className='fw-bold'>All Recipes</Typography>
            <Divider/>

            <Box className="p-3 m-1">
            <TextField  variant="standard" placeholder='Search Your Recipes Here' sx={{width : "90%"}} onChange={(e)=>{
              setQuery(e.target.value)
            }}/>
            <IconButton aria-label="search"  color="primary" onClick={()=>{
              findFood()
            }} onEnter={
              ()=>{
                findFood()
              }
            }>
        <SearchIcon />
      </IconButton>
            </Box>
            <Divider/>
            {!state.blogs.loading ? <><Box className="p-3">
              Food Type   <select class="form-select"  onChange={(value)=>{
                findFood(value)
              }}>
 {
options.map((opt)=>{
  return <option value={`${query+" "+opt}`}>{opt}</option>
})
 }
</select>
              </Box>
            <br/>
                        {!state.blogs.datas.hits?.length ? <Typography className='text-center fw-bold p-3 m-1'>
               No Recipes Found Please Search
            </Typography> : state.blogs.datas.hits.map((res,ind)=>{
              return <>     <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={res.recipe.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography className='fw-bold' gutterBottom variant="subtitle1" component="div">
               {res.recipe.label}
              </Typography>
              <Link href={res.recipe.url}>
          {res.recipe.source}
          </Link>
              <Typography variant="body2" color="text.secondary">
          {
            res.recipe.mealType.map((val,i)=>{
              return<>{val},</>
            })
          }
          </Typography>
            </Grid>
            <Grid >
            <Button onClick={()=>{
              setCurrent(res)
              handleClickOpen()
                }}>View</Button>
            <Button className="text-success" onClick={()=>{
             check(res)
       }}>save</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <br/>

    </> 
            })

}<br/>
            <Divider/>
            <div style={{"textAlign" : 'center'}}>
            <ul className="pagination">
    <li className={page==1?'page-item disabled':'page-item'} onClick={()=>{
setPage(page-1)
getPage(page)
}}>
      <span className="page-link">Previous</span>
    </li>
{
  Array(maxPage).fill(null).map((num,ind)=>{
return <li className={page==ind+1? "fw-bold page-item active":"page-item "}><a className="page-link" onClick={()=>{
setPage(ind+1)
getPage(ind)
}}>{ind+1}</a></li> 
  })
}
    <li className={page==maxPage?'page-item disabled':'page-item '}>
      <a className='page-link' onClick={()=>{
setPage(page+1)
getPage(page)
}}>Next</a>
    </li>
  </ul>
  </div>
            <Box>
            </Box></> : <div className="text-center p-3 m-3">
            <CircularProgress/>
            <p className="fw-bold"> Loading...</p>
              </div>}
            </Paper>
}