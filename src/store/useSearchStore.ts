import { create } from 'zustand';
import { IProduct } from '@/types';

type SearchState = {
  query: string;
  results: IProduct[];
  setQuery: (query: string) => void;
  setResults: (results: IProduct[]) => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  query: '',
  results: [],
  setQuery: (query) => set({ query }),
  setResults: (results) => set({ results }),
}));
