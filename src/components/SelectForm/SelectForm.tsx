import React, {FC} from 'react';
import styles from './SelectForm.module.css';

interface SelectFormProps {
}

const SelectForm: FC<SelectFormProps> = () => (
    <select className={styles.SelectForm} name="city" id="sort-film">
        <option value="1">Популярные</option>
    </select>
);

export default SelectForm;
