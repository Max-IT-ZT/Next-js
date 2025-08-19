import GoBackBtn from "@/components/GoBackBtn";
import React from "react";
type PageProps = {
  params: Promise<{ id: string }>;
};
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  if (!res.ok) {
    throw new Error("Article not found");
  }
  const post = await res.json();
  console.log(post);
  return (
    <div className="container relative mt-6 mb-6 mx-auto p-4 flex flex-col items-center gap-6 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-lg">
      <GoBackBtn />
      <h2 className="text-2xl font-semibold">{post.title}</h2>
      <div
        className="container relative mt-6 mb-6 mx-auto p-4 flex flex-col items-center gap-6 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-lg"
        dangerouslySetInnerHTML={{ __html: post.body_html }}
      />
      <p>Published at: {post.published_at}</p>
    </div>
  );
}
