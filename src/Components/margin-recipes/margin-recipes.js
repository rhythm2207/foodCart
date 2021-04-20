import React from 'react'
import './Margin_Recipes.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const MarginRecipes = ({ heading }) => {

    // Used default value as no correct data was provided
    return (
        <div className="container">
            <div className="box">
                <div className="heading">{heading}</div>
                <div className="body">

                    <CircularProgressbar value={66} text={`${66}%`} />
                    <CircularProgressbar value={66} text={`${66}%`} />
                    <CircularProgressbar value={66} text={`${66}%`} />

                </div>
            </div>

        </div>
    )
}

export default MarginRecipes