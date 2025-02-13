import React from 'react'
import { useParams } from 'react-router'

const ProductsPage:React.FC = () => {
    const { id } = useParams();
  return (
    <div>
      {id}
    </div>
  )
}

export default ProductsPage
