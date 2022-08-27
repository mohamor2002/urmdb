import React from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function Watchlist(props) {
    const {watchlist}=useContext(GlobalContext)
    return (
        <div>
            <div>
                WATCHLIST
            </div>
            {
                watchlist.map((movie)=>{
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

export default Watchlist;