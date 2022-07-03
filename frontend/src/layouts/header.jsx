import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation().pathname;
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, [location]);

  return (
    <>
      <div
        className="p-4 border-b border-white/30 "
        style={{
          backgroundImage:
            "radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,0.9) 0.3%, rgba(30,33,48,0.9) 90.2% )",
        }}
      >
        <div className="flex items-center justify-between w-full mx-auto md:w-9/12">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/assets/logo/logo.png`}
              className="w-24 md:w-40"
              alt=""
            />
          </Link>
          <div className="hidden space-x-5 font-bold text-white lg:block">
            <Link
              className="text-gray-200 hover:text-orange-400"
              to="/"
              style={location === "/" ? { color: "orange" } : {}}
            >
              Home
            </Link>
            <Link
              to="development"
              className="text-gray-200 hover:text-orange-400"
              style={location === "/development" ? { color: "orange" } : {}}
            >
              Development
            </Link>
            <Link
              to="social"
              className="text-gray-200 hover:text-orange-400"
              style={location === "/social" ? { color: "orange" } : {}}
            >
              Social Media
            </Link>
            <Link
              to="service"
              className="text-gray-200 hover:text-orange-400"
              style={location === "/service" ? { color: "orange" } : {}}
            >
              Services
            </Link>
            <Link
              to="about"
              className="text-gray-200 hover:text-orange-400"
              style={location === "/about" ? { color: "orange" } : {}}
            >
              About
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              disabeld="true"
              href="t"
              className="p-2 px-5 mr-3 text-xs text-white rounded-full bg-orange-500/50"
            >
              PG-Service <i className="fas fa-laptop"></i>
            </button>
            <i
              onClick={() => {
                setMenu(true);
              }}
              className="text-xl text-white cursor-pointer fa-solid fa-bars"
            ></i>
          </div>
        </div>
      </div>

      {menu ? (
        <>
          <div
            className="fixed top-0 w-full h-screen text-center bg-white"
            style={{
              backgroundImage:
                "radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% )",
              zIndex: "9999999",
            }}
          >
            <p className="mx-5 my-5 text-right ">
              <i
                onClick={() => {
                  setMenu(false);
                }}
                className="text-2xl text-white cursor-pointer fa-solid fa-times"
              ></i>
            </p>

            <div className="grid grid-cols-1 h-96 gap-y-5">
              <Link
                className="text-gray-200 hover:text-white"
                to="/"
                style={
                  location === "/" ? { color: "orange" } : { color: "white" }
                }
              >
                Home
              </Link>
              <Link
                to="development"
                className="text-gray-200 hover:text-orange-700"
                style={
                  location === "/development"
                    ? { color: "orange" }
                    : { color: "white" }
                }
              >
                Development
              </Link>
              <Link
                style={
                  location === "/social"
                    ? { color: "orange" }
                    : { color: "white" }
                }
                to="social"
                className="text-gray-200 hover:text-white"
              >
                Social Media
              </Link>
              <Link
                to="service"
                style={
                  location === "/service"
                    ? { color: "orange" }
                    : { color: "white" }
                }
                className="text-gray-200 hover:text-white"
              >
                Services
              </Link>
              <Link
                to="about"
                className="text-gray-200 hover:text-white"
                style={
                  location === "/about"
                    ? { color: "orange" }
                    : { color: "white" }
                }
              >
                About
              </Link>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
