import axios from "../../../axios";
import { useState } from "react";
import swal from 'sweetalert';
import { storage } from '../../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function Create() {
  const [progresspercent, setProgresspercent] = useState(0);
  const [btn, setBtn] = useState(false);

  const [data, setData] = useState({
    title: '',
    link: '',
    description: '',
    photo: []
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handlePhoto = (e) => {

    setProgresspercent(0)

    for (let index = 0; index < e.target.files.length; index++) {
      setBtn(false)
      const storageRef = ref(storage, `social/${Array.from(Array(20), () => Math.floor(Math.random() * 36).toString(36)).join('') + '' + e.target.files[index].name}`);
      const uploadTask = uploadBytesResumable(storageRef, e.target.files[index]);

      uploadTask.on("state_changed",
        (snapshot) => {
          const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgresspercent(progress);
          if (progress !== 100) {
            setBtn(false)
          }
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            data.photo.push(downloadURL)
            setTimeout(() => {
              setBtn(true)
            }, 1000);
          });
        }

      );
    }

  }


  const handleForm = async (e) => {
    e.preventDefault();

    axios.post("/admin/social/store", {
      data: data
    }).then(({ data }) => {
      swal("Good job!", "Data has been inserted!", "success");
      setData({
        title: '',
        link: '',
        description: '',
        photo: ''
      })
      document.getElementById("form").reset();

      setBtn(false)
      setProgresspercent(0)
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
            disabled={btn ? false : true}

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


          {(progresspercent > 0) ? <>
            <div className='mt-2 overflow-hidden text-center border-2 border-green-500 rounded '>
              <div className='p-2 font-bold text-white bg-green-400' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
            </div>
          </> : <></>}
        </form>


      </div>
    </>
  );
}

export default Create;
