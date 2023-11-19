import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from '../components/Carrousel.jsx'
const TravelingPets = () => {
    const navigate = useNavigate();
    return (

        <div className='bg-green-300 bg-opacity-50 min-h-screen'>
            <div className="hidden md:block">
                <Carousel autoSlide={true} autoSlideInterval={5000}>
                    <img className='w-full' src="../../public//image/Logotipo_files/blog1.jpg" alt="carousel_blog1" />
                    <img className='w-full' src="../../public//image/Logotipo_files/blog2.jpg" alt="carousel_blog2" />
                    <img className='w-full' src="../../public//image/Logotipo_files/blog3.jpg" alt="carousel_blog3" />
                    <img className='w-full' src="../../public//image/Logotipo_files/blog4.jpg" alt="carousel_blog3" />

                </Carousel>
            </div>

            <div className='flex gap-1 text-base pl-6 py-2 items-center bg-green-400 bg-opacity-50'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>

                <p onClick={() => navigate('/blog')} className='font-semibold cursor-pointer' >/Blog</p>
                <p className=''>/Rituales</p>
            </div>


            <div className='bg-green-300 md:pb-50 bg-opacity-50 w-full min-h-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-6'>


                <div class=" h-fit bg-green-300 p-2">
                    <div className='w-full h-1/4 flex justify-center'>
                        <img
                            className="h-96 w-full object-cover border-4 border-sky-600 bg-white"
                            src="../../public/image/Logotipo_files/laurel.jpg"
                            alt="Mandala 4"
                            style={{ objectPosition: 'center 75%' }}
                        />
                    </div>

                    <div class="bg-gray-100 min-h-3/4 p-2 flex flex-col justify-between">
                        <h5 class="text-2xl font-bold pl-4">Los beneficios del laurel:</h5>
                        <p className="text-gray-600 text-lg min-h-5/6 p-3">
                            Ritual con laurel: <br></br>
                            El ritual de laurel para la prosperidad y el dinero consiste en quemar <br></br>
                            hojas de laurel mientras se visualiza la abundancia y la prosperidad que se desea atraer. <br></br>
                            El humo liberado durante la quema simboliza la materialización de los deseos.<br></br>
                            Es importante hacerlo con intención positiva y agradecida.<br></br>
                            Las hojas de laurel son consideradas por las culturas ancestrales como un <br></br>
                            objeto que atrae la fortuna y la abundancia.
                        </p>

                    </div>

                    <div class="flex gap-1 text-base pl-6 py-2 items-center bg-green-100">
                        <small class="text-gray-500">Merce - 10/05/2022</small>
                    </div>
                </div>

                <div class=" h-fit bg-green-300 p-2">
                    <div className='w-full h-1/4 flex justify-center'>
                        <img
                            className="h-96 w-full object-cover border-4 border-sky-600 bg-white"
                            src="../../public/image/Logotipo_files/velasdor.jpg"
                            alt="Mandala 4"
                            style={{ objectPosition: 'center 25%' }}
                        />

                    </div>

                    <div class="bg-gray-100 min-h-3/4 p-2 flex flex-col justify-between">
                        <h5 class="text-2xl font-bold pl-4">Vela Dorada/Amarilla:</h5>
                        <p className="text-gray-600 text-lg min-h-5/6 p-3">
                            Ritual de la vela dorada: <br></br>
                            Encender una vela de color dorado o amarillo, <br></br>
                            simbolizando el sol y la riqueza y concentrarse en los deseos<br></br>
                            de abundancia y prosperidad.<br></br>
                            Algunas personas realizan este ritual durante el amanecer<br></br>
                            o el atardecer para potenciar su efectividad, ya que se considera un 
                            momento especial para conectarse con las fuerzas cósmicas.<br></br>
                            El ritual de la vela sirve para concentrar la petición por<br></br>
                            la abundancia y la riqueza.
                        </p>

                    </div>

                    <div class="flex gap-1 text-base pl-6 py-2 items-center bg-green-100">
                        <small class="text-gray-500">Merce - 22/12/2020</small>
                    </div>
                </div>

            </div>


        </div >
    )
}


export default TravelingPets