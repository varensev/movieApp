import React from 'react';
import {useSelector} from "react-redux";
import styles from './Header.module.css';
import {userAuthorization} from "../../redux/dispatch";

interface IHeader{
    openModal: boolean
    setOpenModal: (value: boolean)=> void
}
function Header({setOpenModal, openModal}:IHeader) {
    const isValidAuth = useSelector(state=> state.reducerAuth)


    return <div className={styles.Header}>
        <button type="button" className={styles.Home}>Home</button>
        <button onClick={() => {
            setOpenModal(true)
            userAuthorization(false)
        }} type="button" className={styles.Login}>{!isValidAuth.auth ? "Войти" : "Выйти"}</button>
    </div>
}

export {Header};
