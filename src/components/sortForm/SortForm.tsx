import React, { FC } from 'react';
import styles from './SortForm.module.css';
import Label from "../label/Label";

interface SortFormProps {}

const SortForm: FC<SortFormProps> = () => (
    <form className={styles.Sort}>
        <Label title="Сортировка по:" htmlFor="sort-film"/>
    </form>
);

export default SortForm;
