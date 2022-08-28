export default (state,action) =>{
    switch (action.type){
        case "ADD_MOVIE_WATCHLIST":
            return {
                ...state ,
                watchlist:[action.payload,...state.watchlist]
            }
        case "ADD_MOVIE_WATCHED":
            return{
                ...state,
                watched:[action.payload,...state.watched]
            }
        case "UPDATE_RESULT" :
            return{
                ...state,
                result:[...action.payload]
            }
        case "UPDATE_RATING":
            return{
                ...state,
                rating:[action.payload,...state.rating.filter(mov=>mov.movie.id!=action.payload.movie.id)]
            }    
        
        default:
            return state;
    }
}