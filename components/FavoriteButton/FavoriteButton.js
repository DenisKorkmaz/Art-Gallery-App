
import StarFilled from "StarFilled.js";
import Star from "Star.js";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
    // this should be a state variable
    const [isFavorite, setIsFavorite] = useState(false);
  
    return (
      <button
      type="button"
        onClick={() => {
          setIsFavorite(!isFavorite);
        }}
        aria-label="favorite"
      >
        {isFavorite ? <StarFilled /> : <Star />}
      </button>
    );
  }