import GlobalStyle from "../styles";
import useSWR from "swr";

export default function App({ Component, pageProps }) {

  const { data } = useSWR(`https://example-apis.vercel.app/api/art`, (URL) =>
    fetch(URL).then((res) => res.json())
  );

  if (!data) {
    return null;
  }
  console.log(data);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} 
      pieces={data}/>
    </>
  );
}
