import React, {FC} from 'react';
import styles from './SideBar.module.css';
import {Pagination} from './pagination/Pagination';
import MyCheckbox from "../checkbox/Сheckbox";
import dataCheckbox from "../../utils/constants/dataCheckbox.json";
import {Sort} from "../sort/Sort"
import {sortMoviesGenres} from "../../redux/dispatch";

interface ICheckbox {
    id: number
    name: string

}


function SideBar() {
    return (
        <div className={styles.ListOfFilms}>
            <p className={styles.Title}>Фильтры:</p>
            <button type="button" className={styles.Reset}>Сбросить все фильтры</button>
            <Sort/>

            <fieldset>
                {dataCheckbox.map(({id, name}: ICheckbox) => <MyCheckbox  key={id} id={id} name={name}/>)}
            </fieldset>

            <Pagination/>
        </div>
    );
}

export {SideBar};


