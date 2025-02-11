import { Typography } from '@mui/material'
import React from 'react'

interface ProductCardPriceProps {
    children: number;
}

const ProductCardPrice: React.FC<ProductCardPriceProps> = ({children}) => {
  return (
    <Typography sx={{fontSize: '1.5rem', fontWeight: 600, lineHeight: '36px', color: '#FFFFFF'}}>
        ${children}
    </Typography>
  )
}

export default ProductCardPrice
