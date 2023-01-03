import { GET_COUNTRIES, GET_NAME_COUNTRYS, GET_ID_COUNTRIES, GET_ACTIVITIES, GET_ID_ACTIVITY, POST_ACTIVITY, DELETE_ACTIVITY, FILTER_POPULATION, FILTER_ALPHABET, FILTER_CONTINENT } from "./actions.js";

const initialState = {
    country: [],
    countryId:[],
    countryInfo:[],
    activity:[],
    activities:[],
    activityId:[],
    Filter: [], //transitoria
    countryFilter: [],//salida
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                country: action.payload,
                Filter: action.payload
            };

        case GET_NAME_COUNTRYS:
            return{
                ...state, 
                countryFilter: action.payload,
                Filter: action.payload
            };
        case GET_ID_COUNTRIES:
            return{
                ...state,
                countryId: action.payload,
                activity: action.payload.activities 
            };    
        case GET_ACTIVITIES:
            return{
                ...state,
                activities: action.payload,
            }
        case GET_ID_ACTIVITY:
            return{
                ...state,
                activityId: action.payload,
                countryInfo: action.payload.countries
            }
        case POST_ACTIVITY:
            return{
                ...state,
                country: action.payload,
            };
        case DELETE_ACTIVITY:
            return{
                ...state,
                activityId: action.payload,
                countryInfo: action.payload.countries
            }

        /*------------ORDERS---------- */
        case FILTER_CONTINENT:
            const filterC = []
            const countries = state.country
            for(let i=0; i < countries.length; i++){
                if(action.payload === countries[i].region){
                    filterC.push(countries[i])
                }
            }
            return {
                ...state,
                countryFilter: filterC,
                Filter: filterC
            }
        /* ----------FILTERS-----------*/
        case FILTER_POPULATION:
            const filterP = state.Filter.length === 0 ? state.country : state.Filter 
                if((action.payload) === 'Max'){
                    filterP.sort(function (a, b) {
                        if (a.population > b.population) {
                            return -1;
                        }
                        if (b.population > a.population) {
                            return 1;
                        }
                        return 0;
                    })  
                }
                if((action.payload) === 'Min' ){
                    filterP.sort(function (a, b) {
                        if (a.population > b.population) {
                            return 1;
                        }
                        if (b.population > a.population) {
                            return -1;
                        }
                        return 0;
                    }) 
                } 
            return {
                ...state,
                countryFilter: filterP,
                Filter: filterP
            }

        case FILTER_ALPHABET:
            let filterA = state.Filter.length === 0 ? state.country : state.Filter 

                if((action.payload)==='Desendente'){
                    filterA.sort(function(a, b){
                        if (a.name > b.name) {
                            return -1;
                        }
                        if(b.name > a.name){
                            return 1;
                        }
                        return 0;
                    })

                }
                if((action.payload)==='Ascendente'){
                    filterA.sort(function(a, b){
                        if (a.name > b.name) {
                            return 1;
                        }
                        if(b.name > a.name){
                            return -1;
                        }
                        return 0;
                    }) 
                }
            return {
                ...state,
                countryFilter: filterA,
                Filter: filterA
            }

        default:
            return{...state};  
    }

    
}

export default reducer;