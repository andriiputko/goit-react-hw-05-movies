import { Link } from 'react-router-dom';

const MovieItem = ({ id, title }) => {
  return (
    <>
      <li>
        <Link to={`/movies/${id}`}>
          <h3>{title}</h3>
        </Link>
      </li>
    </>
  );
};
export default MovieItem;