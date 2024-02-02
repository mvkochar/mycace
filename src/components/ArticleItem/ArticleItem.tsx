import React from 'react'
import './ArticleItem.css'

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
            <a href="#" className="article-item-link">Читати далі</a>
        </div>
    )
}

export default ArticleItem