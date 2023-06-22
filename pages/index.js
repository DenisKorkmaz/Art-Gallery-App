import useSWR from 'swr';
import ArtPieces from '@/components/ArtPieces/artPieces';
 

export default function HomePage() {
  
 const {data} = useSWR(`https://example-apis.vercel.app/api/art`, (URL) => fetch(URL).then((res) => res.json())); 
  console.log(data);
  if(!data){
    return null;
  }
  return (
    <div>
      <ArtPieces pieces={data}/>
    </div>
  ); 
}  