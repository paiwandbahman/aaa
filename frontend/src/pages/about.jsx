function About() {
  return (
    <>
      <div
        className="mt-0 mb-10"
        style={{
          backgroundImage:
            "radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,0.9) 0.3%, rgba(30,33,48,0.9) 90.2% )",
        }}
      >
        <div className="w-10/12 mx-auto text-xs relativ itee md:text-lg min-h-96 md:min-h-screen">
          <div className="relative w-10/12 mx-auto md:w-3/12">
            <img
              src={`${process.env.PUBLIC_URL}/assets/logo/logo.png`}
              alt=""
            />
          </div>
          <div className="grid items-center grid-cols-1 gap-3 mt-4 font-bold text-center text-white sm:grid-cols-2 md:grid-cols-4">
            <div className="grid grid-col-1">
              <a href="tel:0773 733 0003" className="pl-1 ">
                <i className="fa-solid fa-phone"></i> 0773 733 0003
              </a>
              <a href="tel:0773 734 0004" className="pl-1 ">
                <i className="fa-solid fa-phone"></i> 0773 734 0004
              </a>
            </div>
            <a
              href="mailto:info@peshawa.tech"
              className="py-1 pl-1 md:border-l"
            >
              <i className="fa-solid fa-envelope"></i> info@peshawa.tech
            </a>
            <a
              href="https://www.facebook.com/peshawaGroup"
              className="py-1 pl-1 md:border-l"
            >
              {" "}
              <i className="fa-brands fa-facebook"></i> Peshawa Group
            </a>
            <a
              href="https://www.instagram.com/peshawa.group/"
              className="py-1 pl-1 md:border-l"
            >
              {" "}
              <i className="fa-brands fa-instagram"></i> Peshawa.Group
            </a>
          </div>
          <p className="pt-3 mt-5 font-bold text-center text-white border-t md:mx-20">
            {" "}
            <i className="fa-solid fa-location-dot"></i> Slemany – Rand Gallery
            – 5th floor- office no. 1
          </p>

          <div className="justify-between mt-10 md:flex">
            <img
              src={`${process.env.PUBLIC_URL}/assets/wallpaper/cerification.jpg`}
              className="w-full rounded bg-gray-800/50 hover:opacity-100 md:w-auto opacity-40 h-96"
              alt=""
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/wallpaper/cert.png`}
              className="w-full mt-10 rounded bg-gray-800/50 hover:opacity-100 md:w-auto md:mt-0 opacity-40 md:h-96"
              alt=""
            />
            <br className="md:hidden" />
          </div>
        </div>
      </div>
      <iframe
        className="w-full h-40 mx-auto mt-10 mb-10 rounded-xl md:h-96"
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6491.246399274401!2d45.397440253906254!3d35.56300700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40002e7c2c0604a5%3A0x6cf7adb9fcad1b10!2sRand%20Gallery!5e0!3m2!1sen!2sus!4v1656083056246!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default About;
