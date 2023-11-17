import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from '../components/Carrousel.jsx'
import { Link } from 'react-router-dom'
const Blog = () => {
    const navigate = useNavigate();
    return (

        <div className='bg-green-300 bg-opacity-50'>
            <div className="hidden md:block">
                <Carousel autoSlide={true} autoSlideInterval={5000}>
                    <img className='w-full' src="../../public//image/Logotipo_files/blog1.jpg" alt="carousel_blog1" />
                    <img className='w-full' src="../../public//image/Logotipo_files/blog2.jpg" alt="carousel_blog2" />
                    <img className='w-full' src="../../public//image/Logotipo_files/blog3.jpg" alt="carousel_blog3" />
                    <img className='w-full' src="../../public//image/Logotipo_files/blog4.jpg" alt="carousel_blog3" />

                </Carousel>
            </div>
            <div className='flex gap-1 text-base pl-6 py-2 items-center bg-green-300 bg-opacity-50'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>
                <Link to="/">Inicio</Link>
                <p className='font-semibold'>/Blog</p>
            </div>
            <div className='flex justify-center items-center'>
                <h1 className='text-4xl h-fit font-medium w-full flex justify-center p-3'>- Exposiciones de interes -</h1>
            </div>


            <div className='w-full h-full flex flex-grow bg-green-300 items-center justify-center'>

                <div className='bg-green-300 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6'>

                    <div className="relative inline-block">
                        <img className='opacity-80' src="../../public/image/Logotipo_files/b1.jpg" alt="pet's_accesories_category" />
                        <button onClick={() => navigate('/americaAndEurope')} className="absolute inset-0 flex flex-col items-center justify-center text-white text-xs text-center font-bold md:text-2xl md:px-12"> </button>
                    </div>

                    <div className="relative inline-block">
                        <img className='opacity-80' src="../../public/image/Logotipo_files/b2.jpg" alt="pet's_accesories_category" />
                        <button onClick={() => navigate('/tipsAboutLuggage')} className="absolute inset-0 flex flex-col items-center justify-center text-white text-xs text-center font-bold md:text-2xl md:px-12"></button>
                    </div>

                    <div className="relative inline-block">
                        <img className='opacity-80' src="../../public/image/Logotipo_files/b3.jpg"  alt="pet's_accesories_category" />
                        <button onClick={() => navigate('/travelingPets')} className="absolute inset-0 flex flex-col items-center justify-center text-white text-xs text-center font-bold md:text-2xl md:px-12"> </button>
                    </div>

                    <div className="relative inline-block">
                        <img className='opacity-80' src="../../public/image/Logotipo_files/b4.jpg"  alt="pet's_accesories_category" />
                        <button onClick={() => navigate('/trivia')} className="absolute inset-0 flex flex-col items-center justify-center text-white text-xs text-center font-bold md:text-2xl md:px-12"> </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Blog
