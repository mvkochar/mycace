import React from 'react'
import  './ReviewItem.css'

type ReviewItemProps = {
    fname: string
    date: string
    desc: string
}

const ReviewItem = ({fname, date, desc}:ReviewItemProps) => {
  return (
    <div className='review-item'>
        <div className="review-item-caption d-f">
            <div className="review-item-name">{fname}</div>
            <div className="review-item-date">{date}</div>
        </div>
        <p className="review-item-desc">{desc}</p>
    </div>
  )
}

export default ReviewItem