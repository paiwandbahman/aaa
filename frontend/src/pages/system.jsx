import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";

function System() {
    return (<>
        <div className="p-2 overflow-hidden mt-30">
            <p className="mb-10 text-2xl font-bold text-center text-gray-800">Our Management System</p>
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
                className="pb-10 mb-10 mySwiper"
            >
                <SwiperSlide className="cursor-pointer">
                    <div
                        style={{
                            width: window.innerWidth > 500 ? "80%" : "100%",
                            height: 300,
                            backgroundColor: "white",
                            borderRadius: 10,
                        }}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/wallpaper/system2.jpg`}
                            alt=""
                            resizeMode="cover"
                            style={{
                                borderRadius: 10,
                                width: "100%",
                                height: 230,
                            }}
                        />
                        <p className="p-1 text-center text-white bg-blue-500 rounded-full">Hospital Management System</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="cursor-pointer">
                    <div
                        style={{
                            width: window.innerWidth > 500 ? "80%" : "100%",
                            height: 300,
                            backgroundColor: "white",
                            borderRadius: 10,
                        }}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/wallpaper/content.webp`}
                            alt=""
                            resizeMode="cover"
                            style={{
                                borderRadius: 10,
                                width: "100%",
                                height: 230,
                            }}
                        />
                        <p className="p-1 text-center text-white bg-purple-900 rounded-full">Content Management System</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                    <div
                        style={{
                            width: window.innerWidth > 500 ? "80%" : "100%",
                            height: 300,
                            backgroundColor: "white",
                            borderRadius: 10,
                        }}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/wallpaper/fastfood.webp`}
                            alt=""
                            resizeMode="cover"
                            style={{
                                borderRadius: 10,
                                width: "100%",
                                height: 230,
                            }}
                        />
                        <p className="p-1 text-center text-white bg-green-700 rounded-full">FastFood Management System</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                    <div
                        style={{
                            width: window.innerWidth > 500 ? "80%" : "100%",
                            height: 300,
                            backgroundColor: "white",
                            borderRadius: 10,
                        }}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/wallpaper/task.webp`}
                            alt=""
                            resizeMode="cover"
                            style={{
                                borderRadius: 10,
                                width: "100%",
                                height: 230,
                            }}
                        />
                        <p className="p-1 text-center text-white bg-blue-800 rounded-full">Task Management System</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                    <div
                        style={{
                            width: window.innerWidth > 500 ? "80%" : "100%",
                            height: 300,
                            backgroundColor: "white",
                            borderRadius: 10,
                        }}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/wallpaper/restaurant.jpg`}
                            alt=""
                            resizeMode="cover"
                            style={{
                                borderRadius: 10,
                                width: "100%",
                                height: 230,
                            }}
                        />
                        <p className="p-1 text-center text-white bg-indigo-400 rounded-full">Restaurant Management System</p>
                    </div>

                </SwiperSlide>

                <SwiperSlide className="cursor-pointer">
                    <div
                        style={{
                            width: window.innerWidth > 500 ? "80%" : "100%",
                            height: 300,
                            backgroundColor: "white",
                            borderRadius: 10,
                        }}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/wallpaper/clinic.jpg`}
                            alt=""
                            resizeMode="cover"
                            style={{
                                borderRadius: 10,
                                width: "100%",
                                height: 230,
                            }}
                        />
                        <p className="p-1 text-center text-white bg-blue-500 rounded-full">Clinc Management System</p>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    </>);
}

export default System;