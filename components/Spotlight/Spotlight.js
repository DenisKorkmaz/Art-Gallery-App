import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({ image, artist }) {
  return (
    <>
    <FavoriteButton />
      <div>
        <h2>{artist}</h2>
        <img src={image} style={{ width: "100px" }}></img>
      </div>
    </>
  );
}
