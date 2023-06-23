import ArtPiecePreview from "../ArtPiecePreview/artPiecePreview";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
    
          <ArtPiecePreview
          slug={piece.slug}
            title={piece.name}
            image={piece.imageSource}

            artist={piece.artist}
          />
           </li>
        ))}
       
    </ul>
   
  );
}


