import React, {FC} from 'react';


import styles from './Content.module.css';
import MovieCard from "./MovieCard/MovieCard";
import {dataMovies} from "../../utils/constants/dataMovies.constants";

// import {IDataMovies} from "../../utils/constants/dataMovies.constants";

interface ContentProps {

}


const Content: FC<ContentProps> = () => (
    <div className={styles.Content}>
        {dataMovies.map(({title, id}) => <MovieCard key={id} title={title}/>)}
    </div>
);

export default Content;
