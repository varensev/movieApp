import React, { FC } from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {}

const Pagination: FC<PaginationProps> = () => (
  <div className={styles.Pagination}>
    <div className={styles.Btn}>
        <button className={styles.Before}>Назад</button>
        <button className={styles.After} >Вперед</button>
    </div>
      <p className={styles.PagaeNumber}>1 of 1455</p>
  </div>
);

export default Pagination;
