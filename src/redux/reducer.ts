import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {dataMovies} from "../utils/constants/dataMovies.constants";
import {
    AFTER, AUTHORIZATION,
    BEFORE,
    POPULARITY_DOWN,
    POPULARITY_UP,
    SORT_GENRES,
    SORT_YEAR,
    VOTE_AVERAGE_DOWN,
    VOTE_AVERAGE_UP
} from "./action";


interface IReducer {
    type: string
    payload: number[] | string
}


const defaultValue = {
    initList: dataMovies,
    currentList: dataMovies,
    genresList: []
}
const reducer = (state = dataMovies, {type, payload}: IReducer) => {
    switch (type) {
        case POPULARITY_DOWN:
            return [...state].sort((a, b) => a.popularity - b.popularity)
        case POPULARITY_UP:
            return [...state].sort((a, b) => b.popularity - a.popularity)
        case VOTE_AVERAGE_DOWN:
            return [...state].sort((a, b) => b.vote_average - a.vote_average)
        case VOTE_AVERAGE_UP:
            return [...state].sort((a, b) => a.vote_average - b.vote_average)
        case SORT_YEAR:
            return defaultValue.currentList.filter(({release_date}) => release_date.slice(0, 4) === payload)
        case SORT_GENRES:
            // TODO: in progress
            return defaultValue.currentList.filter(({genre_ids}) => genre_ids.includes(payload))
        default:
            return state
    }
}


const reducerCounter = (state = {value: 1}, {type}: IReducer) => {
    switch (type) {
        case BEFORE:
            return {state, value: state.value + 1}
        case AFTER:
            return {state, value: state.value - 1}
        default:
            return state
    }
}


const reducerAuth = (state = {}, {type, payload}: { type: string, payload: string | number }) => {
    switch (type) {
        case AUTHORIZATION:
            return {state, auth: payload}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    dataMovies: reducer,
    reducerCounter,
    reducerAuth
});


// const reducerSortYear = (state = [], {type, payload}: IReducer) => {
//     switch (type) {
//         case SORT_YEAR:
//             console.log(state.length)
//             return state.filter(({release_date}) => release_date.slice(0, 4) === payload)
//         default:
//             return state
//     }
// }


export const store = createStore(rootReducer, composeWithDevTools())




