import React from 'react';
import {useSelector} from "react-redux";
import styles from './Content.module.css';
import MovieCard from "./movieCard/MovieCard";
import {IDataMovies} from "../../utils/constants/data-films.interface";
import {pageNumber} from "../../utils/constants/type-sort";


function Content() {
    const dataFilms = useSelector((state: { dataMovies: [] }) => state.dataMovies)
    const counter = useSelector((state: { reducerCounter: { value: number } }) => state.reducerCounter)

    const lastIndex = counter.value * pageNumber.countMovie
    const firstIndex = lastIndex - pageNumber.countMovie
    const sliceDataFilms = dataFilms.slice(firstIndex, lastIndex)


    return (
        <div className={styles.Content}>
            {sliceDataFilms.map(({id, title, vote_average, poster_path, backdrop_path}: IDataMovies) => <MovieCard
                key={id}
                backdrop_path={backdrop_path}
                poster_path={poster_path}
                title={title}
                vote_average={vote_average}
                id={id}
            />)}
        </div>
    )
}

export {Content};
