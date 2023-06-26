import BackButton from "../backButton/backButton";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieceDetails ({imageSource, title, artist, year, genre}){
    return(
        <div>
            <FavoriteButton/>
            <img src={imageSource} style={{ width: "100px" }}></img>
            <h2> {title} </h2>
            <p> {artist} </p>
            <p> {year} </p>
            <p> {genre} </p>
            <BackButton type="button" aria-label="navigate back"> Back
            </BackButton>
        </div>
        
    )

}