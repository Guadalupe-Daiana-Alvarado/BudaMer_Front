import { useContext } from "react";
import { DataContext } from "../Context/DataContext.jsx";
import { Link } from "react-router-dom";
import CartElements from "../CartContent/CartElements.jsx";
import CartTotal from "../CartContent/CartTotal.jsx";

const CartContent = ({ product }) => {
  const { cart } = useContext(DataContext);

  return (
    <>
      <div className="relative w-full h-36 bg-cover bg-center md:h-80"
        style={{
          backgroundImage: `url('../../../public/image/Logotipo_files/banerrcarritoo.jpg')`,
          backgroundSize: 'cover', // Puedes ajustar a 'contain' u otras opciones según tu preferencia
        }}
      >

        <div class="flex flex-col w-full items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 md:p-8">
          <p class="text-xl text-slate-800 md:text-3xl">Qué gusto verte de nuevo, </p>
          <p class="text-xl text-slate-800 md:text-3xl">disfrtua tu adquisición.</p>
          <p className="text-base text-yellow-500 font-bold md:text-lg">¡Graias, vuelve pronto!</p>
          <img className='w-6 mt-3 md:w-10' src="/image/arrow_banner.png" alt="arrow_banner" />
        </div>
      </div>

      <div className='flex gap-1 text-base pl-6 py-2 items-center bg-yellow-400 bg-opacity-50 '>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
        </svg>
        <Link className='font-semibold' to="/">Inicio</Link>
        <Link className='font-semibold' to="/store">/Tienda</Link>
        <Link to="#">/Carrito</Link>
      </div>

      {cart.length > 0 ? (
        <>
          <div className="bg-yellow-300 bg-opacity-50 ">
            <h1 className="text-center text-2xl font-bold pt-4">Your cart</h1>
            <CartElements />
            <CartTotal />
          </div>

        </>
      ) : (
        <div className="bg-yellow-300 bg-opacity-50  h-full flex flex-col items-center">
          <h2 className='text-center text-2xl font-bold pt-4'>Your cart is empty</h2>
          <img className="w-32 py-4" src="/image/cartEmpty.png" alt="cartEmpty_image" />
        </div>
      )}
    </>
  );
};

export default CartContent;

