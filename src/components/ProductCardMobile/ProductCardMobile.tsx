import React from 'react'
import { Product } from '../../types'
import ProductCardMobileWrapper from './ProductCardMobileWrapper'
import ProductCardMobileImg from './ProductCardMobileImg'
import ProductCardMobileSale from './ProductCardMobileSale'
import ProductCardMobileExistColor from './ProductCardMobileExistColor'
import ProductCardMobileInfo from './ProductCardMobileInfo'

const ProductCardMobile:React.FC<Product> = ({title, short_describe, price, image, _id})=> {
  return (
    <ProductCardMobileWrapper>
        <ProductCardMobileImg image={image} title={title} short_describe={short_describe} />
        <ProductCardMobileSale>30</ProductCardMobileSale>
        <ProductCardMobileExistColor id={_id} />
        <ProductCardMobileInfo price={price} />
    </ProductCardMobileWrapper>
  )
}

export default ProductCardMobile
