import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import authService from "../appwrite/auth";
import { userLogin, userLogout } from "../features/auth/authSlice";
import {AllPosts} from './index';

function Home() {

  return (
    <div className='w-full py-10'>
      <AllPosts />
    </div>
  )
}

export default Home;