import { Skeleton, SkeletonBlogPost } from "@/components/ui/LoadingSpinner";

export default function BlogPostLoading() {
  return (
    <main>
      {/* Header Skeleton */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-10" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-32" />
          </div>

          {/* Back link */}
          <Skeleton className="h-5 w-28" />
        </div>
      </section>

      {/* Post Content Skeleton */}
      <article className="py-12 lg:py-16 bg-white">
        <SkeletonBlogPost />
      </article>
    </main>
  );
}
