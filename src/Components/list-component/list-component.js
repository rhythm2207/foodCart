import React from 'react'
import './list-component.css'

const Items = ({ name, last, cogs, costPrice, salePrice, grossMargins, tags }) => {
    return (
        <div className="list" style={{ background: 'skyblue' }}>
            <input className="item" type="checkbox" />
            <p className="item">{name}</p>
            <p className="item">{last}</p>
            <p className="item">{cogs}</p>
            <p className="item">{costPrice}</p>
            <p className="item">{salePrice}</p>
            <p className="item">{grossMargins}</p>
            <p className="item">{tags}</p>
        </div>
    )
}

export default Items