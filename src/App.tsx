import React, {useState} from "react";
import { createBrowserRouter, RouterProvider , Routes , Route} from 'react-router-dom';
import {HomePage} from "./pages/homePage/HomePage";
import {AboutMovie} from "./pages/aboutMovie/aboutMovie"
import {Header} from "./components/header/Header";
import './App.css';

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Header/>,
            children: [
                {
                    index: true,
                    element: <HomePage/>,
                },
                {
                    path: "about",
                    element: <AboutMovie/>
                }
            ],
        },
    ]);
    return (
        <div className='App'>
               <RouterProvider router={router}/>


        </div>
    );
}

export default App;



