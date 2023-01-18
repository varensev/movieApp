import React, {FC} from 'react';
import styles from './Content.module.css';
import MovieCard from "./MovieCard/MovieCard";

interface ContentProps {
}

const Content: FC<ContentProps> = () => (
    <div className={styles.Content}>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
    </div>
);

export default Content;
