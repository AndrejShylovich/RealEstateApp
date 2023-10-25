import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Hero from './components/hero/Hero';

import { useSelector } from 'react-redux'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react';



function App() {
  const { user } = useSelector((state) => state.auth)
  const url = useLocation().pathname

  useEffect(() => {
    url && window.scrollTo(0, 0)
  }, [url])

  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Hero />
            App
            <Footer />
          </>
        } />
        <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path='/properties' element={
          <>
            <Navbar />
            Properties
            <Footer />
          </>
        } />
        <Route path='/propertyDetail/:id' element={
          <>
            <Navbar />
            propertyDetail
            <Footer />
          </>
        } />
        <Route path='/editproperty/:id' element={
          user ?
            <>
              <Navbar />
              editproperty
              <Footer />
            </>
            : <Navigate to='/login' />
        } />
        <Route path='/my-profile' element={
          user ?
            <>
              <Navbar />
              my-profile
              <Footer />
            </>
            : <Navigate to='/login' />
        } />
        <Route path='/update-profile' element={
          user ?
            <>
              <Navbar />
              update-profile
              <Footer />
            </>
            : <Navigate to='/login' />
        } />
        <Route path='*' element={
          <>
            <Navbar />
            *
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
