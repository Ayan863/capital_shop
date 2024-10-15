import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer flex flex-col py-7 bg-gray text-white items-center">
        <div className="subscribe p-8 w-[88%] flex  gap-5 justify-between items-center border-b-[1px]">
          <div className="text font-jost flex flex-col gap-3 ">
            <h4 className="text-[24px] font-medium">Subscribe Newsletter</h4>
            <span className="text-[15px]">
              Subscribe newsletter to get 5% on all products.
            </span>
          </div>
          <div className="flex gap-3 w-[44%]">
            <input
              className="email w-[74%] h-[60px] p-4 active:border-0 focus:outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <button className="w-[24%] h-[60px] bg-red-600 p-5">
              Subscribe
            </button>
          </div>
          <div className="icons flex gap-4">
            <FaFacebook className="w-[24px] h-[24px] hover:scale-x-[-1] hover:text-red-500 transition duration-300" />
            <FaInstagram className="w-[24px] h-[24px] hover:scale-x-[-1] hover:text-red-500 transition duration-300" />
            <FaYoutube className="w-[24px] h-[24px] hover:scale-x-[-1] hover:text-red-500 transition duration-300" />
          </div>
        </div>
        <div className="aboutShop p-8 w-[84%]  flex items-start justify-between font-jost">
          <img
            className="p-4"
            src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo2_footer.png.webp"
            alt="capital-shop"
          />
          <div className="men w-[15%]">
            <h4 className="text-[18px] my-4">Shop Men</h4>
            <ul className="flex flex-col gap-3 text-lightGray ">
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Clothing Fashion</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Winter</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Summer</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Formal</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Casual</a>
              </li>
            </ul>
          </div>
          <div className="women w-[15%]">
            <h4 className="text-[18px] my-4">Shop Women</h4>
            <ul className="flex flex-col gap-3 text-lightGray">
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Clothing Fashion</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Winter</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Summer</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Formal</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Casual</a>
              </li>
            </ul>
          </div>
          <div className="baby w-[15%]">
            <h4 className="text-[18px] my-4">Baby Collection</h4>
            <ul className="flex flex-col gap-3 text-lightGray">
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Clothing Fashion</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Winter</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Summer</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Formal</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Casual</a>
              </li>
            </ul>
          </div>
          <div className="quickLinks w-[15%]">
            <h4 className="text-[18px] my-4">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-lightGray">
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Track Your Order</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Support</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">FAQ</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Carrier</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">About</a>
              </li>
              <li className="hover:tracking-wider hover:underline">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <p className=" p-8 w-[88%] flex justify-center items-end gap-2 border-t-[1px]">
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <FaHeart className="text-red-700" /> by{" "}
          <a href="#" className="text-red-700">
            Colorlib
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
