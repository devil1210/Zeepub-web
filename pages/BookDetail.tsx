import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Share2, 
  Flag,
  Calendar,
  Hash,
  User,
  ArrowDownToLine,
  Tag,
  Info,
  Library,
  FileText,
  Clock,
  Database,
  PenTool,
  Languages,
  FileBox,
  Layers,
  BookOpen,
  Globe,
  Star
} from 'lucide-react';
import { Volume, Series } from '../types';
import { ReportIssueModal } from '../components/ReportIssueModal';

interface BookDetailProps {
  volume: Volume;
  series: Series;
  onBack: () => void;
}

export const BookDetail: React.FC<BookDetailProps> = ({ volume, series, onBack }) => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  // Fallback data if fields are missing (mocking for display purposes based on screenshots)
  const displayData = {
    ...volume,
    romajiTitle: volume.romajiTitle || 'Byōsoku Go Senchimētoru + Hoshi wo Ou Kodomo',
    language: volume.language || 'Español',
    size: volume.size || '4.29 MB',
    format: volume.format || 'Epub',
    epubVersion: volume.epubVersion || '3.0',
    uploader: volume.uploader || 'ZeepubAdmin',
    wordCount: volume.wordCount || 68082,
    pages: volume.pages || 226,
    readTime: volume.readTime || '340 min / 5.7 horas',
    lastUpdated: '27/11/2025',
    downloadCount: volume.downloadCount || 4,
    description: volume.description || `5 Centímetros por Segundo: Cuando Takaki conoce a Akari en la escuela primaria, son tan amigos como los ladrones. Ella siempre le enseña las cosas importantes, mientras que él hace lo posible por protegerla. Sin embargo, cuando se separan en la escuela secundaria, tienen que encontrar su camino en la vida sin el otro... El director Makoto Shinkai describe con delicadeza los paisajes internos de sus personajes a través de tres capítulos de la vida de un chico. Niños que Persiguen Voces Perdidas: Asuna es una chica tranquila y tímida que vive en la ciudad montañosa de Mizunofuchi. Un día conoce a Shun, un chico que dice ser de una tierra mítica conocida como Agartha. Sin embargo, justo cuando empieza a formarse un vínculo entre ellos, Shun desaparece. Mientras Asuna desea volver a verlo, se encuentra con Shin, otro chico que se parece a Shun, y con Morisaki, un profesor que busca Agartha. Los tres parten hacia el legendario país, cada uno con su propio objetivo y sus propias lecciones que aprender en el camino.`,
    demography: volume.demography || ['MADURO', 'ADULTOS/SEINEN'],
    genres: ['Drama', 'Romance', 'Recuentos de la vida'],
    illustrator: volume.illustrator || 'Asahi Akisaka',
    translator: volume.translator || 'Traductor',
    group: volume.group || 'Grupo Traductor',
    typesetter: volume.typesetter || 'Resan', // Maquetador
    isbn: volume.isbn || '978-19-7531-569-6',
    asin: volume.asin || 'B08R3GGRWW'
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 relative font-sans text-gray-100 bg-[#050505]">
       <ReportIssueModal isOpen={isReportModalOpen} onClose={() => setIsReportModalOpen(false)} />

       {/* Navbar for Mobile */}
       <header className="md:hidden h-16 bg-[#050505]/90 backdrop-blur border-b border-white/10 flex items-center justify-between px-4 shrink-0 sticky top-0 z-40">
        <button onClick={onBack} className="text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <span className="font-bold text-sm text-gray-200 truncate max-w-[200px]">{displayData.title}</span>
        <button onClick={() => setIsReportModalOpen(true)} className="text-gray-400 hover:text-red-400 transition-colors">
          <Flag className="w-5 h-5" />
        </button>
      </header>

      {/* Desktop Back Button */}
      <div className="hidden md:flex pt-6 px-8 max-w-7xl mx-auto w-full">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
               <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">Volver</span>
          </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-32 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* LEFT COLUMN: Cover & Actions */}
                <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6">
                    {/* Cover Wrapper */}
                    <div className="relative w-[70%] sm:w-[60%] lg:w-full mx-auto lg:mx-0">
                         <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 relative group">
                            <img src={displayData.coverUrl} alt={displayData.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50"></div>
                         </div>
                    </div>

                     {/* Actions (Desktop mainly, kept for tablet/larger mobile layouts if needed, but primary mobile nav is bottom bar) */}
                     <div className="hidden md:flex flex-col gap-3">
                        <button className="w-full py-3.5 bg-[#2AABEE] hover:bg-[#2AABEE]/90 text-white text-sm font-black uppercase tracking-widest rounded-xl shadow-lg shadow-blue-500/20 transition-all transform active:scale-95 flex items-center justify-center gap-2">
                            <ArrowDownToLine className="w-5 h-5" />
                            Descargar
                        </button>
                        <div className="grid grid-cols-2 gap-3">
                           <button className="py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider">
                                <Share2 className="w-4 h-4" />
                                Compartir
                           </button>
                           <button onClick={() => setIsReportModalOpen(true)} className="py-3.5 bg-white/5 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 text-gray-400 rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider">
                                <Flag className="w-4 h-4" />
                                Reportar
                           </button>
                        </div>
                     </div>
                     
                     {/* Mobile Inline Actions (Just Download/Share for redundancy if bottom bar is missed, but we can hide Download to reduce clutter) */}
                     <div className="md:hidden flex gap-3">
                        <button className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider">
                             <Share2 className="w-4 h-4" />
                             Compartir
                        </button>
                     </div>

                     {/* Extra Info visible in sidebar (Desktop) */}
                     <div className="hidden lg:block glass-panel p-4 rounded-xl border border-white/5 bg-[#0b0d10]">
                        <div className="flex items-center justify-between text-xs font-medium text-gray-400 mb-2">
                           <span>Descargas Totales</span>
                           <span className="text-white font-bold">{displayData.downloadCount}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-medium text-gray-400">
                           <span>Última Actualización</span>
                           <span className="text-white font-bold">{displayData.lastUpdated}</span>
                        </div>
                     </div>
                </div>

                {/* RIGHT COLUMN: Content */}
                <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
                    
                    {/* Header Info */}
                    <div>
                         {/* Group/Translator Badges */}
                        <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-wider">
                            <span className="bg-[#2AABEE]/10 text-[#2AABEE] border border-[#2AABEE]/20 px-2 py-1 rounded-md">
                                {displayData.group}
                            </span>
                            <span className="text-gray-600 px-1">/</span>
                            <span className="bg-white/5 text-gray-400 border border-white/10 px-2 py-1 rounded-md">
                                {displayData.translator}
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-2">
                            {displayData.title}
                        </h1>
                        <h2 className="text-sm sm:text-lg text-gray-400 italic font-serif mb-6 leading-relaxed">
                            {displayData.romajiTitle}
                        </h2>

                        {/* Author/Stats Row */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400 border-b border-white/5 pb-6 mb-2">
                             <div className="flex items-center gap-2 text-white">
                                <User className="w-4 h-4 text-[#2AABEE]" />
                                <span className="font-bold hover:underline cursor-pointer">{series.author}</span>
                             </div>
                             <div className="flex items-center gap-2">
                                <PenTool className="w-4 h-4" />
                                <span>{displayData.illustrator}</span>
                             </div>
                             <div className="flex items-center gap-2">
                                <Hash className="w-4 h-4" />
                                <span>{volume.volumeNumber > 0 ? `Volumen ${volume.volumeNumber}` : 'Volumen Único'}</span>
                             </div>
                             <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{volume.publishedDate}</span>
                             </div>
                        </div>
                    </div>

                    {/* Genres & Tags */}
                     <div className="flex flex-wrap gap-2">
                        {displayData.demography.map((tag) => (
                          <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#004d40] text-[#4db6ac] border border-[#00695c] text-[10px] font-black uppercase tracking-wider shadow-sm">
                            {tag}
                          </span>
                        ))}
                        {displayData.genres.map((genre) => (
                   <span key={genre} className="px-3 py-1.5 rounded-lg bg-[#1f2937] text-gray-300 border border-[#374151] text-[10px] font-bold uppercase tracking-wider hover:bg-[#374151] transition-colors cursor-pointer">
                             {genre}
                           </span>
                        ))}
                     </div>

                    {/* Synopsis */}
                    <div className="glass-panel bg-[#0b0d10] border border-white/5 rounded-2xl p-6 lg:p-8 shadow-xl">
                        <div className="flex items-center gap-2 mb-4 text-[#2AABEE]">
                            <FileText className="w-5 h-5" />
                            <h3 className="text-xs font-black uppercase tracking-widest">Sinopsis</h3>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base leading-7 sm:leading-8 whitespace-pre-line font-medium text-justify">
                            {displayData.description}
                        </p>
                    </div>

                    {/* Two Column Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {/* Book Details */}
                        <div className="glass-panel bg-[#0b0d10] border border-white/5 rounded-2xl p-6 shadow-xl h-full">
                             <div className="flex items-center gap-2 mb-6 text-[#2AABEE]">
                                <Library className="w-5 h-5" />
                                <h3 className="text-xs font-black uppercase tracking-widest">Detalles del Libro</h3>
                             </div>
                             <div className="space-y-0.5">
                                {[
                                  { label: 'Serie', value: series.title, white: true },
                                  { label: 'Volumen', value: `${volume.volumeNumber} (Único)` },
                                  { label: 'ISBN', value: displayData.isbn, white: true, font: 'mono' },
                                  { label: 'ASIN', value: displayData.asin, white: true, font: 'mono' },
                                  { label: 'Grupo', value: displayData.group, color: 'text-[#2AABEE]' },
                                  { label: 'Maquetador', value: displayData.typesetter, white: true },
                                ].map((item, idx) => (
                                   <div key={idx} className="flex justify-between py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] px-2 -mx-2 rounded transition-colors">
                                      <span className="text-sm text-gray-500 font-medium">{item.label}</span>
                                      <span className={`text-sm text-right ${item.color || (item.white ? 'text-gray-200 font-bold' : 'text-gray-400')} ${item.font === 'mono' ? 'font-mono tracking-tight' : ''}`}>
                                        {item.value}
                                      </span>
                                   </div>
                                ))}
                             </div>
                        </div>

                         {/* Technical Info */}
                        <div className="glass-panel bg-[#0b0d10] border border-white/5 rounded-2xl p-6 shadow-xl h-full">
                             <div className="flex items-center gap-2 mb-6 text-[#2AABEE]">
                                <Info className="w-5 h-5" />
                                <h3 className="text-xs font-black uppercase tracking-widest">Información Técnica</h3>
                             </div>
                             <div className="space-y-0.5">
                                {[
                                  { label: 'Formato', value: displayData.format, white: true },
                                  { label: 'Versión', value: displayData.epubVersion, white: true },
                                  { label: 'Tamaño', value: displayData.size, white: true },
                                  { label: 'Páginas', value: displayData.pages, white: true },
                                  { label: 'Palabras', value: displayData.wordCount?.toLocaleString(), white: true },
                                  { label: 'Lectura', value: displayData.readTime, white: true },
                                ].map((item, idx) => (
                                   <div key={idx} className="flex justify-between py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] px-2 -mx-2 rounded transition-colors">
                                      <span className="text-sm text-gray-500 font-medium">{item.label}</span>
                                      <span className={`text-sm text-right ${item.white ? 'text-gray-200 font-bold' : 'text-gray-400'}`}>
                                        {item.value}
                                      </span>
                                   </div>
                                ))}
                             </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>

      {/* Mobile Bottom Floating Action Bar */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50 animate-in slide-in-from-bottom-4 duration-300">
        <div className="glass-panel rounded-full p-1.5 border border-white/10 shadow-2xl bg-[#0f1115]/95 backdrop-blur-xl flex items-center justify-between gap-1 ring-1 ring-black/5">
          
          <button onClick={onBack} className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 hover:bg-white/5 rounded-full transition-colors group text-gray-400 active:text-white">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Volver</span>
          </button>
          
          <div className="w-px h-6 bg-white/10"></div>

          <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 hover:bg-white/5 rounded-full transition-colors group text-gray-400 active:text-white">
            <Star className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Valorar</span>
          </button>

          <button className="flex-[1.4] flex items-center justify-center gap-2 py-2.5 px-4 bg-[#2AABEE] text-white rounded-full shadow-lg shadow-blue-500/20 active:scale-95 transition-all ml-1 hover:bg-[#2AABEE]/90">
            <ArrowDownToLine className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Descargar</span>
          </button>

        </div>
      </div>
    </div>
  );
};