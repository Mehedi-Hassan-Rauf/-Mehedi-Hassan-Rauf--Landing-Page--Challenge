import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import logo from "../assets/EyeGlass.png";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/store";

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Products", link: "/" },
    { name: "Features", link: "/" },
    { name: "Reviews", link: "/" },
    { name: "Contact", link: "/" },
  ];
  const { cart } = useCartStore((state) => ({
    cart: state.cart,
  }));
  let [open, setOpen] = useState(false);
  return (
    <div className={`shadow-md min-w-full relative top-0`}>
      <div className="md:flex items-center relative justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            {/* <ion-icon name="logo-ionic"></ion-icon> */}
            <img src={logo} alt="" className="w-36" />
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <GiHamburgerMenu name={open ? "close" : "menu"} />
        </div>

        <div
          className={`absolute md:static bg-white md:z-auto ${
            open ? "z-[1]" : "z-[-1]"
          } left-0 w-full md:w-auto md:px-0 px-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <ul className={`md:flex md:items-center md:pb-0 pb-12`}>
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 md:text-base lg:text-lg md:my-0 my-7 w-full md:w-fit text-center border-b md:border-0 border-gray-300 pb-7 md:pb-0 "
              >
                <Link
                  to={link.link}
                  className="text-gray-800 hover:text-orange-300 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <div
              className={`flex md:hidden items-center justify-between w-full`}
            >
              <Link to={"/cart"}>
                <FaShoppingCart className="text-lg" />
              </Link>
              <Link>
                <IoPerson className="text-lg" />
              </Link>
            </div>
          </ul>
        </div>
        <div className={`hidden py-4 relative md:flex gap-4 items-center`}>
          <Link to={"/cart"}>
            <FaShoppingCart className="text-lg hover:text-orange-300 duration-500" />
            <span className="absolute top-0 right-[45%] text-orange-600 font-bold text-lg">
              {cart.length}
            </span>
          </Link>
          <Link>
            <IoPerson className="text-lg hover:text-orange-300 duration-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
