import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_NAME_COUNTRYS = "GET_NAME_COUNTRYS";
export const GET_ID_COUNTRIES = "GET_ID_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_ID_ACTIVITY = "GET_ID_ACTIVITY";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const FILTER_POPULATION = "FILTER_POPULATION";
export const FILTER_ALPHABET = "FILTER_ALPHABET";
export const FILTER_CONTINENT = "FILTER_CONTINENT";


export function getCountries(){
    return function(dispatch){
        axios.get('http://localhost:3001/countries/')
        .then((country)=>{
            dispatch({
                type: GET_COUNTRIES, payload: country.data
            })
        })
    }
}

//Search
export function getNameCoutry(payload){
    return function(dispatch){
        axios.get(`http://localhost:3001/countries?name=${payload}`)
        .then((country)=>{
            dispatch({
                type: GET_NAME_COUNTRYS, payload: country.data
            })
        })
    }
}

export function getIdCountries(payload){
    return function(dispatch){
        
        axios.get(`http://localhost:3001/countries/id/${payload}`)
        .then((country)=>{
            dispatch({
                type: GET_ID_COUNTRIES, payload: country.data[0]
            })
        })
    }
}

export function getActivities(){
    return function(dispatch){
        axios.get('http://localhost:3001/activities')
        .then((country)=>{
            dispatch({
                type: GET_ACTIVITIES, payload: country.data
            })
        })
    }
}

export function getIdActivity(payload){
    return function(dispatch){
        
        axios.get(`http://localhost:3001/activities/id/${payload}`)
        .then((country)=>{
            dispatch({
                type: GET_ID_ACTIVITY, payload: country.data[0]
            })
        })
    }
}

export function postActivity(payload) {
    return async function () {
        try {
            const res = await axios.post(`http://localhost:3001/activities/`, payload)
            return res;
        } catch (error) {
            console.log(error)
        }
    }
}

export function deleteActivity(payload){
    return function(dispatch){
        axios.delete(`http://localhost:3001/activities/id/${payload}`)
        .then((country)=>{
            dispatch({
                type: DELETE_ACTIVITY, payload: country.data
            })
        })
    }
}

export function byPopulation(payload){
    return {
        type: FILTER_POPULATION,
        payload
    }
}

export function byAlphabet(payload){
    return {
        type: FILTER_ALPHABET,
        payload
    }
}

export function byContinent(payload){
    return {
        type: FILTER_CONTINENT,
        payload: payload
    }
}
