import React, {FC, useEffect, useState} from 'react';
import styles from './Сheckbox.module.css';
import {sortMoviesGenres} from "../../redux/dispatch";

interface ICheckbox {
    name: string
    id: number
}

function MyCheckbox({name, id}: ICheckbox) {
    const [checked, setChecked] = useState([])

    return (
        <div>
            <input onChange={() => sortMoviesGenres(id)} type="checkbox" value={name} />
            <label htmlFor="horns">{id}</label>
        </div>
    );
}

export default MyCheckbox;
