


import { useRouter } from 'next/router';
import ArtPieceDetails from '@/components/ArtPieceDetails/ArtPieceDetails';


export default function ArtPiecesPage ({pieces}){
    const router = useRouter();
    const { slug } = router.query;
    const currentPieces = pieces.find((piece ) => piece.slug === slug);
    console.log(pieces)
    if (!currentPieces){
        return null;
    }
    return(
        <div>
            <ArtPieceDetails {...currentPieces} />
        </div>
    )
}