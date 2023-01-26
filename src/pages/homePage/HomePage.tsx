import React, {createContext, FC, useContext, useState} from 'react';
import {useSelector} from "react-redux";
import {Header} from "../../components/header/Header";
import {SideBar} from "../../components/SideBar/SideBar";
import {Content} from "../../components/Content/Content";
import style from "./HomePage.module.css"
import {pageNumber} from "../../utils/constants/typeSort.constants";



function HomePage() {


    return (
        <div>
            <Header/>
            <div className={style.container}>
                <SideBar/>
                <Content/>
            </div>
        </div>
    );
}


export {HomePage};
