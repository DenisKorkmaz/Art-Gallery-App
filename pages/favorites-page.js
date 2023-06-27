import ArtPieces from "@/components/ArtPieces/artPieces";
export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const favorites = pieces.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug 
    )?.isFavorite
  );
console.log(favorites)
  return (
    <ul>
        {favorites.map((piece) => (
            <ArtPieces
                pieces={[piece]}
                artPiecesInfo={artPiecesInfo}
                onToggleFavorite={onToggleFavorite}
                key={piece.artist}
            />
        ))}
    </ul>
  );
}