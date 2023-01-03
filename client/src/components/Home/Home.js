import React, {useState,  useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCountries, byAlphabet, byPopulation, byContinent} from '../../store/actions'
import style from './Home.module.css'

import Search from './Search'
import CardHome from './Cards/CardHome.js'
import Pagination from './Paginacion/Paginacion.js';

const Home = () => {
  
  const [countryPerPage, setCountryPerPage] = useState(9)
  const [pages, setPages] = useState(1)
  const paises = useSelector((state) => state.country);
  const countryFilter = useSelector((state) => state.countryFilter);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getCountries())
  },[])
  const totalCountries = paises.length;
  let cantContry = pages === 1 ? countryPerPage : countryPerPage + 1;
  const lastPage = pages * cantContry;
  const firstPag = lastPage - cantContry;

    function OrderAlphabet(e) {
        e.preventDefault();
        if((e.target.value) === 'Null'){
            dispatch(getCountries());
        }
        dispatch(byAlphabet(e.target.value));
    }

    function OrderPopulation(e) {
        e.preventDefault();
        if((e.target.value) === 'Null'){
          }
          dispatch(byPopulation(e.target.value));
    }

    function OrderContinent(e){
        e.preventDefault();
        if((e.target.value) === 'Null'){
            dispatch(getCountries());
        }
        dispatch(byContinent(e.target.value));
    }


  return(
    <div className={style.home}>
      <Search/>
      <div className={style.filters}>
        <div className={style.filter}>
          <select onChange={OrderAlphabet}>
              <option value='Null' >Alfabetiaco</option>
              <option value='Ascendente' >Ascendente</option>
              <option value='Desendente' >Desendente</option>
          </select>
        </div>
        <div className={style.filter}>
            <select onChange={OrderPopulation}>
                <option value='Null'>Poblacion</option>
                <option value='Max'>Mas population</option>
                <option value='Min'>Menos population</option>
            </select>
        </div>
        <div className={style.filter}>
            <select onChange={OrderContinent}>
                <option value='Null' >Continent</option>
                <option value='Asia' >Asia</option>
                <option value='Antarctica'>Antarctica</option>
                <option value='Africa' >Africa</option>
                <option value='North America' >Norte America</option>
                <option value='South America' >Sur Ameriaca</option>
                <option value='Europe' >Europa</option>
                <option value='Oceania'>Oceania</option>
            </select>
        </div>
      </div>
      <div className={style.Cards}>
        { countryFilter.length !== 0 ? (countryFilter.map((c)=>{
            return (<CardHome key={c.id} id={c.id} name={c.name} image={c.image} region={c.region} activities={c.activities.length}/>)
          }).slice(firstPag,lastPage))
        :
           (paises.map((c)=>{
            return (<CardHome key={c.id} id={c.id} name={c.name} image={c.image} region={c.region} activities={c.activities.length}/>)
          }).slice(firstPag,lastPage))
        }
      </div>
     <Pagination countryPerPage={cantContry} pages={pages} setPages={setPages} totalCountries={totalCountries}/>
    </div>
)}

export default Home