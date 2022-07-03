import axios from "../../../axios";
import { useState } from "react";
import swal from 'sweetalert';

function Create() {
  const [data, setData] = useState({
    title: '',
    link: '',
    time: '',
    description: '',
    photo: ''
  });

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

    for (let i = 0 ; i < data.photo.length ; i++) {
      formData.append("photos", data.photo[i]);
  }
  
    axios.post("/admin/post/store", formData).then(({ data }) => {
      swal("Good job!", "Data has been inserted!", "success");
      setData({
        title: '',
        link: '',
        time: '',
        description: '',
        photo: ''
      })
      document.getElementById("form").reset();
    });
  };
  return (
    <>
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
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out mt-10"
          >
            Add
          </button>
        </form>


      </div>
    </>
  );
}

export default Create;
