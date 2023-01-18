import React, {FC} from 'react';
import Header from "../../components/Header/Header";
import ListOfFimls from "../../components/ListOfFimls/ListOfFimls";
import Content from "../../components/Content/Content";


interface HomePageProps {
}

const HomePage: FC<HomePageProps> = () => (
    <div>
        <Header/>
        <div style={{display: "flex" , height: "calc(100vh - 130px)"}}>
            <ListOfFimls/>
            <Content/>
        </div>
    </div>
);

export default HomePage;
