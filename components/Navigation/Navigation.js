import Link from "next/link";


import { useRouter } from "next/router";

export default function Navigation() {

    const router = useRouter();
    return (
        <nav>
            <Link href="/">Spotlight</Link>
            <Link href="/art-pieces">Art Pieces</Link>
        </nav>
    )

}