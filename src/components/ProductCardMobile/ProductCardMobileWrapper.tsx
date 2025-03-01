import { Box } from '@mui/material'
import React, { ReactNode } from 'react'

const ProductCardMobileWrapper:React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
      {children}
    </Box>
  )
}

export default ProductCardMobileWrapper
