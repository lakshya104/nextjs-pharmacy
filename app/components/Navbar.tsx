import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import logo from "../assets/images/icons/logo.svg";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      {/* <!-- header start here--> */}
      <div className="bg-navyblue text-white p-[11px] text-[19px]">
        <div className="flex justify-start md:justify-between items-center">
          <div className="ml-2 md:ml-[70px]">
            <p>
              Free Shipping for all Order of <strong>$99</strong>
            </p>
          </div>
          <div className="md:flex hidden justify-center gap-[40px] mr-[50px] items-center">
            <a href="#">
              {" "}
              <FaFacebookF className="h-5 w-5" />{" "}
            </a>
            <a href="#">
              {" "}
              <FaTwitter className="h-5 w-5" />{" "}
            </a>
            <a href="#">
              {" "}
              <FaInstagram className="h-5 w-5" />{" "}
            </a>
            <a href="#">
              {" "}
              <IoLogoGoogleplus className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Header logo --> */}
      <div className="">
        <div className="flex justify-evenly items-center">
          <a href="#">
            <Image src={logo} width={220} height={220} alt="logo" />
          </a>

          
            <div className="header-bottom__search">
              <form>
                <input
                  placeholder="Search..."
                  type="search"
                  name="s"
                  title="Search"
                  value=""
                  required
                />
                <button type="submit">
                  <FaSearch/ >
                </button>
              </form>
            </div>

            <div className="header-bottom__signup__cart">
              <div className="header-bottom__signsup">
                <a href="#">Sign in / Sign up</a>
                {/* <div className="login">
                    <form className="register-form">
                      <div className="form-head">
                        <span className="sign">Sign in</span>
                        <span className="create_account">
                          <a href="#">Create an account</a>
                        </span>
                      </div>
                      <div className="username">
                        <p>
                          <label>
                            Username or email <sup className="required">*</sup>
                          </label>
                          <input
                            name="username"
                            type="text"
                            placeholder="Username"
                          />
                        </p>
                        <p>
                          <label>
                            Password <sup className="required">*</sup>
                          </label>
                          <input
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                          />
                        </p>
                        <button type="submit" className="btn submit">
                          <span>LOGIN</span>
                        </button>
                      </div>
                      <div className="forgot-password">
                        <span>
                          <a href="#">Lost Your Password??</a>
                        </span>
                      </div>
                    </form>
                  </div> */}
              </div>

              <div className="header-bottom__hert">
                <a href="#">
                  {" "}
                  <i className="fa fa-heart"></i>
                </a>
              </div>
              <div className="header-bottom__cart">
                <a href="#">
                  <i className="fa fa-shopping-cart fa-2x"></i>
                  <span className="header-bottom__cart_count">0</span>
                  <span className="header-bottom__cart_amount">$0.00</span>
                </a>
                {/* <div className="cart-items">
                    <p>No Items In Your Cart</p>
                  </div> */}
              </div>
            </div>

            {/* <nav>
                <ul className="menu">
                  <li className="menu__dropdown">
                    <a href="#home" className="active">
                      Home
                    </a>
                    <ul className="menu__dropdown--inner">
                      <li>
                        <a href="#">Home 2</a>
                      </li>
                      <li>
                        <a href="#">Home 3</a>
                      </li>
                      <li>
                        <a href="#">Home 4</a>
                      </li>
                      <li>
                        <a href="#">Home 5</a>
                      </li>
                      <li>
                        <a href="#">Home 6</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu__dropdown">
                    <a href="#can-find__menu">Shop</a>
                    <ul className="menu__dropdown--inner">
                      <li>
                        <a href="#">Shop 2</a>
                      </li>
                      <li>
                        <a href="#">Shop 3</a>
                      </li>
                      <li>
                        <a href="#">Shop 4</a>
                      </li>
                      <li>
                        <a href="#">Shop 5</a>
                      </li>
                      <li>
                        <a href="#">Shop 6</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu__dropdown">
                    <a href="#get-matched__menu">Page</a>
                    <ul className="menu__dropdown--inner">
                      <li>
                        <a href="#">Page 2</a>
                      </li>
                      <li>
                        <a href="#">Page 3</a>
                      </li>
                      <li>
                        <a href="#">Page 4</a>
                      </li>
                      <li>
                        <a href="#">Page 5</a>
                      </li>
                      <li>
                        <a href="#">Page 6</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu__dropdown">
                    <a href="#credit-cards-category__menu">Blog</a>
                    <ul className="menu__dropdown--inner">
                      <li>
                        <a href="#">Blog 2</a>
                      </li>
                      <li>
                        <a href="#">Blog 3</a>
                      </li>
                      <li>
                        <a href="#">Blog 4</a>
                      </li>
                      <li>
                        <a href="#">Blog 5</a>
                      </li>
                      <li>
                        <a href="#">Blog 6</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#credit-goals__menu">On sale</a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Contact
                    </a>
                  </li>
                </ul>
                <span className="closeBtn">x</span>
              </nav> */}
          </div>
          {/* <div className="nav_icon">
                    <i className="fa fa-bars"></i>
                 </div> */}
        </div>
    </header>
  );
};

export default Navbar;
