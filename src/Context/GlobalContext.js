import { createContext,useReducer } from "react";
import AppReducer from './AppReducer'
import { useEffect } from "react";

const initialState= {
    result:[],
    watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],
    watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[],
    rating:localStorage.getItem("rated")?JSON.parse(localStorage.getItem("rated")):[],
}
export const GlobalContext = createContext(initialState)



export const GlobalProvider = (props)=>{


    const [state,dispatch] = useReducer(AppReducer,initialState)
    useEffect(()=>{
        localStorage.setItem("watchlist",JSON.stringify(state.watchlist))
        localStorage.setItem("watched",JSON.stringify(state.watched))
        localStorage.setItem("rated",JSON.stringify(state.rating))
    },[state.watchlist,state.watched,state.rating])
    const addMovieToWatchlist = (movie)=>{
        dispatch({type:"ADD_MOVIE_WATCHLIST",payload: movie})
    }
    const addMovieToWatched = (movie)=>{
        dispatch({type:"ADD_MOVIE_WATCHED",payload: movie})
    }
    const updateResult=(result)=>{
        dispatch({type:"UPDATE_RESULT",payload:result})
    }
    const updateRating=(object)=>{
        dispatch({type:"UPDATE_RATING",payload:object})
    }



return (
    <GlobalContext.Provider value={{
        watchlist:state.watchlist,
        watched:state.watched,
        result:state.result,
        rating:state.rating,
        addMovieToWatchlist,
        addMovieToWatched,
        updateResult,
        updateRating,
    }}>
        {props.children}
    </GlobalContext.Provider>
)
}