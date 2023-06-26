import ArtPieces from "@/components/ArtPieces/artPieces";

export default function Favourites(pieces, artPiecesInfo) {
  const filter = artPieces.filter((artPiece) =>
    artPiecesInfo.find(
      (piece) => piece.slug === artPiece.slug && artPiece.Favourites
    )
  );

  console.log(filter);

  return <ArtPieces pieces={filter} artPiecesInfo={artPiecesInfo}/>;
}
