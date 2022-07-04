import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";

import Service from "./service";

function Index() {
  return (
    <>
      <div className="hidden md:block ">
        <video className="hidden md:block" autoPlay muted loop id="myVideo">
          <source src={`${process.env.PUBLIC_URL}/assets/wallpaper/facebook.mp4`} type="video/mp4" />
        </video>
        <div
          className="  sm:h-[1750px] md:h-[600px] lg:h-screen  mt-0 z-16"
          style={{
            height: window.innerWidth > 500 ? 500 : "95vh",
            backgroundImage:
              "radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,0.9) 0.3%, rgba(30,33,48,0.9) 90.2% )",
          }}
        >
          <div
            style={{
              width: "100%",
              flexDirection: window.innerWidth > 500 ? "row" : "column",

              flex: 2,

              justifyContent: "center",
            }}
          >
            <div
              className="mx-auto"
              style={{
                width: window.innerWidth > 500 ? "50%" : "100%",
                paddingTop: "10%",
                marginTop: window.innerWidth > 500 ? "" : "30%",
              }}
            >
              <div
                className="px-8 text-lg font-bold text-center text-white md:text-4xl"
                style={{ lineHeight: "40px" }}
              >
                <p className="text-4xl"> Peshawa Group </p>for Information
                Technology
              </div>
              <div className="mt-10 text-center">
                <a
                  href="tel:0773 733 0003"
                  className="px-10 py-1 font-bold text-white bg-orange-500 rounded-full"
                >
                  <i className="fa-solid fa-phone"></i> Call Now
                </a>
              </div>

              <div
                className="absolute left-0 space-y-5 text-lg md:top-auto text-white/70 md:text-3xl"
                style={{ marginTop: "-12%", marginLeft: 10 }}
              >
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
        </div>
      </div>

      <div
        className=" md:hidden sm:h-[1750px] md:h-[600px] lg:h-screen mt-0 z-16"
        style={{
          height: window.innerWidth > 500 ? 500 : "95vh",
          backgroundImage:
            "radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% )",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: window.innerWidth > 500 ? "row" : "column",

            flex: 2,

            justify: "center",
          }}
        >
          <div
            style={{
              width: window.innerWidth > 500 ? "50%" : "100%",
              paddingTop: "10%",
              marginTop: window.innerWidth > 500 ? "" : "30%",
            }}
          >
            <div
              className="px-8 text-lg font-bold text-center text-white md:text-4xl"
              style={{ lineHeight: "40px" }}
            >
              <p className="text-4xl"> Peshawa Group </p>for Information
              Technology
            </div>
            <div className="mt-10 text-center">
              <a
                href="tel:"
                className="px-10 py-1 font-bold text-white bg-orange-500 rounded-full"
              >
                <i className="fa-solid fa-phone"></i> Call Now
              </a>
            </div>
          </div>
          <div
            style={{
              width: window.innerWidth > 500 ? "60%" : "100%",
              marginTop: window.innerWidth > 500 ? "" : "30%",
            }}
          >
            <div
              className="absolute left-0 space-y-5 text-lg md:top-auto text-white/70 md:text-3xl"
              style={{ marginTop: "10%", marginLeft: 10 }}
            >
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

            <div className="relative mx-auto mt-10 md:h-96 md:w-10/12 md:p-20 ">
              <img
                src={`${process.env.PUBLIC_URL}/assets/wallpaper/laptop2.png`}
                className="w-full "
                alt=""
              />

              <div className="hidden md:flex w-24 h-24 bg-white p-2 rounded-xl  items-center justify-center shadow-xl absolute top-0 animation -rotate-[17deg]">
                <a href="http://salamimusic.com/">
                  {" "}
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/wallpaper/icon.png`}
                    className="w-12/12 "
                    alt="peshawa group"
                  />
                </a>
              </div>
              <div className="hidden md:flex w-24 h-24 bg-white p-2 right-10 rounded-xl  items-center justify-center shadow-xl top-[200px] absolute animation2 rotate-[17deg]">
                <a href="https://www.facebook.com/groups/907157643192338">
                  {" "}
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/wallpaper/drit.jpg`}
                    className="w-12/12 "
                    alt="peshawa group"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center p-2 overflow-hidden bg-gray-900 mt-30">
        <Swiper
          slidesPerView={window.innerWidth > 500 ? 3 : 1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          pagination={{
            clickable: true,
          }}
          className="pb-10 mb-10 mySwiper "
        >
          <SwiperSlide className="cursor-pointer">
            <div
              style={{
                width: window.innerWidth > 500 ? "80%" : "100%",
                height: window.innerWidth > 1800 ? 300 : 200,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/wallpaper/comp8.png`}
                alt=""
                resizeMode="cover"
                style={{
                  borderRadius: 10,
                  width: "100%",
                  height: window.innerWidth > 1800 ? 300 : 200,
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer">
            <div
              style={{
                width: window.innerWidth > 500 ? "80%" : "100%",
                height: window.innerWidth > 1800 ? 300 : 200,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/wallpaper/comp11.png`}
                alt=""
                resizeMode="cover"
                style={{
                  borderRadius: 10,
                  width: "100%",
                  height: window.innerWidth > 1800 ? 300 : 200,
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer">
            <div
              style={{
                width: window.innerWidth > 500 ? "80%" : "100%",
                height: window.innerWidth > 1800 ? 300 : 200,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/wallpaper/comp7.png`}
                alt=""
                resizeMode="cover"
                style={{
                  borderRadius: 10,
                  width: "100%",
                  height: window.innerWidth > 1800 ? 300 : 200,
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer">
            <div
              style={{
                width: window.innerWidth > 500 ? "80%" : "100%",
                height: window.innerWidth > 1800 ? 300 : 200,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/wallpaper/comp2.png`}
                alt=""
                resizeMode="contain"
                style={{
                  borderRadius: 10,
                  width: "100%",
                  height: window.innerWidth > 1800 ? 300 : 200,
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer">
            <div
              style={{
                width: window.innerWidth > 500 ? "80%" : "100%",
                height: window.innerWidth > 1800 ? 300 : 200,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/wallpaper/comp3.jpg`}
                alt=""
                resizeMode="cover"
                style={{
                  borderRadius: 10,
                  width: "100%",
                  height: window.innerWidth > 1800 ? 300 : 200,
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer">
            <div
              style={{
                width: window.innerWidth > 500 ? "80%" : "100%",
                height: window.innerWidth > 1800 ? 300 : 200,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/wallpaper/comp5.jpg`}
                alt=""
                resizeMode="cover"
                style={{
                  borderRadius: 10,
                  width: "100%",
                  height: window.innerWidth > 1800 ? 300 : 200,
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer">
            <div
              style={{
                width: window.innerWidth > 500 ? "80%" : "100%",
                height: window.innerWidth > 1800 ? 300 : 200,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/wallpaper/comp1.png`}
                alt=""
                resizeMode="contain"
                style={{
                  width: window.innerWidth > 500 ? "" : "100%",
                  height: window.innerWidth > 1800 ? 300 : 200,
                  backgroundColor: "white",
                  borderRadius: 10,
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer">
            <div
              style={{
                width: window.innerWidth > 500 ? "80%" : "100%",
                height: window.innerWidth > 1800 ? 300 : 200,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/wallpaper/comp9.png`}
                alt=""
                resizeMode="cover"
                style={{
                  borderRadius: 10,
                  width: "100%",
                  height: window.innerWidth > 1800 ? 300 : 200,
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer">
            <div
              style={{
                width: window.innerWidth > 500 ? "80%" : "100%",
                height: window.innerWidth > 1800 ? 300 : 200,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/wallpaper/comp12.png`}
                alt=""
                resizeMode="cover"
                style={{
                  borderRadius: 10,
                  width: "100%",
                  height: window.innerWidth > 1800 ? 300 : 200,
                }}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Service />

    </>
  );
}

export default Index;
