import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore,{ EffectCoverflow, Pagination, Autoplay } from "swiper";



import axios from '../../axios/index'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'



function Detail() {

    SwiperCore.use([Autoplay])

    const navigate = useNavigate();
    const { id } = useParams();

    const [photo, setPhoto] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {

        axios.get(`/public/post/get/${id}`).then(({ data }) => {
            setData(data.data)
            setPhoto(data.data.photo)
        })
    }, []);

    return (<>
        <div>
            <button onClick={() => navigate(-1)} className="px-8 py-2 mx-5 mt-2 text-white bg-gray-600 rounded"> <i className="fa-solid fa-arrow-left"></i> </button>
            <div className="grid w-full grid-cols-1 gap-1 mx-auto my-10 md:grid-cols-2 px-100" >
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    spaceBetween={0}
                    autoplay={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >

                    {photo.map((item) => (
                        <SwiperSlide>
                            <img className="w-10/12 rounded-xl mx-auto  h-[200px] md:h-[310px]" alt="" src={`${process.env.REACT_APP_BASE_URL}images/${item}`} />
                        </SwiperSlide>
                    ))}



                </Swiper>

                <div className="w-10/12 mx-auto overflow-hidden text-white border-2 border-gray-600 md:w-11/12 rounded-xl" style={{ backgroundImage: 'radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% )' }}>
                    <div className="flex items-center justify-between p-2 text-gray-700 bg-white rounded-bl-xl rounded-br-xl">
                        <p> <i class="fa-solid fa-folder"></i> {data.title}</p>
                        <p className="text-xs"><i class="fa-solid fa-calendar-check"></i> {data.time}</p>
                    </div>
                    <div className="h-40 p-2 mx-2 mt-10 overflow-y-scroll text-gray-800 bg-white rounded-lg">
                        {data.description}
                    </div>
                    <br></br>
                    <div className="mx-2">
                        <a href={data.link}><i class="fa-solid fa-link"></i> {data.link}</a>
                    </div>
                </div>
            </div>
        </div>
    </>);
}


export default Detail;