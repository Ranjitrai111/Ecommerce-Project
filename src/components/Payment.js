import React from 'react'
import "./Payment.css"
import { Button } from '@mui/material'
import CreditCardIcon from '@mui/icons-material/CreditCard';
export const Payment = () => {
  return (
    <div className='payment'>
      <div className='card'>
      <div className='section'>
      <div className='head'>
      <h2>Pay with card</h2>
      </div>
      <div className='email'>
      <label className='name'>Email</label><br></br>
      <input type='email' className='e-mail' placeholder='example@gmail.com'></input>

      </div>
<div className='Card'>
<label className='name'>Card information</label><br></br>
<input type='card' placeholder='1234 1234 1234 1234' className='num' ></input><br></br>
<input type='text' className='info' placeholder='MM/YY'></input>
<input type='text' className='cvs' placeholder='CVS'></input>
 </div>
 <div className='fullName'>
  <label className='name'>Name on Card</label><br></br>
  <input type='text' className='cards'></input>
 </div>
 <div className='country'>
  <label className='name'> Country or region: </label><br></br>
  <select>
    <option>Nepal </option>
    <option>India </option>
    <option>Bangladesh </option>
</select>
 </div>
 <div className='btn'>
 <Button variant="contained" color="success">
        PAY
      </Button>
 </div>
 </div>
      </div>
    </div>
  )
}
