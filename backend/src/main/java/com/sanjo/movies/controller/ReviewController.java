package com.sanjo.movies.controller;

import com.sanjo.movies.model.Review;
import com.sanjo.movies.service.ReviewService;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {
    //Dependency
    private final ReviewService service;
    //Injection
    public ReviewController(ReviewService service) {
        this.service = service;
    }

    @PostMapping
    public Review createReview(@RequestBody Map<String,String> payload) {
        return service.createReview(
                payload.get("reviewBody"),
                payload.get("imdbId")
        );
    }
}