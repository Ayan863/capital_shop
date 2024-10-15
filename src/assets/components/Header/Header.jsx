import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Badge } from "@mui/joy";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
  return (
    <header>
      <div className="header flex items-center flex-col w-[100%]">
        <div className="firstLine flex justify-between w-[84%] p-2 border-b-[1px] items-center border-icon">
          <ul className="flex gap-4 font-jost text-[14px]">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">FAG</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
          <div className="righ flex gap-4">
            <a href="#" className=" text-[14px] p-2">
              My Wishlist
            </a>
            <div href="#" className=" text-[14px] border-x-[1px] border-icon p-2">
              <a href="#" onClick={()=>navigate("/login")}>Login</a> / <a href="#" onClick={()=>navigate("/signup")}>Sign up</a>
            </div>
            <div className="icons flex gap-4 items-center justify-center">
              <div className="fb text-icons">
                <FaFacebookF className="hover:scale-x-[-1] hover:text-red-500 transition duration-300" />
              </div>
              <div className="insta text-icons">
                <FaInstagram className="hover:scale-x-[-1] hover:text-red-500 transition duration-300" />
              </div>
              <div className="tw text-icons">
                <FaTwitter className="hover:scale-x-[-1] hover:text-red-500 transition duration-300" />
              </div>
              <div className="ln text-icons">
                <FaLinkedinIn className="hover:scale-x-[-1] hover:text-red-500 transition duration-300" />
              </div>
              <div className="y text-icons">
                <FaYoutube className="hover:scale-x-[-1] hover:text-red-500 transition duration-300" />
              </div>
            </div>
          </div>
        </div>
        <div className="secondLine flex justify-between w-[80%] m-5">
          <img
            src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png"
            alt=""
          />
          <ul className="flex items-center gap-5 font-jost font-semibold">
            <li className="hover:text-red-500">
              <a href="#" onClick={()=>navigate("/")}>Home</a>
            </li>
            <li className="hover:text-red-500">
              <a href="#">Men</a>
            </li>
            <li className="hover:text-red-500">
              <a href="#">Women</a>
            </li>
            <li className="hover:text-red-500">
              <Badge
                badgeContent={"New"}
                color="danger"
                sx={{
                  ".MuiBadge-dot": {
                    fontSize: "6px", 
                  },
                }}
              >
                Baby Collection
              </Badge>
            </li>
            <li className="hover:text-red-500">Pages</li>
            <li className="hover:text-red-500">Blog</li>
            <li className="hover:text-red-500">Contact</li>
          </ul>
          <div className="icons flex items-center gap-4">
            <IoIosSearch className="w-[33px] h-[33px] hover:text-red-500" />
            <FaUser className="w-[24px] h-[24px] hover:text-red-500" />
            <Badge badgeContent={4} color="danger">
              <FaCartShopping className="w-[24px] h-[24px] hover:text-red-500" />
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
