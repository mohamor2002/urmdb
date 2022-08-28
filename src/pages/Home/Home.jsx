import React , { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import ResultCard from '../../components/ResultCard';
import { GlobalContext } from '../../Context/GlobalContext';
import { useEffect } from 'react';

function Home(props) {
    const [movie,setMovie] = useState('')
    const {updateResult,result,rating}=useContext(GlobalContext)
    const handleOnChange= e =>{
        e.preventDefault()
        setMovie(e.target.value)
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=67e0411a4fb8337f83cd3c2522b4de52&language=en-US&include_adult=false&query=${e.target.value}`
            ).then((res)=>res.json())
            .then((data)=>{
                if (!data.errors){
                    updateResult(data.results)
                }
                else {
                    updateResult([])
                    
                }
            })
    }


    return (
        <div className='home-container'>
            <div className="search-wrapper">
            <input className='search' type="text" value={movie} onChange={handleOnChange} placeholder='Search' />
            </div>
            <button><Link to={'/watchlist'}>Watchlist</Link></button>
            <button><Link to={'/watched'}>Watched</Link></button>
            <button><Link to={'/rated'}>Rated</Link></button>
                        { (result.length>0 && (
                <ul>
                    {
                        result.map((r)=>{
                            return <li key={r.id}>
                                <ResultCard movie={r} />
                            </li>
                        })
                    }
                </ul>
            )
                
            )
            }
        </div>
    );
}

export default Home;