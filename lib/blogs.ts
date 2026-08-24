import { fetchApi, imageUrl } from "./api";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags?: string[];
};

type ApiBlog = {
  _id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  tags?: string[];
  date: string;
  createdAt: string;
  updatedAt: string;
};

function truncate(text: string, maxLength = 150): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "\u2026";
}

function estimateReadTime(text: string): string {
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function cleanTag(tag: string): string {
  return tag.replace(/[[\]"]+/g, "").trim();
}

function mapApiBlog(blog: ApiBlog): BlogPost {
  const tags = blog.tags?.map(cleanTag);
  return {
    id: blog._id,
    title: blog.title,
    excerpt: truncate(blog.content),
    content: blog.content,
    category: tags?.[0] || "Technology",
    image: imageUrl(blog.image) || "",
    author: blog.author,
    date: formatDate(blog.date),
    readTime: estimateReadTime(blog.content),
    tags,
  };
}

export async function getBlogs(): Promise<BlogPost[]> {
  const data = await fetchApi<ApiBlog[]>("/blogs");
  return data.map(mapApiBlog);
}

export async function getBlog(id: string): Promise<BlogPost | null> {
  try {
    const data = await fetchApi<ApiBlog>(`/blogs/${id}`);
    return mapApiBlog(data);
  } catch {
    return null;
  }
}

export async function getRelatedBlogs(
  currentId: string,
  category: string
): Promise<BlogPost[]> {
  const all = await getBlogs();
  return all.filter((p) => p.category === category && p.id !== currentId);
}
