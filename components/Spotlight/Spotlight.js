import FavoriteButton from "../FavoriteButton/FavoriteButton.js";

export default function Spotlight({ image, artist, isFavorite }) {
  return (
    <>
      <div>
        <FavoriteButton
        isFavorite={isFavorite}
        />
        <h2>{artist}</h2>
        <img src={image} style={{ width: "100px" }}></img>
      </div>
    </>
  );
}
