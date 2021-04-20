import React from 'react'
import './list-component.css'

const Items = ({ name, last, cogs, costPrice, salePrice, grossMargins, tags, color, onClickCheckbox, checked }) => {
    return (
        <div>
            <input className="tick" onClick={onClickCheckbox} checked={checked} type="checkbox" />
            <div className="list" style={{ background: color }}>
                <p className="item">{name}</p>
                <p className="item">{last}</p>
                <p className="item">{cogs}%</p>
                <p className="item">{costPrice}</p>
                <p className="item">{salePrice}</p>
                <p className="item">{grossMargins}</p>
                <p className="item">{tags}</p>
            </div>
        </div>
    )
}

export default Items