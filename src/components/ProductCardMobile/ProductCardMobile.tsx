import React from 'react'
import { Product } from '../../types'
import ProductCardMobileWrapper from './ProductCardMobileWrapper'
import ProductCardMobileImg from './ProductCardMobileImg'
// import ProductCardMobileSale from './ProductCardMobileSale'
import ProductCardMobileExist from './ProductCardMobileExist'
import ProductCardMobileInfo from './ProductCardMobileInfo'

const ProductCardMobile:React.FC<Product> = ({title, short_describe, price, image, _id, stock})=> {
  return (
    <ProductCardMobileWrapper>
        <ProductCardMobileImg _id={_id} image={image} title={title} short_describe={short_describe} />
        {/* <ProductCardMobileSale>30</ProductCardMobileSale> */}
        <ProductCardMobileExist stock={stock} />
        <ProductCardMobileInfo stock={stock} price={price} id={_id} />
    </ProductCardMobileWrapper>
  )
}

export default ProductCardMobile
