import MovieListItem from "../MovieListItem";


export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, original_title }) => {
        return <MovieListItem key={id} title={original_title} id={id} />;
      })}
    </ul>
  );
};