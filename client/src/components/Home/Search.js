import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { getNameCoutry } from '../../store/actions'

import style from './Home.module.css'
import Lupa from '../../Assets/lupa.svg'

const Search = () => {
    const [search, setSearch ] = useState('')
    const dispatch = useDispatch();

    
    const searcher = (e)=>{
        e.preventDefault();
        setSearch(e.target.value)
        dispatch(getNameCoutry(e.target.value))
    }

  return (
    
        <div className={style.Fondo}>
          <div className={style.Search} >
              <img src={Lupa} alt="" />
              <input value={search} type="text" placeholder='Busca tu Pais' onChange={searcher}/>
          </div> 
        </div>
    
  )
}

export default Search