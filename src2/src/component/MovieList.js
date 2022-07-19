import useFetch from '../hook/useFetch';
import {useState} from 'react';
export default function MovieList(props){

    const movieList = useFetch(`http://localhost:3003/movie?sectionSeq=${props.sectionSeq}`)
    return <>
        { movieList.map(movie =>(
            <div className="section-inside" key={movie.id}>
                <img src={movie.img} alt=""/>
                <h3>{movie.name}</h3>
                <div className="imdb">
                    <p>9.8</p>
                </div>
            </div>
        ))}
    </>
}