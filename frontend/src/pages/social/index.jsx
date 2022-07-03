import { Link } from "react-router-dom";
import axios from "../../axios/index";
import { useEffect, useState } from "react";

function Social() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/public/social/get").then(({ data }) => {
      setData(data.data);
    });
  }, []);

  return (
    <div>
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
              paddingTop: window.innerWidth > 500 ? "10%" : "0%",
              marginTop: window.innerWidth > 500 ? "" : "30%",
            }}
          >
            <div
              className="px-8 text-lg font-bold text-center text-white md:text-4xl"
              style={{ lineHeight: "40px" }}
            >
              <p>With Peshawa Group</p> Build Your Dreams.
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

            <div className="relative w-9/12 mx-auto mt-0 -mt-16 md:mt-10 md:w-6/12 ">
              <img
                src={`${process.env.PUBLIC_URL}/assets/wallpaper/social.png`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 px-10 mt-10 sm:grid-cols-2 lg:grid-cols-4 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white shadow group rounded-xl"
          >
            <div className="absolute w-full h-16 bg-gradient-to-b from-black/60 group-hover:from-blue-600/50">
              <p className="mt-1 text-lg font-bold text-center text-white">
                {item.title}
              </p>
            </div>
            <img
              src={`${process.env.REACT_APP_BASE_URL}images/${item.photo[0]}`}
              className="w-full h-48"
              alt=""
            />
            <div className="flex items-center justify-end px-2 py-4">
              <Link
                to={{ pathname: "/social/" + item._id }}
                className="px-4 py-1 text-xs text-white bg-blue-600 rounded-full"
              >
                Show Design
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Social;
