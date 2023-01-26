import React, {useEffect, useState} from 'react';
import styles from './SelectForm.module.css';
import {POPULARITY_DOWN, POPULARITY_UP, VOTE_AVERAGE_DOWN, VOTE_AVERAGE_UP} from "../../redux/action";
import {
    sortMoviesYear,
    sortPopularityDown,
    sortPopularityUp,
    sortVoteAverageDown,
    sortVoteAverageUp
} from '../../redux/dispatch';



function SelectForm({sortPopularity}) {
    const [typeSort, setTypeSort] = useState(POPULARITY_DOWN);
    const years = ["2020", "2019", "2018", "2017"];

    const typeSortMovies = () => {
        switch (typeSort) {
            case (POPULARITY_DOWN):
                return sortPopularityDown(typeSort);
            case (POPULARITY_UP):
                return sortPopularityUp(typeSort);
            case (VOTE_AVERAGE_DOWN):
                return sortVoteAverageDown(typeSort);
            case (VOTE_AVERAGE_UP):
                return sortVoteAverageUp(typeSort);
            default:
                return null
        }
    };

    const yearSort = () => {
        if (years.includes(typeSort)) {
            return sortMoviesYear(typeSort)
        }
        return years;
    };

    useEffect(() => {
        typeSortMovies();
        yearSort();
    }, [typeSort])


    return (
        <select onChange={(event) => {
            setTypeSort(event.target.value)
        }
        } className={styles.SelectForm} name="city" id="sort-film">
            {sortPopularity.map(({id, popularity, value}) => <option key={id} value={value}>{popularity}</option>)}
        </select>
    );
}

export {SelectForm};
