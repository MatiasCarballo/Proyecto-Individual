import React from 'react'
import style from './Pagination.module.css'

const Pagination = ({countryPerPage, pages, setPages, totalCountries}) => {

  const pagesNum = [];
  for (let i = 1; i <= (Math.ceil(totalCountries/countryPerPage)); i++){
    pagesNum.push(i)
  }
  
  const buttonPrevious = ()=>{
    setPages(pages - 1)
  }

  const buttonNext = ()=>{
    setPages(pages + 1)
  }
  
  return (
    <div >
      <div className={style.Paginacion}>
        <div className={style.Button}>
          <button className={ pages === 1 ? style.off : style.on} onClick={buttonPrevious}>Previous</button>
        </div>
        
        <div className={style.Numero}>
          {pages}
        </div>
        <div className={style.Button}>
          <button className={ pages >= pagesNum.length ? style.off : style.on} onClick={buttonNext}>Next</button>
        </div>
        
      </div>
    </div>
  )
}

export default Pagination