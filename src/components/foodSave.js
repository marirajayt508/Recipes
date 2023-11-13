import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { toast } from 'react-toastify';

export default function Foodsaved({saved,setSaved,setCurrent,handleClickOpen,Img})
{
  const deleteFood = (res)=>{
    let rmvd = saved.filter((resp,ind)=>{
      return resp != res
     })
     toast.error("Recipe Removed")
     setSaved([...rmvd])
}
  
    return         <Paper className="m-3 p-3">
    <Typography className='fw-bold'>Saved Recipes</Typography>
    
        <Divider/>
        <br/>
        {!saved.length ? <Typography className='text-center fw-bold p-3 m-1'>
        No Recipes Saved
        </Typography> :
saved.map((res,ind)=>{
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
<Grid>
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
    <Button className="text-danger" onClick={()=>{
      deleteFood(res)
    }}>Delete</Button>
    </Grid>
  </Grid>
</Grid>
</Grid>
</Paper><br/></>
})}
<br/>
        <Divider/>
        </Paper>
}