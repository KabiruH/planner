import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from "../src/components/Dashboard"
import Login from "../src/components/Login"
import Signup from "../src/components/Signup"
import Profile from "../src/components/Profile"
import BookUser from "../src/components/BookUser"

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


function App() {
  return (
    <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Signup />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/profile/:id' element={<Profile />} />
                    <Route path='/book/:user' element={<BookUser />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </div>
  );
}

export default App;
