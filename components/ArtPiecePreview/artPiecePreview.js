export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <h2>{title}</h2>
      <img src={image} style={{ width: "100px" }}></img>
      <p>{artist}</p>
    </>
  );
}
