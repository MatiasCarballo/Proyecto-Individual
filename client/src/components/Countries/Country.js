import React from 'react'
import { useSelector} from 'react-redux'
import style from './Country.module.css'
import { useParams } from 'react-router-dom'

import Activity from './Activity/Activity.js'

const Country = ({name, image, region, capital, population, area, idCard, like}) => {
  const idCountry = useParams()
  const activity = useSelector((state) => state.activity);
  const Num = activity.length
  
  return (
    <div className={style.Country}>
        <div className={style.Title}>
        <h1>{name}</h1>
      </div>
      <div className={style.Card}>
        <div className={style.Info}>
          <h1>Informacion del País</h1>
          <h3>Esté país se encuentra en el continente de {region}, y su capital se llama {capital}. {name} cuenta con un área de {area}², en la que habitan {population} personas aproximadamente.</h3>
          
        </div>  
        <div className={style.Flag}>
          <img src={image} alt="#"/>
        </div>
      </div>
      <h1 className={style.TitleActivity}>Actividades de {name}</h1>
      <div className={style.activity}>
        {
          Num !== 0 ? (
              activity.map((a)=>{
                return <Activity key={a.id} id={a.id} name={a.name} image={a.image} idCard={idCountry.id}/>
              })
          ) : (
            <h1>Esté país no posee Actividades aun</h1>
          )
        }
      </div>
    </div>
  )
}

export default Country

