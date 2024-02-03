import React from 'react'
import './ArticleItem.css'
import { Link } from 'react-router-dom'

type ArticleItemProps = {
    image: string
    title: string
    desc: string

}

const ArticleItem = ({ image, title, desc }: ArticleItemProps) => {
    return (
        <div className='article-item'>
            <div><img src={image} alt="article-image" /></div>
            <div className="article-item-title">{title}</div>
            <p className="article-item-desc">{desc}</p>
            <Link to="/article" className="article-item-link">Читати далі</Link>
        </div>
    )
}

export default ArticleItem