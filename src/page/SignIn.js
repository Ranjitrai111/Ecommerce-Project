 import { createSlice } from "@reduxjs/toolkit";
import React, { useEffect, useState } from 'react'
import { Paper, Typography,TextField, Grid,Box, Button } from '@mui/material'
import { Container } from '@mui/system'
import { Link } from "react-router-dom";




export const SignIn = () => {
    const [data, setData]=useState([]);
    const [Info,setInfo]= useState({
        first:"",
        last:"",
        email:"",
        password:"",
    })
     const handleDetails =(e)=>{
     setInfo((prev)=>({...prev,[e.target.name] : e.target.value
    
 }))
 console.log(Info)
    }
   const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(Info)
        const {first, last, email,password}=Info;
        if(first===""){
            alert("Name field is required")
        }else if(last===""){
            alert("last field is required")
        }else if(email===""){
            alert("email field is required")
        }else if(password.length <3 ){
            alert("password should be at least 3 characters")
   }else{
    alert(" data registered successfully");
    localStorage.setItem("stored", JSON.stringify(...data,[Info]));
   }
}

   
  return (
    <>
    <form >
     <Box
    justifyContent={"center"}
     display="flex"
      flexDirection={"column"}
       maxWidth={400}
        alignItems="center"
        
        margin="auto"
    //    sx={{
    //     ":hover":{
    //         boxShadow:"10px 10px 20px black",
    //         borderRadius:2,
        
    //     }
    //    }}

>
    <Container >
    
    <Paper elevation={3}  
     sx={{
        ":hover":{
            boxShadow:"10px 10px 20px black",
            borderRadius:2,
        
        }
       }}
 >
    <Grid textAlign="center">
    <Typography variant='h4'  padding={3} color="skyBlue" >User Signup</Typography>
    <Grid item padding={2} >
    <Typography>First Name</Typography>
    <TextField 
    placeholder='First Name'
    name="first"
     required
          value={Info.first}
          onChange={handleDetails}
           />
          </Grid>
           <Grid item padding={2} >
           <TextField placeholder='LastName'
           name="last"
          
          required
          value={Info.last}
          onChange={handleDetails}
           />
          </Grid>
           <Grid item padding={2} >
           <TextField placeholder='Email'
           name="email"
           multiline
          required
          value={Info.email}
          onChange={handleDetails}
          />
          </Grid>
           <Grid item padding={2} >
           <TextField placeholder='Password'
           name="password"
          
          required
          value={Info.password}
          onChange={handleDetails}
           />
          </Grid>

   
          <Grid padding={2}>
          <Button sx={{borderRadius:3}} variant='contained' color='success' 
        onClick={handleSubmit}>
        Register
  </Button>
  <Typography>Already have an account <Link to="/login">Login</Link></Typography>
  
          </Grid>
  

    </Grid>
    
    </Paper>
 

   
    </Container>
    </Box>
    </form>
     </>
  )
}
export default createSlice;