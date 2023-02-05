import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import style from "./about-movie.module.css"


// TODO : in progress
const defaultAboutMovie = {
    poster_path: undefined,
    backdrop_path: undefined,
    title: undefined,
    vote_average: undefined,
    overview: undefined,
    release_date: undefined,
    original_language: undefined,
}

function AboutMovie() {
    const {movieId} = useParams()
    const [aboutMovie, setAboutMovie] = useState(defaultAboutMovie)
    const dataFilms = useSelector((state: { dataMovies: [] }) => state.dataMovies)

    useEffect(() => {
        const data = dataFilms.find((item: { id: number }) => `${item.id}` === movieId)
        // TODO : in progress data -> TS2345: Argument of type 'undefined'
        setAboutMovie(data)
    }, [movieId])

    const imagePath = aboutMovie.poster_path || aboutMovie.backdrop_path;

    return (
        <div>
            <div className={style.content}>
                <div className={style.contentImg}>
                    <img src={`https://image.tmdb.org/t/p/w500/${imagePath}`} alt=""/>
                </div>
                <div className={style.contentTitle}>
                    <h1 className={style.title}>{aboutMovie.title}</h1>
                    <h2>Рейтинг {aboutMovie.vote_average}</h2>
                    <h2>{aboutMovie.overview}</h2>
                </div>
            </div>

            <div className={style.description}>
                <div className={style.links}>
                    <button type="button">Детали</button>
                    <button type="button">Видео</button>
                    <button type="button">Актеры</button>
                </div>

                <div className={style.descriptionContent}>
                    <p className={style.descriptionTitle}>Дата релиза</p> <p>{aboutMovie.release_date}</p>
                </div>

                <div className={style.descriptionContent}>
                    <p className={style.descriptionTitle}>Язык оригинала</p> <p>{aboutMovie.original_language}</p>
                </div>

            </div>
        </div>
    );
}

export {AboutMovie};
