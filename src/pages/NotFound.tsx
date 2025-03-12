
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-9xl font-bold text-energo-navy">404</h1>
        
        <div className="h-2 w-20 bg-energo-yellow mx-auto my-6 rounded-full"></div>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Strona nie została znaleziona
        </h2>
        
        <p className="text-gray-600 mb-8">
          Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
        </p>
        
        <Link 
          to="/" 
          className="btn-primary inline-flex items-center justify-center gap-2"
        >
          <ArrowLeft size={20} />
          <span>Wróć do strony głównej</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
