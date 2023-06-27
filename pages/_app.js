import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/Layout";
import { useImmerLocalStorageState } from "@/public/resources (2)/lib/hook/useImmerLocalStorageState";

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );
  const { data } = useSWR(`https://example-apis.vercel.app/api/art`, (URL) =>
    fetch(URL).then((res) => res.json())
  );

  if (!data) {
    return null;
  }
  /* console.log(data); */
  console.log(artPiecesInfo);

  function handleToggleFavorite(slug) {
    const updateArtPiecesInfo = artPiecesInfo.find(
      (artPiece) => artPiece.slug === slug
    );
    if (updateArtPiecesInfo) {
      return setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    }
    return setArtPiecesInfo([
      ...artPiecesInfo,
      { slug: slug, isFavorite: true },
    ]);
  }

  function handleComment(slug, comment) {
    onComment(slug, comment);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={data}
        onToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      <Layout />
    </>
  );
}
