
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js"; 

export default function ArtPiecePreview({ slug, image, title, artist, isFavorite }) {
  return (
    <>
    <FavoriteButton
        isFavorite={isFavorite}
        />
      <h2>{title}</h2>
      <Link href={`/art-pieces/${slug}`}><img src={image} style={{ width: "100px" }}></img></Link>
      
      <p>{artist}</p>
    </>
  );
}
