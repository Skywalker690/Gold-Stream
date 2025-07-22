import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faStar, faCalendarAlt, faClock, faHeart } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";

const Hero = ({movies}) => {
    const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`);
    }

    // Show loading state if no movies
    if (!movies) {
        return (
            <div className="hero-loading-container">
                <div className="hero-loading-content">
                    <div className="loading-spinner-enhanced">
                        <div className="spinner-ring"></div>
                        <div className="spinner-ring"></div>
                        <div className="spinner-ring"></div>
                    </div>
                    <h2 className="loading-text-enhanced">Loading Cinematic Experiences...</h2>
                    <p className="loading-subtitle-enhanced">Curating the finest movies just for you</p>
                    <div className="loading-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }

    // Show empty state if no movies found
    if (movies && movies.length === 0) {
        return (
            <div className="hero-empty-container">
                <div className="hero-empty-content">
                    <div className="empty-icon-enhanced">
                        <div className="film-strip">
                            <div className="film-hole"></div>
                            <div className="film-hole"></div>
                            <div className="film-hole"></div>
                        </div>
                    </div>
                    <h2 className="empty-title-enhanced">No Movies in Spotlight</h2>
                    <p className="empty-subtitle-enhanced">Our collection is being updated with the latest blockbusters</p>
                    <button className="refresh-button">
                        Check Back Soon
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="movie-carousel-container-enhanced">
            {/* Background particles */}
            <div className="hero-particles">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 20}s`,
                        animationDuration: `${15 + Math.random() * 10}s`
                    }}></div>
                ))}
            </div>

            <Carousel
                animation="slide"
                duration={1000}
                indicators={true}
                navButtonsAlwaysVisible={false}
                autoPlay={true}
                interval={7000}
                swipe={true}
                className="hero-carousel-enhanced"
                indicatorContainerProps={{
                    className: "carousel-indicators-enhanced"
                }}
                indicatorIconButtonProps={{
                    className: "carousel-indicator-enhanced"
                }}
                activeIndicatorIconButtonProps={{
                    className: "carousel-indicator-active-enhanced"
                }}
            >
                {movies?.map((movie, index) => {
                    return(
                        <Paper key={movie.imdbId} className="hero-paper-enhanced" elevation={0}>
                            <div className="movie-card-container-enhanced">
                                <div className="movie-card-enhanced" style={{"--img": `url(${movie.backdrops?.[0] || movie.poster})`}}>
                                    {/* Multiple gradient overlays for depth */}
                                    <div className="movie-overlay-primary"></div>
                                    <div className="movie-overlay-secondary"></div>
                                    <div className="movie-overlay-tertiary"></div>
                                    
                                    {/* Content */}
                                    <div className="movie-detail-enhanced">
                                        {/* Movie Poster with 3D effect */}
                                        <div className="movie-poster-container-enhanced">
                                            <div className="movie-poster-enhanced">
                                                <img src={movie.poster} alt={movie.title || "Movie poster"} />
                                                <div className="poster-glow-enhanced"></div>
                                                <div className="poster-shine-enhanced"></div>
                                            </div>
                                            {/* Floating rating badge */}
                                            <div className="rating-badge">
                                                <FontAwesomeIcon icon={faStar} className="star-icon" />
                                                <span>8.{Math.floor(Math.random() * 9) + 1}</span>
                                            </div>
                                        </div>
                                        
                                        {/* Movie Information */}
                                        <div className="movie-info-enhanced">
                                            {/* Title and tagline */}
                                            <div className="movie-title-section">
                                                <h1 className="movie-title-enhanced">{movie.title}</h1>
                                                <p className="movie-tagline">An unforgettable cinematic journey awaits</p>
                                            </div>

                                            {/* Movie meta information */}
                                            <div className="movie-meta">
                                                {movie.releaseDate && (
                                                    <div className="meta-item">
                                                        <FontAwesomeIcon icon={faCalendarAlt} />
                                                        <span>{new Date(movie.releaseDate).getFullYear()}</span>
                                                    </div>
                                                )}
                                                <div className="meta-item">
                                                    <FontAwesomeIcon icon={faClock} />
                                                    <span>{120 + Math.floor(Math.random() * 60)} min</span>
                                                </div>
                                                <div className="meta-item quality-badge">
                                                    <span>4K UHD</span>
                                                </div>
                                            </div>
                                            
                                            {/* Genres with enhanced styling */}
                                            {movie.genres && (
                                                <div className="movie-genres-enhanced">
                                                    {movie.genres.slice(0, 3).map((genre, index) => (
                                                        <span key={index} className="genre-tag-enhanced">
                                                            {genre}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Action buttons with enhanced design */}
                                            <div className="movie-buttons-container-enhanced">
                                                {movie.trailerLink && (
                                                    <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                        <button className="play-button-enhanced">
                                                            <div className="button-bg-enhanced"></div>
                                                            <FontAwesomeIcon className="play-icon-enhanced" icon={faCirclePlay} />
                                                            <span >Watch Trailer</span>
                                                            <div className="button-shine-enhanced"></div>
                                                        </button>
                                                    </Link>
                                                )}

                                                <button 
                                                    className="review-button-enhanced"
                                                    onClick={() => reviews(movie.imdbId)}
                                                >
                                                    <span>Read Reviews</span>
                                                </button>

                                                <button className="favorite-button-enhanced">
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Movie number indicator */}
                                    <div className="movie-number">
                                        <span>{String(index + 1).padStart(2, '0')}</span>
                                    </div>

                                    {/* Animated elements */}
                                    <div className="floating-elements">
                                        <div className="floating-circle circle-1"></div>
                                        <div className="floating-circle circle-2"></div>
                                        <div className="floating-circle circle-3"></div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Hero