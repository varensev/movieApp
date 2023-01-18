import React, {FC} from 'react';
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import Content from "../../components/Content/Content";


interface HomePageProps {
}

const HomePage: FC<HomePageProps> = () => (
    <div>
        <Header/>
        <div style={{display: "flex" , height: "calc(100vh - 130px)"}}>
            <SideBar/>
            <Content/>
        </div>
    </div>
);

export default HomePage;
