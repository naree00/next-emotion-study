"use client";

import Link from "next/link";

export default function page() {
    return (
        <div>
            <p>news group</p>
            <ul>
                <li>
                    <Link href="/detail/[id].js" as="/1">
                        1
                    </Link>
                </li>
                <li>
                    <Link href="/detail/[id].js" as="/2">
                        2
                    </Link>
                </li>
                <li>
                    <Link href="/detail/[id].js" as="/3">
                        3
                    </Link>
                </li>
                <li>
                    <Link href="/detail/[id].js" as="/4">
                        4
                    </Link>
                </li>
            </ul>
        </div>
    );
}
