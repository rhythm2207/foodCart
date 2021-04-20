import React from 'react'
import './button.css'

const CustomButton = ({ onClickIncorrect, onClickAllRecipes }) => {
    return (
        <div className="buttons">
            <button className="button" onClick={onClickAllRecipes} >All Recipes</button>
            <button className="button" onClick={onClickIncorrect}>Incorrect</button>
            <button className="button">Untaged</button>
            <button className="button">Disabled</button>
        </div>
    )
}

export default CustomButton