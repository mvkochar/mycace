import React from 'react'
import Tag from '../Tag/Tag'
import './ConfectionerItem.css'

type ConfectionerItemProps = {
    image: string
    title: string
    reviews: number
    desc: string
    tagOne: string
    tagTwo: string
    tagsMore: number
}

const ConfectionerItem = ({ image, title, reviews, desc, tagOne, tagTwo, tagsMore }: ConfectionerItemProps) => {
    return (
        <div className='confectioner-item d-f jc-sb'>
            <div><img src={image} alt="confectioner-image" /></div>
            <div>
                <div className="confectioner-item-title">{title}</div>
                <div className="confectioner-item-reviews">{reviews} відгуки</div>
            </div>
            <p className="confectioner-item-desc">{desc}</p>
            <div className="confectioner-item-tags d-f">
                <Tag title={tagOne} />
                <Tag title={tagTwo} />
                <Tag title={`+ ${tagsMore}`} />
            </div>
        </div>
    )
}

export default ConfectionerItem