import MovieListItem from "../MovieListItem";
import cl from "./MovieList.module.css"

export const MoviesList = ({ movies }) => {
  return (
    <ul className={cl.list} >
      {movies.map(({ id, original_title }) => {
        return <MovieListItem key={id} title={original_title} id={id} />;
      })}
    </ul>
  );
};