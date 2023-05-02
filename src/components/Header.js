
import "./Header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { DrawerCmp } from './Drawer';

import { Typography } from '@mui/material';
// import ProductItem from './ProductItem';
//import { CssBaseline } from '@mui/material';

export const Header = () => {
  
 
  //const [searchResult , setSearchResult] = useState([])
  const cart= useSelector((state)=> state.cart.cart)
  const navigate = useNavigate();
  const NavigatesToCart=()=>{
    navigate("/Carts")
  }
//   const SearchItem =(e)=>{
// setSearch(e.target.value)

//   }

  return (
    <div className='header'>
   <div className='MenuButton'>
   <DrawerCmp/>
{/* <MenuIcon style={{color:"white", marginTop:5}}>
</MenuIcon> */}

   </div>
   
   <div className='inputContainer' >
   <Typography variant='h4'> Ecommerce Project</Typography>
   </div>
  
   <div  onClick={NavigatesToCart} className='carts' style={{position:'relative', cursor:"pointer" }}>
<ShoppingCartIcon style={{color:"red", marginTop:5, marginLeft:5 ,marginRight:5}} />
<span 
style={{
    position:"absolute",
    left:14,
    right:14,
    backgroundColor:"white",
    width:14,
    height:14,
    fontSize:12,
    fontWeight:400,
    borderRadius:7,
    textAlign:"center",
    color:"black"
    }}>{cart.length}
 </span>
   </div>
   <div className='accountCircle'>
  <Link to="/login">
  <AccountCircleIcon style={{color:"white" , marginLeft:5,marginRight:5,marginTop:5}}/>

  </Link>
   </div>
    </div>
    
  )
}
