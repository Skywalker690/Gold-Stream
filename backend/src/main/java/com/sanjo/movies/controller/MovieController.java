package com.sanjo.movies.controller;

import com.sanjo.movies.model.Movie;
import com.sanjo.movies.model.MovieWithReviews;
import com.sanjo.movies.service.MovieService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {

    private final MovieService service;

    public MovieController(MovieService service) {
        this.service = service;
    }

    @GetMapping
    public List<Movie> getAllMovies() {
        return service.getAllMovies();
    }

    @GetMapping("/{imdbId}")
    public MovieWithReviews getMovie(@PathVariable String imdbId) {
        return service.getMovieWithReviews(imdbId);
    }
}
