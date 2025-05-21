import React from 'react'
import { Product } from '../../types'
import ProductCardMobileWrapper from './ProductCardMobileWrapper'
import ProductCardMobileImg from './ProductCardMobileImg'
// import ProductCardMobileSale from './ProductCardMobileSale'
import ProductCardMobileExist from './ProductCardMobileExist'
import ProductCardMobileInfo from './ProductCardMobileInfo'

const ProductCardMobile:React.FC<Product> = ({title, price, image, _id, stock, type_candle, material})=> {
  return (
    <ProductCardMobileWrapper>
        <ProductCardMobileImg _id={_id} image={image} title={title} type={type_candle} material={material} />
        {/* <ProductCardMobileSale>30</ProductCardMobileSale> */}
        <ProductCardMobileExist stock={stock} />
        <ProductCardMobileInfo title={title} stock={stock} price={price} id={_id} />
    </ProductCardMobileWrapper>
  )
}

export default ProductCardMobile
