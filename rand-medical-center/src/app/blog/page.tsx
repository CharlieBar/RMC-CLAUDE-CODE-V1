import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog";
import {
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  Phone,
  User,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Health Blog | Rand Medical Center",
  description:
    "Medical insights and health education from the specialists at Rand Medical Center. Articles on pain management, orthopedics, physical therapy, and wellness.",
  openGraph: {
    title: "Health Blog | Rand Medical Center Arlington Heights",
    description:
      "Expert health articles from our board-certified physicians and specialists.",
  },
};

export default function BlogPage() {
  const featuredPost = BLOG_POSTS[0];
  const recentPosts = BLOG_POSTS.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <FileText className="h-4 w-4 mr-1" />
              Health Blog
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Medical Insights &{" "}
              <span className="gradient-text-medical">Health Education</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Stay informed with articles from our board-certified specialists.
              Learn about treatments, conditions, recovery tips, and ways to
              maintain your health.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section bg-white">
          <div className="container container-default mx-auto">
            <Badge variant="secondary" className="mb-8">
              Featured Article
            </Badge>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-teal-300 hover:shadow-xl transition-all"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString(
                        "en-US",
                        { month: "long", day: "numeric", year: "numeric" }
                      )}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-48 h-48 bg-teal-100 rounded-2xl flex items-center justify-center">
                    <FileText className="h-24 w-24 text-teal-300" />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center text-teal-600 font-medium">
                Read Article
                <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-8 bg-slate-50 border-y border-slate-200">
        <div className="container container-default mx-auto">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-slate-600">
              Categories:
            </span>
            <div className="flex flex-wrap gap-2">
              {BLOG_CATEGORIES.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="cursor-pointer hover:bg-teal-50 hover:border-teal-300"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Recent Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <Badge className="w-fit mb-4">{post.category}</Badge>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-200">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Have Questions About Your Health?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Our specialists are here to help. Schedule a consultation to
              discuss your symptoms and treatment options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600"
                asChild
              >
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Consultation
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
