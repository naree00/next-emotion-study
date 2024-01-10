import Image from "next/image";
import img01 from "/public/images/testimg.jpg";
import { useMediaQuery } from "react-responsive";

export default function Home() {
    // const [isPc, setIsPc] = useState(false);
    const isPC = useMediaQuery({
        query: "(min-width: 1200px)",
    });
    const isTablet = useMediaQuery({
        query: "(min-width: 798px)",
    });
    const isMo = useMediaQuery({
        query: "(max-width: 797px)",
    });
    return (
        <>
            <p>home</p>
            {isPC && <p>PC</p>}
            {isTablet && <p>Tablet</p>}
            {isMo && <p>Mo</p>}
            <Image
                src={img01}
                width={500}
                height={500}
                alt="Picture of the test"
            />
        </>
    );
}
