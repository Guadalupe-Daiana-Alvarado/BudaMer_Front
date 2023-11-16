import React from 'react'
import { Link } from 'react-router-dom'

const BannerIndex = () => {
  return (
    <section className=" flex flex-col bg-[url('/image/fondobaner.jpg')] bg-cover bg-center md:flex-row w-full h-96">
      <div className='bg-opacity-50 bg-amber-200 min-w-full flex flex-col justify-center md:w-1/2 md:py-4'>
        <p className='text-4xl pl-10'>Te acompañamos en la travesia de </p>
        <br />
        <p className='text-yellow-900 text-6xl font-bold pl-10 '>Renacer / Despertar</p>
        <br />
        <br />
        <p className='px-10'><strong>La vida tiene momentos de esplendor que quisiéramos eternizar, imbricados con otros de dolor que tememos nunca superar.
        <br></br></strong> 
        <strong>Debemos conocer esta alternancia y aprende a vivir con ella.</strong></p>
        <div className='flex justify-center'>
          <Link to="/store">
            <button className='bg-yellow-700 hover:bg-sky-700  text-white font-bold h-10 w-48 rounded-2xl my-4 md:ml-20'>
              Shop now
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default BannerIndex