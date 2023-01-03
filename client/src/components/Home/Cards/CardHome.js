import React from 'react'
import { Link } from 'react-router-dom'
import style from './CardHome.module.css'

const CardHome = ({id ,name, image, region, activities }) => {

  return (
    <div className={style.card}>
      <Link key={id} to={`/countries/${id}`} className={style.link}>
        <div className={style.image}>
          <img src={image} alt="#"/>
        </div>
        
        <div className={style.text}>
          <div className={style.title}>
              <h2>{name}</h2>
          </div>
          <div className={style.region}>
              <h2>{region}</h2>
          </div>
          <div className={style.activity}>
            <h4>actividade disponibles: {activities}</h4>
          </div>
        </div> 
      </Link>
        
    </div>
  )
}

export default CardHome