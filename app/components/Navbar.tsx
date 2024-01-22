"use client";
import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import logo from "../assets/images/icons/logo.svg";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      {/* <!-- header start here--> */}
      <div className="bg-cyan-500 text-white p-[8px] text-[15px]">
        <div className="flex justify-start md:justify-between items-center">
          <div className="ml-2 md:ml-[140px]">
            <p>
              Free Shipping for all Order of <strong>$99</strong>
            </p>
          </div>
          <div className="md:flex hidden justify-center gap-[32px] mr-[140px] items-center">
            <a href="#">
              {" "}
              <FaFacebookF className="text-base" />{" "}
            </a>
            <a href="#">
              {" "}
              <FaTwitter className="text-base" />{" "}
            </a>
            <a href="#">
              <FaInstagram className="text-base" />
            </a>
            <a href="#">
              {" "}
              <IoLogoGoogleplus className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Header logo --> */}
      <div className="lg:block flex justify-between items-center ">
        <div className="flex justify-around items-center lg:h-40 h-32 lg:ml-0 ml-8 sm:ml-28">
          <a href="#">
            <Image
              className="lg:h-[180px] lg:w-[180px] h-[120px] w-[120px]"
              src={logo}
              width={180}
              height={180}
              alt="logo"
            />
          </a>

          <div className="hidden lg:flex flex-col space-y-2 mt-2">
            <form className="flex items-center justify-center relative">
              <input
                className="w-[550px] px-3 py-3 rounded-3xl rounded-r-none outline-none border-gray-300 border border-r-0"
                placeholder="Search..."
                type="search"
                name="s"
                title="Search"
                required
              />
              <button
                className="py-3.5 px-8 bg-cyan-500 rounded-full absolute right-[-20px]"
                type="submit"
              >
                <FaSearch className="text-2xl font-light text-white" />
              </button>
            </form>
            <div className="flex justify-center items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-lg text-cyan-500 hover:text-cyan-500">
                      {" "}
                      Home{" "}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex flex-col justify-start items-center w-36">
                        <ListItem href="/" title="">
                          Home 2
                        </ListItem>
                        <ListItem href="/" title="">
                          Home 3
                        </ListItem>
                        <ListItem href="/" title="">
                          Home 4
                        </ListItem>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-lg hover:text-cyan-500">
                      {" "}
                      Shop{" "}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex flex-col justify-start items-center w-36">
                        <ListItem href="/" title="">
                          Shop 2
                        </ListItem>
                        <ListItem href="/" title="">
                          Shop 3
                        </ListItem>
                        <ListItem href="/" title="">
                          Shop 4
                        </ListItem>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-lg hover:text-cyan-500">
                      {" "}
                      Page{" "}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex flex-col justify-start items-center w-36">
                        <ListItem href="/" title="">
                          Page 2
                        </ListItem>
                        <ListItem href="/" title="">
                          Page 3
                        </ListItem>
                        <ListItem href="/" title="">
                          Page 4
                        </ListItem>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-lg hover:text-cyan-500">
                      {" "}
                      Blog{" "}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex flex-col justify-start items-center w-36">
                        <ListItem href="/" title="">
                          Blog 2
                        </ListItem>
                        <ListItem href="/" title="">
                          Blog 3
                        </ListItem>
                        <ListItem href="/" title="">
                          Blog 4
                        </ListItem>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Button className="text-lg hover:text-cyan-500" variant="link">
                On Sale
              </Button>
              <Button className="text-lg hover:text-cyan-500" variant="link">
                Contact
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center gap-2 font-semibold items-center">
            <div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a className="text-base cursor-pointer hover:text-cyan-500">
                    SIGN IN / SIGN UP
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 rounded-xl border-t-4 border-t-cyan-500">
                  <form className="uppercase">
                    <div className="flex justify-between items-center my-3">
                      <span className="sign">Sign in</span>
                      <span>
                        <a className="text-cyan-500" href="#">
                          Create an account
                        </a>
                      </span>
                    </div>
                    <hr />
                    <div className="grid w-full max-w-sm items-center gap-5 my-3">
                      <Label htmlFor="email">
                        {" "}
                        Username or email <sup className="text-red-600">*</sup>
                      </Label>
                      <Input type="email" id="email" placeholder="Email" />
                      <Label htmlFor="email">
                        {" "}
                        Password <sup className="text-red-600">*</sup>
                      </Label>
                      <Input
                        type="password"
                        id="email"
                        placeholder="Password"
                      />

                      <Button type="submit">LOGIN</Button>
                      <div>
                        <a className="text-cyan-500" href="#">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                  </form>
                </HoverCardContent>
              </HoverCard>
            </div>

            <div className="ml-3.5">
              <a href="#">
                <FaHeart className="text-2xl hover:text-red-600 text-medium-grey" />
              </a>
            </div>
            <div className="flex justify-center gap-2 items-center">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="ghost">
                    {" "}
                    <IoCart className="text-3xl" /> <span>$0.00</span>{" "}
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-44 rounded-xl border-t-4 border-t-cyan-500">
                  <div className="flex justify-between items-center flex-col space-y-4">
                    <h4 className="text-sm font-semibold">
                      <ImCross className="text-red-600" />
                    </h4>
                    <p className="text-sm">No items in your cart.</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
        <div className="lg:hidden block mr-8 sm:mr-28">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <GiHamburgerMenu />
              </Button>
            </SheetTrigger>
            <SheetContent  className="w-[250px]" side='left'>
              <SheetHeader>
                <SheetTitle className="mt-5">Welcome to Medilazar</SheetTitle>
                <SheetDescription>Buy medicines online.</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <ul>
                  <li className="border-b border-gray-200 font-bold py-2">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="border-b border-gray-200 font-bold py-2">
                    <Link href={"/"}>Shop</Link>
                  </li>
                  <li className="border-b border-gray-200 font-bold py-2">
                    <Link href={"/"}>Page</Link>
                  </li>
                  <li className="border-b border-gray-200 font-bold py-2">
                    <Link href={"/"}>Blog</Link>
                  </li>
                  <li className="border-b border-gray-200 font-bold py-2">
                    <Link href={"/"}>On Sale</Link>
                  </li>
                  <li className="border-b border-gray-200 font-bold py-2">
                    <Link href={"/"}>Contact</Link>
                  </li>
                </ul>
              </div>
              <SheetFooter></SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="list-none">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 text-lg rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-lg  font-semibold leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
