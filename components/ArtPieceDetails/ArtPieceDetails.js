import BackButton from "../backButton/backButton"

export default function ArtPieceDetails ({imageSource, title, artist, year, genre}){
    return(
        <div>
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