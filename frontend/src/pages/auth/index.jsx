import { useState } from 'react'
import API from '../../axios';



function Index() {

  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelLogin = (e) => {
        e.preventDefault();
        API.post('/auth/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            data: { email, password },
        }).then(({ data }) => {

            if (data.token) {
                localStorage.setItem('token', data.token);
                window.location.href = '/admin'
            }

        }).catch((e) => {
            console.log(e)
        })
    }



    return (
        <>
            <section className="h-screen">
                <div className="container h-full px-6 py-12">
                    <div className="flex flex-wrap items-center justify-center h-full text-gray-800 g-6">
                        <div className="md:w-8/12 lg:w-4/12 lg:ml-20">
                            <img src={`${process.env.PUBLIC_URL}/assets/logo/logodark.png`} className="w-full mx-auto mt-4 mb-10 border-b" alt="" />

                            <form onSubmit={handelLogin}>

                                <div className="mb-6">
                                    <input
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                        type="text"
                                        className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                        type="password"
                                        className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                    />
                                </div>


                                <button
                                    type="submit"
                                    className="inline-block w-full py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Login
                                </button>




                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;