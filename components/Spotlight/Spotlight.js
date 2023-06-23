export default function Spotlight({ image, artist }) {
  return (
    <>
      <div>
        <h2>{artist}</h2>
        <img src={image} style={{ width: "100px" }}></img>
      </div>
    </>
  );
}
