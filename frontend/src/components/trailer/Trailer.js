import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';
import React from 'react'

const Trailer = () => {
    let params = useParams();
    let key = params.ytTrailerId;

    return (
        <div className="trailer-page">
            <div className="trailer-header">
                <h1 className="trailer-title">Movie Trailer</h1>
                <p className="trailer-subtitle">Enjoy the preview</p>
            </div>
            
            <div className="react-player-container">
                {key ? (
                    <ReactPlayer 
                        controls={true} 
                        playing={true} 
                        url={`https://www.youtube.com/watch?v=${key}`} 
                        width="100%" 
                        height="100%"
                        className="react-player"
                        config={{
                            youtube: {
                                playerVars: {
                                    showinfo: 1,
                                    rel: 0,
                                }
                            }
                        }}
                    />
                ) : (
                    <div className="no-trailer">
                        <div className="no-trailer-icon">🎬</div>
                        <h2>No Trailer Available</h2>
                        <p>Sorry, the trailer for this movie is not available right now.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Trailer
