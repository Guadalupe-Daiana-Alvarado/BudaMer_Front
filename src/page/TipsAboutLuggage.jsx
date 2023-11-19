import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from '../components/Carrousel.jsx'
const TipsAboutLuggage = () => {

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

                <p onClick={() => navigate('/blog')} className='font-semibold cursor-pointer'>/Blog</p>
                <p className=''>/Energia</p>
            </div>

            <div className='bg-green-300 md:pb-50 bg-opacity-50 w-full min-h-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-6'>


                <div class=" h-fit bg-green-300 p-2">
                    <div className='w-full h-1/4 flex justify-center'>
                        <img
                            className="h-96 w-full object-cover border-4 border-sky-600 bg-white"
                            src="../../public/image/Logotipo_files/mandala3.jpg"
                            alt="Mandala 4"
                            style={{ objectPosition: 'center 45%' }}
                        />
                    </div>

                    <div class="bg-gray-100 min-h-3/4 p-2 flex flex-col justify-between">
                        <h5 class="text-2xl font-bold pl-4"> Protección de Energías Negativas en el Trabajo:</h5>
                        <p className="text-gray-600 text-lg min-h-5/6 p-3">
                            A veces, la atmósfera en el trabajo puede tornarse pesada y densa, <br></br>
                            afectándonos negativamente sin razón aparente.  <br></br>
                            Aquí te comparto diez consejos y objetos para contrarrestar las malas vibras en el lugar de trabajo: <br></br>

                            1) Frutas: Coloca un cítrico como limón o naranja, o incluso una manzana roja en tu escritorio. Estos actúan desviando la atención y absorbiendo la energía negativa.
                            <br></br>
                            2) Sahumerios: Utiliza sahumerios, como el incienso o el sándalo, para contrarrestar la negatividad del aire, creando una atmósfera más positiva.
                            <br></br>
                            3) Plantas: Introduce algo de verde en la oficina, especialmente cactus, que limpian la energía y contrarrestan las vibraciones de las computadoras.
                            <br></br>
                            4) Flores: Al igual que las frutas y las plantas, unas flores bonitas pueden alegrar tu espacio y aportar una señal de bienestar que limpia el ambiente.
                            <br></br>
                            5) Azúcar y canela: Mezcla una cucharadita de ambos y guárdala en un sobrecito de tela roja como amuleto contra energías dañinas, especialmente la envidia.
                            <br></br>
                            6) Objeto Poderoso: Usa un objeto que te conecte con momentos felices, como una foto de vacaciones o un regalo valioso, como escudo contra la energía negativa.
                            <br></br>
                            7) Animales: Si es posible, lleva a tu mascota al trabajo. Perros y gatos entran en contacto con nuestras energías profundas, mejorando nuestro ánimo y promoviendo relaciones amistosas.
                            <br></br>
                            8) Ambiente Limpio: Mantén tu lugar de trabajo limpio y ordenado, ya que las malas vibras se acumulan en el desorden y la suciedad.
                            <br></br>
                            9) Ajo: Conocido por su poder contra el mal de ojo, llevar un diente de ajo en el bolsillo o guardarlo en un cajón puede proporcionar protección milenaria contra pensamientos negativos.
                            <br></br>
                            10) Turmalina Negra: Esta piedra es una excelente transmutadora de energías y puede transformar un ambiente negativo en uno lleno de buenas intenciones. Colócala en un lugar visible pero fuera del alcance para un efecto óptimo.
                            <br></br>
                            Recuerda que no es necesario implementar todos estos consejos, con dos o tres ya se pueden percibir efectos positivos. ¡Protege tu espacio de trabajo y cultiva una energía positiva!  <br></br>
                            ✨🌿🌈 #EnergíaPositiva #BienestarLaboral
                            <br></br>
                            <br></br>
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
                            src="../../public/image/Logotipo_files/mandala4.jpg"
                            alt="Mandala 4"
                            style={{ objectPosition: 'center 45%' }}
                        />
                    </div>

                    <div class="bg-gray-100 min-h-3/4 p-2 flex flex-col justify-between">
                        <h5 class="text-2xl font-bold pl-4"> Aumenta tu Energía Espiritual:</h5>
                        <p className="text-gray-600 text-lg min-h-5/6 p-3">

                            Consejos Holísticos para el Equilibrio Interior: <br></br>

                            La energía espiritual, también conocida como Qi o energía vital, fluye entre todas las cosas. 
                            Aunque cada ser humano está conectado a esta red de energía vital, ciertas circunstancias pueden bloquear su flujo, 
                            dejándonos constantemente cansados y desmotivados. Recuperar esta vitalidad requiere un enfoque holístico que abarque 
                            el cuerpo físico, emocional y espiritual.

                            <br></br>1) Hábitos Saludables para el Cuerpo Físico:

                            El primer paso para restaurar la vitalidad es adoptar una alimentación equilibrada. Evita azúcares refinados, 
                            carbohidratos blancos y alimentos fritos. Opta por alimentos ricos en fibra, como frutas, verduras, 
                            cereales integrales, frutos secos, legumbres y semillas. La hidratación regular también es crucial, 
                            ya que el agua es esencial para el funcionamiento celular.

                            <br></br>2) Desintoxicación y Cuidado del Cuerpo:

                            Incorpora prácticas de desintoxicación gradual, como el ayuno intermitente o un día a la semana de jugos de verduras 
                            y frutas. Presta atención a la salud de tu hígado, un órgano clave en la purificación del cuerpo.

                            <br></br>3) Meditación y Oración para el Cuerpo Energético:

                            La meditación, a través de la respiración consciente, conecta con el presente y silencia la mente activa. 
                            Practica el mindfulness para apreciar cada momento. La meditación y la oración fortalecen la conexión con 
                            tu ser interno o ser superior.

                            <br></br>4) Ejercicio Diario y Descanso:

                            Realiza al menos 30 minutos de ejercicio diario para aumentar tu energía vital. No necesitas un gimnasio; 
                            caminar o andar en bicicleta son opciones válidas. El descanso y el sueño profundo son fundamentales para la
                            recuperación física y mental.

                            <br></br>5) Relaciones Saludables y Motivaciones:

                            Reevalúa tus relaciones, evitando la dependencia de personas que no fomentan tu felicidad. Rodéate de quienes nutren 
                            y promueven tu crecimiento personal.

                            <br></br>6) Desconexión Tecnológica:

                            Reserva al menos una hora al día para descansar de la tecnología. Este descanso reduce el ruido mental 
                            y previene la ansiedad.

                            <br></br>7) Sexo Consciente:

                            Explora el sexo consciente, una práctica que busca el autoconocimiento y la conexión con la divinidad a través 
                            del intercambio energético. La energía sexual es crucial para mantener niveles óptimos de vitalidad.

                            Cultiva una vida equilibrada, para restaurar tu energía espiritual desde una perspectiva holística. 
                            ✨🌿🌈 #EnergíaEspiritual #EquilibrioInterior
                        </p>

                    </div>

                    <div class="flex gap-1 text-base pl-6 py-2 items-center bg-green-100">
                        <small class="text-gray-500">Merce - 10/05/2022</small>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TipsAboutLuggage