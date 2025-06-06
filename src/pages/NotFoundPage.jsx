import { Link } from 'react-router-dom';
import { Coffee, Home } from 'lucide-react';

export default function NotFoundPage(){
  return (
    <div className="pt-20 min-h-screen bg-neutral-50 flex items-center justify-center">
      <div className="container-custom py-12 text-center">
        <div className="mb-6">
          <Coffee size={64} className="mx-auto text-primary-700" />
        </div>
        <h1 className="font-heading text-6xl md:text-7xl text-primary-800 mb-4">404</h1>
        <h2 className="font-heading text-2xl md:text-3xl text-primary-700 mb-6">Page Not Found</h2>
        <p className="text-neutral-600 max-w-md mx-auto mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 btn-primary py-3 px-6"
        >
          <Home size={18} />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};