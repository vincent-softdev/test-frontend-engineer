'use client';

import { useState, useEffect } from 'react';
import { useSearchStore } from '@/store/useSearchStore';
import { ProductService } from '@/services/ProductService';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';

const HeaderSearch = () => {
  return (
    <div className="relative w-64">
      <HeaderSearch.Input />
      <HeaderSearch.Results />
    </div>
  );
};

/** ✅ SRP: Input Component (Handles user input & API calls) */
HeaderSearch.Input = () => {
  const { query, setQuery, setResults } = useSearchStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      const results = await ProductService.searchProducts(query); // ✅ Uses ProductService
      setResults(results);
      setLoading(false);
    };

    const debounce = setTimeout(fetchData, 300); // ✅ Debounce API call
    return () => clearTimeout(debounce);
  }, [query, setResults]);

  return (
    <div className="relative">
      <input
        type="text"
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <FiSearch className="absolute right-3 top-2 text-gray-400" size={18} />
      {loading && <p className="absolute right-10 top-2 text-gray-400">Loading...</p>}
    </div>
  );
};

/** ✅ SRP: Results Component (Handles dropdown of results) */
HeaderSearch.Results = () => {
  const { results, setQuery } = useSearchStore();

  if (results.length === 0) return null;

  return (
    <ul className="absolute left-0 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg max-h-60 overflow-auto">
      {results.map((product) => (
        <li key={product.id} className="p-2 hover:bg-gray-100">
          <Link href={`/products/${product.id}`} onClick={() => setQuery('')}>
            <span className="block">{product.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderSearch;
