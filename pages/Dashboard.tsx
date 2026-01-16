import React from 'react';
import { 
  Search, 
  Zap, 
  BookOpen, 
  HelpCircle, 
  Shuffle,
  TrendingUp, 
  Clock,
  ArrowRight,
  Download,
  Star,
  PlayCircle
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN (Main Content) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Hero / Greeting */}
          <div className="pt-4 md:pt-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3">
              Hola, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Alex</span> 👋
            </h1>
            <p className="text-gray-400 text-lg">
              Tu biblioteca personal. <span className="text-white font-bold">12,403 libros</span> listos para explorar.
            </p>
          </div>

          {/* Main Search Bar */}
          <div className="relative group w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass-panel rounded-2xl p-2 flex items-center border border-white/10 shadow-2xl">
              <div className="pl-4 text-gray-400">
                <Search className="w-6 h-6" />
              </div>
              <input 
                type="text" 
                placeholder="Busca por título, autor, género o ISBN..." 
                className="w-full bg-transparent text-white p-4 text-base md:text-lg placeholder-gray-500 focus:outline-none"
              />
              <button className="hidden sm:flex bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all border border-white/5 mr-2">
                Buscar
              </button>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Acciones Rápidas</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Search, label: 'Explorar', desc: 'Catálogo', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                { icon: Shuffle, label: 'Aleatorio', desc: 'Descubrir', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
                { icon: BookOpen, label: 'Solicitar', desc: 'Pedir Libro', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
                { icon: HelpCircle, label: 'Soporte', desc: 'Ayuda', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
              ].map((item, i) => (
                <button 
                  key={i}
                  className={`glass-panel p-5 rounded-2xl border ${item.border} flex flex-col items-center justify-center text-center gap-3 hover:scale-[1.02] active:scale-95 transition-all duration-300 group shadow-lg`}
                >
                  <div className={`p-4 rounded-full ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)]`}>
                    <item.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-white font-bold text-base leading-none mb-1">{item.label}</span>
                    <span className="block text-gray-500 text-[10px] font-medium uppercase tracking-wider">{item.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activity (Table style for Desktop, List for Mobile) */}
          <div className="pt-4">
             <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Recién Añadidos
              </h3>
              <button className="text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-1 group">
                Ver Historial <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                { title: 'The Future of Humanity', author: 'Michio Kaku', format: 'EPUB', size: '4.2 MB', time: 'Hace 2 min', icon: Download },
                { title: 'Deep Learning with Python', author: 'François Chollet', format: 'PDF', size: '12.5 MB', time: 'Hace 45 min', icon: Download },
                { title: 'Atomic Habits', author: 'James Clear', format: 'AUDIO', size: '142 MB', time: 'Ayer', icon: PlayCircle },
              ].map((item, i) => (
                <div key={i} className="glass-panel p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-all group cursor-pointer flex items-center gap-4 hover:border-primary/30">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-[10px] font-black border group-hover:scale-110 transition-transform ${item.format === 'AUDIO' ? 'bg-purple-900/20 text-purple-400 border-purple-500/20' : 'bg-slate-800 text-gray-500 border-white/5'} uppercase tracking-widest`}>
                    {item.format === 'AUDIO' ? <PlayCircle className="w-5 h-5" /> : item.format}
                  </div>
                  <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-6">
                       <h4 className="text-white font-bold truncate text-base">{item.title}</h4>
                       <p className="text-gray-500 text-xs truncate font-medium">{item.author}</p>
                    </div>
                    <div className="hidden md:block md:col-span-3">
                       <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">{item.size}</span>
                    </div>
                    <div className="hidden md:block md:col-span-3 text-right">
                       <span className="text-xs text-gray-500 font-medium">{item.time}</span>
                    </div>
                  </div>
                  {/* Mobile Only Time */}
                  <div className="md:hidden text-right">
                    <span className="block text-xs text-gray-500 font-medium mb-1">{item.time}</span>
                  </div>
                  
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (Sidebar Widgets for Desktop) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Profile / Stats Widget */}
          <div className="glass-panel rounded-3xl p-6 border border-white/5 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
             
             <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 to-yellow-600 shadow-lg">
                      <img className="w-full h-full rounded-full border-2 border-[#121212] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2rcMIxLOx5eu6yRpav3Y8qGpkFD2kC_fFSpyVjNI_zmfvjfPwU7tT0o4IWo8bJUd_Zt_ZE-XvtCRq0VFH6xkeCOZ6RNUSwUMkYvnq49dlaImBSvbx2y0LQ2ZShi-zZJ9SOX46KZQVmAqGJjihqPPZMUyxWkrYEvOQ0wjuaZfwx1Ux3D3P5FEFAo_3D3gvoUpdmv1x-qcgKh0DHSyh9-GHQ9EN3s9kFdAWafA1e_VN0XlAN9MZ3UD7h_56GH1_qsJ9cFtwIf5rKrw" alt="Profile" />
                   </div>
                   <div>
                      <h3 className="text-white font-bold leading-none">Nivel VIP</h3>
                      <p className="text-xs text-yellow-500 font-bold uppercase tracking-wider mt-1">Miembro Gold</p>
                   </div>
                </div>
                <button className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
                   <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </button>
             </div>

             <div className="space-y-4 relative z-10">
                <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                   <div className="flex justify-between items-end mb-2">
                      <span className="text-gray-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                         <Zap className="w-3 h-3 text-primary" />
                         Cuota Diaria
                      </span>
                      <span className="text-white font-bold">15 <span className="text-gray-500 font-normal">/ 20</span></span>
                   </div>
                   <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-blue-400 w-[75%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                   </div>
                   <p className="text-[10px] text-gray-500 mt-2 text-right">Se reinicia en 04h 12m</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                   <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex flex-col items-center justify-center text-center">
                      <TrendingUp className="w-5 h-5 text-green-500 mb-1" />
                      <span className="text-white font-bold text-lg">Top 5%</span>
                      <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Ranking</span>
                   </div>
                   <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex flex-col items-center justify-center text-center">
                      <Download className="w-5 h-5 text-blue-500 mb-1" />
                      <span className="text-white font-bold text-lg">482</span>
                      <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Total DLs</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Continue Reading Widget (Desktop Highlight) */}
          <div className="glass-panel rounded-3xl p-1 border border-white/5 hover:border-primary/30 transition-colors group cursor-pointer">
             <div className="bg-[#0f1115] rounded-[20px] p-5 relative overflow-hidden">
                <div className="flex gap-4 items-start relative z-10">
                   <div className="w-16 h-24 rounded-lg bg-gray-800 shadow-lg shrink-0 overflow-hidden border border-white/10">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNN4FMDg3_CjS9YHw1nGZ4JItWisR_siKFT-hvY-GJOT3ANCaOjoQCqwFNh11csOqbW32AvpUd3Phbg6eYPIP1cbyrpXt4XAJ5x1rTmDvx1HfrlWdNL9tz2sQBRQxq2CrdS0xRfAZAX2X3WVfEQa8OvegVEUvYC-TJQYYqXdwkIMMGBUXkS1tLuXAtXhkVgsobRe0TeyyI-l6mnwT2L91DP17Yr5xN59YJ7Uv7SUGKthHsf4SU3T4F6EJGj-Wji-uzHySrLe079wI" className="w-full h-full object-cover" alt="Cover" />
                   </div>
                   <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">Continuar Leyendo</span>
                      <h4 className="text-white font-bold text-lg truncate leading-tight">Atomic Habits</h4>
                      <p className="text-gray-500 text-xs truncate mt-0.5">Chapter 3: Building Habits</p>
                      
                      <div className="mt-3 flex items-center gap-3">
                         <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-white w-[32%] rounded-full"></div>
                         </div>
                         <span className="text-[10px] text-gray-400 font-mono">32%</span>
                      </div>
                   </div>
                </div>
                <div className="mt-4 flex justify-end">
                   <button className="text-xs font-bold text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 flex items-center gap-2">
                      <BookOpen className="w-3 h-3" />
                      Reanudar
                   </button>
                </div>
             </div>
          </div>

          {/* Daily Quote / Tip */}
          <div className="glass-panel p-5 rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent">
             <p className="text-gray-300 text-sm italic leading-relaxed">"Un lector vive mil vidas antes de morir. Aquel que nunca lee vive solo una."</p>
             <p className="text-gray-500 text-xs font-bold mt-3 text-right">— George R.R. Martin</p>
          </div>

        </div>

      </div>
    </div>
  );
};