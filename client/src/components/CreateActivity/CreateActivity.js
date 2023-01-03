import {useState, useEffect} from 'react'
import { getCountries ,postActivity} from '../../store/actions.js'
import { useDispatch, useSelector } from 'react-redux'

import style from './CreateActivity.module.css'


const CreateActivity = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getCountries())
      },[])
    const paises = useSelector((state) => state.country);
    
    
    paises.sort(function(a, b){
        if (a.name > b.name) {
            return 1;
        }
        if(b.name > a.name){
            return -1;
        }
        return 0;
    })
    

    const [act, setAct]= useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [],
        image: '',
        like:'',
    })
    
    const [errName, setErrName]= useState(false)
    const [errDifficulty, setErrDifficulty]= useState(false)
    const [errDuration, setErrDuration]= useState(false)
    const [errSeason, setErrSeason]= useState(false)
    const [errCountries, setErrCountries]= useState(false)
    const [errImage, setErrImage]= useState(false)


    function handleName(e) {
        setAct({
            ...act,
            name: e.target.value
        })

        setErrName(false)
    }

    function handleLike(e) {
        e.preventDefault();
        setAct({
            ...act,
            like: e.target.value
        })
        console.log(e.target.value)
        //setErrName(false)
    }


    const handleDifficulty = (e) =>{
        e.preventDefault();
        setAct({
            ...act,
            difficulty: e.target.value
        })
        setErrDifficulty(false)
    }

    const handleDuration = (e) =>{
        e.preventDefault();
        setAct({
            ...act,
            duration: e.target.value
        })
        setErrDuration(false)
    }
    
    const handleSeason = (e) =>{
        e.preventDefault();
        setAct({
            ...act,
            season: e.target.value
        })
        setErrSeason(false)
    }
  
    const handleImage = (e) =>{
       setAct({
           ...act,
           image: e.target.value
       })
       setErrImage(false)
    }    
    
    const handleCountries = (id) =>{
        setAct({
            ...act,
            countries: [...act.countries, id.target.value]
        })
        setErrCountries(false)
    }    
    
    function onSubmit(e){
        
        if(act.name.length === 0 ){
            setErrName(true)
        }
        if(act.difficulty === 'null' || act.difficulty === ''){
            setErrDifficulty(true)
        }
        if(act.duration === 'null' || act.duration === ''){
            setErrDuration(true)
        }        
        if(act.season === 'null' || act.season === ''){
            setErrSeason(true)
        }
        if(act.image.length === 0){
            setErrImage(true)
        }  
        if(act.countries.length === 0){
            setErrCountries(true)
        } 
        dispatch(postActivity(act))
        //root.render(CreateActivity);
    }
    const deleteCountry = (e)=>{
        setAct({
            ...act,
            countries: act.countries.filter(c => c !== e)
        })
    }

    const cortryName = () =>{
        let buttomDelete = []
        for(let i = 0; i < act.countries.length; i++){
           for(let j = 0; j < paises.length; j++){
                if(act.countries[i] === paises[j].id){
                    buttomDelete.push(
                        <div key={paises[j].id} className={style.tagBox}  style={{display: "flex"}}>
                            <div  style={{display: "flex", }}>
                                <button onClick={()=>deleteCountry(act.countries[i])}>x</button>
                            </div>
                            <div style={{display: "flex", }}>
                                <h4 >{paises[j].name}</h4>
                            </div>
                            
                        </div>
                    ) 
                }
            }
        }
        return buttomDelete
    }
    
    return (

    <div className={style.CreateActivity}>
        <div>
            <h1 className={style.Title}>Crea una nueva actividad</h1>
        </div>
        <div className={style.Form}>
            <form onSubmit={onSubmit}>
                <div className={style.NameDifficulty}>
                    <div className={style.BoxName}>
                        <input className={errName ? style.errName : style.Name} type="text" value={act.name} name={"name"} onChange={handleName} placeholder={errName ? 'Falto el nombre' : 'Nombre'}/>
                    </div>
                    <div className={style.BoxDifficulty}>
                        <select onChange={handleDifficulty} className={errDifficulty ? style.errDifficulty : style.Difficulty} >
                            <option value="null">{ errName ? 'Falto la dificultad' : 'Dificultad' }</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className={style.DurationSeason}>
                    <div className={style.BoxDuration}>
                        <select onChange={handleDuration} className={errDuration ? style.errDuration : style.Duration}>
                            <option  value="null">{errDuration ? 'Falto la duracion' :'Duracion aprox'}</option>
                            <option value="30">30 min</option>
                            <option value="60">1 hs</option>
                            <option value="90">1:30 hs</option>
                            <option value="120">2 hs</option>
                            <option value="180">3 hs</option>
                            <option value="240">4 hs</option>
                            <option value="300">5 hs o más</option>
                        </select>
                    </div>
                    <div className={style.BoxSeason}>
                        <select onChange={handleSeason} className={errSeason ? style.errSeason :style.Season}>
                            <option value="null">{errSeason ? 'Falto la temporada' :'Temporada del Año'}</option>
                            <option value="Verano">Verano</option>
                            <option value="Otoño">Otoño</option>
                            <option value="Invierno">Invierno</option>
                            <option value="Primavera">Primavera</option>
                        </select>
                    </div>                    
                </div>

                <div className={style.BoxImage}>
                    <input type="text" value={act.image} name={'image'} onChange={handleImage} className={errImage ? style.errImage :style.Image} placeholder={errName ? 'Falto la imagen' : 'Imagen por URL'}/>
                </div>
                <div className={style.BoxCountries}>
                    <select onChange={handleCountries} className={errCountries ? style.errCountries : style.Countries}>
                        <option value="null">{errCountries ? 'Poner al menos un pais' :'Pais o Paises'}</option>
                        {
                            paises.map((p)=>{
                                return (
                                <>
                                    <option key={p.id} value={p.id}>{p.name}</option>
                                </>)
                            })
                        }
                    </select>
                </div>
                
                    
                <div>
                    <input type="text" value={act.like} name={"like"} onChange={handleLike} />
                </div>
                <div>
                    {
                        cortryName()
                    }
                </div>
                <div className={style.Submit}>
                    <input type="submit" value="Crear"/>
                </div>
            </form>            
        </div>


        
        
    </div>
  )
}

export default CreateActivity