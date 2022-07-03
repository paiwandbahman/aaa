import { Link } from "react-router-dom";

export default function Sidebar() {

    let logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/'
    };

    return (
        <div className="relative w-2/12 h-screen p-2 bg-indigo-600">
            <img src={`${process.env.PUBLIC_URL}/assets/logo/logo.png`} className="w-24 pb-5 mx-auto mb-5 border-b md:w-40" alt="" />

            <Link to='/admin' className="block w-full p-2 text-center text-white border-l border-r border-white" >Projects</Link>
            <Link to='/admin/social' className="block w-full p-2 mt-2 text-center text-white border-l border-r border-white" >Social Media</Link>
            <Link to='/admin/slide' className="block w-full p-2 mt-2 text-center text-white border-l border-r border-white" >Slide</Link>

            <button onClick={() => { logout() }} className="absolute w-11/12 p-2 mx-auto bg-white rounded bottom-10 ">Logout</button>

        </div>
    );
}
