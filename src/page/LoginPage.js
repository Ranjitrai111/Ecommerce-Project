import { createSlice } from "@reduxjs/toolkit";
import { Paper, Typography,TextField, Grid,Box, Button } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export const LoginPage = () => {
  const getUserdata = localStorage.getItem("stored");
  console.log(getUserdata)
    const [Values ,setValues]=useState({
email:"",
password:"",
conformPassword:"",
    });
   
    const [Error,setError]=useState({})
const Validation =(Values)=>{
 
  let errors ={};
if(!Values.email){
errors.email ="name required"
}
else if(Values.email.includes("@")){
  errors.email = "Name must be more than 5 character"
}
if(!Values.password){
  errors.password ="password required"
  }
  else if(Values.password.length<5){
    errors.password = " password must be more than 5 character"
  }
  if(Values.password === !Values.conformPassword ){
    errors.conformPassword ="Password must  be match"
    }
    else if(Values.length<5){
      errors.conformPassword = "password must be more than 5 character"
    }else{
      if(getUserdata && getUserdata.length ){
        const userdata =JSON.parse(getUserdata);
        const userlogin= userdata.filter((el,k)=>{
          return el.email === Values.email && el.password === Values.password && el.conformPassword
        });
      }
    }
    
}

function handleChange(e){
setValues({...Values,[e.target.name]: e.target.value})
console.log(Values,"hello")
}
 function handleSubmit(e) {
  e.preventDefault();
  Validation(Values);
setError(Validation);
 }

  return (
    <>
    
    <Box 
    justifyContent={"center"}
     display="flex"
      flexDirection={"column"}
       maxWidth={400}
        alignItems="center"
        padding={3}
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
            backgroundColor:"silver"
        
        }
       }}
 >
    <Grid textAlign="center">
    <Typography variant='h4' 
     padding={3} >
     User Login
     </Typography>
   
    <Grid item padding={2} >
    <TextField 
    label="Email"
    name='email'
    onChange={handleChange}
    value={Values.email}
          multiline
          required
         
           />
           {Error.email && <p style={{color:'red'}}>{Error.email}</p>}
           </Grid>
    <Grid item padding={2}>
    <TextField 
     label="Password "
    name='password'
    onChange={handleChange}
    value={Values.password}
     multiline
     required/>
     {Error.password && <p style={{color:'red'}}>{Error.password}</p>}
     </Grid>

           <Grid item padding={2}><TextField 
            label="Conform Password "
          multiline
          onChange={handleChange}
           required
           value={Values.conformPassword}
            name='conformPassword'/>
            {Error.conformPassword && <p style={{color:'red'}}>{Error.conformPassword}</p>}
          </Grid>
          <Grid padding={2}>
          <Button
          onClick={handleSubmit}
           sx={{borderRadius:3}} 
           variant='contained'
            color='success'  >
          <Typography 
          >Login</Typography> 
  </Button>
  <Typography>Create New Account.? <Link to="/signIn"><Button> Sign Up</Button></Link></Typography>
          </Grid>
  

    </Grid>
    
    </Paper>
 

   
    </Container>
    </Box>
    
    
    </>
  )
}
 export default createSlice;