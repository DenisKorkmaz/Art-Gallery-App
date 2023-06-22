import ArtPiecePreview from "../ArtPiecePreview/artPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      <li>
        {pieces.map((piece) => (
          <ArtPiecePreview
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
          />
        ))}
      </li>
    </ul>
  );
}
