import Spotlight from "../components/Spotlight/Spotlight";
import Favourites from "./favourites";

export default function SpotlightPage({pieces}) {
  
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
      <Favourites/>
    </div>
  );
}
