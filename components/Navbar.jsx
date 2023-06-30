import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "../src/assets/logo.png"

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div className="flex w-full lg:block lg:ms-10">
        <Link to="/faysu">
          <img src={Logo} alt="logo" className="w-44 lg:ms-10 text-center" />
        </Link>
      </div>
        <div className="desktop hidden lg:flex space-x-24 me-10">
       
            <Link
              to="/faysu/hakkinda"
              className="block text-2xl text-center"
             
            >
              Hakkımızda
            </Link>
            <Link
              to="/faysu/urunler"
              className="block text-2xl text-center"
           
            >
              Ürünler
            </Link>
            <Link
              to="/faysu/iletisim"
              className="block text-2xl text-center"
   
            >
              İletişim
            </Link>
        </div>
      {!menuOpen && (
        <div className="lg:hidden">
          <button
            type="button"
            className="handleMenu flex items-center px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-6 h-6 menuButton"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      )}

      {menuOpen && (
        <div className="fixed inset-0  bg-blue-500 bg-opacity-25">
          <div className="flex flex-col space-y-4 bg-blue-300 p-5 rounded-xl bg-opacity-90 border-black shadow-2xl drop-shadow-2xl mt-24 me-6 ms-6">
          <Link
              to="/faysu"
              className="block text-3xl text-center"
              onClick={handleMenuToggle}
            >
              Anasayfa
            </Link>
            <hr />
            <Link
              to="/faysu/hakkinda"
              className="block text-3xl text-center"
              onClick={handleMenuToggle}
            >
              Hakkımızda
            </Link>   <hr />
            <Link
              to="/faysu/urunler"
              className="block text-3xl text-center"
              onClick={handleMenuToggle}
            >
              Ürünler
            </Link>   <hr />
            <Link
              to="/faysu/iletisim"
              className="block text-3xl text-center"
              onClick={handleMenuToggle}
            >
              İletişim
            </Link>
          </div>
          <button
            type="button"
            className="absolute top-10 right-10 xl:hidden"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-6 h-6 menuButton"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

