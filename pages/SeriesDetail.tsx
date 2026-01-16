import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
  Star, 
  Library, 
  Clock, 
  ListOrdered, 
  SortAsc, 
  Filter, 
  Download, 
  BookOpen, 
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDownUp,
  Calendar,
  Reply
} from 'lucide-react';
import { Series, Volume } from '../types';

interface SeriesDetailProps {
  series: Series;
  onBack: () => void;
  onSelectVolume: (volume: Volume) => void;
}

export const SeriesDetail: React.FC<SeriesDetailProps> = ({ series, onBack, onSelectVolume }) => {
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

  // Generate extended mock volumes if needed to show pagination
  const totalVolumeCount = Math.max(series.volumesCount, 35); 
  
  const allVolumes: Volume[] = Array.from({ length: totalVolumeCount }).map((_, i) => ({
    id: `vol-${i + 1}`,
    seriesId: series.id,
    title: `${series.title} Vol. ${i + 1}`,
    volumeNumber: i + 1,
    coverUrl: series.coverUrl, 
    publishedDate: 'Julio 2017',
    pages: 410,
    format: 'EPUB',
    rating: 4.7,
    description: series.description,
    // Mock data for the new card design
    uploader: '[Grupo Traductor]',
    downloadCount: Math.floor(Math.random() * 50)
  }));

  const totalPages = Math.ceil(allVolumes.length / itemsPerPage);

  const currentVolumes = allVolumes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const scrollToTop = () => {
    // Scroll the main layout container (Layout.tsx -> main)
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
      mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    // Removed h-full and overflow-hidden to allow the page to grow and scroll naturally within the Layout's main container
    <div className="flex-1 flex flex-col min-h-0 relative font-sans text-gray-100">
      
      {/* Mobile Header */}
      <header className="md:hidden h-16 bg-[#050505]/80 backdrop-blur border-b border-white/10 flex items-center justify-between px-4 shrink-0 z-40 sticky top-0">
        <span className="font-bold text-lg">Zeepub<span className="text-primary">Bot</span></span>
        <button onClick={onBack} className="text-gray-400 hover:text-primary">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </header>

      <div className="relative w-full h-80 shrink-0 overflow-hidden">
        {/* Dynamic Blurred Background using Series Cover */}
        <div 
            className="absolute inset-0 bg-cover bg-center blur-sm scale-110 opacity-50"
            style={{ backgroundImage: `url('${series.coverUrl}')` }}
        ></div>
        
        {/* Gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#050505]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        
        <div className="absolute bottom-0 w-full px-4 sm:px-6 lg:px-8 pb-8 z-20">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-6 items-end sm:items-end">
            
            {/* Foregound Cover Image - Hidden on Mobile, Visible on Tablet+ */}
            <div className="hidden sm:block relative shrink-0 w-32 h-48 sm:w-40 sm:h-60 -mb-4 shadow-2xl rounded-lg overflow-hidden ring-4 ring-white/10">
              <img alt={`${series.title} Cover`} className="w-full h-full object-cover" src={series.coverUrl}/>
            </div>

            <div className="flex-1 pb-2 w-full">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/20 uppercase tracking-wide">
                  {series.genre}
                </span>
                <span className="flex items-center gap-1 text-yellow-500 text-xs sm:text-sm font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  {series.rating}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
                {series.title}
              </h1>
              <p className="text-white/80 text-sm sm:text-base mb-4 font-medium">Por {series.author}</p>
              
              {/* Description limits adjustments */}
              <p className="text-gray-200 text-xs sm:text-sm line-clamp-3 sm:line-clamp-3 max-w-2xl leading-relaxed mb-4">
                {series.description || "Hajime Nagumo, de diecisiete años, es un otaku promedio. Sin embargo, su vida simple de pasar noches en vela y dormir en la escuela cambia repentinamente cuando él, junto con el resto de su clase, ¡es invocado a un mundo de fantasía!"}
              </p>
              
              <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-300 font-mono">
                <span className="flex items-center gap-1.5"><Library className="w-4 h-4 text-primary" /> {totalVolumeCount} Volúmenes</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> Actualizado Hoy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Removed overflow-y-auto here so it flows naturally */}
      <div className="flex-1 pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <ListOrdered className="w-5 h-5 text-primary" />
              Lista de Volúmenes
            </h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-primary transition-colors">
                <SortAsc className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-primary transition-colors">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            
            {/* Volume List */}
            {currentVolumes.map((vol, index) => (
              <div 
                key={vol.id} 
                onClick={() => onSelectVolume(vol)}
                className="group relative flex gap-4 p-4 rounded-xl border border-white/5 bg-[#0b0d10] hover:bg-[#12151a] hover:border-[#2AABEE]/30 transition-all duration-200 cursor-pointer overflow-hidden"
              >
                {/* Image */}
                <div className="shrink-0 w-24 sm:w-28 aspect-[2/3] bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-white/5">
                  <img alt={vol.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={vol.coverUrl}/>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col">
                    
                    {/* Header: Title & Subtitle */}
                    <div className="mb-1">
                        <h3 className="text-[#2AABEE] font-bold text-base sm:text-lg leading-tight line-clamp-2">
                            {vol.title}
                        </h3>
                        <p className="text-gray-500 text-xs italic font-serif mt-0.5 line-clamp-1">
                            Byōsoku Go Senchimētoru + Hoshi wo Ou Kodomo
                        </p>
                    </div>

                    {/* Author & Group */}
                    <div className="mb-2">
                        <p className="text-[#2AABEE] text-sm font-medium">
                           {series.author} - Asahi Akisaka
                        </p>
                        <p className="text-gray-400 text-xs mt-0.5">
                           Volumen {vol.volumeNumber} <span className="text-[#2AABEE]">[Grupo Traductor]</span>
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs font-bold mb-auto">
                        <div className="flex items-center gap-1 text-gray-400">
                           <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                           <span className="text-gray-300">0.0</span> <span className="text-gray-600">(0)</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#2AABEE]">
                           <Download className="w-3.5 h-3.5" />
                           <span>{vol.downloadCount || 4}</span>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                        <button 
                            className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#2AABEE]/10 border border-[#2AABEE]/20 text-[#2AABEE] text-xs font-bold hover:bg-[#2AABEE] hover:text-white transition-all shadow-[0_0_10px_rgba(42,171,238,0.1)] group-hover:shadow-[0_0_15px_rgba(42,171,238,0.2)]"
                            onClick={(e) => { e.stopPropagation(); onSelectVolume(vol); }}
                        >
                            <Download className="w-3.5 h-3.5" />
                            DESCARGAR
                        </button>
                        
                        <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                            {series.type || 'NOVELA LIGERA'}
                        </span>
                    </div>

                </div>

                {/* Right Arrow */}
                <div className="hidden sm:flex items-center justify-center pl-2 text-gray-600 group-hover:text-[#2AABEE] transition-colors">
                    <ChevronRight className="w-6 h-6" />
                </div>

              </div>
            ))}
            
            {/* Pagination Info */}
            <div className="text-center py-4 text-xs text-gray-500 font-medium">
                Página {currentPage} de {totalPages} • {allVolumes.length} Volúmenes
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Bottom Navigation (Same as Catalog) */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50 animate-in slide-in-from-bottom-4 duration-300 flex flex-col gap-3">
         
         {/* Sort Options Row (Collapsible) - Same as Catalog */}
         {isSortMenuOpen && (
          <div className="glass-panel rounded-2xl p-2 border border-white/10 shadow-2xl bg-[#0f1115]/95 backdrop-blur-xl animate-in slide-in-from-bottom-2 fade-in duration-200">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {[
                  { id: 'num-asc', label: '1 - 9', icon: SortAsc },
                  { id: 'num-desc', label: '9 - 1', icon: SortAsc },
                  { id: 'date', label: 'FECHA', icon: Calendar },
                  { id: 'rating', label: 'VALORACIÓN', icon: Star },
              ].map((option) => (
                  <button 
                    key={option.id}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border bg-white/5 text-gray-400 border-transparent hover:bg-white/10 hover:text-white"
                  >
                    <option.icon className="w-3 h-3" />
                    {option.label}
                  </button>
              ))}
            </div>
          </div>
        )}

         <div className="glass-panel rounded-full p-1 border border-white/10 shadow-2xl bg-[#0f1115]/90 backdrop-blur-md flex items-center justify-between">
            {/* Previous */}
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`flex-1 flex flex-col items-center justify-center py-2.5 px-2 rounded-l-full hover:bg-white/5 active:bg-white/10 transition-colors group ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'text-gray-400 active:text-white'}`}
            >
              <ChevronLeft className="w-4 h-4 mb-0.5 group-active:-translate-x-1 transition-transform" />
              <span className="text-[9px] font-black uppercase tracking-widest">Anterior</span>
            </button>
            
            <div className="w-px h-8 bg-white/5"></div>

            {/* Sort Toggle */}
            <button 
              onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}
              className={`flex-1 flex flex-col items-center justify-center py-2.5 px-2 hover:bg-white/5 transition-colors group relative ${isSortMenuOpen ? 'text-[#2AABEE]' : 'text-gray-300'}`}
            >
              <div className={`absolute inset-x-2 bottom-0 h-0.5 rounded-t-full bg-[#2AABEE] transition-all duration-300 ${isSortMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>
              <ArrowDownUp className="w-4 h-4 mb-0.5" />
              <span className="text-[9px] font-black uppercase tracking-widest">Ordenar</span>
            </button>
            
            <div className="w-px h-8 bg-white/5"></div>

            {/* REPLACED Scroll Top WITH Back Button (Volver) */}
            <button 
              onClick={onBack}
              className="flex-1 flex flex-col items-center justify-center py-2.5 px-2 hover:bg-white/5 text-gray-400 active:text-white transition-colors group"
            >
              <Reply className="w-4 h-4 mb-0.5 group-active:-translate-y-1 transition-transform" />
              <span className="text-[9px] font-black uppercase tracking-widest">Volver</span>
            </button>
            
            <div className="w-px h-8 bg-white/5"></div>

            {/* Next */}
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex-1 flex flex-col items-center justify-center py-2.5 px-2 rounded-r-full hover:bg-white/5 active:bg-white/10 transition-colors group ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'text-gray-400 active:text-white'}`}
            >
              <ChevronRight className="w-4 h-4 mb-0.5 group-active:translate-x-1 transition-transform" />
              <span className="text-[9px] font-black uppercase tracking-widest">Siguiente</span>
            </button>
        </div>
      </div>

    </div>
  );
};