import React, { useEffect } from 'react'
import { jwtDecode } from "jwt-decode";
import { useAppDispatch, useAppSelector } from '../hooks';
import { setUserId } from '../store/slices/userSlice';

interface TokenPayload {
  iat: number;
  time: string;
  userId: string; 
}

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.userId);
  const isAuthorized = !!userId;
  console.log('userId',userId);
  console.log('autoriseUser',isAuthorized);
  
  useEffect(() => {
    const token = sessionStorage.getItem('authToken') || localStorage.getItem('authToken') || null;
    const decoded = token ? jwtDecode(token) as TokenPayload : null;
    if (decoded) {
      dispatch(setUserId(decoded.userId))
    }
  },[dispatch])

    
  return (
    <div>
    </div>
  )
}

export default HomePage
