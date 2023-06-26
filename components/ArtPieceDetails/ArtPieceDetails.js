import BackButton from "../backButton/backButton";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";

export default function ArtPieceDetails ({imageSource, title, artist, year, genre, isFavorite}){
    return(
        <div>
            <BackButton type="button" aria-label="navigate back"> Back
            </BackButton>
            <FavoriteButton
            isFavorite={isFavorite}
            />
            <img src={imageSource} style={{ width: "100px" }}></img>
            <h2> {title} </h2>
            <p> {artist} </p>
            <p> {year} </p>
            <p> {genre} </p>
        </div>
        
    )

}