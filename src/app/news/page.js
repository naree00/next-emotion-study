"use client";

import Link from "next/link";

export default function page() {
    return (
        <div>
            <p>news group</p>
            <ul>
                <li>
                    <Link href="news/detail/1">1</Link>
                </li>
                <li>
                    <Link href="news/detail/2">2</Link>
                </li>
                <li>
                    <Link href="news/detail/3">3</Link>
                </li>
                <li>
                    <Link href="news/detail/4">4</Link>
                </li>
            </ul>
        </div>
    );
}
