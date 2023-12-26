
import { useSelector } from 'react-redux';

import { useGetSongBySearchQuery } from '../redux/services/shazamCore';

import { Error, Loader, SongCard } from '../components'
import { useParams } from 'react-router-dom';


const Search = () => {
  const { searchTerm } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongBySearchQuery({ searchTerm: searchTerm });

  const songs = data?.tracks?.hits?.map((song) => song.track);

  if (isFetching) return <Loader title="Searching your songs or artist..." />

  if (error) return <Error />

  return (
    <div>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Showing results for <span className="font-black">
        {searchTerm}
      </span>
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {
          songs?.map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))
        }
      </div>
    </div>
  )
};

export default Search;
