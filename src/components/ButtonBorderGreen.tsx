import { Button, ButtonProps } from '@mui/material'
import React from 'react'

const ButtonBorderGreen:React.FC<ButtonProps> = ({children, sx, ...props}) => {
  return (
    <Button
          variant="outlined"
          sx={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            py: "0.75rem",
            border: "1px solid #0E402D",
            borderRadius: "8px",
            textTransform: 'none',
            fontWeight: 600,
            color: "#2E2E2E",
            ...sx
          }}
          {...props}
        >
          {children}
        </Button>
  )
}

export default ButtonBorderGreen
