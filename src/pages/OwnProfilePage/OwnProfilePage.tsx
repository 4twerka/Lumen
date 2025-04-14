import React from 'react'
import { useAppSelector } from '../../hooks'

const OwnProfilePage:React.FC = () => {
    const  token  = useAppSelector((state) => state.user.token);
    console.log('token',token);
    
  return (
    <div>
      Мій Профіль
    </div>
  )
}

export default OwnProfilePage
