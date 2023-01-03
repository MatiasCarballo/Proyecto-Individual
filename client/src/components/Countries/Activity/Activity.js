import React from 'react'
import style from './Activity.module.css'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteActivity } from '../../../store/actions.js'


const Activity = ({id, name, image, idCard}) => {
  
  const history = useHistory();
  const dispatch = useDispatch()
  const DeleteActivity =(p)=>{
    dispatch(deleteActivity(p))
    //getIdCountries(p)
    history.push(`/countries/${idCard}`)
  }

  return (<>
    <div className={style.Activity}>
      <Link key={id} className={style.Link} to={`/activity/${id}`}>
        <img src={image} alt="#"/>
        <h1>{name}</h1>
      </Link>
        
        <div className={style.BoxButton}>
          <button onClick={()=>{DeleteActivity(id)}}>x</button> 
        </div>
    </div>  

  </>

  )
}

export default Activity