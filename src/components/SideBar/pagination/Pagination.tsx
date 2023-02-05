import React, {useContext} from 'react';
import {useSelector} from "react-redux";
import styles from './Pagination.module.css';
import {pageNumber} from "../../../utils/constants/type-sort";
import {setAfterPage, setBeforePage} from "../../../redux/dispatch";


function Pagination() {
    const dataFilms = useSelector(state => state.dataMovies)
    const countPage = useSelector(state => state.reducerCounter.value)

    const handleClickAfter = () => {
        setBeforePage(pageNumber.currentPage)
    }

    const handleClickBefore = () => {
        setAfterPage(pageNumber.currentPage)
    }

    return (
        <div className={styles.Pagination}>
            <div className={styles.Btn}>
                <button type="button" onClick={handleClickBefore} className={styles.Before}>Назад</button>
                <button type="button" onClick={handleClickAfter} className={styles.After}>Вперед</button>
            </div>
            <p className={styles.PageNumber}>{countPage} of {Math.ceil(dataFilms.length / 6)}</p>
        </div>
    );
}

export {Pagination};
