import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carrousel.jsx';

const AmericaAndEurope = () => {
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

            <div className='flex gap-1 text-base pl-6 py-2 items-center bg-green-300 bg-opacity-50'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>

                <p onClick={() => navigate('/blog')} className='font-semibold cursor-pointer' >/Blog</p>
                <p className=''>/Meditación</p>
            </div>


            <div className='bg-green-300 md:pb-50 bg-opacity-50 w-full min-h-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-6'>


                <div class=" h-fit bg-green-300 p-2">
                    <div className='w-full h-1/4 flex justify-center'>
                        <img
                            className="h-96 w-full object-cover border-4 border-sky-600 bg-white"
                            src="../../public/image/Logotipo_files/mandala1.jpg"
                            alt="Mandala 4"
                            style={{ objectPosition: 'center 45%' }}
                        />
                    </div>

                    <div class="bg-gray-100 min-h-3/4 p-2 flex flex-col justify-between">
                        <h5 class="text-2xl font-bold pl-4">Meditación en 8 pasos:</h5>
                        <p className="text-gray-600 text-lg min-h-5/6 p-3">
                            1) Ponte en una posición cómoda (sentado, de pie o acostado). <br></br>
                            2) Cierra los ojos. Toma 2 respiraciones profundas lentas, mientras sigues tu propio ritmo respiratorio natural.<br></br>
                            3) Vas a visitar un lugar tranquilo en tu mente. Imagina un espacio tranquilo donde te sientas seguro, cómodo y totalmente relajado.<br></br>
                            4) Tu espacio relajante y seguro puede estar dentro o fuera… tal vez es un jardín, un hermoso paisaje… un espacio favorito que disfrutas visitando… o un lugar en el mundo donde siempre imaginaste visitar… o tal vez es un lugar favorito en tu hogar o en tu comunidad.<br></br>
                            Al entrar en este espacio tranquilo, imagínate que estás liberando tus ansiedades, tus preocupaciones y tus miedos. Tu estrés y tensión va derritiéndose…<br></br>
                            5) Mira alrededor de tu espacio tranquilo. Fíjate en los detalles de tu espacio.<br></br>
                            ¿Qué ves? ¿Cuáles texturas o colores notas?<br></br>
                            ¿Qué hueles?… ¿Qué oyes?… <br></br>
                            6) Observa lo que está justo delante de ti en tu espacio pacífico. Alcanza y tócalo… ¿Cómo te sientes?<br></br>
                            Este es tu espacio especial donde nada puede hacerte daño. Donde no hay demandas sobre ti…<br></br>
                            7) Nota todo tu cuerpo:<br></br>
                            Nota que tus dedos de los pies, pies y rodillas se sienten más relajados…<br></br>
                            Nota que tus piernas, cadera, y la parte inferior de la espalda se relajan…<br></br>
                            Nota que tu abdomen y tu pecho se siente cada vez más facilidad…<br></br>
                            Nota que tu corazón se llena de compasión…<br></br>
                            Nota que tus hombros y la parte superior de la espalda liberan tensión…<br></br>
                            Nota tu cara, tus ojos y tu frente… relajándose….<br></br>
                            Tu cuerpo, mente, corazón y espíritu están abrazados suavemente por la ternura, el cuidado y el amor.<br></br>
                            8) Mantiene esta sensación de estar más relajado.<br></br>
                            Recuerda que puedes volver y relajarte en este espacio tranquilo en tu mente en cualquier momento.<br></br>
                            Di esta afirmación en voz alta o en silencio a ti mismo: “Estoy en paz. Puedo relajarme aquí.<br></br> Puedo llegar a este tranquilo espacio interior cuando quiera.”
                            Cuando estés listo… Abre los ojos…<br></br>
                        </p>

                    </div>

                    <div class="flex gap-1 text-base pl-6 py-2 items-center bg-green-100">
                        <small class="text-gray-500">Maria - 25/05/2019</small>
                    </div>
                </div>

                <div class=" h-fit bg-green-300 p-2">
                    <div className='w-full h-1/4 flex justify-center'>
                        <img
                            className="h-96 w-full object-cover border-4 border-sky-600 bg-white"
                            src="../../public/image/Logotipo_files/mandala2.jpg"
                            alt="Mandala 4"
                            style={{ objectPosition: 'center 25%' }}
                        />

                    </div>

                    <div class="bg-gray-100 min-h-3/4 p-2 flex flex-col justify-between">
                        <h5 class="text-2xl font-bold pl-4">Meditación en 8 pasos:</h5>
                        <p className="text-gray-600 text-lg min-h-5/6 p-3">
                            1) Ponte en una posición cómoda (sentado, de pie o acostado). <br></br>
                            2) Cierra los ojos. Toma 2 respiraciones profundas lentas, mientras sigues tu propio ritmo respiratorio natural.<br></br>
                            3) Vas a visitar un lugar tranquilo en tu mente. Imagina un espacio tranquilo donde te sientas seguro, cómodo y totalmente relajado.<br></br>
                            4) Tu espacio relajante y seguro puede estar dentro o fuera… tal vez es un jardín, un hermoso paisaje… un espacio favorito que disfrutas visitando… o un lugar en el mundo donde siempre imaginaste visitar… o tal vez es un lugar favorito en tu hogar o en tu comunidad.<br></br>
                            Al entrar en este espacio tranquilo, imagínate que estás liberando tus ansiedades, tus preocupaciones y tus miedos. Tu estrés y tensión va derritiéndose…<br></br>
                            5) Mira alrededor de tu espacio tranquilo. Fíjate en los detalles de tu espacio.<br></br>
                            ¿Qué ves? ¿Cuáles texturas o colores notas?<br></br>
                            ¿Qué hueles?… ¿Qué oyes?… <br></br>
                            6) Observa lo que está justo delante de ti en tu espacio pacífico. Alcanza y tócalo… ¿Cómo te sientes?<br></br>
                            Este es tu espacio especial donde nada puede hacerte daño. Donde no hay demandas sobre ti…<br></br>
                            7) Nota todo tu cuerpo:<br></br>
                            Nota que tus dedos de los pies, pies y rodillas se sienten más relajados…<br></br>
                            Nota que tus piernas, cadera, y la parte inferior de la espalda se relajan…<br></br>
                            Nota que tu abdomen y tu pecho se siente cada vez más facilidad…<br></br>
                            Nota que tu corazón se llena de compasión…<br></br>
                            Nota que tus hombros y la parte superior de la espalda liberan tensión…<br></br>
                            Nota tu cara, tus ojos y tu frente… relajándose….<br></br>
                            Tu cuerpo, mente, corazón y espíritu están abrazados suavemente por la ternura, el cuidado y el amor.<br></br>
                            8) Mantiene esta sensación de estar más relajado.<br></br>
                            Recuerda que puedes volver y relajarte en este espacio tranquilo en tu mente en cualquier momento.<br></br>
                            Di esta afirmación en voz alta o en silencio a ti mismo: “Estoy en paz. Puedo relajarme aquí.<br></br> Puedo llegar a este tranquilo espacio interior cuando quiera.”
                            Cuando estés listo… Abre los ojos…<br></br>
                        </p>

                    </div>

                    <div class="flex gap-1 text-base pl-6 py-2 items-center bg-green-100">
                        <small class="text-gray-500">Maria - 25/05/2019</small>
                    </div>
                </div>

                <div class=" h-fit bg-green-300 p-2">
                    <div className='w-full h-1/4 flex justify-center'>
                        <iframe width="800" height="315" src="https://www.youtube.com/embed/rFLXCWOjb_Y?si=o29AS_l34k_9rvtv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>

                    <div class="bg-gray-100 min-h-3/4 p-2 flex flex-col justify-between">
                        <h5 class="text-2xl font-bold pl-4">Beneficios de la meditación en la mañana para tu cuerpo:</h5>
                        <p className="text-gray-600 text-lg min-h-5/6 p-3">

                            ¿Por qué meditar?  <br></br>

                            Si empezar a practicar la meditación te parece desalentador, no te preocupes: ¡cualquiera puede hacerlo!<br></br>

                            En general, es simplemente un tiempo que se reserva para respirar profundamente, centrar los pensamientos y ser testigo de los sentimientos. Y, aunque existen guías para la meditación, no hay una forma "incorrecta" de meditar, siempre que lo hagas lo mejor posible.<br></br>

                            Por supuesto, a medida que sigas profundizando en la meditación simple como práctica, hay mucho más que descubrir. Por ahora, nos centraremos en lo básico.<br></br>

                            Hablemos primero de por qué es beneficiosa exactamente la meditación: <br></br> Aquí hay 7 razones clave:<br></br>

                            1) Reduce el estrés: Se ha demostrado que la meditación reduce el cortisol (una hormona clave del estrés).<br></br>

                            2) Mejora la pérdida de memoria: En un estudio de un grupo de personas con pérdida de memoria, el flujo sanguíneo aumentó en los lóbulos parietales y en el lóbulo frontal de los participantes a los que se les asignó una práctica de meditación.<br></br>

                            3) Aumenta la capacidad de atención<br></br>

                            4) Puede disminuir la presión arterial<br></br>

                            5) Mejora el sueño<br></br>

                            6) Ayuda al tratamiento del dolor<br></br>

                            7) Apoyar la salud mental<br></br>
                        </p>

                    </div>

                    <div class="flex gap-1 text-base pl-6 py-2 items-center bg-green-100">
                        <small class="text-gray-500">Maria - 25/05/2019</small>
                    </div>
                </div>

                <div class=" h-fit bg-green-300 p-2">
                    <div className='w-full h-1/4 flex justify-center'>
                        <iframe width="800" height="315" src="https://www.youtube.com/embed/1aSQEhlKjt0?si=E3zY4c5_6ie1JC7j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div class="bg-gray-100 min-h-3/4 p-2 flex flex-col justify-between">
                        <h5 class="text-2xl font-bold pl-4">Como meditar sin dormirte en el intento:</h5>
                        <p className="text-gray-600 text-lg min-h-5/6 p-3">
                            1) Ponte en una posición cómoda (sentado, de pie o acostado). <br></br>
                            Siéntate bien
                            Si eres principiante, siéntate en una silla cómoda dónde puedas mantener tu postura.  <br></br>
                            Si prefieres algo más avanzado, puedes sentarte en el piso o sobre un cojín con las piernas cruzadas (sí, como se ve en las películas). <br></br>
                            La postura correcta consiste en tener la espalda derecha, el cuello relajado, la barbilla ligeramente hacia adentro y  <br></br>
                            las manos sobre las piernas o rodillas. Si de plano no soportas meditar sentado,
                            acuéstate en un tapete de yoga. De preferencia hazlo con ropa que sientas cómoda.<br></br>
                            2) Empieza de menos a más: <br></br>
                            En realidad puedes meditar el tiempo que se te de la gana, pero te recomendamos empezar con meditaciones
                            <br></br> guiadas que duren entre 5 y 10 minutos (todos tenemos 5 minutos al día para meditar, “no tener tiempo” <br></br>
                            no es excusa). Con la práctica notarás que puedes ir aumentando el tiempo de meditación sin problemas. <br></br>
                            Baja la aplicación de Headspace para encontrar muchísimas meditaciones guiadas que te ayudarán y <br></br>
                            enseñarán a hacer las cosas bien.
                            3) Mantén el momento de mindfullness un poquito más tiempo: <br></br>
                            No te claves en Instagram durante dos horas una vez hayas terminado de meditar.<br></br>
                            Trata de prolongar tu momento de mindfullness para sentirte bien durante más tiempo. <br></br>
                            Puedes cocinar, bañarte, hacer tu rutina de skincare, lavarte los dientes,<br></br>
                             lo que sea siempre y cuando te ayude a mantener la mente tranquila y relajada.
                        </p>

                    </div>

                    <div class="flex gap-1 text-base pl-6 py-2 items-center bg-green-100">
                        <small class="text-gray-500">Maria - 25/05/2019</small>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default AmericaAndEurope;


