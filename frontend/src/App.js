import './index.css'
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from 'react';
import { Provider } from "react-redux";
import { Store } from "./redux/Store";
import axios from './axios';

//layouts
import Header from './layouts/header'
import Footer from './layouts/footer'

//pages
import Index from './pages/index'
import Development from './pages/development'
import DetailDevelopment from './pages/development/detail'
import About from './pages/about'
import Service from './pages/service'
import Social from './pages/social'
import SocialDetail from './pages/social/detail'
//auth
import Auth from './pages/auth'


//admin
import Sidebar from './layouts/Sidebar'

  import Project from './pages/admin/project'
  import ProjectCreate from './pages/admin/project/create'
  import ProjectEdit from './pages/admin/project/edit'
  //social
  import SocialAdmin from './pages/admin/social'
  import SocialCreate from './pages/admin/social/create'
  import SocialEdit from './pages/admin/social/edit'
  //social
  import SlideAdmin from './pages/admin/slide'
  import SlideCreate from './pages/admin/slide/create'

function App() {

  useEffect(() => {
    if (localStorage.getItem('token')) {
      axios.get('/admin/post/check').then(() => { }).catch(() => {
        localStorage.removeItem('token');
        window.location.href = '/';
      })
    };
  }, []);

  
  return (
    <Provider store={Store}>
      <div className="App">
        {(localStorage.getItem('token')) ? (
          <div className='flex'>
            <Sidebar />
            <div className='w-10/12 h-screen overflow-y-scroll bg-gray-100'>
              <Routes>
                <Route path='/admin' element={<Project />} />
                <Route path='admin/project/create' element={<ProjectCreate />} />
                <Route path='admin/project/:id/edit' element={<ProjectEdit />} />

                <Route path='/admin/social' element={<SocialAdmin />} />
                <Route path='admin/social/create' element={<SocialCreate />} />
                <Route path='admin/social/:id/edit' element={<SocialEdit />} />

                <Route path='/admin/slide' element={<SlideAdmin />} />
                <Route path='admin/slide/create' element={<SlideCreate />} />
                
                <Route path="*" element={<Navigate replace to="/admin" />} />

              </Routes>
            </div>
          </div>) : (<>
            <Header />
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/development' element={<Development />} />
              <Route path='/development/:id' element={<DetailDevelopment />} />
              <Route path='/about' element={<About />} />
              <Route path='/service' element={<Service />} />
              <Route path='/social' element={<Social />} />
              <Route path='/social/:id' element={<SocialDetail />} />
              <Route path='/login/admin/panel' element={<Auth />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
            <Footer />
          </>)}

      </div>
    </Provider>
  );
}

export default App;
