import React, {FC} from 'react';
import styles from './Label.module.css';

interface ILabelProps {
    title: string,
    htmlFor: string
}


function Label({title, htmlFor}:ILabelProps) {
    return <label className={styles.Label} htmlFor={htmlFor}>
        {title}
    </label>;
}

export {Label};
