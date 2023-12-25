import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player)

  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId)

  console.log("Artist Data:", artistData)
  if (isFetchingArtistDetails) return
  <Loader title="Searching song details" />

  // if (error) return <Error />
  if (error || !artistData || !artistData[0] || !artistData[0].attributes) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
      />
      <RelatedSongs
        // data={artistData[0].relationships.albums.data}
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  )
}

export default ArtistDetails;

