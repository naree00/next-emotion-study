import Image from "next/image";
import img01 from "/public/images/testimg.jpg";
import { PC, TABLET, MOBILE } from "./_components/responsive";

export default function Home() {
    return (
        <>
            <p>home</p>
            <PC>
                <p>PC</p>
            </PC>

            <TABLET>
                <p>Tablet</p>
            </TABLET>

            <MOBILE>
                <p>Mo</p>
            </MOBILE>

            <Image
                src={img01}
                width={500}
                height={500}
                alt="Picture of the test"
            />
        </>
    );
}
