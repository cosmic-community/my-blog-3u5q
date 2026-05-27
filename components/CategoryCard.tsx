import Link from 'next/link';
import { getMetafieldValue } from '@/lib/cosmic';
import type { Category } from '@/types';

export default function CategoryCard({ category }: { category: Category }) {
  const icon = category.metadata?.icon_image;
  const description = getMetafieldValue(category.metadata?.description);

  return (
    <Link href={`/categories/${category.slug}`} className="group block">
      <div className="h-full p-6 rounded-xl border border-gray-200 hover:border-brand-500 hover:shadow-lg transition-all duration-300 bg-white">
        {icon && (
          <div className="w-14 h-14 mb-4 rounded-lg overflow-hidden bg-brand-50">
            <img
              src={`${icon.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
              alt={category.title}
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
          {category.title}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        )}
      </div>
    </Link>
  );
}