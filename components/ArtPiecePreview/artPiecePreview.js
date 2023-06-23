
import Link from "next/link";
export default function ArtPiecePreview({ slug, image, title, artist }) {
  return (
    <>
      <h2>{title}</h2>
      <Link href={`/art-pieces/${slug}`}><img src={image} style={{ width: "100px" }}></img></Link>
      
      <p>{artist}</p>
    </>
  );
}
