import { getAllAuthors } from '@/lib/cosmic';
import AuthorCard from '@/components/AuthorCard';

export const metadata = {
  title: 'Authors | My Blog',
  description: 'Meet our writers'
};

export default async function AuthorsPage() {
  const authors = await getAllAuthors();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Our Authors</h1>
        <p className="text-lg text-gray-600">Meet the writers behind the stories.</p>
      </header>

      {authors.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600">No authors available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      )}
    </div>
  );
}