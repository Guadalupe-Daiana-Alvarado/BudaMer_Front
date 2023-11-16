import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='bg-slate-100 bg-opacity-50 min-w-1/3 w-full flex flex-col md:flex-row justify-around '>
      <div className='flex flex-col w-1/3 h-auto justify-around ml-4 mb-2 pt-1 font-semibold text-xl'>
        <Link className='flex items-center font-semibold p-1 text-lg pt-2'>Preguntas frecuentes</Link>
        <Link className='flex items-center font-semibold p-1 text-lg'>Recomendaciones</Link>
        <Link className='flex items-center font-semibold p-1 text-lg'>Terminos y condiciones</Link>
      </div>

      <div className=' flex flex-col w-3/4 md:w-full md:flex-row-reverse h-auto justify-around ml-4 pb-2 gap-1 md:gap-0'>
        <Link className='flex items-center font-medium text-lg w-1/2'><img className='me-1 w-7 md:w-8' src="/image/instagramIcon.png" alt="instagram_icon" />Instagram</Link>
        <Link className='flex items-center font-medium text-lg w-1/2'><img className='me-1 w-7 md:w-8' src="/image/facebookIcon.png" alt="facebook_icon" />Facebook</Link>
        <Link className='flex items-center font-medium text-lg w-1/2'><img className='me-1 w-7 md:w-8' src="/image/emailIcon.png" alt="email_icon" /> buda_mer@gmail.com</Link>
        <p className='hidden md:block text-center mt-11 font-bold text-xl w-1/2'> Contacto:</p>
      </div>
    </div>
  )
}

export default Footer