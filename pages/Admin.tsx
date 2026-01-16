import React, { useState } from 'react';
import { 
  DollarSign, 
  Zap, 
  Cloud, 
  Star, 
  TrendingUp, 
  Search, 
  Bell, 
  LayoutDashboard,
  Layers,
  User,
  Heart,
  Gem,
  Medal,
  Save,
  Plus,
  RotateCcw, 
  Ban,
  CheckCircle,
  ArrowRight,
  Activity,
  Server,
  Terminal,
  Eraser,
  Database,
  Scan,
  Cpu,
  HardDrive,
  ArrowLeft
} from 'lucide-react';
import { UserPermissions } from './UserPermissions';

interface AdminProps {
  onNavigate?: (tab: string) => void;
}

export const Admin: React.FC<AdminProps> = ({ onNavigate }) => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'overview' | 'system' | 'tiers'>('overview');

  if (selectedUserId) {
    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto h-full">
            <UserPermissions onBack={() => setSelectedUserId(null)} />
        </div>
    );
  }

  const viewOptions = [
    { id: 'overview', label: 'Resumen', icon: LayoutDashboard },
    { id: 'system', label: 'Sistema', icon: Activity },
    { id: 'tiers', label: 'Niveles', icon: Layers },
  ] as const;

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto flex flex-col h-full overflow-hidden relative text-slate-800 dark:text-slate-100 font-sans pb-4 md:pb-6">
      {/* Admin Header with Tabs */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 z-20 gap-4 shrink-0 relative">
        
        {/* Navigation Tabs (Hidden on Mobile, moved to bottom bar) */}
        <div className="hidden md:flex glass-panel p-1.5 rounded-xl items-center gap-1 shadow-lg border border-white/5 w-full md:w-auto overflow-x-auto no-scrollbar">
            {viewOptions.map((option) => (
                <button
                    key={option.id}
                    onClick={() => setCurrentView(option.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap flex-1 md:flex-none justify-center ${
                        currentView === option.id
                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                    <option.icon className={`w-4 h-4 ${currentView === option.id ? 'text-white' : 'text-gray-500'}`} />
                    {option.label}
                </button>
            ))}
        </div>

        {/* Tools */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input 
              className="w-full md:w-64 pl-10 pr-4 py-2.5 bg-black/20 border border-white/10 rounded-xl text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-white placeholder-gray-500 transition-all" 
              placeholder="Buscar herramienta..." 
              type="text"
            />
          </div>
          <button className="relative p-2.5 text-gray-400 hover:text-white transition-colors bg-black/20 rounded-xl border border-white/10 hover:bg-white/5">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#121212]"></span>
          </button>
        </div>
      </header>

      {/* Main Content Area - Added pb-32 for mobile to prevent overlap with floating nav */}
      <div className="flex-1 overflow-y-auto pr-2 pb-32 md:pb-6 custom-scrollbar">
        
        {/* ==================== VIEW 1: OVERVIEW (KPIs) ==================== */}
        {currentView === 'overview' && (
          <div className="animate-in fade-in duration-300 space-y-8 px-1">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Resumen de Plataforma</h2>
                <p className="text-gray-400 text-sm">Métricas de rendimiento en tiempo real.</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white bg-white/5 rounded-lg border border-white/10 transition-colors shadow-sm">7 Días</button>
                <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white bg-primary rounded-lg shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all">30 Días</button>
              </div>
            </div>

            {/* Crystal KPI Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:translate-y-[-2px] transition-all border border-white/5">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <DollarSign className="w-16 h-16 text-primary" />
                </div>
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/20 rounded-xl text-primary shadow-sm border border-primary/20">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <span className="flex items-center text-[#0bda5e] text-[10px] font-black bg-[#0bda5e]/10 px-2.5 py-1 rounded-full border border-[#0bda5e]/20 backdrop-blur-md uppercase tracking-tighter">
                      <TrendingUp className="w-3 h-3 mr-1" /> +12.5%
                    </span>
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-[10px] font-black mb-1 uppercase tracking-widest">Ingresos Totales</h3>
                    <p className="text-3xl font-bold text-white tracking-tight">$4,290.00</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:translate-y-[-2px] transition-all border border-white/5">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <Zap className="w-16 h-16 text-telegram-blue" />
                </div>
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-telegram-blue/20 rounded-xl text-telegram-blue shadow-sm border border-telegram-blue/20">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="flex items-center text-telegram-blue text-[10px] font-black bg-telegram-blue/10 px-2.5 py-1 rounded-full border border-telegram-blue/20 backdrop-blur-md uppercase tracking-widest">
                      En Vivo
                    </span>
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-[10px] font-black mb-1 uppercase tracking-widest">Sesiones Activas</h3>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-white tracking-tight">1,240</p>
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:translate-y-[-2px] transition-all border border-white/5">
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400 shadow-sm border border-purple-500/20">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">45% Capacidad</span>
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-[10px] font-black mb-2 uppercase tracking-widest">Almacenamiento</h3>
                    <div className="flex items-end gap-1 mb-2">
                      <p className="text-2xl font-bold text-white tracking-tight">450<span className="text-lg text-gray-500 font-normal ml-0.5">GB</span></p>
                      <p className="text-[10px] text-gray-500 font-black mb-1 uppercase">/ 1TB</p>
                    </div>
                    <div className="w-full bg-slate-900/50 rounded-full h-2 overflow-hidden border border-white/5">
                      <div className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.4)]" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-4 relative overflow-hidden group flex items-center gap-4 hover:translate-y-[-2px] transition-all border border-white/5">
                <div className="h-full w-16 bg-cover bg-center rounded-lg shadow-lg shrink-0 border border-white/10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNN4FMDg3_CjS9YHw1nGZ4JItWisR_siKFT-hvY-GJOT3ANCaOjoQCqwFNh11csOqbW32AvpUd3Phbg6eYPIP1cbyrpXt4XAJ5x1rTmDvx1HfrlWdNL9tz2sQBRQxq2CrdS0xRfAZAX2X3WVfEQa8OvegVEUvYC-TJQYYqXdwkIMMGBUXkS1tLuXAtXhkVgsobRe0TeyyI-l6mnwT2L91DP17Yr5xN59YJ7Uv7SUGKthHsf4SU3T4F6EJGj-Wji-uzHySrLe079wI')" }}></div>
                <div className="flex flex-col justify-center min-w-0">
                  <div className="flex items-center gap-1 text-yellow-400 mb-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-[9px] font-black text-white uppercase tracking-tighter">Popular</span>
                  </div>
                  <h3 className="text-white font-bold leading-tight line-clamp-1 truncate text-sm" title="Atomic Habits">Atomic Habits</h3>
                  <p className="text-[10px] text-gray-400 truncate font-medium">James Clear</p>
                  <p className="text-[10px] text-primary mt-2 font-black uppercase tracking-tight">1.1k Descargas</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2 glass-panel rounded-2xl p-6 overflow-hidden flex flex-col border border-white/5">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">Tendencia de Crecimiento</h3>
                    <p className="text-xs text-gray-400">Interacción de usuarios vs consumo de contenido.</p>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-2 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2 px-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(43,108,238,0.5)]"></span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Usuarios</span>
                    </div>
                    <div className="flex items-center gap-2 px-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-telegram-blue shadow-[0_0_8px_rgba(42,171,238,0.5)]"></span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Descargas</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full h-[320px] relative overflow-hidden mt-auto">
                  <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-slate-600 font-mono pointer-events-none z-0">
                    <div className="flex w-full items-center"><span className="w-8 text-right pr-2 font-black">3K</span><div className="h-px bg-white/5 flex-1"></div></div>
                    <div className="flex w-full items-center"><span className="w-8 text-right pr-2 font-black">2K</span><div className="h-px bg-white/5 flex-1"></div></div>
                    <div className="flex w-full items-center"><span className="w-8 text-right pr-2 font-black">1K</span><div className="h-px bg-white/5 flex-1"></div></div>
                    <div className="flex w-full items-center"><span className="w-8 text-right pr-2 font-black">0</span><div className="h-px bg-white/5 flex-1"></div></div>
                  </div>
                  <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[10px] text-slate-500 pt-2 font-black uppercase tracking-widest">
                    <span>Nov 01</span><span>Nov 15</span><span>Nov 30</span>
                  </div>
                  <svg className="absolute inset-0 left-8 h-[calc(100%-24px)] w-[calc(100%-32px)] z-10" preserveAspectRatio="none" viewBox="0 0 750 300">
                    <path className="fill-primary/5" d="M0,280 C50,250 100,290 150,200 C200,110 250,180 300,150 C350,120 400,50 450,80 C500,110 550,60 600,40 C650,20 700,50 750,30 L750,300 L0,300 Z" stroke="none"></path>
                    <path d="M0,280 C50,250 100,290 150,200 C200,110 250,180 300,150 C350,120 400,50 450,80 C500,110 550,60 600,40 C650,20 700,50 750,30" fill="none" stroke="#2b6cee" strokeLinecap="round" strokeWidth="3"></path>
                    <path d="M0,200 C60,210 120,180 180,220 C240,260 300,200 360,180 C420,160 480,190 540,140 C600,90 660,120 750,100" fill="none" stroke="#2AABEE" strokeDasharray="5,5" strokeLinecap="round" strokeWidth="2" opacity="0.6"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="glass-panel rounded-2xl p-6 flex flex-col flex-1 border border-white/5">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-4">Actividad Pico</h3>
                  <div className="flex-1 grid grid-cols-[auto_1fr] gap-3">
                    <div className="flex flex-col justify-between text-[10px] text-gray-500 font-black uppercase py-1 pr-1">
                      <span>L</span><span>M</span><span>V</span><span>D</span>
                    </div>
                    <div className="grid grid-rows-7 grid-cols-12 gap-2 h-full w-full">
                      {Array.from({length: 84}).map((_, i) => (
                        <div key={i} className="rounded-sm transition-all hover:ring-2 hover:ring-primary/40 ring-offset-2 ring-offset-[#0d121c]" style={{ backgroundColor: `rgba(43, 108, 238, ${Math.random() > 0.3 ? Math.random() * 0.9 + 0.1 : 0.05})` }}></div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="glass-panel rounded-2xl p-6 border border-white/5">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">Actividad Reciente</h3>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                  <div className="space-y-5">
                    {[
                      { u: '@alex_crypto', t: 'VIP', c: 'from-blue-600 to-indigo-600', m: 'Suscripción VIP', tm: '2m' },
                      { u: '@sarah_reads', t: 'PRO', c: 'from-purple-600 to-pink-600', m: 'Alcanzó 500 DLs', tm: '14m' },
                      { u: '@mike_z', t: 'NEW', c: 'from-emerald-600 to-teal-600', m: 'Se unió a ZeepubBot', tm: '1h' }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between group">
                          <div className="flex items-center gap-3">
                            <div className={`size-8 rounded-full bg-gradient-to-tr ${item.c} flex items-center justify-center text-white font-black text-[9px] shadow-sm border border-white/20`}>{item.t}</div>
                            <div className="min-w-0">
                              <p className="text-sm text-white font-black truncate leading-tight tracking-tight">{item.u}</p>
                              <p className="text-[10px] text-gray-400 truncate uppercase tracking-widest">{item.m}</p>
                            </div>
                          </div>
                          <span className="text-[10px] text-gray-600 font-black">{item.tm}</span>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== VIEW 2: SYSTEM (Ops & Logs) ==================== */}
        {currentView === 'system' && (
           <div className="animate-in fade-in duration-300 space-y-8 px-1">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                 <div>
                   <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Infraestructura del Sistema</h2>
                   <p className="text-gray-400 text-sm">Salud técnica y registros de despliegue.</p>
                 </div>
                 <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-[10px] font-black tracking-widest uppercase">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.6)]"></div>
                    Versión Estable v7.2
                 </div>
              </div>

              {/* Crystal Stats cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="glass-panel p-6 rounded-2xl flex items-center gap-5 hover:translate-y-[-2px] transition-all border border-white/5">
                    <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/10">
                      <Server className="w-8 h-8 text-blue-500" />
                    </div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Tiempo de Actividad</p>
                       <p className="text-2xl font-bold text-white font-mono">14d 22h 10m</p>
                    </div>
                 </div>
                 <div className="glass-panel p-6 rounded-2xl flex items-center gap-5 hover:translate-y-[-2px] transition-all border border-white/5">
                    <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/10">
                      <Cpu className="w-8 h-8 text-purple-500" />
                    </div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Carga de Proceso</p>
                       <p className="text-2xl font-bold text-white font-mono">12% Promedio</p>
                    </div>
                 </div>
                 <div className="glass-panel p-6 rounded-2xl flex items-center gap-5 hover:translate-y-[-2px] transition-all border border-white/5">
                    <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/10">
                      <HardDrive className="w-8 h-8 text-amber-500" />
                    </div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Caché de Memoria</p>
                       <p className="text-2xl font-bold text-white font-mono">2.4 / 8.0 <span className="text-xs font-normal">GB</span></p>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                 <div className="lg:col-span-1 glass-panel rounded-2xl p-6 flex flex-col space-y-6 border border-white/5">
                    <h3 className="text-lg font-black text-white uppercase tracking-tight flex items-center gap-2">
                       <Activity className="w-5 h-5 text-primary" />
                       Herramientas
                    </h3>
                    <div className="space-y-4 flex-1">
                       {[
                         { icon: Scan, title: 'Sync de Biblioteca', desc: 'Refrescar índice con archivos locales.', action: 'SINCRONIZAR' },
                         { icon: Database, title: 'Respaldo del Sistema', desc: 'Exportar snapshot completo de DB.', action: 'RESPALDAR', sec: true },
                         { icon: Eraser, title: 'Limpiar Caché', desc: 'Borrar metadatos temporales.', action: 'PURGAR', sec: true },
                       ].map((item, i) => (
                          <div key={i} className="p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-primary/40 transition-all cursor-pointer group shadow-inner">
                             <div className="flex justify-between items-center mb-2">
                                <h4 className="font-black text-slate-200 text-xs uppercase tracking-tight">{item.title}</h4>
                                <item.icon className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                             </div>
                             <p className="text-[10px] text-gray-500 mb-4 font-medium leading-relaxed">{item.desc}</p>
                             <button className={`w-full py-2.5 rounded-lg text-[10px] font-black tracking-widest transition-all uppercase ${
                               item.sec 
                                 ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' 
                                 : 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20'
                             }`}>{item.action}</button>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="lg:col-span-2 glass-panel rounded-2xl overflow-hidden flex flex-col min-h-[500px] border border-white/5">
                    <div className="p-4 bg-slate-900/60 border-b border-white/5 flex justify-between items-center">
                       <h3 className="text-[10px] font-black text-slate-300 flex items-center gap-2 uppercase tracking-widest">
                          <Terminal className="w-4 h-4 text-primary" /> Feed de Logs en Vivo
                       </h3>
                       <div className="flex gap-2">
                          <span className="text-[10px] font-mono text-gray-500">STREAM_TR: ON</span>
                       </div>
                    </div>
                    <div className="flex-1 bg-[#05080c] p-6 font-mono text-[11px] overflow-y-auto space-y-2 text-gray-400">
                       <div className="flex gap-4"><span className="text-gray-600 font-bold shrink-0">10:42:01</span> <span className="text-blue-400 font-black shrink-0">INFO</span> <span className="flex-1">Kernel ZeepubBot inicializado con éxito (v2.4.0-web)</span></div>
                       <div className="flex gap-4"><span className="text-gray-600 font-bold shrink-0">10:42:05</span> <span className="text-blue-400 font-black shrink-0">INFO</span> <span className="flex-1">Estableciendo túnel seguro a gateway API... <span className="text-green-500">CONECTADO</span></span></div>
                       <div className="flex gap-4"><span className="text-gray-600 font-bold shrink-0">10:42:06</span> <span className="text-yellow-500 font-black shrink-0">WARN</span> <span className="flex-1">Pico de tráfico de entrada detectado (1,402 req/sec)</span></div>
                       <div className="flex gap-4"><span className="text-gray-600 font-bold shrink-0">10:43:12</span> <span className="text-blue-400 font-black shrink-0">INFO</span> <span className="flex-1">Procesando trabajo por lotes ID: <span className="underline italic text-gray-300">#930211-Sync</span></span></div>
                       <div className="pl-24 text-[10px] text-gray-500 leading-relaxed border-l border-slate-800 ml-2 py-1">
                          → Validando checksums HASH...<br/>
                          → Encontrados 12 objetos nuevos en s3://books-primary<br/>
                          → Indexando metadatos para "The Great Gatsby"...
                       </div>
                       <div className="flex gap-4"><span className="text-gray-600 font-bold shrink-0">10:43:45</span> <span className="text-green-500 font-black shrink-0">OK</span> <span className="flex-1 font-black">Sync completada. Estado de biblioteca sincronizado con DB.</span></div>
                       <div className="text-gray-400 animate-pulse mt-4 flex gap-1 items-center">
                          <span className="w-1.5 h-3 bg-primary/40 block"></span>
                          <span>Escuchando eventos del sistema...</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        )}

        {/* ==================== VIEW 3: TIERS (User Mgmt) ==================== */}
        {currentView === 'tiers' && (
          <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-10 animate-in fade-in duration-300 px-1">
             {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-6">
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className="text-4xl font-black text-white leading-tight tracking-tighter uppercase">Niveles y Acceso</h1>
                <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-2xl">
                  Configura permisos globales y niveles de suscripción para toda la base de usuarios.
                </p>
              </div>
              <div className="flex items-end">
                <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-black text-xs transition-all shadow-xl shadow-primary/30 uppercase tracking-widest border border-white/10">
                  <Plus className="w-5 h-5" />
                  Nuevo Nivel Personalizado
                </button>
              </div>
            </div>

            {/* Crystal Tier Cards */}
            <section className="flex flex-col gap-6">
              <h2 className="text-xl font-black px-1 flex items-center gap-3 tracking-tighter uppercase text-white">
                <div className="w-8 h-1 bg-primary rounded-full"></div>
                Perfiles de Nivel
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {[
                  { id: 'basic', name: 'Básico', price: 'Gratis', icon: User, color: 'text-gray-400', limit: 5 },
                  { id: 'supporter', name: 'Supporter', price: '$5 / Mes', icon: Heart, color: 'text-primary', limit: 20, accent: true },
                  { id: 'vip', name: 'VIP', price: '$15 / Mes', icon: Gem, color: 'text-purple-400', limit: 'Ilimitado', highlighted: true },
                  { id: 'legend', name: 'Leyenda', price: '$50 / Mes', icon: Medal, color: 'text-yellow-500', limit: 'Ilimitado' },
                ].map((tier, i) => (
                  <div key={tier.id} className={`flex flex-col gap-6 rounded-3xl border ${tier.highlighted ? 'border-primary shadow-[0_10px_40px_rgba(43,108,238,0.15)]' : 'border-white/10'} bg-white/5 p-6 hover:translate-y-[-4px] transition-all group glass-panel relative overflow-hidden`}>
                    {tier.highlighted && <div className="absolute top-0 right-0 p-1.5 bg-primary text-[8px] font-black text-white px-3 rounded-bl-xl uppercase tracking-widest">Recomendado</div>}
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-black text-white tracking-tighter">{tier.name}</h3>
                        <p className={`text-[10px] font-black uppercase tracking-widest ${tier.color}`}>{tier.price}</p>
                      </div>
                      <tier.icon className={`w-6 h-6 ${tier.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-500">Cuota Diaria DL</label>
                        <input className="w-full bg-black/20 border border-white/5 rounded-xl text-white text-sm px-4 py-2.5 font-bold focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" type="text" defaultValue={tier.limit}/>
                      </div>
                      <div className="space-y-3 pt-2">
                        <div className="flex justify-between items-center group/toggle cursor-pointer">
                          <span className="text-xs font-black uppercase tracking-tight text-gray-400 group-hover/toggle:text-white transition-colors">Acceso Anticipado</span>
                          <div className="w-8 h-4 bg-slate-700 rounded-full relative p-0.5">
                            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center group/toggle cursor-pointer">
                          <span className="text-xs font-black uppercase tracking-tight text-gray-400 group-hover/toggle:text-white transition-colors">Temas HD</span>
                          <div className="w-8 h-4 bg-primary/40 rounded-full relative p-0.5 border border-primary/20">
                            <div className="w-3 h-3 bg-primary rounded-full ml-auto shadow-[0_0_8px_rgba(43,108,238,0.8)]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={`mt-auto w-full py-3 rounded-xl text-[10px] font-black tracking-widest transition-all uppercase border border-white/5 ${tier.highlighted ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-slate-700 hover:bg-slate-600 text-slate-200'}`}>
                      Actualizar Config
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Crystal User Table */}
            <div className="glass-panel rounded-3xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
              <div className="p-8 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-slate-900/40">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-slate-100 uppercase tracking-tight">Registros Activos</h3>
                  <p className="text-xs text-gray-500 font-medium">Gestionar cuentas individuales y anular permisos.</p>
                </div>
                <div className="flex gap-3">
                  <div className="relative group flex-1 sm:flex-none">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-primary transition-colors" />
                    <input className="w-full sm:w-64 pl-10 pr-4 py-2.5 text-xs bg-slate-900/60 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white font-bold transition-all placeholder:text-gray-600" placeholder="Filtrar por ID o Usuario..." type="text" />
                  </div>
                  <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-white/5 rounded-xl text-xs font-black uppercase tracking-widest text-white transition-all shadow-lg">
                    Filtros
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900/60 text-[9px] uppercase text-gray-500 font-black tracking-[0.2em]">
                      <th className="px-8 py-5 border-b border-white/5">ID Registro</th>
                      <th className="px-8 py-5 border-b border-white/5">Identidad</th>
                      <th className="px-8 py-5 border-b border-white/5">Nivel de Acceso</th>
                      <th className="px-8 py-5 border-b border-white/5">Utilización Cuota</th>
                      <th className="px-8 py-5 border-b border-white/5 text-right">Ops</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { id: '5892104', name: 'Alex_Reader', tier: 'VIP', p: 20, d: '12 / 100', color: 'bg-purple-500' },
                      { id: '9218401', name: 'BookWorm_99', tier: 'GRATIS', p: 95, d: '9 / 10', color: 'bg-gray-500' },
                      { id: '1102938', name: 'Elite_Alpha', tier: 'LEYENDA', p: 2, d: '5 / ∞', color: 'bg-yellow-500' },
                    ].map((user) => (
                      <tr 
                        key={user.id}
                        onClick={() => setSelectedUserId(user.id)}
                        className="hover:bg-primary/5 transition-all cursor-pointer group"
                      >
                        <td className="px-8 py-6 font-mono text-xs text-gray-500 font-bold">#{user.id}</td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className={`size-10 rounded-2xl ${user.color} flex items-center justify-center text-white font-black text-xs shadow-lg shadow-black/20 group-hover:scale-105 transition-transform border border-white/10`}>{user.name[0]}</div>
                            <span className="font-black text-white tracking-tight">{user.name}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className={`px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest ${user.tier === 'VIP' ? 'bg-purple-900/30 text-purple-400 border-purple-500/30' : user.tier === 'GRATIS' ? 'bg-slate-900/30 text-gray-500 border-slate-500/30' : 'bg-yellow-900/30 text-yellow-500 border-yellow-500/30'} border shadow-sm`}>
                            {user.tier}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <div className="w-32 bg-slate-900/50 rounded-full h-1.5 mb-2 overflow-hidden border border-white/5">
                            <div className={`${user.p > 90 ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'bg-primary shadow-[0_0_8px_rgba(43,108,238,0.5)]'} h-full transition-all`} style={{ width: `${user.p}%` }}></div>
                          </div>
                          <span className="text-[10px] text-gray-500 font-black uppercase tracking-tighter">{user.d}</span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <div className="flex justify-end gap-3 opacity-40 group-hover:opacity-100 transition-opacity">
                             <button className="p-2 text-gray-400 hover:text-primary transition-all bg-slate-800 rounded-xl hover:scale-110" title="Restaurar" onClick={(e) => e.stopPropagation()}>
                                <RotateCcw className="w-4 h-4" />
                             </button>
                             <button className="p-2 text-gray-400 hover:text-red-500 transition-all bg-slate-800 rounded-xl hover:scale-110" title="Restringir" onClick={(e) => e.stopPropagation()}>
                                <Ban className="w-4 h-4" />
                             </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-slate-900/40 border-t border-white/5 flex justify-center">
                <button className="text-[10px] text-primary hover:text-white font-black uppercase tracking-[0.2em] flex items-center gap-3 transition-all hover:gap-4">
                  Recuperar Dataset Expandido
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Bottom Floating Action Bar for Admin */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50 animate-in slide-in-from-bottom-4 duration-300">
        <div className="glass-panel rounded-full p-1.5 border border-white/10 shadow-2xl bg-[#0f1115]/95 backdrop-blur-xl flex items-center justify-between gap-1 ring-1 ring-black/5">
          
          <button 
             onClick={() => onNavigate && onNavigate('dashboard')} 
             className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 hover:bg-white/5 rounded-full transition-colors group text-gray-400 active:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Volver</span>
          </button>
          
          <div className="w-px h-6 bg-white/10"></div>

          {viewOptions.map((option) => (
             <button
                key={option.id}
                onClick={() => setCurrentView(option.id)}
                className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 rounded-full transition-all relative ${
                    currentView === option.id 
                    ? 'text-[#2AABEE]' 
                    : 'text-gray-400 hover:text-white'
                }`}
            >
                {currentView === option.id && <div className="absolute top-1 w-1 h-1 rounded-full bg-[#2AABEE]"></div>}
                <option.icon className={`w-4 h-4 ${currentView === option.id ? 'fill-current' : ''}`} />
            </button>
          ))}

        </div>
      </div>
    </div>
  );
};