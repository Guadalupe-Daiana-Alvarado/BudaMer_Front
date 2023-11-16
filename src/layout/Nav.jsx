import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../components/Context/ProductContext.jsx';
import { DataContext } from '../components/Context/DataContext.jsx';
import Display from '../components/Display.jsx';
import TotalItems from "../components/CartContent/TotalItems.jsx";
import hamburguesa from '/image/hamburgerMenu.png'
import logo from '../../public/image/Logo_Buda_tr.png'

const Nav = () => {
  const user = localStorage.getItem("user");
  //console.log(user)
  const userObject = JSON.parse(user);
  const role = userObject ? userObject.role : null;
  const photoObject = JSON.parse(user);
  const profile = photoObject ? photoObject.photo : null;

  const { onInputChange, valueSearch, onResetForm } = useContext(ProductContext);
  const { cart } = useContext(DataContext);
  const navigate = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHamburgerButton, setIsHamburgerButton] = useState(true);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/search', {
      state: valueSearch,
    });
    onResetForm();
  };

  return (
    <>
      <div className='bg-slate-100 bg-opacity-50 h-16 w-full flex items-center justify-between'>
        <div className='flex items-center'>
          <Link to='/'>
            <img className='object-cover ms-6 h-16 w-48' src={logo} alt="logo_Pack&Go2" />
          </Link>
        </div>
      
              <form onSubmit={onSearchSubmit}>
          <div className="flex w-full h-10">
            <input
              className='px-3 rounded-l-lg border-3 border-sky-900 '
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Search here"
            />
            <button className="btn-search px-3 bg-sky-800 hover.bg-yellow-600 rounded-r-lg text-white text-base font-semibold">Search</button>
          </div>
        </form>

        {role !== null ? (
          <div className='flex p-3 justify-around'>
            <Link to="/profile" className="flex items-center">
              <img className='h-12 w-12 rounded-xl' src={profile || "/image/botonUsuario.png"} alt="boton_usuario" />
            </Link>
            <Link to={'/cart'} className='flex items-center flex-col-reverse px-2 pb-2 '>
              <img className='h-12 -m-4 md:ml-3' src="/image/cartNav.png" alt="carro" />
              <div className="relative">
                <TotalItems />
              </div>
            </Link>
          </div>
        ) : (
          <Link to="/login" className="seeCarrito">
            <p className="text-md font-medium p-2 mr-4 text-white bg-sky-800 hover.bg-yellow-600 rounded-full">LOGIN</p>
          </Link>
        )}
      </div>
      <Display />
    </>
  );
};

export default Nav;
