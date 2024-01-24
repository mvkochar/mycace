import React from 'react'
import './ProductItem.css'

type ProductItemProps = {
  image: string
  price: string
  title: string
  fillings: number
  titlePt?: string
  titlePb?: string
}

const ProductItem = ({image, price, title, fillings, titlePt = "5px", titlePb = "5px" }: ProductItemProps) => {
  return (
    <div className='product-item'>
          <div><img src={image} alt="product-img" /></div>
          <div className="product-item-info">
              <div className="product-item-price">{price} грн</div>
              <div className="product-item-title" style={{paddingTop: titlePt, paddingBottom: titlePb}}>{title}</div>
              <div className="product-item-fillings">{fillings} варіанти начинок</div>
          </div> 
    </div>
  )
}

export default ProductItem