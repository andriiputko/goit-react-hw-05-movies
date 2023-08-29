import { Link } from 'react-router-dom';
import cl from "./MovieListItem.module.css"

const MovieItem = ({ id, title }) => {
  return (
    <>
      <li className={cl.li}>
        <Link to={`/movies/${id}`} className={cl.link}>
          <h3 className={cl.title}>{title}</h3>
        </Link>
      </li>
    </>
  );
};
export default MovieItem;