import React ,{ useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getIdCountries} from '../../store/actions'

import Country from './Country.js'


const Countries = () => {
  const idCountry = useParams()
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countryId);
  
  useEffect(()=> {
    dispatch(getIdCountries(idCountry.id))
  },[])

  return (
    <div>
      <Country  name={country.name} 
                image={country.image}
                region={country.region}
                subregion={country.subregion}
                capital={country.capital}
                population={country.population}
                area={country.area}
                idCard={idCountry.id}
                like={country.like}
                />
    </div>
  )
}

export default Countries