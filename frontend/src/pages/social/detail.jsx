import { useNavigate } from 'react-router-dom';

import axios from '../../axios/index'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'



function Detail() {


    const navigate = useNavigate();
    const { id } = useParams();

    const [photo, setPhoto] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {

        axios.get(`/public/social/get/${id}`).then(({ data }) => {
            setData(data.data)
            setPhoto(data.data.photo)
        })
    }, []);

    return (<>
        <div>
            <button onClick={() => navigate(-1)} className="px-8 py-2 mx-5 mt-2 text-white bg-gray-600 rounded"> <i className="fa-solid fa-arrow-left"></i> </button>
            <div className="justify-between px-2 mt-10 text-sm md:flex md:px-6 ">
                <p className="px-10 py-1 mb-4 text-center text-white bg-gray-600 rounded-full md:mb-auto md:text-left">{data.title}</p>
                <a href={data.link} className="px-10 py-1 text-white bg-gray-600 rounded-full"> <i className="fas fa-link"></i> View Page</a>
            </div>
            <div className="grid grid-cols-1 gap-5 mt-4 md:grid-cols-3">
                {photo.map((item) => (
                    <img className="rounded-xl mx-auto  h-[200px] bg-white shadow md:h-[310px]" alt="" src={item} />
                ))}
            </div>
        </div>
    </>);
}


export default Detail;