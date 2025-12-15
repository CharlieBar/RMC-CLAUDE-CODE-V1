import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("skeleton", className)} />;
}

function SkeletonText({ className }: SkeletonProps) {
  return <div className={cn("skeleton skeleton-text w-full", className)} />;
}

function SkeletonAvatar({ className }: SkeletonProps) {
  return <div className={cn("skeleton skeleton-avatar w-10 h-10", className)} />;
}

function SkeletonButton({ className }: SkeletonProps) {
  return <div className={cn("skeleton skeleton-button h-10 w-24", className)} />;
}

// Card Skeleton
function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 space-y-4",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="skeleton w-12 h-12 rounded-xl" />
        <div className="flex-1 space-y-2">
          <div className="skeleton skeleton-text w-3/4" />
          <div className="skeleton skeleton-text-sm w-1/2" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="skeleton skeleton-text w-full" />
        <div className="skeleton skeleton-text w-5/6" />
      </div>
    </div>
  );
}

// Provider Card Skeleton
function SkeletonProviderCard({ className }: SkeletonProps) {
  return (
    <div className={cn("text-center space-y-4", className)}>
      <div className="skeleton aspect-square rounded-2xl w-full" />
      <div className="space-y-2">
        <div className="skeleton skeleton-text-lg w-2/3 mx-auto" />
        <div className="skeleton skeleton-text-sm w-1/2 mx-auto" />
        <div className="skeleton skeleton-text-sm w-1/3 mx-auto" />
      </div>
    </div>
  );
}

// Testimonial Card Skeleton
function SkeletonTestimonial({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 space-y-4",
        className
      )}
    >
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="skeleton w-5 h-5 rounded" />
        ))}
      </div>
      <div className="space-y-2">
        <div className="skeleton skeleton-text w-full bg-white/10" />
        <div className="skeleton skeleton-text w-full bg-white/10" />
        <div className="skeleton skeleton-text w-3/4 bg-white/10" />
      </div>
      <div className="flex items-center gap-3">
        <div className="skeleton skeleton-avatar bg-white/10" />
        <div className="space-y-2">
          <div className="skeleton skeleton-text w-24 bg-white/10" />
          <div className="skeleton skeleton-text-sm w-16 bg-white/10" />
        </div>
      </div>
    </div>
  );
}

// Condition Link Skeleton
function SkeletonConditionLink({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 p-4 bg-white rounded-xl border border-slate-200",
        className
      )}
    >
      <div className="skeleton w-4 h-4 rounded" />
      <div className="skeleton skeleton-text flex-1" />
    </div>
  );
}

// Service Card Skeleton
function SkeletonServiceCard({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 space-y-4",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="skeleton w-12 h-12 rounded-xl" />
        <div className="flex-1 space-y-2">
          <div className="skeleton skeleton-text-lg w-3/4" />
          <div className="skeleton skeleton-text-sm w-full" />
          <div className="skeleton skeleton-text-sm w-2/3" />
        </div>
      </div>
      <div className="skeleton skeleton-text-sm w-24" />
    </div>
  );
}

// Blog Article Card Skeleton
function SkeletonBlogCard({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white overflow-hidden",
        className
      )}
    >
      <div className="skeleton aspect-video w-full" />
      <div className="p-6 space-y-3">
        <div className="flex gap-2">
          <div className="skeleton skeleton-text-sm w-16 rounded-full" />
          <div className="skeleton skeleton-text-sm w-24" />
        </div>
        <div className="skeleton skeleton-text-lg w-full" />
        <div className="skeleton skeleton-text w-full" />
        <div className="skeleton skeleton-text w-3/4" />
      </div>
    </div>
  );
}

// Hero Section Skeleton
function SkeletonHero({ className }: SkeletonProps) {
  return (
    <div className={cn("py-20 lg:py-32 px-4", className)}>
      <div className="max-w-3xl space-y-6">
        <div className="skeleton skeleton-button w-48 h-7" />
        <div className="space-y-3">
          <div className="skeleton h-12 md:h-14 lg:h-16 w-full rounded-lg" />
          <div className="skeleton h-12 md:h-14 lg:h-16 w-3/4 rounded-lg" />
        </div>
        <div className="space-y-2">
          <div className="skeleton skeleton-text w-full" />
          <div className="skeleton skeleton-text w-5/6" />
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <div className="skeleton w-5 h-5 rounded" />
            <div className="skeleton skeleton-text w-24" />
          </div>
          <div className="flex items-center gap-2">
            <div className="skeleton w-5 h-5 rounded" />
            <div className="skeleton skeleton-text w-32" />
          </div>
          <div className="flex items-center gap-2">
            <div className="skeleton w-5 h-5 rounded" />
            <div className="skeleton skeleton-text w-28" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="skeleton skeleton-button w-44 h-12" />
          <div className="skeleton skeleton-button w-40 h-12" />
        </div>
      </div>
    </div>
  );
}

export {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonCard,
  SkeletonProviderCard,
  SkeletonTestimonial,
  SkeletonConditionLink,
  SkeletonServiceCard,
  SkeletonBlogCard,
  SkeletonHero,
};
