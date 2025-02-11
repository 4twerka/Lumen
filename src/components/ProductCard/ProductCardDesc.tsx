import { Typography } from '@mui/material'
import React from 'react'

interface ProductCardDescProps {
    children: string;
}

const ProductCardDesc: React.FC<ProductCardDescProps> = ({children}) => {
  return (
    <Typography sx={{fontSize: '0.875rem', fontWeight: 400, lineHeight: '21px', color: '#FFFFFF', textAlign: 'center'}}>
        {children}
    </Typography>
  )
}

export default ProductCardDesc
