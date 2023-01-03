import React ,{ useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getIdActivity} from '../../store/actions'
import style from './ActivityInfo.module.css'

import CountriesActivity from './Countries/CountriesActivity.js'

const ActivityInfo = () => {
    const idActivity = useParams()

     const activity = useSelector((state) => state.activityId);
     const dispatch = useDispatch();
     useEffect(()=> {
       dispatch(getIdActivity(idActivity.id))
     },[])
     let countries = useSelector((state) => state.countryInfo)
    
 
    
  return (
    <div className={style.ActivityInfo}>
        <div className={style.Title}>
            <h1>{activity.name}</h1>
        </div>
        <div className={style.Card}>
            <div className={style.Info}>
                <h1>Informacion sobre {activity.name}</h1>
                <h3> La actividad de {activity.name} se puede practicar en la estación de {activity.season},
                 generalmente dura aproximadamente {activity.duration / 60} horas.
                 Esta actividad tiene una clasificación {activity.difficulty} de dificultad</h3>
            </div>
            <div className={style.Flag}>
                <img src={activity.image} alt=""/>
            </div>
        </div>
        <h1>Paises donde podemos encontra esta actividad</h1>
        <div className={style.Paises}>
            {
                 countries.map((c)=>{
                   return <CountriesActivity key={c.id} name={c.name} image={c.image} />
                 })
            }
        </div>
        
    </div>
  )
}

export default ActivityInfo
