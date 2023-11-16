import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: email?.current?.value,
            password: password?.current?.value,
        };

        axios
            .post("http://localhost:8000/users/login", data)
            .then((res) => {
                console.log(res.data.response)
                const token = res.data.response.token; // Asume que el token se encuentra en la respuesta
                const user = res.data.response.user;
                // Almacena el token en el localStorage
                localStorage.setItem("token", token);
                localStorage.setItem('user', JSON.stringify(user));

                // Redirige al usuario a la página de inicio o a la página deseada
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div 
        style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('/image/fondotiendarosa.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height:'700px'}}>            
            
            <div className='flex gap-1 text-base pl-6 py-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>
                <Link to="/">Inicio</Link>
                <p className='font-semibold'>/Iniciar sesion</p>
            </div>

            <div className="relative  w-full h-52 bg-cover bg-center md:h-48">
            <div class="flex flex-col w-full items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 md:p-8">
                    <p class="text-xl text-slate-800 md:text-3xl">Qué gusto verte de nuevo disfruta</p>
                    <p class="text-xl text-slate-800 md:text-3xl">tu proceso</p>
                    <p class="text-base text-yellow-900 font-bold md:text-lg">Namaeste</p>
                    <img className='w-6 mt-3 md:w-10' src="/image/arrow_banner.png" alt="arrow_banner" />
                </div>
            </div>



            <div className="container max-w-full mx-auto py-4 md:py-24 px-6 " >
                <div className="max-w-screen-xl mx-auto flex items-center justify-center">
                    <div className="w-80 p-4 shadow-gray-950 shadow-md bg-transparent rounded-sm md:w-1/2">
                        <div>
                            <p className="text-center text-2xl font-bold text-black">
                                ¡ Bienvenido !
                            </p>
                        </div>
                        <form className="mt-8" onSubmit={handleLoginSubmit}>
                            <div className="mx-auto max-w-lg">
                                <div className="py-1">
                                    <input
                                        ref={email}
                                        type="email"
                                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" autocomplete="email"
                                        placeholder='Email'
                                    />

                                </div>

                                <div className="py-1">
                                 <input
                                        ref={password}
                                        type="password"
                                        autoComplete="current-password" // Agregar este atributo
                                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                        placeholder='Contraseña'
                                    />
                                </div>
                                <div className='flex justify-center '>
                                    <button
                                        className='p-1 m-3 font-bold text-white ml-5 w-28 bg-yellow-700 hover:bg-sky-700 rounded-full md:p-3'
                                        type="submit">Iniciar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
