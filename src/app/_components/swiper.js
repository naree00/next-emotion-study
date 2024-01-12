"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
} from "swiper/core";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { PC, TABLET, MOBILE } from "./responsive";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]); // SwiperCore.use 추가

const mainImgList = [
    {
        id: "img1",
        imgUrlPC: "/images/@main_1200x670.jpg",
        imgUrlMO: "/images/@main_750x1204.jpg",
        title: "슬라이드1",
    },
    {
        id: "img2",
        imgUrlPC: "/images/@main_1200x670_2.jpg",
        imgUrlMO: "/images/@main_750x980.jpg",
        title: "슬라이드2",
    },
    {
        id: "img3",
        imgUrlPC: "/images/@main_1200x520.jpg",
        imgUrlMO: "/images/@example_750x1000.jpg",
        title: "슬라이드3",
    },
];
export default function MainSlider() {
    return (
        <>
            <PC>
                <Swiper
                    // modules={[Navigation, Pagination, Scrollbar, A11y]}
                    // spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={false}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    style={{ height: "500px" }}
                >
                    {mainImgList.map((img) => (
                        <SwiperSlide key={img.id}>
                            <Image
                                src={img.imgUrlPC}
                                alt={img.title}
                                width={1200}
                                height={670}
                                layout="responsive"
                                // layout="intrinsic"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </PC>
            <TABLET>
                <Swiper
                    // modules={[Navigation, Pagination, Scrollbar, A11y]}
                    // spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={false}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    style={{ height: "60vh" }}
                >
                    {mainImgList.map((img) => (
                        <SwiperSlide key={img.id}>
                            <Image
                                src={img.imgUrlMO}
                                alt={img.title}
                                width={1200}
                                height={670}
                                layout="responsive"
                                // layout="intrinsic"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </TABLET>
            <MOBILE>
                <Swiper
                    // modules={[Navigation, Pagination, Scrollbar, A11y]}
                    // spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={false}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    style={{ height: "80vh" }}
                >
                    {mainImgList.map((img) => (
                        <SwiperSlide key={img.id}>
                            <Image
                                src={img.imgUrlMO}
                                alt={img.title}
                                width={1200}
                                height={670}
                                layout="responsive"
                                // layout="intrinsic"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </MOBILE>
        </>
    );
}
