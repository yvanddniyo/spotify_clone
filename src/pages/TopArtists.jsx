
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import { ArtistCard, Error, Loader, SongCard } from '../components'



const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading top charts" />

  if (error) return <Error />

  return (
    <div>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'> Top Artist
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {
          data?.tracks?.map((track) => (
            <ArtistCard
              track={track}
              key={track.key}
            />
          ))
        }
      </div>
    </div>
  )
};

export default TopArtists;

