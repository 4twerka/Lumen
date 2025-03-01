import { Box } from '@mui/material'
import React from 'react'

interface ProductCardMobileSaleProps {
    children: string;
}

const ProductCardMobileSale: React.FC<ProductCardMobileSaleProps> = ({children}) => {
  return (
    <Box
        sx={{
          width: '45px',
          height: '25px',  
          position: "absolute",
          fontSize: '0.875rem',
          top: '0.75rem',
          right: '1rem',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          backgroundColor: "#FDF5ED",
          color: "#111111",
          border: "1px solid #FDF5ED",
        }}
      >
        -{children}%
      </Box>
  )
}

export default ProductCardMobileSale