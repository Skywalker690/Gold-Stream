package com.sanjo.movies.service;

import com.sanjo.movies.model.Movie;
import com.sanjo.movies.repository.MovieRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    private final MovieRepository repository;


    public List<Movie> getAllMovies(){
        return repository.findAll();
    }

    public Optional<Movie> getMovie(String imdbId) {
        return repository.findMovieByImdbId(imdbId);
    }








    private MovieService(MovieRepository repository) {
        this.repository = repository;
    }


}
