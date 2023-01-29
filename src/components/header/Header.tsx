import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Link, Outlet} from "react-router-dom";

import styles from './Header.module.css';
import {userAuthorization} from "../../redux/dispatch";

interface IHeader {
    openModal: boolean
    setOpenModal: (value: boolean) => void
}

function Header() {
    const [openModal, setOpenModal] = useState(false);
    const isValidAuth = useSelector(state => state.reducerAuth)


    return (
        <div>
            <div className={styles.Header}>
                <button type="button" className={styles.Home}>Home</button>

                <button onClick={() => {
                    setOpenModal(true)
                    userAuthorization(false)
                    if (isValidAuth.auth) {
                        localStorage.clear("token")
                    }
                }} type="button" className={styles.Login}>{!isValidAuth.auth ? "Войти" : "Выйти"}</button>

            </div>
            <Outlet context={[openModal, setOpenModal]}/>
        </div>
    )
}

export {Header};
