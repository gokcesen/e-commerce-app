import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function StarRating({ rating }) {
  const fullStars = Math.floor(rating); 
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75; 
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-orange-500 w-4 h-4" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-orange-500 w-4 h-4" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-orange-400 w-4 h-4" />
      ))}
      <span className="ml-2 text-xs text-gray-600 font-sans">{rating.toFixed(1)}/5</span>
    </div>
  );
}

export default StarRating;
