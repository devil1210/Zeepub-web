import React from 'react';
import { Search as SearchIcon, Filter, SlidersHorizontal } from 'lucide-react';
import { BookCard } from '../components/BookCard';
import { Book } from '../types';

const MOCK_BOOKS: Book[] = [
  {
    id: '1',
    title: 'Dune',
    author: 'Frank Herbert',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1kLRccyldo3q2pAEl2_VimhXKm_8e4kBGEWG_Q7cRSdkvZiD36o-CxThPIb1ICtANI30_DqeW68K06yD5Jnq-l4r5l4MBSQo9v_zHKk3eSekyf1EnedejlPLP3cHiPiv_EN1hu4EovhN0TE41uR5RZBkx2BhAV1c5KUy_bZNA15PPmLPPsXCuPeUbsvaUfAKwwpdlcBk-wVPwSOS8jbBjJL7qh5ZrjfP0EuC2-XaOkxc-K6dOIDC4bQyNEvjVSuPnQUS_--B9IsY',
    format: 'EPUB',
    rating: 4.8,
    size: '1.2 MB',
    added: '2023-10-01',
    tags: ['Sci-Fi', 'Classic']
  },
  {
    id: '2',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9Y7BGqVQwPcKdwhQ5XQp6FKHq8w3Yfh6nPaq_2Ndbyns4bPVRT7PsKeSw3u_MvhuSSYRxwsRtHV9O1Hg1KVeRQib9StLfUisJDZuoX_eG9Z5vRt06lJABv9jygJ62I-LGqNWRcGaVhQlw9Qp3eoLXAa820bC6imA9Wl-U_5PspUkqpeg-12j08nvyZkzYfG6ec2CodBwKKGOr0MKliC5wED7L_Wp1s7cLYyo3KXXr4yX5sxEsJjWGb4D0CO94MpVLmTE5UtvJRt4',
    format: 'PDF',
    rating: 4.9,
    size: '12 MB',
    added: '2023-09-15',
    tags: ['Tech', 'Programming']
  },
  {
    id: '3',
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQra3hNZE6m7GN4bwm6iTtOz6TOLd2jD-DFbRN5ivziu3TzMGcjSaA2BBXMQjQGFdyezxiX0xb-ScrVPqBM5utU1oD0CPRcTAhJgdIWZKqSoxb9l5q_lVkmzNdHfJoW59fVhc__17dSRwctsGgdZr0sM7PcosEfRWid3kcq69h9wkftTUb138oSpSZcsv1pmCtAWTuaW1SB2NEcLXwZasuAkVqwLQSvbzaHs36r1iiWxO33cBCu0hEjozezoehBwLdKZ2l5gDxhBE',
    format: 'EPUB',
    rating: 4.9,
    size: '3.1 MB',
    added: '2023-10-05',
    tags: ['Fantasy']
  },
  {
    id: '4',
    title: 'Neuromancer',
    author: 'William Gibson',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnuc18GklGAiY9SOofT1WjOGho6D6b7HfrVbyBnUJE24hatsw2RaXRUxTGAu34xL-BAi5kdmncMlD-vzkwSNQpsENHODzdublXuZrmQN951qGb_UK2_qoVheIuBHHyv4O0j44wjcbuNl0hU7c7vtAPvQyw3LhnYoZnG6lvToZFuXQ2K8A87UhP9HeO3gzPa-qU_tjEHlsFdgYLp9aUlRFAZDZNzw2et0z92S3fULYleoL0Re0p5vUlGBcFJmEKtq4POcaaX1gBoAE',
    format: 'MOBI',
    rating: 4.6,
    size: '1.8 MB',
    added: '2023-08-20',
    tags: ['Sci-Fi', 'Cyberpunk']
  }
];

export const Search: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="bg-surface-highlight border border-white/5 rounded-2xl p-6 sticky top-0 z-20 shadow-xl shadow-black/50">
        <div className="relative w-full max-w-3xl mx-auto mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <SearchIcon className="text-gray-400 w-5 h-5" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-24 py-4 rounded-xl border border-white/10 bg-[#0A0A0A] text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent shadow-inner transition-all text-lg"
            placeholder="Search by title, author, or ISBN..."
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="inline-flex items-center px-2 py-1 border border-white/10 rounded text-xs font-mono text-gray-500">
              FTS5
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-md shadow-primary/20 hover:bg-blue-600 transition-colors">
            <SlidersHorizontal className="w-4 h-4" /> All Filters
          </button>
          <div className="h-6 w-px bg-white/10 mx-2"></div>
          {['Genre: Sci-Fi', 'Format: EPUB', 'Rating: 4.5+', 'Lang: EN'].map((filter) => (
            <button key={filter} className="px-4 py-2 rounded-full bg-[#0A0A0A] border border-white/10 text-gray-400 text-sm hover:border-primary hover:text-primary transition-colors">
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-primary">⚡</span>
            Results
            <span className="ml-2 px-2 py-0.5 rounded text-xs bg-white/5 text-gray-400 font-mono">0.024s</span>
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Sort by:</span>
            <select className="bg-transparent border-none text-white font-medium focus:ring-0 cursor-pointer">
              <option>Relevance</option>
              <option>Newest</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_BOOKS.map(book => (
            <BookCard key={book.id} book={book} onDownload={() => {}} />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center pb-10">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-highlight border border-white/10 text-gray-300 hover:bg-white/5 transition-all font-medium">
             Load more results
          </button>
        </div>
      </div>
    </div>
  );
};