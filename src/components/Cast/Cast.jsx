import defaultImg from '../../../images/defaultImg.png';


export default function Cast({ cast }) {
  return (
    <>
      {
        <ul>
          {cast.map(({ id, name, profile_path }) => {
            return (
              <li key={id}>
                <img
                  width={180}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/original${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                />
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      }
    </>
  );
}