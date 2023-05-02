
import { Button, Rating, Typography,  } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import {removeFromCart} from '../redux/CartSlice';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import "./ProductItem.css"

function ProductItem({item}){
    const cart = useSelector((state)=> state.cart.cart)
   console.log(item,"my api")
    const dispatch = useDispatch();
    const addItemToCart=(item)=>{
        dispatch(addToCart(item));
      
 }
 const removeItemFromCart =(item)=>{
    dispatch(removeFromCart(item))
 }
 
    return (
    <div className='productItem'>
   
        {/* Title */}
        <p >{ item?.title.length>30 ? item.title.substr(0,30) : item.title}</p>
{/* Image */}
<img style={{width:200 , height:200,marginLeft:"auto",marginRight:"auto"}} src={item.image} alt=''/>
{/* description */}
<p>{item?.description.length>60 ? item.description.substr(0,60):item.description}</p>
<Typography component="legend"></Typography>
<Typography> rating:{item.rating.rate}<StarIcon sx={{fontSize:20 , width:"10px"}} /></Typography>
<Typography>count:{item.rating.count}</Typography>
{/* price */}
<p  className='price'  style={{padding:2,alignItems:'center' ,justifyContent:'space-between'}} > Price:${item.price}  </p>
{/* button */}
{cart.some((x)=> x.id===item.id) ? (
    <Button onClick={()=>removeItemFromCart(item)} className='CartButton' variant='contained' color='success' >
Remove from  Cart
   </Button>
) : (
    <Button onClick={()=>addItemToCart(item)} className='CartButton' variant='contained' color='success' >
Add to Cart
   </Button>
)}
 

{/* <Button  className='CartButton' variant='contained' color='success' >
<Link to="/info">Info</Link>
   </Button> */}

 
   
 
   </div>
   
    )
  
}
export default ProductItem;