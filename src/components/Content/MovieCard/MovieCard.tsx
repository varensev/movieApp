import React, {FC} from 'react';
import styles from './MovieCard.module.css';

interface MovieCardProps {
    title: string
}

const MovieCard: FC<MovieCardProps> = ({title}) => (
    <div className={styles.MovieCard}>

        <div className={styles.Content}>

            <div className={styles.CardTop}>
                <div className={styles.Rating}>
                    <p className={styles.Icon}>10</p>
                </div>
                <div className={styles.CardIcon}>
                    <button>
                        <img className={styles.Icon}
                             src="src/img/icon/5349757_award_bookmark_favorite_prize_rating_icon.svg"
                             alt="star"/>
                    </button>
                    <button>
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
                    <button className={styles.More}>Подробнее</button>
                </footer>
            </div>


        </div>
    </div>
);

export default MovieCard;




