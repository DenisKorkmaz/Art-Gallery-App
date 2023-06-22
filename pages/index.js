import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/artPieces";
import Spotlight from "../components/Spotlight/Spotlight";

export default function HomePage() {
  const { data } = useSWR(`https://example-apis.vercel.app/api/art`, (URL) =>
    fetch(URL).then((res) => res.json())
  );
  console.log(data);
  if (!data) {
    return null;
  }

  const randomPicture = data[Math.floor(Math.random() * data.length)];
  return (
    <div>
      <Spotlight
        image={randomPicture.imageSource}
        artist={randomPicture.artist}
      />
      <ArtPieces pieces={data} />
    </div>
  );
}
