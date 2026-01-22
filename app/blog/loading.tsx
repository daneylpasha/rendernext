import { Skeleton, SkeletonCard } from "@/components/ui/LoadingSpinner";

export default function BlogLoading() {
  return (
    <main>
      {/* Hero Section Skeleton */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-10" />
          </div>

          {/* Title */}
          <Skeleton className="h-12 w-80 mb-4" />
          <Skeleton className="h-6 w-96 max-w-full" />
        </div>
      </section>

      {/* Category Filter Skeleton */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 py-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid Skeleton */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured Post Skeleton */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <Skeleton className="aspect-video lg:aspect-auto lg:min-h-[400px]" />
              <div className="p-8 flex flex-col justify-center space-y-4">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="flex items-center gap-4 pt-4">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
