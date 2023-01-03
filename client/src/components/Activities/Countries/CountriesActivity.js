import React from 'react'
import style from './CountriesActivity.module.css'

const CountriesActivity = ({name, image}) => {

  return(
        <div className={style.Activity}>
            <img src={image} alt="#"/>
            <h1>{name}</h1>
        </div>
 )
}

export default CountriesActivity