import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({ slug, image, title, artist, onToggleFavorite }) {
  return (
    <>
    <FavoriteButton 
    onToggleFavorite={onToggleFavorite}
    slug={slug}/>
      <h2>{title}</h2>
      <Link href={`/art-pieces/${slug}`}><img src={image} style={{ width: "100px" }}></img></Link>
      
      <p>{artist}</p>
    </>
  );
}
