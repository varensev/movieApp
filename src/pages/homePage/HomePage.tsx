import React, {createContext} from 'react';

import {useOutletContext} from "react-router-dom";
import {SideBar} from "../../components/SideBar/SideBar";
import {Content} from "../../components/Content/Content";
import style from "./HomePage.module.css"

import {FormAuth} from "../../components/formAuth/FormAuth";

export const contextOpenModal = createContext();

interface IHomePage {
    setOpenModal: (value: boolean) => void
    openModal: boolean

}

function HomePage() {
    const [openModal, setOpenModal] = useOutletContext();

    return (


        <div className={style.container}>
            {!openModal && <SideBar setOpenModal={setOpenModal}/>}
            {!openModal &&
                <contextOpenModal.Provider value={setOpenModal}>
                    <Content/>
                </contextOpenModal.Provider>
            }
            {openModal && <FormAuth setOpenModal={setOpenModal} openModal={openModal}/>}

        </div>

    );
}


export {HomePage};
