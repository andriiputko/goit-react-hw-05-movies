import { Suspense, lazy } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';
import cl from "./MovieDetailsPage.module.css"

const CastPage = lazy(() => import('../CastPage'));
const ReviewsPage = lazy(() => import('../ReviewsPage'));

const MovieDetailsRender = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const goBackPage = location.state?.from ?? '/movies';
  return (
    movieId && (
      <>
        <Link className={cl.backLink} to={goBackPage}>Go back</Link>
        <MovieDetails />
        <div className={cl.container}>
          <h3 className={cl.title}>Additional information</h3>
          <Link className={cl.link} to="cast">Cast</Link>
          <Link className={cl.link} to="reviews">Reviews</Link>
        </div>{' '}
        {/* <Suspense fallback={<div>Loading...</div>}>
    <Outlet />
      </Suspense> */}
        <Suspense fallback={<>Loading..</>}>
          <Routes>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Routes>
        </Suspense>
      </>
    )
  );
};

export default MovieDetailsRender;