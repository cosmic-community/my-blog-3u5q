import Link from 'next/link';
import { getMetafieldValue } from '@/lib/cosmic';
import type { Post } from '@/types';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  const image = post.metadata?.featured_image;
  const description = getMetafieldValue(post.metadata?.description);
  const category = post.metadata?.category;
  const author = post.metadata?.author;
  const publishDate = getMetafieldValue(post.metadata?.publish_date);
  const readTime = getMetafieldValue(post.metadata?.read_time);

  if (featured) {
    return (
      <Link href={`/posts/${post.slug}`} className="group block">
        <article className="overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          {image && (
            <div className="aspect-[16/9] overflow-hidden bg-gray-100">
              <img
                src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
                alt={post.title}
                width={1600}
                height={900}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          <div className="p-8">
            {category && (
              <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-700 bg-brand-50 rounded-full mb-3">
                {category.title}
              </span>
            )}
            <h2 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
              {post.title}
            </h2>
            {description && (
              <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
            )}
            <div className="flex items-center gap-3 text-sm text-gray-500">
              {author && <span className="font-medium">{author.title}</span>}
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
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <article className="h-full overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
        {image && (
          <div className="aspect-[16/10] overflow-hidden bg-gray-100">
            <img
              src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={post.title}
              width={800}
              height={500}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6">
          {category && (
            <span className="inline-block px-2.5 py-1 text-xs font-semibold text-brand-700 bg-brand-50 rounded-full mb-3">
              {category.title}
            </span>
          )}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          {description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
          )}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            {author && <span className="font-medium">{author.title}</span>}
            {publishDate && (
              <>
                <span>•</span>
                <span>{publishDate}</span>
              </>
            )}
            {readTime && (
              <>
                <span>•</span>
                <span>{readTime} min</span>
              </>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}