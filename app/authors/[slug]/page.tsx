// app/authors/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getAuthorBySlug, getPostsByAuthor, getMetafieldValue } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const posts = await getPostsByAuthor(author.id);
  const bio = getMetafieldValue(author.metadata?.bio);
  const email = getMetafieldValue(author.metadata?.email);
  const avatar = author.metadata?.avatar;
  const name = getMetafieldValue(author.metadata?.name) || author.title;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        {avatar && (
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-100 ring-4 ring-brand-50">
            <img
              src={`${avatar.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
              alt={name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">{name}</h1>
        {bio && <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">{bio}</p>}
        {email && (
          <a href={`mailto:${email}`} className="text-brand-600 hover:text-brand-700 font-medium">
            {email}
          </a>
        )}
      </header>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Posts by {name}</h2>
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600">No posts by this author yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}