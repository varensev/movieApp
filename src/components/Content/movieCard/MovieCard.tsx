import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';
import { contextOpenModal } from '../../../pages/homePage/HomePage';
import { keyLocalStorage, setStorage } from '../../../utils/local-storage/localstorage';

interface MovieCardProps {
    title: string;
    vote_average: number;
    poster_path: string;
    backdrop_path: string | null;
    id: number;

}

interface ISetModal {
    setOpenModal: (value: boolean) => boolean;
}


function MovieCard({ title, poster_path, backdrop_path, vote_average, id }: MovieCardProps) {
    const setOpenModal = useContext(contextOpenModal);
    const isValidAuth = useSelector((state: { reducerAuth: { auth: string } }) => state.reducerAuth);

    const imagePath = poster_path || backdrop_path;


    const handleClickSaveFavorites = () => {
        if (!isValidAuth.auth) {
            setOpenModal(true);
            return;
        }
        // TODO: in progress
        setStorage(keyLocalStorage.favorites, id);
    };

    const handleClickSaveWatchLater = () => {
        if (!isValidAuth.auth) {
            setOpenModal(true);
            return;
        }
        // TODO: in progress
        setStorage(keyLocalStorage.watchLater, id);
    };

    return (
        <div className={styles.MovieCard} style={{
            background: `url("https://image.tmdb.org/t/p/w500/${imagePath}")`,
            backgroundSize: 'contain',
            width: '257px',
            height: '388px',
        }}>

            <div className={styles.Content}>


                <div className={styles.CardTop}>
                    <div className={styles.Rating}>
                        <p className={styles.Icon}>{vote_average}</p>
                    </div>
                    <div className={styles.CardIcon}>
                        <button onClick={handleClickSaveFavorites} type='button'>
                            <img className={styles.Icon}
                                 src='src/img/icon/5349757_award_bookmark_favorite_prize_rating_icon.svg'
                                 alt='star' />
                        </button>
                        <button onClick={handleClickSaveWatchLater} type='button'>
                            <img className={styles.Icon} src='src/img/icon/351987_bookmark_icon.svg'
                                 alt='save' />
                        </button>

                    </div>
                </div>

                <div className={styles.Container}>
                    <div className={styles.Title}>
                        <p className={styles.Text}>{title}</p>
                    </div>

                    <footer>
                        <Link to={`about/${id}`} className={styles.More}>Подробнее</Link>
                    </footer>
                </div>


            </div>
        </div>
    );
}

export default MovieCard;




