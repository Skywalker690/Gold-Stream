package com.sanjo.movies.service;

import com.sanjo.movies.model.Movie;
import com.sanjo.movies.model.MovieWithReviews;
import com.sanjo.movies.repository.MovieRepository;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.LookupOperation;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private final MovieRepository movieRepository;
    private final MongoTemplate mongoTemplate;

    public MovieService(MovieRepository movieRepository, MongoTemplate mongoTemplate) {
        this.movieRepository = movieRepository;
        this.mongoTemplate = mongoTemplate;
    }

    // Get all movies (no reviews embedded)
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    // Get single movie with reviews embedded using $lookup
    public MovieWithReviews getMovieWithReviews(String imdbId) {

        MatchOperation matchStage = Aggregation.match(Criteria.where("imdbId").is(imdbId));

        LookupOperation lookupStage = Aggregation.lookup(
                "reviews",        // From 'reviews' collection
                "reviewIds",      // Local field in 'movies' collection
                "_id",            // Foreign field in 'reviews' collection
                "reviewObjects"   // As: list of matched reviews in result
        );

        Aggregation aggregation = Aggregation.newAggregation(matchStage, lookupStage);

        AggregationResults<MovieWithReviews> output = mongoTemplate.aggregate(
                aggregation,
                "movies",               // Collection name
                MovieWithReviews.class  // Output class
        );

        return output.getUniqueMappedResult();
    }
}
