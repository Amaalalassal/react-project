import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import { useState } from "react";
import { useCompare } from "./CompareContext"; // تأكدي من المسار الصحيح

const PropertyCard = ({
  image, title, address, type, price, beds, baths, size, added, status,
}) => {
  const [isFav, setIsFav] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const { compareList, addToCompare } = useCompare();

  const isSelected = compareList.some((item) => item.title === title);

  const handleFav = () => {
    setIsFav(true);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000);
  };

  const handleCompareClick = () => {
    addToCompare({
      image, title, address, type, price, beds, baths, size, added, status,
    });
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <span className="absolute top-2 left-2 bg-white text-xs text-gray-800 font-semibold px-3 py-1 rounded-full shadow">
          {status}
        </span>
        <div className="absolute bottom-2 right-2 flex gap-2">
          <button onClick={handleFav} className="bg-white p-2 rounded-full shadow hover:bg-blue-100">
            {isFav ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderOutlinedIcon />}
          </button>
          {showMsg && (
            <div className="absolute top-4 left-4 bg-gray-500/50 text-white text-xs px-3 py-1 rounded shadow">
              Added to favorites
            </div>
          )}

          <button
            onClick={handleCompareClick}
            className="bg-white p-2 rounded-full shadow hover:bg-blue-100"
            disabled={isSelected || compareList.length >= 4}
          >
            <CompareArrowsOutlinedIcon size={16} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <h3 className="font-semibold text-lg text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
        </a>
        <p className="text-sm text-gray-500 mb-1">
          <RoomOutlinedIcon />
          {address}
        </p>
        <p className="text-sm text-sky-500 font-bold mb-3">{type}</p>
        <p className="text-gray-800 font-bold text-lg mb-3">
          {status === "For Rent" ? `$${price} Monthly` : `$${price}`}
        </p>
        <div className="flex items-center text-sm text-gray-600 gap-4">
          <span>
            <HotelOutlinedIcon /> {beds}
          </span>
          <span>
            <BathtubOutlinedIcon /> {baths}
          </span>
          <span><CropSquareOutlinedIcon /> {size} sq ft</span>
        </div>
        {added && <p className="text-xs text-gray-400 mt-2">Added: {added}</p>}
      </div>
    </div>
  );
};

export default PropertyCard;
