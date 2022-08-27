import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { Link } from 'react-router-dom';

function Watched(props) {
    const {watched}=useContext(GlobalContext)
    return (
        <div>
            <div>
                WATCHED
            </div>
            {
                watched.map((movie)=>{
                    return (
                    <div>

                        {movie.poster_path ? (
                            <>
                                <img className='movie-poster' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
                            </>
                            )
                            :
                            (
                                <div className='filler-poster'></div>
                            )
                        }
                        {movie.title}
                    </div>
                    )
                })
            }
            <Link to ='/'>HOME</Link>
        </div>
    );
}

export default Watched;