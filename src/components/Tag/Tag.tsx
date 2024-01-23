import React from 'react'
import './Tag.css'

type TagProps = {
    title: string
}

const Tag = ({title}:TagProps) => {
  return (
    <div className='tag'>{title}</div>
  )
}

export default Tag