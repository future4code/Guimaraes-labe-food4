import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage'
import HomePage from '../pages/HomePage/HomePage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import SignUpAddress from '../pages/SignUpAddress/SignUpAddress'
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage'
import OrderPage from '../pages/OrderPage/OrderPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage'
import EditAddressPage from '../pages/EditAddressPage/EditAddressPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route  path='/' index element ={<HomePage/>} />
            <Route path='/LoginPage' element={<LoginPage/>} />
            <Route path='/SignUpPage' element={<SignUpPage/>} />
            <Route path = '/SignUpAddress' element={<SignUpAddress/>}/>
            <Route path = '/RestaurantPage' element={<RestaurantPage/>}/>
            <Route path = '/OrderPage' element={<OrderPage/>}/>
            <Route path = '/ProfilePage' element={<ProfilePage/>}/>
            <Route path = '/EditProfilePage' element={<EditProfilePage/>}/>
            <Route path = '/EditAddressPage' element={<EditAddressPage/>}/>
            <Route path = '*' element={<ErrorPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;