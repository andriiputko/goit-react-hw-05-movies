import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovies } from "../../api/api";
import cl from "./MovieDetails.module.css"

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function getFetchMoovies(movieId) {
      try {
        const data = await fetchMovies(movieId);

        setMovie(data);
      } catch (error) {
        toast.error('Page not found', { duration: 3000 });
      }
    }
    getFetchMoovies(movieId);
  }, [movieId]);
  if (Object.keys(movie).length > 0) {
    const { title, vote_average, overview, genres, poster_path } = movie;
    const userScore = vote_average * 10;
    const movieGenres = genres.map(genre => genre.name).join(', ');

    return (
      <div className={cl.container}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
          className={cl.img}
        />
        <h2 className={cl.title}>{title}</h2>
        <p className={cl.text}>
          User score: <span>{userScore}%</span>
        </p>
        <h3 className={cl.h3}>Overview</h3>
        <p className={cl.text}>{overview}</p>
        <h4 className={cl.h4}>Genres</h4>
        <p className={cl.text}>{movieGenres}</p>
      </div>
    );
  }
};
