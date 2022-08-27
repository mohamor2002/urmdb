import React,{useContext} from 'react';
import './ResultCard.css'
import { Link } from 'react-router-dom';
import {GlobalContext} from './../Context/GlobalContext'

function ResultCard({movie}) {

  const {addMovieToWatchlist,addMovieToWatched,watchlist,watched,rating}=useContext(GlobalContext)
  const rated=rating.find(m=>m.id==movie.id)
  console.log(rated)
  const watchlistDisabled= watchlist.find(mv=>mv.id===movie.id)?true:false;
  const watchedDisabled= watched.find(mv=>mv.id===movie.id)?true:false;

    return (
        <div className='movie-card-wrapper'>
            {movie.poster_path ? (
              <>
              <img className='movie-poster' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
              </>
              ):
              (
                <div className='filler-poster'></div>
              )
            }
            <div>
              <Link to={`/${movie.id}`}>
                <header className='movie-title'>{movie.title}</header>
              </Link>
              <span>
                <button onClick={()=>addMovieToWatchlist(movie)} disabled={watchlistDisabled}>Add To Watchlist</button>
                <button onClick={()=>addMovieToWatched(movie)} disabled={watchedDisabled}>Add To Watched</button>
                <div>{rated?rated.score:'not rated'}</div>
              </span>
            </div>
        </div>
    );
}

export default ResultCard;