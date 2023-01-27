import React, {createContext, FC, useContext, useState} from 'react';
import {useSelector} from "react-redux";
import {Header} from "../../components/header/Header";
import {SideBar} from "../../components/SideBar/SideBar";
import {Content} from "../../components/Content/Content";
import style from "./HomePage.module.css"
import {pageNumber} from "../../utils/constants/typeSort.constants";
import {FormAuth} from "../../components/formAuth/FormAuth";

export  const contextOpenModal = createContext();


function HomePage() {
    const [openModal, setOpenModal] = useState(false);


    return (
        <div>
            <Header setOpenModal={setOpenModal} openModal={openModal}/>
            <div className={style.container}>
                {!openModal && <SideBar/>}
                {!openModal &&
                    <contextOpenModal.Provider value={setOpenModal}>
                        <Content/>
                    </contextOpenModal.Provider>
                }
                {openModal && <FormAuth setOpenModal={setOpenModal} openModal={openModal}/>}

            </div>
        </div>
    );
}


export {HomePage};
