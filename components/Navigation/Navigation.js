import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const NavLink = styled.div`
  a:link {
    text-decoration: none; 
    padding: 15px;
  }
  
  width: 100%;
  border: solid 0.5px grey;
  display: flex;
  justify-content: space-around;
  margin: 20px 0 20px o;
  grid: 5px;
`;

export default function Navigation() {
  const router = useRouter();
  return (
    <>
      <nav>
        <NavLink>
          <Link href="/">Spotlight</Link>
          <Link href="/art-pieces">Art Pieces</Link>
          <Link href="/Favourites">Favourites</Link>
        </NavLink>
      </nav>
    </>
  );
}
