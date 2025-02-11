import { Box } from '@mui/material'
import React from 'react'

interface ProductCardSaleProps {
    children: string;
}

const ProductCardSale: React.FC<ProductCardSaleProps> = ({children}) => {
  return (
    <Box
        sx={{
          width: '58px',
          height: '35px',  
          position: "absolute",
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

export default ProductCardSale
