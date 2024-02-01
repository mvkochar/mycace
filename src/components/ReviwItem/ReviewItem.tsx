import React from 'react'
import  './ReviewItem.css'

type ReviewItemProps = {
    fname: string
    date: string
    productTitle?: string
    desc: string
    itemWidth?: string
}

const ReviewItem = ({fname, date, productTitle = '', desc, itemWidth = '696px'}:ReviewItemProps) => {
  return (
    <div className='review-item' style={{width: itemWidth}}>
        <div className="review-item-caption d-f">
            <div className="review-item-name">{fname}</div>
            <div className="review-item-date">{date}</div>
        </div>
        <div className={productTitle.length === 0 ? "d-n" : "review-item-product"}>{productTitle}</div>
        <p className="review-item-desc">{desc}</p>
    </div>
  )
}

export default ReviewItem