import { Button, ButtonProps } from '@mui/material'
import React from 'react'

const ButtonGreen:React.FC<ButtonProps> = ({children, sx, ...props}) => {
  return (
    <Button
          variant="contained"
          sx={{
            height: '48px',
            fontSize: '1rem',
            borderRadius: "8px",
            textTransform: 'none',
            fontWeight: 600,
            color: "#FDF5ED",
            backgroundColor: '#0E402D',
            ...sx
          }}
          {...props}
        >
          {children}
        </Button>
  )
}

export default ButtonGreen
