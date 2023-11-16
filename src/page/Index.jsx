import React from 'react'


import Carousel from '../components/Carrousel.jsx'
import Valoraciones from '../components/Valoraciones.jsx'
import BannerIndex from '../components/BannerIndex.jsx'
import VisionMision from '../components/VisionMision.jsx'

function Index() {
  return (
    <>
      <BannerIndex />
      <VisionMision />


      <div className="hidden md:block">
        <Carousel autoSlide={true} autoSlideInterval={5000}>
          <img className='w-full' src="public/image/Logotipo_files/1.jpg" alt="carousel_banner1" />
          <img className='w-full' src="public/image/Logotipo_files/2.jpg" alt="carousel_banner2" />
          <img className='w-full' src="public/image/Logotipo_files/3.jpg" alt="carousel_banner3" />
          <img className='w-full' src="public/image/Logotipo_files/4.jpg" alt="carousel_banner4" />

        </Carousel>
      </div> 
    </>
  )
}

export default Index

