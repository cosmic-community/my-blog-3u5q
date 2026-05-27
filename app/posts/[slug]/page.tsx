// app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getMetafieldValue } from '@/lib/cosmic';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const image = post.metadata?.featured_image;
  const description = getMetafieldValue(post.metadata?.description);
  const content = getMetafieldValue(post.metadata?.content) || post.content || '';
  const category = post.metadata?.category;
  const author = post.metadata?.author;
  const publishDate = getMetafieldValue(post.metadata?.publish_date);
  const readTime = getMetafieldValue(post.metadata?.read_time);
  const tagsRaw = post.metadata?.tags;
  const tags: string[] = Array.isArray(tagsRaw)
    ? tagsRaw
    : typeof tagsRaw === 'string' && tagsRaw
    ? tagsRaw.split(',').map((t: string) => t.trim()).filter(Boolean)
    : [];

  return (
    <article>
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-50 to-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {category && (
            <Link
              href={`/categories/${category.slug}`}
              className="inline-block px-3 py-1 text-xs font-semibold text-brand-700 bg-brand-100 rounded-full mb-4 hover:bg-brand-200 transition-colors"
            >
              {category.title}
            </Link>
          )}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          {description && (
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">{description}</p>
          )}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            {author && (
              <Link href={`/authors/${author.slug}`} className="flex items-center gap-2 hover:text-brand-600 transition-colors">
                {author.metadata?.avatar && (
                  <img
                    src={`${author.metadata.avatar.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                    alt={author.title}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                <span className="font-medium">{author.title}</span>
              </Link>
            )}
            {publishDate && (
              <>
                <span>•</span>
                <span>{publishDate}</span>
              </>
            )}
            {readTime && (
              <>
                <span>•</span>
                <span>{readTime} min read</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {image && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
          <img
            src={`${image.imgix_url}?w=2000&h=1000&fit=crop&auto=format,compress`}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
      )}

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-brand-600 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {author && (
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
            <div className="flex items-start gap-4">
              {author.metadata?.avatar && (
                <img
                  src={`${author.metadata.avatar.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
                  alt={author.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Written by</p>
                <Link href={`/authors/${author.slug}`} className="text-lg font-bold text-gray-900 hover:text-brand-600 transition-colors">
                  {author.title}
                </Link>
                {author.metadata?.bio && (
                  <p className="text-sm text-gray-600 mt-2">{getMetafieldValue(author.metadata.bio)}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}