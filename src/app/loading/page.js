// "use client";
export default async function page() {
    const res = await fetch(
        `https://app-router-api.vercel.app/api/categories?delay=1000&slug=electronics`,
        {
            cache: "no-cache",
        }
    );
    const category = await res.json();
    return <div>{category.name}</div>;
}
