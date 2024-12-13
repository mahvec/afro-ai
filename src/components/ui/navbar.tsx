import { Link } from "react-router-dom";

export default function Navbar() {
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
                <li className="relative group uppercase">
                  <button
                    id=""
                    data-dropdown-toggle=""
                    className="flex items-center uppercase justify-between w-full md:w-auto"
                  >
                    Product
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>

                  <ul
                    id="dropdownNavbar"
                    className="absolute top-1 hidden group-hover:block bg-black text-[#67e8bc] list-none group-hover:transition-all duration-700 ease-in-out divide-y divide-gray-100 rounded shadow my-4 w-44 z-10"
                  >
                    <li>
                      <Link
                        to={"/afroai"}
                        className="block px-4 py-2 hover:bg-[#67e8bc] hover:text-black"
                      >
                        Afro ai
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/campusgenie"}
                        className="block px-4 py-2 hover:bg-[#67e8bc] hover:text-black"
                      >
                        Campus genie
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/wisenurse"}
                        className="block px-4 py-2 hover:bg-[#67e8bc] hover:text-black"
                      >
                        Wise nurse
                      </Link>
                    </li>
                  </ul>
                </li>
                <Link to={"/"}>Resources</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/"}>Community</Link>
              </ul>

              <Link
                to={"/"}
                className="p-3 rounded bg-[#67e8bc] text-black uppercase font-semibold hover:bg-black hover:border border-[#67e8bc]  hover:text-[#67e8bc] transition-all duration-700 ease-in-out"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
    </div>
  );
}
