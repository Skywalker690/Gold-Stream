package com.sanjo.movies.service;

import com.sanjo.movies.model.Movie;
import com.sanjo.movies.model.MovieWithReviews;
import com.sanjo.movies.repository.MovieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.LookupOperation;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieRepository movieRepository;
    private final MongoTemplate mongoTemplate;

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public MovieWithReviews getMovieWithReviews(String imdbId) {

        MatchOperation matchStage = Aggregation.match(Criteria.where("imdbId").is(imdbId));

        LookupOperation lookupStage = Aggregation.lookup(
                "reviews",
                "reviewIds",
                "_id",
                "reviewObjects"
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
