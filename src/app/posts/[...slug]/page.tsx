import GoBackBtn from "@/components/GoBackBtn";
import React from "react";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

type Post = {
  id: number;
  title: string;
  description?: string | null;
  body_html?: string | null;
  published_at?: string;
};

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string[] }>;
  }
) {
  const params = await props.params;
  const [id] = params.slug;
  const post: Post = await fetch(`https://dev.to/api/articles/${id}`).then(
    (res) => res.json()
  );
  return {
    title: post.title,
    description: post.description ? post.description.slice(0, 100) : "",
    openGraph: {
      title: post.title,
      description: post.description ? post.description.slice(0, 100) : "",
      images: ["/img/home.png"],
    },
  };
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const [id, ...rest] = params.slug;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  if (!res.ok) throw new Error("Article not found");

  const post: Post = await res.json();

  return (
    <div className="container relative mt-6 mb-6 mx-auto p-4 flex flex-col items-center gap-6 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-lg">
      <GoBackBtn />
      <h2 className="text-2xl font-semibold">{post.title}</h2>
      <p className="text-gray-400 text-sm">Slug: {rest.join(" / ")}</p>
      <div
        className="prose prose-invert"
        dangerouslySetInnerHTML={{ __html: post.body_html ?? "" }}
      />
      <p>Published at: {post.published_at}</p>
    </div>
  );
}
