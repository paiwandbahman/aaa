import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import API from "../axios/index";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";

function Footer() {
  const location = useLocation().pathname;
  const [data, setData] = useState([]);
  useEffect(() => {
    API.get("/public/slide/get").then(({ data }) => {
      setData(data.data);
    });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <>
      <div
        className="flex-wrap pt-3 mt-20 rounded-tl-3xl rounded-tr-3xl"
        style={{
          backgroundImage:
            "radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% ) ",
        }}
      >
        <div className="px-10 md:space-x-3 md:justify-between md:flex md:px-28">
          <div className="grid w-full gap-10 font-bold text-center md:w-3/12 ">
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
          <div className="w-full mx-auto mt-10 font-bold text-center bg-white rounded-xl md:mt-0 md:w-9/12 md:h-auto">
            <Swiper
              spaceBetween={30}
              freeMode={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, FreeMode, Pagination]}
              pagination={{
                clickable: true,
              }}
              className="pb-10 mySwiper md:h-96 rounded-xl"
            >
              {data.map((item, index) => (
                <SwiperSlide className="cursor-pointer">
                  <div>
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}images/${item.photo}`}
                      alt=""
                      resizeMode="contain"
                      className="h-full rounded-xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="items-center justify-between w-10/12 mx-auto mt-10 border-t md:flex border-white/50">
          <div className="my-10 font-bold text-center text-white md:text-left md:w-5/12">
            <img
              src={`${process.env.PUBLIC_URL}/assets/logo/peshawa2.png`}
              className="w-3/12 mx-auto md:ml-0"
              alt=""
            />
          </div>
          <div className="flex justify-center space-x-5 text-lg text-white md:text-2xl">
            <p>
              <a href="https://m.facebook.com/peshawaGroup">
                <i className="hover:text-orange-500 fa-brands fa-facebook"></i>
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/peshawa.group/?hl=en">
                <i className="hover:text-orange-500 fa-brands fa-instagram"></i>
              </a>
            </p>
            <p>
              <a href="https://api.whatsapp.com/send/?phone=9647737330003&text&type=phone_number&app_absent=0">
                <i className="hover:text-orange-500 fa-brands fa-whatsapp"></i>
              </a>
            </p>
            <p>
              <a href="https://t.me/peshawagroup">
                <i className="hover:text-orange-500 fa-brands fa-telegram"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
