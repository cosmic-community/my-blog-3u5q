// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getPostsByCategory, getMetafieldValue } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = await getPostsByCategory(category.id);
  const description = getMetafieldValue(category.metadata?.description);
  const icon = category.metadata?.icon_image;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        {icon && (
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden bg-brand-50">
            <img
              src={`${icon.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
              alt={category.title}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">{category.title}</h1>
        {description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
        )}
      </header>

      {posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600">No posts in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}