import React from 'react'
import { Link } from 'react-router-dom'
import style from './Start.module.css'

const Start = () => {
  return (
    <div className={style.Start}>
        <Link to="/home">
            <button className={style.Button}>Start</button>
        </Link>
    </div>
  )
}

export default Start