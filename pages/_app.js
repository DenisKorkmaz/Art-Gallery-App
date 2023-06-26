import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {

  const { data } = useSWR(`https://example-apis.vercel.app/api/art`, (URL) =>
    fetch(URL).then((res) => res.json())
  );

  if (!data) {
    return null;
  }
  /* console.log(data); */

  const [artPiecesInfo, setArtPiecesInfo] = useState();

  return (
    <>
      <GlobalStyle />
      <Component 
      {...pageProps} 
      pieces={data}
      artPiecesInfo={artPiecesInfo}/>
      <Layout/>
    </>
  );
}
