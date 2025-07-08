import { getSortedPostsData, PostData } from "@/lib/posts";
import ArticleItem from "./Item";

export default function ArticleList() {
  const posts = getSortedPostsData();

  return (
    <div className="flex flex-col">
      {posts.map((post: PostData) => (
        <ArticleItem
          key={post.id}
          slug={post.id}
          metadata={{
            title: post.title,
            publishedAt: post.date,
            summary: post.excerpt,
            image: post.image,
            logo: post.logo,
            readingTime: post.reading_time,
          }}
        />
      ))}
    </div>
  );
} 