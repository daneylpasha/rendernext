import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Linkedin,
  Twitter,
} from "lucide-react";
import {
  getPostBySlug,
  getRelatedPosts,
  getAllPosts,
  BlogPost,
} from "@/lib/blog-data";
import ShareButtons from "./ShareButtons";
import { BlogPostJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | RenderNext Blog`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}


// Author bio component
function AuthorBio({ post }: { post: BlogPost }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 mt-12">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
          <span className="text-xl font-bold text-gray-500">
            {post.author.name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{post.author.name}</h4>
          <p className="text-sm text-gray-600 mt-1">{post.author.bio}</p>
          {(post.author.linkedin || post.author.twitter) && (
            <div className="flex gap-3 mt-3">
              {post.author.linkedin && (
                <a
                  href={post.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-mustard transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {post.author.twitter && (
                <a
                  href={post.author.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-mustard transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Related posts component
function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-gray-200">
      <h3 className="text-2xl font-bold font-heading text-gray-900 mb-8">
        Related Articles
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group">
              <div className="aspect-video bg-gradient-to-br from-mustard/20 to-orange-400/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-white/30 font-heading">
                  {post.title.charAt(0)}
                </span>
              </div>
              <div className="p-4">
                <span className="text-mustard text-xs font-medium">
                  {post.category}
                </span>
                <h4 className="font-semibold text-gray-900 mt-1 line-clamp-2 group-hover:text-mustard transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Main blog post page
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  // Simple markdown-to-HTML conversion (basic)
  const formatContent = (content: string) => {
    return content
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-8 mb-4">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-10 mb-4">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-10 mb-4">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-6 text-sm"><code>$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-gray-900 px-1.5 py-0.5 rounded text-sm">$1</code>')
      .replace(/^\- (.*$)/gim, '<li class="ml-4">$1</li>')
      .replace(/^\d+\. (.*$)/gim, '<li class="ml-4 list-decimal">$1</li>')
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-mustard hover:underline">$1</a>'
      )
      .replace(/\n\n/g, "</p><p class=\"my-4 leading-relaxed\">")
      .replace(
        /\|(.+)\|/g,
        (match) => {
          const cells = match.split("|").filter((c) => c.trim());
          return `<tr>${cells.map((c) => `<td class="border border-gray-200 px-4 py-2">${c.trim()}</td>`).join("")}</tr>`;
        }
      );
  };

  return (
    <main>
      {/* JSON-LD Structured Data */}
      <BlogPostJsonLd
        title={post.title}
        description={post.excerpt}
        url={`https://rendernext.io/blog/${post.slug}`}
        datePublished={post.publishedAt}
        authorName={post.author.name}
        image={post.featuredImage}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://rendernext.io" },
          { name: "Blog", url: "https://rendernext.io/blog" },
          { name: post.title, url: `https://rendernext.io/blog/${post.slug}` },
        ]}
      />

      {/* Header */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 truncate max-w-[200px]">
              {post.title}
            </span>
          </nav>

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-mustard transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Post Content */}
      <article className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {/* Post Header */}
          <header className="mb-10">
            <span className="inline-block text-mustard text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold font-heading text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">
                    {post.author.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-gray-900">
                  {post.author.name}
                </span>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            {/* Featured Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-mustard/20 to-orange-400/20 rounded-2xl flex items-center justify-center mb-10">
              <span className="text-6xl font-bold text-white/30 font-heading">
                {post.title.charAt(0)}
              </span>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose prose-lg prose-gray max-w-none
              prose-headings:font-heading prose-headings:text-gray-900
              prose-a:text-mustard prose-a:no-underline hover:prose-a:underline
              prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-gray-900
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-img:rounded-lg
              prose-blockquote:border-mustard prose-blockquote:bg-gray-50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
            "
            dangerouslySetInnerHTML={{
              __html: `<p class="my-4 leading-relaxed">${formatContent(post.content)}</p>`,
            }}
          />

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-500 mr-2">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <ShareButtons slug={post.slug} title={post.title} />
          </div>

          {/* Author Bio */}
          <AuthorBio post={post} />

          {/* Related Posts */}
          <RelatedPosts posts={relatedPosts} />

          {/* CTA */}
          <div className="mt-16 bg-[#141414] rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold font-heading text-white mb-3">
              Want to build something similar?
            </h3>
            <p className="text-gray-400 mb-6">
              Let&apos;s discuss how we can help bring your project to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-mustard text-black px-6 py-3 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
