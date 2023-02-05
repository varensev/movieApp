import React, {FC} from 'react';
import {useSelector} from "react-redux";
import styles from './SideBar.module.css';
import {Pagination} from './pagination/Pagination';
import MyCheckbox from "../checkbox/Сheckbox";
import dataCheckbox from "../../utils/constants/data-checkbox.json";
import {Sort} from "../sort/Sort"
import {sortFavorites, sortMoviesGenres, sortWatchLater} from "../../redux/dispatch";
import {getStorage, keyLocalStorage} from "../../utils/local-storage/localstorage";

interface ICheckbox {
    id: number
    name: string

}

interface ISideBar {
    setOpenModal: (value: boolean) => void
}

function SideBar({setOpenModal}:ISideBar) {
    const isValidAuth = useSelector(state => state.reducerAuth)

    const handleClickFavorites = () => {
        if (!isValidAuth.auth) {
            setOpenModal(true)
        }
        const movies = getStorage(keyLocalStorage.favorites)
        if (movies) {
            sortFavorites(movies)
        }
    }

    const handleClickWatchLater = () => {
        if (!isValidAuth.auth) {
            setOpenModal(true)
        }
        const movies = getStorage(keyLocalStorage.watchLater)
        if (movies) {
            sortWatchLater(movies)
        }
    }

    return (
        <div className={styles.ListOfFilms}>
            <p className={styles.Title}>Фильтры:</p>
            <button type="button" className={styles.Reset}>Сбросить все фильтры</button>

            <div className={styles.favorites}>
                <button onClick={handleClickFavorites} type="button">Избранные</button>
                <button onClick={handleClickWatchLater} type="button">Посмотреть позже</button>
            </div>

            <Sort/>

            <fieldset>
                {dataCheckbox.map(({id, name}: ICheckbox) => <MyCheckbox key={id} id={id} name={name}/>)}
            </fieldset>

            <Pagination/>
        </div>
    );
}

export {SideBar};


