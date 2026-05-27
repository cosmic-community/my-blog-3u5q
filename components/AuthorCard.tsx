import Link from 'next/link';
import { getMetafieldValue } from '@/lib/cosmic';
import type { Author } from '@/types';

export default function AuthorCard({ author }: { author: Author }) {
  const avatar = author.metadata?.avatar;
  const bio = getMetafieldValue(author.metadata?.bio);
  const name = getMetafieldValue(author.metadata?.name) || author.title;

  return (
    <Link href={`/authors/${author.slug}`} className="group block">
      <div className="h-full p-6 rounded-xl border border-gray-200 hover:border-brand-500 hover:shadow-lg transition-all duration-300 bg-white text-center">
        {avatar && (
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 ring-4 ring-brand-50">
            <img
              src={`${avatar.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
              alt={name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
          {name}
        </h3>
        {bio && <p className="text-sm text-gray-600 line-clamp-3">{bio}</p>}
      </div>
    </Link>
  );
}