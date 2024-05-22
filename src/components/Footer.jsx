import logo from "../assets/EyeGlass.png";
import Item from "./Item";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { COMPANY, SUPPORT, COMMUNITY } from "./Footer_details";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-10/12 py-[4%] bg-white text-black flex flex-col items-center">
      <div className="flex w-full relative flex-col gap-8 md:gap-0 md:flex-row justify-between py-8">
        <div className="w-full md:w-4/12 flex flex-col gap-5">
          <img src={logo} alt="logo" className="w-36" />
          <p className="text-sm">
            Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampde
          </p>
          <div className="w-full flex gap-3">
            <Link
              to={"/"}
              className=" border border-orange-300 rounded-full p-1"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to={"/"}
              className=" border border-orange-300 rounded-full p-1"
            >
              <FaInstagram />
            </Link>
            <Link
              to={"/"}
              className=" border border-orange-300 rounded-full p-1"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
        <div className="flex justify-around md:w-8/12">
          <Item Links={SUPPORT} title="SUPPORT" />
          <Item Links={COMPANY} title="COMPANY" />
          <Item Links={COMMUNITY} title="PRODUCTS" />
        </div>
      </div>
      <span className=" absolute mt-[440px] md:mt-64 bg-orange-200 w-full px-10 h-[0.08px]"></span>
      <div className="w-full flex flex-col md:flex-row gap-3 md:gap-0 justify-between text-center pt-4 text-gray-400 text-sm">
        <span>Copyright© 2023 All rights reserved by Eyeglass</span>
        <span>Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;Terms of services</span>
      </div>
    </footer>
  );
};

export default Footer;
