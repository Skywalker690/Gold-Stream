import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import ReviewForm from '../reviewForm/ReviewForm';
import React from 'react'

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(()=>{
        getMovieData(movieId);
    },[])

    const addReview = async (e) => {
        e.preventDefault();

        const rev = revText.current;

        try {
            await api.post("/api/v1/reviews", {reviewBody: rev.value, imdbId: movieId});

            rev.value = "";

            // Fetch updated reviews from backend
            getMovieData(movieId);

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Reviews
                    </h1>
                    <p className="text-gray-400 mt-2">Share your thoughts about this movie</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Movie Poster */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            {movie?.poster ? (
                                <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                                    <img 
                                        src={movie.poster} 
                                        alt={movie.title || "Movie poster"} 
                                        className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            ) : (
                                <div className="aspect-[2/3] bg-gray-800 rounded-2xl flex items-center justify-center">
                                    <span className="text-gray-500 text-lg">No poster available</span>
                                </div>
                            )}
                            
                            {/* Movie Info */}
                            {movie && (
                                <div className="mt-6 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
                                    <h2 className="text-xl font-bold text-white mb-2">{movie.title}</h2>
                                    {movie.releaseDate && (
                                        <p className="text-yellow-400 text-sm font-medium">
                                            {new Date(movie.releaseDate).getFullYear()}
                                        </p>
                                    )}
                                    {movie.genres && (
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {movie.genres.slice(0, 3).map((genre, index) => (
                                                <span 
                                                    key={index} 
                                                    className="px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-medium"
                                                >
                                                    {genre}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Review Form */}
                        <div className="bg-gray-800/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-700/50">
                            <h3 className="text-xl font-semibold mb-6 text-white">Write a Review</h3>
                            <ReviewForm 
                                handleSubmit={addReview} 
                                revText={revText} 
                                labelText="Share your thoughts about this movie"
                            />
                        </div>

                        <hr className="border-gray-700/50" />

                        {/* Reviews List */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                All Reviews 
                                {reviews && reviews.length > 0 && (
                                    <span className="text-lg text-gray-400 font-normal ml-2">
                                        ({reviews.length})
                                    </span>
                                )}
                            </h3>

                            {reviews && reviews.length > 0 ? (
                                <div className="space-y-4">
                                    {reviews.map((review, index) => (
                                        <div 
                                            key={index} 
                                            className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10"
                                        >
                                            <div className="flex items-start space-x-4">
                                                {/* Avatar */}
                                                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-black font-semibold text-sm">
                                                        {index + 1}
                                                    </span>
                                                </div>
                                                
                                                {/* Review Content */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <h4 className="text-white font-medium">Anonymous User</h4>
                                                        <span className="text-xs text-gray-500">
                                                            Review #{index + 1}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-300 leading-relaxed">
                                                        {review.body}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4 opacity-50">💬</div>
                                    <h4 className="text-xl font-medium text-gray-400 mb-2">No reviews yet</h4>
                                    <p className="text-gray-500">Be the first to share your thoughts about this movie!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
