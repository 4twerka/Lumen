import { Box, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '../../../assets/Star.svg?react'

const Badge:React.FC = () => {
  return (
    <Box
    sx={{
      position: "absolute",
      right: "12px",
      top: "12px",
      padding: "8px",
      backgroundColor: "#FDF5ED",
      borderRadius: "8px",
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center'  
    }}
  >
    <StarIcon />
    <Typography sx={{fontWeight:500, fontSize:'1rem', color: '#111111'}}>Головне</Typography>
  </Box>
  )
}

export default Badge
