import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({pieces, artPiecesInfo}) {
  
  const randomPicture = pieces[Math.floor(Math.random() * pieces.length)];

  if (!pieces) {
    return null;
  }

  return (
    <div>
      <Spotlight
        image={randomPicture.imageSource}
        artist={randomPicture.artist}
      />
    </div>
  );
}
