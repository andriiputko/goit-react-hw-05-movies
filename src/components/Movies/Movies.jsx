import { useSearchParams } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { fetchMoviesSearch } from "../../api/api";
import { MoviesList } from "../MovieList/MovieList";
// import SearchBar from 'components/searchBox/SearchBox';
export default function MoviesPageRender() {
  const [movies, setMovies] = useState([]);
  const [searhParams, setSearchParams] = useSearchParams();
  // const { movieId } = useParams();
  const query = searhParams.get('query') ?? '';

  useEffect(() => {
    const getFetchMovies = async searchQuery => {
      try {
        const data = await fetchMoviesSearch(searchQuery);
        if (!data.results.length) {
          throw new Error('No results found');
        }
        setMovies(data.results);
      } catch (error) {
        console.log(error);
        toast.error('No results found', { duration: 3000 });
      }
    };
    if (query === '') {
      return;
    }
    getFetchMovies(query);
  }, [query]);

  return (
    <>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={({ query }, { resetForm }) => {
          setSearchParams({ query });
          resetForm();
        }}
      >
        <Form>
          <Field name="query" type="text" placeholder="Search movies" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {Object.keys(movies).length > 0 && <MoviesList movies={movies} />}
    </>
  );
}