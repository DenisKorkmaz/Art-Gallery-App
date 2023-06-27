import BackButton from "../backButton/backButton";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";

export default function ArtPieceDetails ({imageSource, title, artist, year, genre, onSubmitComment}){
    return(
        <div>
            <FavoriteButton/>
            <img src={imageSource} style={{ width: "100px" }}></img>
            <h2> {title} </h2>
            <p> {artist} </p>
            <p> {year} </p>
            <p> {genre} </p>
            <CommentForm onSubmitComment={onSubmitComment} />
            <BackButton type="button" aria-label="navigate back"> Back
            </BackButton>
            </div>
        
    )

}