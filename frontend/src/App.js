import React, { useEffect, useState } from 'react';
import axios from './api/axiosConfig'; 
import Layout from './components/Layout';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home/Home';
import './App.css'


function App() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getMovies = async () => {
        try {
            const response = await axios.get("/movies"); 
            setMovies(response.data);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch movies.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);


    return (
        <div className="App">

            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<Home movies={movies}/>}></Route>

                </Route>
            </Routes>

            
        </div>
    );
}

export default App;
