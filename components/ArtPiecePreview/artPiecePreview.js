
export default function ArtPiecePreview({ image, title, artist }) {
    return (<>
    <h2>{title}</h2>
  <img src={image}></img>
  <p>{artist}</p>
  </>
    );
  }