import React, { useEffect, useState } from 'react';
import axios from './api/axiosConfig'; // Updated import path if your file is named axios.js

function App() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getMovies = async () => {
        try {
            const response = await axios.get("/movies"); // Now correctly mapped to /api/v1/movies via baseURL
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

    if (loading) return <p>Loading movies...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="App">
            <h1>Movie List</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.imdbId}>
                        {movie.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
