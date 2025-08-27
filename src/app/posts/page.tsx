import GoForwardBtn from "@/components/GoForwardBtn";
import Link from "next/link";
import React from "react";

export default async function Page() {
  const res = await fetch("https://dev.to/api/articles?per_page=10");
  const posts = await res.json();
  if (!posts || posts.length === 0) {
    throw new Error("No posts found");
  }
  return (
    <div className="container relative mt-6 mb-6 mx-auto p-4 flex flex-col items-center gap-6 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-lg">
      <GoForwardBtn />
      <h1 className="text-4xl font-bold text-center">Posts Page</h1>
      <p className="text-center mt-4">This is the posts page.</p>
      <ul className="mt-6">
        {posts.map((post: { id: string; title: string }) => (
          <li key={post.id} className="border-b border-gray-700 py-4">
            <Link href={`/posts/${post.id}/${post.title.replace(/\s+/g, "-")}`}>
              <h2 className="text-2xl font-semibold">{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
