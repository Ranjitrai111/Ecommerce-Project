//import { CssBaseline } from '@mui/material'
import React from 'react'
import { Body } from '../components/Body'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Home.css'



export const Home = () => {
 
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { id: 1, src: "https://tse3.mm.bing.net/th?id=OIP.X7rdylDfYzRcJmdOZsx02wHaFi&pid=Api&P=0", alt: "Image 1" },
    { id: 2, src: "https://10s.best/wp-content/uploads/2021/06/Ecommerce-Fashion-Clothing-Websites-to-Shop-the-Latest-Trends.jpg", alt: "Image 2" },
    { id: 3, src: "https://i.pinimg.com/originals/a8/07/eb/a807eb61f93e28aca89da1a53d449654.png", alt: "Image 3" },
    { id: 4, src: "https://i.pinimg.com/originals/f0/09/ae/f009ae4f7c37defb626b32b3a74eba93.png", alt: "Image 4" },
  ];
  function previousSlide() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

function nextSlide() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
  // function Slider() {
   
  //   const [translateX, setTranslateX] = useState(0);
  //   function moveSlider(direction) {
  //     const newTranslateX = direction === 'left' ? translateX + 25 : translateX - 25;
  //     setTranslateX(newTranslateX);
  // }};
  // const [translateX, setTranslateX] = useState(0); 
  //   var sectionIndex=0;
  // const moveSlider = (direction) => {
  //   sectionIndex=sectionIndex + 1;
  //   const newTranslateX = direction === 'right'? translateX + 25 : translateX - 25;
  //   setTranslateX(newTranslateX);
  // };
  return (
    <>
    <div className='home'>
    <div className='head'>
    <Header />
    </div>
    <div className='container'>
    <div className='section'>
    <div className='image'>
    <img style={{width:"100%", height:"500px" , }} src={images[currentSlide].src} alt={images[currentSlide].alt} />
    </div>
     <div className='button'>
     <button className='btn prev' onClick={previousSlide}><ArrowBackIosIcon/></button>
     <button className='btn next' onClick={nextSlide}><ArrowForwardIosIcon/></button>
    
     </div>
     </div>
      
    </div>
      {/* <div className='container'>
      <div className='image'>
      <div className='promotion' >
        <section>
          <img src='https://tse3.mm.bing.net/th?id=OIP.X7rdylDfYzRcJmdOZsx02wHaFi&pid=Api&P=0' alt=''/>
        </section>
        <section>
          <img src='https://10s.best/wp-content/uploads/2021/06/Ecommerce-Fashion-Clothing-Websites-to-Shop-the-Latest-Trends.jpg' alt=''/>
        </section>
        <section>
        <img src='https://i.pinimg.com/originals/a8/07/eb/a807eb61f93e28aca89da1a53d449654.png' alt=''/>
        </section>
        <section>
        <img src='https://i.pinimg.com/originals/f0/09/ae/f009ae4f7c37defb626b32b3a74eba93.png' alt=''/>
        </section>
      </div>
      <div className='controls'>
<span className='arrow left' onClick={()=>moveSlider('left')}>left</span>
<span className='arrow right' onClick={()=>moveSlider('right')}>right</span>
      </div>
      </div>
      </div> */}
    </div>
    <div style={{backgroundColor:"grey", padding:5,marginTop:5}}>

      
      </div>
      <div className='body'> <Body /></div>
      <div className='foot'>
      <Footer/> 
      </div>
      
      </>
   
    
  )
}
