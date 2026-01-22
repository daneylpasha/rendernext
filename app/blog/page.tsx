"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";
import {
  getPostsByCategory,
  getFeaturedPost,
  getAllCategories,
  BlogPost,
} from "@/lib/blog-data";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Hero Section
function HeroSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">Blog</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-4">
            Insights & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Thoughts on mobile development, web apps, AI, and building digital
            products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Category Filter
function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}) {
  return (
    <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === category
                  ? "bg-mustard text-black"
                  : "bg-gray-100 text-gray-600 hover:bg-mustard/10 hover:text-mustard"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Featured Post Card
function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group">
          {/* Image */}
          <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-mustard/20 to-orange-400/20 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-mustard/30 to-orange-500/30" />
            <span className="text-6xl font-bold text-white/30 font-heading relative z-10">
              {post.title.charAt(0)}
            </span>
            {/* Featured badge */}
            <div className="absolute top-4 left-4 bg-mustard text-black text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <span className="text-mustard text-sm font-medium mb-2">
              {post.category}
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-gray-900 mb-4 group-hover:text-mustard transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600">
                    {post.author.name.charAt(0)}
                  </span>
                </div>
                <span>{post.author.name}</span>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Blog Post Card
function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group h-full flex flex-col">
          {/* Image */}
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
            <div
              className={`absolute inset-0 ${
                index % 3 === 0
                  ? "bg-gradient-to-br from-mustard/20 to-orange-400/20"
                  : index % 3 === 1
                  ? "bg-gradient-to-br from-blue-400/20 to-cyan-400/20"
                  : "bg-gradient-to-br from-purple-400/20 to-pink-400/20"
              }`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-white/30 font-heading">
                {post.title.charAt(0)}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <span className="text-mustard text-xs font-medium mb-2">
              {post.category}
            </span>
            <h3 className="text-lg font-semibold font-heading text-gray-900 mb-2 group-hover:text-mustard transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-1">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-[10px] font-medium text-gray-600">
                    {post.author.name.charAt(0)}
                  </span>
                </div>
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

// Main Blog Page
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(6);

  const categories = getAllCategories();
  const featuredPost = getFeaturedPost();
  const allPosts = getPostsByCategory(activeCategory);

  // Filter out featured post from regular grid if showing "All"
  const regularPosts =
    activeCategory === "All" && featuredPost
      ? allPosts.filter((post) => post.slug !== featuredPost.slug)
      : allPosts;

  const displayedPosts = regularPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < regularPosts.length;

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisiblePosts(6);
  };

  return (
    <main>
      <HeroSection />
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured Post (only on "All" category) */}
          {activeCategory === "All" && featuredPost && (
            <FeaturedPostCard post={featuredPost} />
          )}

          {/* Blog Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedPosts.map((post, index) => (
              <BlogPostCard key={post.slug} post={post} index={index} />
            ))}
          </motion.div>

          {/* Empty State */}
          {displayedPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No posts found in this category yet.
              </p>
            </div>
          )}

          {/* Load More */}
          {hasMorePosts && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Load More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-4">
            Want to discuss your project?
          </h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s talk about how we can help bring your ideas to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
