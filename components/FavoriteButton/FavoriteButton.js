import HeartUnlike from "./heartUnlike";
import HeartLike from "./heartLike";
/* import useState from "react";
import "./FavoriteButton"; */

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  /* const [color, setColor] = useState("fill");
  const toggleColor = () => {setColor("fill2")}; */

  return (
    <>
    <button
    type="button"
    aria-label={isFavorite ? "unlike" : "like"}
    /* onClick={toggleColor} */
    onClick={() => onToggleFavorite(slug)}>{isFavorite === true ? <HeartLike /> : <HeartUnlike />}</button>
    </>
  );
}

