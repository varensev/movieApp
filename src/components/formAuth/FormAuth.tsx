import React, {useState} from 'react';
import style from "./FormAuth.module.css"
import {tokenAuth} from "../../utils/constants/tokenAuth";
import {userAuthorization} from "../../redux/dispatch";

interface IFormAuth {
    openModal: boolean
    setOpenModal: (value: boolean) => void
}

function FormAuth({setOpenModal}: IFormAuth) {
    const [valueName, setValueName] = useState<string>("")
    const [valuePassword, setPassword] = useState<string>("")
    const [isValid, setIsValid] = useState(false)

    const formToken = {
        login: valueName,
        password: valuePassword
    }

    const helperAuth = () => {
        if (JSON.stringify(formToken) === JSON.stringify(tokenAuth)) {
            return true;
        }
        setIsValid(true)
        return false;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (helperAuth()) {
            userAuthorization(formToken)
            setOpenModal(false)
        }
    }

    const handleClickExit = () => {
        setOpenModal(false)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.exitTop}>
                    <button type="button" onClick={handleClickExit} className={style.exit}><img
                        src="src/img/icon/exit.svg" alt="x"/></button>
                </div>
                <div className={style.container}>
                    <h1 className={style.title}>Авторизация</h1>

                    <form onSubmit={handleSubmit} className={style.formAuth}>

                        <input value={valueName} onChange={(event) => setValueName(event.target.value)} type="text"
                               placeholder="Логин"/>
                        {isValid && <p className={style.isValid}>Неверный логин</p>}

                        <input value={valuePassword} onChange={(event) => setPassword(event.target.value)}
                               type="text" placeholder="Пароль"/>
                        {isValid && <p className={style.isValid}>Неверный пароль</p>}

                        <button type="submit">Войти</button>

                    </form>

                </div>
            </div>
        </div>
    );
}

export {FormAuth};
