import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SocialShare } from "@/components/ui/social-share";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_POSTS, getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog";
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  Clock,
  Phone,
  User,
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Rand Medical Center",
    };
  }

  return {
    title: `${post.title} | Rand Medical Center Blog`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 2);

  // Article schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorTitle,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
    },
    datePublished: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.domain}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      {/* Article Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Header */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
        <div className="container container-default mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-teal-600 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="max-w-3xl">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <div>
                  <span className="font-medium">{post.author}</span>
                  <span className="text-slate-400 mx-1">·</span>
                  <span className="text-sm">{post.authorTitle}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-900">
                {post.content.split("\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index}>{paragraph.replace("## ", "")}</h2>
                    );
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={index}>{paragraph.replace("### ", "")}</h3>
                    );
                  }
                  if (paragraph.startsWith("- **")) {
                    const match = paragraph.match(/- \*\*(.+?)\*\*: (.+)/);
                    if (match) {
                      return (
                        <p key={index}>
                          <strong>{match[1]}:</strong> {match[2]}
                        </p>
                      );
                    }
                  }
                  if (paragraph.startsWith("- ")) {
                    return (
                      <p key={index} className="pl-4">
                        • {paragraph.replace("- ", "")}
                      </p>
                    );
                  }
                  if (
                    paragraph.match(/^\d+\.\s+\*\*/)
                  ) {
                    const match = paragraph.match(/^\d+\.\s+\*\*(.+?)\*\*:?\s*(.*)$/);
                    if (match) {
                      return (
                        <p key={index}>
                          <strong>{match[1]}:</strong> {match[2]}
                        </p>
                      );
                    }
                  }
                  if (paragraph.trim()) {
                    return <p key={index}>{paragraph}</p>;
                  }
                  return null;
                })}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-slate-600">
                    Tags:
                  </span>
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="capitalize">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <SocialShare
                  url={`${SITE_CONFIG.domain}/blog/${post.slug}`}
                  title={post.title}
                  description={post.excerpt}
                />
              </div>

              {/* Related Content */}
              {(post.relatedConditions?.length || post.relatedTreatments?.length) && (
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-6">
                    Related Content
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {post.relatedConditions && post.relatedConditions.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-slate-700 mb-3">
                          Related Conditions
                        </h4>
                        <ul className="space-y-2">
                          {post.relatedConditions.map((condition) => (
                            <li key={condition.href}>
                              <Link
                                href={condition.href}
                                className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors"
                              >
                                <ChevronRight className="h-4 w-4" />
                                {condition.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {post.relatedTreatments && post.relatedTreatments.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-slate-700 mb-3">
                          Related Treatments
                        </h4>
                        <ul className="space-y-2">
                          {post.relatedTreatments.map((treatment) => (
                            <li key={treatment.href}>
                              <Link
                                href={treatment.href}
                                className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors"
                              >
                                <ChevronRight className="h-4 w-4" />
                                {treatment.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* CTA Card */}
              <Card className="p-6 mb-8 sticky top-24">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Have Questions?
                  </h3>
                  <p className="text-slate-600 text-sm mb-6">
                    Our specialists can help you understand your condition and
                    discuss treatment options.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full" asChild>
                      <Link href={SITE_CONFIG.bookingUrl}>
                        <Calendar className="h-4 w-4" />
                        Book Consultation
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={SITE_CONFIG.phoneTel}>
                        <Phone className="h-4 w-4" />
                        Call Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="group block p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                      >
                        <h4 className="font-medium text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-2 mb-2">
                          {relatedPost.title}
                        </h4>
                        <span className="text-sm text-slate-500">
                          {relatedPost.readTime}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">More Articles</h2>
            <Link
              href="/blog"
              className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700"
            >
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((otherPost) => (
                <Link
                  key={otherPost.slug}
                  href={`/blog/${otherPost.slug}`}
                  className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
                >
                  <Badge className="mb-3">{otherPost.category}</Badge>
                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                    {otherPost.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                    {otherPost.excerpt}
                  </p>
                  <span className="text-sm text-slate-500">
                    {otherPost.readTime}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
