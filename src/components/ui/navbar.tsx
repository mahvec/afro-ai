import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => setNav(!nav);

  return (
    <div>
      <div className="w-screen font-exo bg-black text-[#67e8bc] z-50 fixed uppercase">
        <nav className="container mx-auto border-gray-200 p-5">
          <div className=" flex flex-wrap items-center justify-between ">
            <Link to="/" className="flex font-orbitron gap-2">
              <img
                src="https://www.afrocentricai.org/_next/static/media/logo.4ce121e8.png"
                alt="Afro ai"
              />
              <span className="self-center uppercase text-lg font-semibold whitespace-nowrap">
                afro a.i
              </span>
            </Link>

            <div
              className="hidden w-full md:w-auto md:flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 items-center"
              id="mobile-menu"
            >
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <Link to={"/about"}>About</Link>
                <Link to={"/"}>Products</Link>
                <Link to={"/community"}>Community</Link>
              </ul>

              <a
                href={"http://www.afrocentricai.org/login"}
                className="p-3 rounded bg-[#67e8bc] text-black uppercase font-semibold hover:bg-black hover:border border-[#67e8bc]  hover:text-[#67e8bc] transition-all duration-700 ease-in-out"
              >
                Get Started
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile view nav bar */}

        <div className="bg-black fixed w-screen top-0 mx-auto py-3 px-5 z-[100] lg:hidden block ">
          <div className="bg-black flex items-center justify-between z-[100]">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://www.afrocentricai.org/_next/static/media/logo.4ce121e8.png"
                alt="Afro ai"
              />
              <span className="self-center uppercase text-lg font-semibold whitespace-nowrap">
                afro a.i
              </span>
            </Link>

            <div className="flex gap-1 items-center">
              {/* <p className="text-gray-500">
                <CiSearch size={30} />
              </p> */}
              <div
                onClick={handleNav}
                className="text-[#67e8bc] block lg:hidden"
              >
                {!nav ? <AiOutlineClose size={30} /> : <TiThMenu size={30} />}
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-[60px] h-screen w-[100vw] mx-auto flex flex-col gap-5 z-50 bg-black px-10  pt-20 ease-in-out duration-700"
              : "fixed top-[-200%]  w-[100vw] ease-in-out duration-700 mx-auto flex flex-col"
          }
        >
          {/* {NavbarArray.map((navbar, id) => (
          <div key={id} className="p-3 font-medium w-fit self-center">
            <Link
              to={navbar.to}
              className="hover:text-[#00B140] link link-underline link-underline-black"
            >
              {navbar.name}
            </Link>
          </div>
        ))}
        <div className="flex flex-col  text-white gap-2 mt-10 font-medium">
          <button className="bg-[#00b140] py-3 rounded">Login</button>
          <button className="bg-[#F9A825] py-3 rounded">Register</button>
        </div> */}

          <div
            className="lg:hidden w-full flex flex-col  space-y-8 mt-4 md:mt-0 items-center"
            id="mobile-menu"
          >
            <ul className="flex-col  flex space-y-4 mt-4 text-center">
              <Link to={"/about"}>About</Link>
              <Link to={"/"}>Products</Link>
              <Link to={"/community"}>Community</Link>
            </ul>

            <a
              href={"http://www.afrocentricai.org/login"}
              className="p-3 rounded bg-[#67e8bc] text-black uppercase font-semibold hover:bg-black hover:border border-[#67e8bc]  hover:text-[#67e8bc] transition-all duration-700 ease-in-out"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
    </div>
  );
}
