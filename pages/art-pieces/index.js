import ArtPieces from "@/components/ArtPieces/artPieces";

export default function ArtPiecesPage ({pieces, onToggleFavorite}) {
    return (
        <ArtPieces pieces={pieces} 
        onToggleFavorite={onToggleFavorite}/>
    )
}