import React from 'react'
import './Tag.css'

type TagProps = {
    title: string
    isActive?: boolean
}

const Tag = ({title, isActive = false}:TagProps) => {
  return (
    <div className={isActive ? 'tag tag__active' : 'tag' }>{title}</div>
  )
}

export default Tag