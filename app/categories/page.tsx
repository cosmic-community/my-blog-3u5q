import { getAllCategories } from '@/lib/cosmic';
import CategoryCard from '@/components/CategoryCard';

export const metadata = {
  title: 'Categories | My Blog',
  description: 'Browse posts by category'
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Categories</h1>
        <p className="text-lg text-gray-600">Find content that interests you.</p>
      </header>

      {categories.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600">No categories available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
}