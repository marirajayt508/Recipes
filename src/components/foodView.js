import React from 'react';
import Button from '@mui/material/Button';
import { Paper, Typography, Link } from '@mui/material';
import {Box} from '@mui/material/';
import {Divider} from '@mui/material';

export default function Foodview({handleClickOpen,current,Img})
{
    return <Box container >
    <Paper className="m-3 p-3">
<Box className="p-2 m-2">
<Img alt="complex" src={current.recipe.image} width="20%" />
<div className='text-center fw-bold'>
{current.recipe.label}
</div>
</Box>
<Divider/>
<Box className="p-2 m-2">
    <Typography>
    <b>Meal Type :</b> {current.recipe.mealType.map(res=>{
    return <span> {res}</span>
})}
</Typography>
<Typography>
<b>Dish Type :</b> {current.recipe.dishType.map(res=>{
    return <span> {res}</span>
})}
</Typography>
<Typography>
<b>Tags :</b> {current.recipe.healthLabels.map(res=>{
    return <span> {res}</span>
})}
</Typography>
<Typography >
<b>Source :</b> <Link href={current.recipe.url}>{current.recipe.source}</Link>
</Typography>
<Typography>
<b>Cautions :</b> {current.recipe.cautions.map(res=>{
    return <span> {res}</span>
})}
</Typography>
<Divider/>
<b>Ingredients</b>
<table className="table table-bordered">
    <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Measure</th>
        <th>Food</th> 
        <th>Weight</th>
        <th>Category</th> 
        <th>Id</th>
    </tr>
{current.recipe.ingredients.map(res=>{
    return <tr>
        <td>
{res.text}
        </td>
        <td>
        {res.quantity}  
            </td>
            <td>
            {res.measure}
            </td>
            <td>
            {res.food}
            </td>
            <td>
            {res.weight}
            </td>
            <td>
            {res.foodCategory}
            </td>
            <td>
            {res.foodId}
            </td>
    </tr>
})}
 </table>
 <Typography>
<b>Procedure :</b> {current.recipe.ingredientLines.map(res=>{
    return <p> {res}</p>
})}
</Typography>
<Divider/>
</Box>
<div className='text-center'>
<Button variant='contained' className="bg-danger" onClick={()=>{
        handleClickOpen()
    }}>Back</Button></div>
    </Paper>
    <Divider/>
    </Box>
}