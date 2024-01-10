import Image from "next/image";
import img01 from "/public/images/testimg.jpg";

export default function Home() {
    return (
        <>
            <p>home</p>
            <Image
                src={img01}
                width={500}
                height={500}
                alt="Picture of the test"
            />
        </>
    );
}
