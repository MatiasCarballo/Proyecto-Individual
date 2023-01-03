import React from 'react'
import style from './NavBar.module.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div >
        <div className={style.NavBar} >
            <div>
                <Link to="/home" className={style.Logo}>
                    <h1 >Cuontries</h1>
                </Link>    
            </div>
            <div className={style.Links}>
                <Link to="/createActivity" className={style.Link}>Crea Actividades</Link>
                
            </div>
        </div>
        
    </div>
  )
}

export default NavBar