import React,{useContext} from 'react';
import './Rated.css'
import { GlobalContext } from '../../Context/GlobalContext';
import {Link} from 'react-router-dom'

function Rated(props) {
    const {rating}=useContext(GlobalContext)
    rating.sort((a,b)=>b.score-a.score)
    return (
        <div>
            <div>
                RATED
            </div>
            {
                rating.map((movie)=>{
                    return (
                    <Link to={`../${movie.movie.id}`}>
                        <div key={movie.movie.id}>

                            {movie.movie.poster_path ? (
                                <>
                                    <img className='movie-poster' src={`https://image.tmdb.org/t/p/w200${movie.movie.poster_path}`} alt="" />
                                </>
                                )
                                :
                                (
                                    <div className='filler-poster'></div>
                                )
                            }
                            {movie.movie.title} 
                            Rating :{movie.score}/10
                        </div>
                    </Link>
                    )
                })
            }
            <Link to ='/'>HOME</Link>
        </div>
    );
}

export default Rated;