import React from 'react';
import './Movie.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { useContext } from 'react';
import {useParams,useNavigate,Link} from 'react-router-dom'

function Movie(props) {
    let navigate=useNavigate()
    const {movieId} = useParams()
    const {updateRating,rating}=useContext(GlobalContext)
    const [movie,setMovie]=useState({})
    const movieRating=rating.find(r=>r.id==movieId)
    const rated=movieRating?true:false
    const [rat,setRat]=useState(rated?movieRating.score:0)
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=67e0411a4fb8337f83cd3c2522b4de52&language=en-US`)
        .then(res=>res.json()).then(data=>{
        if (data.status_code===34)
        {
            return navigate("/")
        }
        else {
            setMovie(data)
        }
    })
    },[])
    const handleChange=(e)=>{
        e.preventDefault()
        setRat(e.target.value)
        if (e.target.value>10){
            setRat(10)
        }
        else if(e.target.value<0){
            setRat(0)
        }

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        updateRating({id:movie.id,score:rat})

        console.log('submitted')
    }

    return (
        <div className='movie-container'>
            <div className="movie-top-left">
                {movie.poster_path ?
                <img className='poster' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
                :
                <div className="filler"></div>
                }
                <div className='title'>
                    {movie.title}
                </div>
            </div>
            <div className="movie-top-right">
                <div className="movie-overview">
                    {movie.overview}
                </div>
                <div className="movie-rating">
                    Rating:
                    <form action="" onSubmit={(event)=>handleSubmit(event)}>
                        <input type="number" value={rat} onChange={(event)=>handleChange(event)} />
                        <button type='submit'></button>
                    </form>
                </div>
            </div>
            <Link to='/'>HOME</Link>

        </div>
    );
}

export default Movie; 