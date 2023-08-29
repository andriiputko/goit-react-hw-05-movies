import defaultImg from '../../images/defaultImg.jpg';
import cl from './Cast.module.css';

export default function Cast({ cast }) {
  return (
    <>
      {
        <ul className={cl.list}>
          {cast.map(({ id, name, profile_path }) => {
            return (
              <li className={cl.li} key={id}>
                <img
                  className={cl.img}
                  width={180}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/original${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                />
                <p className={cl.name}>{name}</p>
              </li>
            );
          })}
        </ul>
      }
    </>
  );
}
