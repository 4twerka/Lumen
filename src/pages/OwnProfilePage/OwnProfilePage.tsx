import React from 'react'
import { useAppSelector } from '../../hooks'

const OwnProfilePage = () => {
    const  token  = useAppSelector((state) => state.user.token);
    console.log('token',token);
    
  return (
    <div>
      
    </div>
  )
}

export default OwnProfilePage
