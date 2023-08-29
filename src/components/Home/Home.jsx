import { MoviesList } from "../MovieList/MovieList";
import { useState, useEffect } from 'react';
import { fetchTrendingMoovies } from "../../api/api";
import cl from "./Home.module.css"

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getFetchMoovies() {
      try {
        const data = await fetchTrendingMoovies();
        const { results } = data;
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    getFetchMoovies();
  }, []);

  return (
    <>
      <h2 className={cl.header}>Trending Today</h2>
      {movies && <MoviesList  movies={movies} />}
    </>
  );
}
