import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchCast} from '../../api/api';
import  Cast  from '../../components/Cast';

export default function CastPage() {
  const { movieId } = useParams();
  const [cast, setCast] = useState({});

  useEffect(() => {
    const getCastInfo = async id => {
      try {
        const data = await fetchCast(id);
        const result = data.cast.map(
          ({ name, character, profile_path, id }) => ({
            name,
            character,
            profile_path,
            id,
          })
        );
        if (!result.length) {
          throw new Error('Cast not found');
        }
        setCast(result);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getCastInfo(movieId);
  }, [movieId]);
  if (Object.keys(cast).length > 0)
    return (
      <>
        <Cast cast={cast} />
      </>
    );
}