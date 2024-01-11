"use client";
import React from "react";

// async function getPost(postId) {
//     const res = await fetch(
//         `http://dersdsd`,
//         // 캐시된 데이터를 일정 간격으로 재검증
//         { next: { revalidate: 10 } }
//     );

//     if (!res.ok) {
//         throw new Error("Failed to fetch data");
//     }

//     const data = await res.json();
//     return data;
// }
// const notice = async ({ params }) => {
//     const post = await getPost(params.id);
//     return (
//         <div>
//             <h1>posts/{post.id}</h1>
//             <div>
//                 <h3>{post.title}</h3>
//                 <p>{post.created}</p>
//             </div>
//         </div>
//     );
// };

// export default notice;

export default function List() {
    const [clicked, setClicked] = React.useState(false);
    if (clicked) {
        throw new Error("Oh no! Something went wrong.");
    }
    return (
        <>
            {/* <Title text="error.js" />
            <Desc text={"에러 발생 시 나타나는 컴포넌트"} /> */}
            <button
                onClick={() => {
                    setClicked(true);
                }}
            >
                에러 발생하는 버튼
            </button>
        </>
    );
}
