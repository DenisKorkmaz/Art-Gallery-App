import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage() {
  
  const randomPicture = data[Math.floor(Math.random() * data.length)];

  return (
    <div>
      <Spotlight
        image={randomPicture.imageSource}
        artist={randomPicture.artist}
      />
    </div>
  );
}
