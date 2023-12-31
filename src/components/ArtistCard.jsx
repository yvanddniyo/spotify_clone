import { useNavigate } from "react-router-dom";

const ArtistCard = ({ data, track }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-[250] p-4 bg-white/5 bg-opacity backdrop-blur-sm animate-slideup rounded-lg cursor-pointer" onClick={() => navigate(`/artists/${track?.artists[0].adminid}`)}>
      <img src={track?.images?.coverart} alt="artist" className="w-full h-56 rounded-lg" />
      <p className="mt-4 font-semibold text-lg text-white">
        {track?.subtitle}
      </p>
    </div>
  )
};

export default ArtistCard;
