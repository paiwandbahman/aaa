import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";

function Service() {
  return (
    <>
      {/* social media service */}

      <div className="w-10/12 mx-auto mt-32">
        <p className="font-bold text-center text-orange-400 uppercase">
          Services
        </p>
        <p className="text-xl font-bold text-center text-gray-600 uppercase">
          social media
        </p>
        <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex items-center justify-center h-40 p-2 duration-200 rounded-lg shadow-lg hover:bg-gray-800 hover:text-white hover:scale-110">
            <div>
              <p className="flex items-center justify-center w-12 h-12 mx-auto text-xl text-white rounded-full bg-green-500/60">
                <i className="fa-solid fa-image"></i>
              </p>
              <p className="mt-3 text-xl text-center">Page Management</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-40 p-2 duration-200 rounded-lg shadow-lg hover:bg-gray-800 hover:text-white hover:scale-110">
            <div>
              <p className="flex items-center justify-center w-12 h-12 mx-auto text-xl text-white rounded-full bg-blue-500/60">
                <i className="fa-solid fa-image"></i>
              </p>
              <p className="mt-3 text-xl text-center">Social Media Problem</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-40 p-2 duration-200 rounded-lg shadow-lg hover:bg-gray-800 hover:text-white hover:scale-110">
            <div>
              <p className="flex items-center justify-center w-12 h-12 mx-auto text-xl text-white rounded-full bg-red-500/60">
                <i className="fa-solid fa-image"></i>
              </p>
              <p className="mt-3 text-xl text-center">Follow/Like</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-40 p-2 duration-200 rounded-lg shadow-lg hover:bg-gray-800 hover:text-white hover:scale-110">
            <div>
              <p className="flex items-center justify-center w-12 h-12 mx-auto text-xl text-white rounded-full bg-yellow-500/60">
                <i className="fa-solid fa-image"></i>
              </p>
              <p className="mt-3 text-xl text-center">Selling/Buying Page</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-wrap items-center overflow-hidden md:flex ">
        <div className="imgSystem hidden md:block md:w-9/12 p-20 mt-20  relative md:-left-[500px]">
          <img
            src={`${process.env.PUBLIC_URL}/assets/wallpaper/laptop2.png`}
            className="w-full"
            alt=""
          />
        </div>

        <div className="md:w-3/12 mt-20 text-center md:mt-0 md:text-left w-10/12 mx-auto relative  md:-left-[500px]">
          <p className="text-xl md:text-3xl">Why Choose Us?</p>
          <div className="mt-3">
            <p>
              <i className="text-2xl text-green-600 fas fa-check"></i>We produce
              real resultss
            </p>
            <p>
              <i className="text-2xl text-green-600 fas fa-check"></i> We’re not
              new to this
            </p>
            <p>
              <i className="text-2xl text-green-600 fas fa-check"></i> We have
              real talent inside our agency
            </p>
            <p>
              <i className="text-2xl text-green-600 fas fa-check"></i> We’re our
              biggest case study
            </p>
            <p>
              <i className="text-2xl text-green-600 fas fa-check"></i>We’re a
              low-risk agency option
            </p>
            <p className="mt-10">
              <Link to="/social"
                className="px-10 py-1 font-bold text-white bg-orange-500 rounded-full"
              >
                Goto Social 
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div
        className="mx-6 mt-10 md:mt-0"
        style={{ textAlign: "center", overflow: "hidden" }}
      >
        <p className="mx-auto mb-10 text-xs font-bold text-center text-white bg-orange-500 rounded-full md:text-2xl md:w-6/12">
          Public figures have entrusted their work to Us
        </p>
      </div>

      <Swiper
        slidesPerView={window.innerWidth > 500 ? 3 : 1}
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
        className="pb-10 mt-10 mb-10 mySwiper "
      >
        <SwiperSlide className="cursor-pointer">
          <div
            style={{
              width: window.innerWidth > 500 ? "80%" : "80%",
              height: 250,
              backgroundColor: "white",
              borderRadius: 10,
            }}
            className="mx-auto"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/wallpaper/pf5.png`}
              alt=""
              className="mx-auto"
              resizeMode="contain"
              style={{
                borderRadius: 10,
                width: "80%",
                height: window.innerWidth > 500 ? 250 : 200,
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <div
            style={{
              width: window.innerWidth > 500 ? "80%" : "80%",
              height: window.innerWidth > 500 ? 250 : 200,
              backgroundColor: "white",
              borderRadius: 10,
            }}
            className="mx-auto"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/wallpaper/pf4.png`}
              alt=""
              className="mx-auto"
              resizeMode="contain"
              style={{
                borderRadius: 10,
                width: "80%",
                height: window.innerWidth > 500 ? 250 : 200,
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <div
            style={{
              width: window.innerWidth > 500 ? "80%" : "80%",
              height: 250,
              backgroundColor: "white",
              borderRadius: 10,
            }}
            className="mx-auto"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/wallpaper/pf3.png`}
              alt=""
              className="mx-auto"
              resizeMode="contain"
              style={{
                borderRadius: 10,
                width: "80%",
                height: window.innerWidth > 500 ? 250 : 200,
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <div
            style={{
              width: window.innerWidth > 500 ? "80%" : "80%",
              height: 250,
              backgroundColor: "white",
              borderRadius: 10,
            }}
            className="mx-auto"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/wallpaper/pf7.png`}
              alt=""
              className="mx-auto"
              resizeMode="contain"
              style={{
                borderRadius: 10,
                width: "80%",
                height: 250,
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <div
            style={{
              width: window.innerWidth > 500 ? "80%" : "80%",
              height: 250,
              backgroundColor: "white",
              borderRadius: 10,
            }}
            className="mx-auto"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/wallpaper/pf2.png`}
              alt=""
              className="mx-auto"
              resizeMode="contain"
              style={{
                borderRadius: 10,
                width: "80%",
                height: window.innerWidth > 500 ? 250 : 200,
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <div
            style={{
              width: window.innerWidth > 500 ? "80%" : "80%",
              height: 250,
              backgroundColor: "white",
              borderRadius: 10,
            }}
            className="mx-auto"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/wallpaper/pf6.png`}
              alt=""
              className="mx-auto"
              resizeMode="contain"
              style={{
                borderRadius: 10,
                width: "80%",
                height: window.innerWidth > 500 ? 250 : 200,
              }}
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* developmnet media service */}

      <div className="w-10/12 mx-auto mt-32">
        <p className="font-bold text-center text-orange-400 uppercase">
          Services
        </p>
        <p className="text-xl font-bold text-center text-gray-600 uppercase">
          Development
        </p>
        <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex items-center justify-center h-40 p-2 duration-200 rounded-lg shadow-lg hover:bg-gray-800 hover:text-white hover:scale-110">
            <div>
              <p className="flex items-center justify-center w-12 h-12 mx-auto text-xl text-white rounded-full bg-green-500/60">
                <i className="fa-solid fa-database"></i>
              </p>
              <p className="mt-3 text-xl text-center">System</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-40 p-2 duration-200 rounded-lg shadow-lg hover:bg-gray-800 hover:text-white hover:scale-110">
            <div>
              <p className="flex items-center justify-center w-12 h-12 mx-auto text-xl text-white rounded-full bg-blue-500/60">
                <i className="fa-solid fa-globe"></i>
              </p>
              <p className="mt-3 text-xl text-center">Website</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-40 p-2 duration-200 rounded-lg shadow-lg hover:bg-gray-800 hover:text-white hover:scale-110">
            <div>
              <p className="flex items-center justify-center w-12 h-12 mx-auto text-xl text-white rounded-full bg-red-500/60">
                <i className="fa-solid fa-globe"></i>
              </p>
              <p className="mt-3 text-xl text-center">Web Application</p>
            </div>
          </div>

          <div className="flex items-center justify-center h-40 p-2 duration-200 rounded-lg shadow-lg hover:bg-gray-800 hover:text-white hover:scale-110">
            <div>
              <p className="flex items-center justify-center w-12 h-12 mx-auto text-xl text-white rounded-full bg-red-500/60">
                <i className="fa-solid fa-mobile-button"></i>
              </p>
              <p className="mt-3 text-xl text-center">Mobile Application</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center overflow-hidden ">
        <div className=" mt-20 md:mt-0 w-10/12 md:w-3/12 mx-auto text-center md:text-left relative md:-right-[500px]">
          <p className="text-xl md:text-3xl">Why Choose Us?</p>
          <div className="mt-3">
            <p>
              <i className="text-2xl text-green-600 fas fa-check"></i> We Are
              Dedicated to Our Clients’ Success
            </p>
            <p>
              <i className="text-2xl text-green-600 fas fa-check"></i> Talented
              Development Team
            </p>
            <p>
              <i className="text-2xl text-green-600 fas fa-check"></i>{" "}
              Competitive Pricing
            </p>
            <p>
              <i className="text-2xl text-green-600 fas fa-check"></i> Fast
              Access
            </p>
            <p>
              <i className="text-2xl text-green-600 fas fa-check"></i> Client
              Satisfaction
            </p>
            <p className="mt-10">
             <Link to="/development"
                className="px-10 py-1 font-bold text-white bg-orange-500 rounded-full"
              >
                Goto Development 
              </Link>
            </p>
          </div>
        </div>

        <div className="imgSystem hidden md:block  w-9/12 p-20 mt-20  relative -right-[500px]">
          <img
            src={`${process.env.PUBLIC_URL}/assets/wallpaper/laptop2.png`}
            className="w-full"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Service;
