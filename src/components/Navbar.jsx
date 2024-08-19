import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isColoChange, setIsColoChange] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 350) {
                setIsColoChange(true);
            } else {
                setIsColoChange(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    return (
        <>
{/* -mb-16 */}

      <div style={{ zIndex: 999 }} className="fixed top-0 lg:left-[50%] lg:translate-x-[-50%] w-full px-4 py-6 mx-auto lg:py-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div style={{ zIndex: 999 }} className=" relative flex items-center justify-between lg:justify-center lg:space-x-16">
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link to={"/ri/gallery"}
                aria-label="Our product"
                title="Our product"
                className={`font-medium tracking-wide ${isColoChange ? "text-black" : "text-white"} transition-colors duration-200 hover:text-[#ED1C24]`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link to={"/ri/sejarah"}
                aria-label="Product pricing"
                title="Product pricing"
                className={`font-medium tracking-wide ${isColoChange ? "text-black" : "text-white"} transition-colors duration-200 hover:text-[#ED1C24]`}
              >
                Sejarah
              </Link>
            </li>
          </ul>
          <Link
            to="/ri"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src="../../public/assets/HUTRI79LogoUtama.png" className="w-24" alt="" />
          </Link>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to={"/ri"}
                aria-label="About us"
                title="About us"
                className={`font-medium tracking-wide ${isColoChange ? "text-black" : "text-white"} transition-colors duration-200 hover:text-[#ED1C24]`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/ri/pahlawan"}
                aria-label="Sign in"
                title="Sign in"
                className={`font-medium tracking-wide ${isColoChange ? "text-black" : "text-white"} transition-colors duration-200 hover:text-[#ED1C24]`}
              >
                Pahlawan
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/ri"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                    <li>
                        <Link
                          href="/ri"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#ED1C24]"
                        >
                          Home
                        </Link>
                      </li>


                      <li>
                        <Link
                          href="/ri/gallery"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#ED1C24]"
                        >
                          Gallery
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/ri/sejarah"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#ED1C24]"
                        >
                          Sejarah
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/ri/pahlawan"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#ED1C24]"
                        >
                          Pahlawan
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </>

    );
  };