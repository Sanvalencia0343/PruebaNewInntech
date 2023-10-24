import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Update from '../pages/Update';
import PrivateRoute from './privateRoutes';

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route path="/register" element={<Register />} />
            <Route exact path='/home' element={<PrivateRoute/>}>
            <Route exact path='/home' element={<Home/>}/>
            </Route>
            <Route exact path='/update/:userId' element={<PrivateRoute/>}>
            <Route exact path='/update/:userId' element={<Update/>}/>
            </Route>
        </Routes>
    );
}

export default AppRouter;
