import { Link } from "react-router-dom";
import axios from "../../axios/index";
import { useEffect, useState } from "react";

import System from '../system'

function Development() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/public/post/get").then(({ data }) => {
      setData(data.data);
    });
  }, []);

  return (
    <>
      <div
        className="  sm:h-[1750px] md:h-[600px] lg:h-screen mt-0 z-16"
        style={{
          height: window.innerWidth > 500 ? 500 : "95vh",
          backgroundImage:   "radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,0.9) 0.3%, rgba(30,33,48,0.9) 90.2% )",
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
              <p className="text-4xl"> Peshawa Group </p>the limit of our
              services, <br /> is your will
            </div>
            <div className="mt-10 text-center">
              <a
                 href="tel:+9647737330003"
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
            <div>
              <div
                className="-mt-20 md:-mt-2"
                style={{
                  width: "70%",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/wallpaper/coding.gif`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        <System />  
      </div>   
        

      <p className="mb-10 text-2xl font-bold text-center text-gray-800">Our Projects</p>

      <div className="grid w-11/12 grid-cols-1 gap-5 mx-auto mt-24 sm:grid-cols-2 gap-y-16 md:grid-cols-3 md:mt-10 md:w-10/12">
        {data.map((item, index) => (
          <div key={index}>
            <div className="relative p-2 bg-gray-200 rounded-xl">
              <img
                src={`${process.env.REACT_APP_BASE_URL}images/${item.photo[0]}`}
                className="relative w-full border shadow -top-10 rounded-3xl"
                alt=""
              />
              <div className="relative grid grid-cols-3 gap-4 py-2 text-sm text-center -top-3">
                <p className="text-gray-800 bg-white rounded-full ">
                  {item.title}
                </p>
                <p className="text-gray-800 bg-white rounded-full ">
                  <i className="fas fa-clock"></i>
                  {item.time}
                </p>
                <Link
                  to={{ pathname: "/development/" + item._id }}
                  className="text-gray-800 bg-white rounded-full "
                >
                  <i className="fas fa-eye"></i> View
                </Link>
              </div>
            </div>
            <div className="w-6/12 mx-auto -mt-1 text-center text-white bg-gray-800 rounded-full">
              system
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Development;
