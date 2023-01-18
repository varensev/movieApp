import React, {FC} from 'react';
import styles from './Label.module.css';

interface ILabelProps {
    title: string,
    htmlFor: string
}


const Label: FC<ILabelProps> = ({title,htmlFor}) => (
    <label className={styles.Label} htmlFor={htmlFor}>
        {title}
    </label>
);

export default Label;
