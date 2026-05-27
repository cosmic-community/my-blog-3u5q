export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-sm text-gray-600">
          © {year} My Blog. Powered by{' '}
          <a href="https://www.cosmicjs.com" className="text-brand-600 hover:underline" target="_blank" rel="noopener noreferrer">
            Cosmic
          </a>
          .
        </p>
      </div>
    </footer>
  );
}