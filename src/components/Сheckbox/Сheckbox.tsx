import React, {FC} from 'react';
import styles from './Сheckbox.module.css';

interface СheckboxProps {
    name : string
}

const Сheckbox: FC<СheckboxProps> = ({name}) => (
    <div>
        <input type="checkbox" value={name}/>
        <label htmlFor="horns">{name}</label>
    </div>
);

export default Сheckbox;
