
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Test from "../components/Test";

import "../style/_detailes.scss";
import "../style/style.css";
import "../style/style.scss";




const SingleMovie = () => {
 const params = useParams();
const MovieId = params.movieId;
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${MovieId}?api_key=c78acce0f3f2ea89dc161ac367c1d5f7&language=en-US`,
    })
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="popular-section">
      <div className="container_single">
      
          <div className="row">
            <div className="col-12 col-md-6 pr-3 pr-md-0">
              <div className="movie-detailes-img text-center">
                <img
                  src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt=""
                />
              </div>
            </div>
            <div className="col-12 col-md-6 pl-3 pl-md-0">
              <div className="movie-detailes-text">
                <h3 className="movies-heading text-center">
                  {movie.original_title}
                </h3>
                <p className="mb-0 overview">{movie.overview}</p>
                {movie.genres !== undefined && (
                  <p className="mb-0">
                    Type : <Test geners={movie.genres} />
                  </p>
                )}
                <p className="mb-0">
                  Release date : <span>{movie.release_date}</span>
                </p>
                <p className="mb-0">
                  Budget : <span>{movie.budget}</span>
                </p>
                <p className="mb-0">
                  Lang : <span>{movie.original_language}</span>
                </p>
                <p className="mb-0">
                  Rating : <span>{movie.vote_average}</span>
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SingleMovie;