import React, {FC, useContext} from 'react';
import {useSelector} from "react-redux";
import styles from './MovieCard.module.css';
import {IDataMovies} from "../../../utils/constants/dataFilms.interface";
import {contextOpenModal} from "../../../pages/homePage/HomePage";

interface MovieCardProps {
    title: string
    vote_average: number
    poster_path: string
    backdrop_path: string | null

}


const MovieCard: FC<MovieCardProps> = ({title, poster_path, backdrop_path, vote_average,}) => {
    const setOpenModal = useContext(contextOpenModal);
    const isValidAuth = useSelector(state => state.reducerAuth)

    const imagePath = poster_path || backdrop_path;

    const handleClick = () => {
        if (!isValidAuth.auth) {
            setOpenModal(true)
        }
        // TODO: in progress
        console.log(title)
    }

    return (
        <div className={styles.MovieCard} style={{
            background: `url("https://image.tmdb.org/t/p/w500/${imagePath}")`,
            backgroundSize: "contain",
            width: "257px",
            height: "388px",
        }}>

            <div className={styles.Content}>


                <div className={styles.CardTop}>
                    <div className={styles.Rating}>
                        <p className={styles.Icon}>{vote_average}</p>
                    </div>
                    <div className={styles.CardIcon}>
                        <button onClick={handleClick} type="button">
                            <img className={styles.Icon}
                                 src="src/img/icon/5349757_award_bookmark_favorite_prize_rating_icon.svg"
                                 alt="star"/>
                        </button>
                        <button onClick={handleClick} type="button">
                            <img className={styles.Icon} src="src/img/icon/351987_bookmark_icon.svg"
                                 alt="save"/>
                        </button>

                    </div>
                </div>

                <div className={styles.Container}>
                    <div className={styles.Title}>
                        <p className={styles.Text}>{title}</p>
                    </div>

                    <footer>
                        <button type="button" className={styles.More}>Подробнее</button>
                    </footer>
                </div>


            </div>
        </div>
    );
};

export default MovieCard;




