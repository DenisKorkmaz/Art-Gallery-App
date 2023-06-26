import ArtPieces from "@/components/ArtPieces/artPieces";

export default function ArtPiecesPage ({pieces, artPiecesInfo}) {
    return (
        <ArtPieces 
        pieces={pieces}
        artPiecesInfo={artPiecesInfo} />
    )
}