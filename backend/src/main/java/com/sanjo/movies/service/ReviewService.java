package com.sanjo.movies.service;

import com.sanjo.movies.model.Movie;
import com.sanjo.movies.model.Review;
import com.sanjo.movies.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository repository;
    private final MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String imdbId) {

        Review review = repository.insert(new Review(reviewBody));
        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds", review.getId()))
                .first();
        return review;
    }
}
