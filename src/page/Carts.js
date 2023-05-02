//import { CssBaseline } from '@mui/material'

import { Button, Rating, Typography } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../components/Header';
import { removeFromCart } from '../redux/CartSlice';
import { decrementQuantity } from '../redux/CartSlice';
import { incrementQuantity } from '../redux/CartSlice';
import { Link } from 'react-router-dom';
import './Carts.css'
export const Carts = () => {
 
  const cart = useSelector((state)=>state.cart.cart);
   const total = cart.map((items)=> items.price* items.quantity).reduce((curr,prev)=>curr+prev,0)
  const dispatch =useDispatch();
  const decrementItemQuantity=(item)=>{
    dispatch(decrementQuantity(item))
  }
  const incrementItemQuantity =(item)=>{
    dispatch(incrementQuantity(item))
  }
  const removeItemFromCart =(item)=>{
    dispatch(removeFromCart(item))
  }
 
  return (
    <>
  <Header/>
    <div className='cart' style={{}}>
      <div className='cartLeft'>
{cart.map((ele,index)=>(
<div className='cartContainer' key={index}>
{/* image */}
<div className='img' >
<img src={ele.image} alt='' style={{width:200,height:200 }}/>
</div>
{/* description */}
<div className='desc' >
<p> <li><u><b>{ele.title}</b></u></li></p>
<p style={{
  marginTop:10}}>
    {ele.description.length>120 ? ele.description.substr(0,120) : ele.description}
    </p>
  <p style={{
  marginTop:10}}>
  <Typography component="legend"><b>Please give Rating</b></Typography>
<Rating/>
  </p>  
<p style={{
  marginTop:10}}>
  <b>${ele.price * ele.quantity}</b>
  </p>

<div className='cartButton' style={{
  marginTop:10,
  marginLeft:10,
  marginRight:10}}>
<button onClick={()=>decrementItemQuantity(ele)}
style={{
  backgroundColor:"red",
  width:25,
  cursor:"pointer"
  }}>-</button>

<p style={{marginLeft:10,marginRight:10}}>{ele.quantity}</p>

<button onClick={()=>incrementItemQuantity(ele)}
style={{
  backgroundColor:"red",
   width:25 , 
   cursor:"pointer"}}>+</button>
</div>

<div className='removeCart' style={{
  marginTop:10,
  marginLeft:10,
  marginRight:10}}>

 <button onClick={()=>removeItemFromCart(ele)}
 style={{
  backgroundColor:"orangered"
  ,width:80,
  cursor:"pointer"}}>Remove</button>

</div>

</div>
{/* */}
<div className='btn'>

</div>
</div>
))}
      </div>
      <div>
      <div className='cartRight'>
   

<div><h3>Total Price:${total.toFixed(3)}</h3></div>


<div></div>
 <div></div>
      </div>
      <div>
      <Link to="/payments">
      <Button variant='h1' color='success' >SHOP</Button>
      </Link>
      </div>
      </div>
     
    </div>
   
    </>
  )
}
