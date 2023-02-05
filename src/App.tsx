import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
                    path: "about/:movieId",
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



