import axios from "../../../axios";
import { useState, useEffect } from "react";
import swal from 'sweetalert';
import { useParams } from 'react-router-dom'

function Edit() {
  const { id } = useParams();

  const [data, setData] = useState({
    title: '',
    link: '',
    time: '',
    description: '',
    photo: ''
  });
  const [images, setImages] = useState([])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handlePhoto = (e) => {
    setData({
      ...data,
      photo: [...data.photo, ...e.target.files],
    });
  }

  const handleForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', data.title)
    formData.append('link', data.link)
    formData.append('time', data.time)
    formData.append('description', data.description)

    if (data.photo.length !== 0) {
      for (let i = 0; i < data.photo.length; i++) {
        formData.append("photos", data.photo[i]);
      }
    }

    axios.put(`/admin/post/update/${id}`, formData).then(({ data }) => {
      swal("Good job!", "Data has been updated!", "success");
    });
  };

  useEffect(() => {
    axios.get(`/admin/post/${id}/edit`).then((items) => {

      let item = items.data.data
      setData({
        title: item.title,
        link: item.link,
        time: item.time,
        description: item.description,
        photo: ''
      })
      setImages(item.photo)


    })
  }, []);

  return (<>
    <div className="block w-full p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg md:w-8/12">
      <form id="form" onSubmit={handleForm} encType="multipart/form-data">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div className="form-group ">
            <label className="inline-block mb-2 text-gray-700 form-label">
              Title
            </label>
            <input
              type="text"
              value={data.title}
              onChange={handleChange}
              name="title"
              className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Title"
            />
          </div>

          <div className="form-group ">
            <label className="inline-block mb-2 text-gray-700 form-label">
              Link
            </label>
            <input
              type="link"
              value={data.link}
              onChange={handleChange}
              name="link"
              className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby=""
              placeholder="Link"
            />
          </div>

          <div className="form-group ">
            <label className="inline-block mb-2 text-gray-700 form-label">
              Time
            </label>
            <input
              type="text"
              name="time"
              value={data.time}
              onChange={handleChange}
              className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="time"
            />
          </div>
        </div>

        <div className="mt-2 form-group ">
          <label className="inline-block mb-2 text-gray-700 form-label">
            Description
          </label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          ></textarea>
        </div>

        <div className="mt-2 form-group ">
          <label className="inline-block mb-2 text-gray-700 form-label">
            File
          </label>
          <input
            onChange={handlePhoto}
            type="file"
            multiple
            name="photo"
            className="form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </div>

        <button
          className="
                w-full
                px-6
                py-2.5
                bg-green-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-green-700 hover:shadow-lg
                focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-green-800 active:shadow-lg
                transition
                duration-150
                ease-in-out mt-10"
        >
          Update
        </button>
      </form>

      
    <div className="grid grid-cols-3 gap-10 mt-10">
      {images.map((item, index) => (
        <img alt="" src={'http://localhost:3001/images/' + item} className="w-full rounded" />
      ))}
    </div>



    </div>
  </>);
}


export default Edit;