import axios from "../../../axios";
import { useState } from "react";
import swal from 'sweetalert';
import { storage } from '../../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


function Create() {

  const [progresspercent, setProgresspercent] = useState(0);
  const [btn, setBtn] = useState(false);
  const [data, setData] = useState({
    photo: ''
  });


  const handlePhoto = (e) => {
    setProgresspercent(0)

      setBtn(false)
      const storageRef = ref(storage, `slides/${Array.from(Array(20), () => Math.floor(Math.random() * 36).toString(36)).join('') + '' + e.target.files[0].name}`);
      const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

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
            data.photo = downloadURL
            setTimeout(() => {
              setBtn(true)
            }, 1000);
          });
        }

      );
  }


  const handleForm = async (e) => {
    e.preventDefault();

    axios.post("/admin/slide/store", {
      data:data
    }).then(({ data }) => {
      swal("Good job!", "Data has been inserted!", "success");
      setData({
        photo: ''
      })
      document.getElementById("form").reset();
      setProgresspercent(0)
    });
  };
  return (
    <>
      <div className="block w-full p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg md:w-8/12">
        <form id="form" onSubmit={handleForm}>

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
