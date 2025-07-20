package com.sanjo.movies.controller;

import com.sanjo.movies.model.Movie;
import com.sanjo.movies.service.MovieService;
import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {

    private final MovieService service;

    public MovieController(MovieService service) {
        this.service = service;
    }

    @GetMapping
    public List<Movie>getAllMovies(){
        return service.getAllMovies();
    }

    @GetMapping("/{imdbId}")
    public Optional<Movie> getMovie(@PathVariable String imdbId ){
        return service.getMovie(imdbId);
    }
}
