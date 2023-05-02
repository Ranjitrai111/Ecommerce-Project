//import { addToCart } from '../redux/CartSlice';
//import { useDispatch } from 'react-redux';
//import { CssBaseline } from '@mui/material';

import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import './Body.css'
import ProductItem from './ProductItem';
export const Body = () => {
   // const dispatch= useDispatch();
    // const addItemToCart =(e)=>{
    //     dispatch(addToCart(e))
    // }
    const [product,setProduct]=useState([])
    const [Filter,setFilter] =useState(product)
    const cart = useSelector((state)=> state.cart.cart)
    console.log(cart)
    useEffect(()=>{
     const getProduct = async()=>{
 await fetch("https://fakestoreapi.com/products")
.then((res)=>res.json())
.then((data)=> setProduct(data))
    console.log(product,"hello")
    }
      
        getProduct();
      }, []);

      const ProductFilter=(item)=>{
        const updateFilter= product.filter((x)=> x.category===item)
        setFilter(updateFilter)
      }
      

      const ShowProduct =()=>{
        return(
          <>
          <Grid container sx={{
          justifyContent:'center',
          padding:'5px'
          }}>
           <Grid item padding={2}>
          <Typography>
           <Button onClick={()=>setFilter(product)}>All</Button>   
            </Typography>
          </Grid> 
          <Grid item padding={2}>
          <Typography >
           <Button onClick={()=>ProductFilter("men's clothing")}>Men's Clothing</Button>   
            </Typography>
          </Grid>
          <Grid item padding={2}>
          <Typography >
            <Button onClick={()=>ProductFilter("women's clothing")}> Women's Clothing</Button> 
            </Typography>
          </Grid>
          <Grid item padding={2}>
          <Typography>
            <Button onClick={()=>ProductFilter('jewelery')}>Jewelery</Button>  
            </Typography>
          </Grid>
          <Grid item padding={2}>
          <Typography>
             <Button onClick={()=>ProductFilter("electronics")}>Electronic</Button> 
            </Typography>
          </Grid>
        
          </Grid>
   
          </>
      )}
      
  return( 
  <div className='body'>
  <div className='categories'> 
  {<ShowProduct/>} </div>


  {/* <div className='categories'>
  
  <label >Categories:</label>
<select>
  <option value="allItems">All</option>
  <option value="man">Men's Clothing</option>
  <option value="woman">Women's Clothing</option>
  <option value="jewelery">Jewelery</option>
  <option value="electronic">Electronices</option>
  </select>
  </div> */}
<div className='bodyItem'>
 {Filter.map((ele,index)=>(
<ProductItem item={ele} key={ele.id} />

 )
 


/* <div className='productItems' key={index} > */
/* Image

   
 <img style={{width:200, height:200 ,marginLeft:"auto",marginRight:"auto"}} src={ele.image} alt=''/>

{/* description */
/* 


  <p style={{padding:2}}><Button  className='buyButton' variant='contained' color='success'>
BUY
   </Button></p> 
   </div> */ 
    /* </div> */
    
 
 )}
 
</div>
    </div>
  ) 
}