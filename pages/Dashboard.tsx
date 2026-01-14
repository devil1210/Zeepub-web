import React from 'react';
import { Clock, DownloadCloud, AlertCircle, RefreshCw, Filter, X } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 glass-panel rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-primary via-purple-500 to-pink-500">
                <img 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover border-4 border-surface" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4C3Q2NVoodMDq_xxlumfrTzP_c2-CKCUsSvXPN-mXcGCzE_WIDfyF3vXRnzsdaOxPOJ7e0-MpgK4E-1VzeXkgBLk9Lncfody08IJD9MAmgbisCDWiI3u0UvtJam9-WV7jYp5uhmJBcLRu2-dUb5qCiEJkRa2N3M1BNqlfCYVRf0EgJImnlPdH1fIeo_4UA_41-Yp3nsY3nhfDI-8o4hM1SibXhfE0b9DHuH4Hffy-PcqPDEH2h81VB6KhRXq7iZOSWJ9rY906ct8" 
                />
              </div>
              <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-surface"></div>
            </div>
            <h2 className="text-2xl font-bold text-white">Alex Doe</h2>
            <p className="text-primary text-sm font-medium mt-1">VIP Member</p>
            
            <div className="w-full mt-6 space-y-2">
              <div className="flex justify-between items-end mb-1">
                <span className="text-sm font-medium text-gray-400">Daily Downloads</span>
                <span className="text-sm font-bold text-primary">15 <span className="text-gray-600 font-normal">/ 20</span></span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div className="bg-primary h-2 rounded-full w-[75%] shadow-[0_0_10px_#0d93f2]"></div>
              </div>
              <p className="text-xs text-gray-500 text-left pt-1 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Resets in 04:23:12
              </p>
            </div>
          </div>
        </div>

        {/* Active Downloads */}
        <div className="col-span-1 lg:col-span-2 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Active Downloads</h1>
              <p className="text-sm text-gray-400 mt-1">Manage your current queue.</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                <RefreshCw className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-surface-highlight border border-white/5 rounded-lg text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                <Filter className="w-4 h-4" /> Filter
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {/* Download Item 1 */}
            <div className="glass-panel rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-all">
              <div className="flex-shrink-0 w-12 h-16 bg-gray-800 rounded-lg flex items-center justify-center border border-white/5">
                <span className="font-bold text-xs text-gray-400">EPUB</span>
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-semibold text-white truncate pr-4">The Future of Humanity</h4>
                  <button className="text-gray-500 hover:text-red-500"><X className="w-4 h-4"/></button>
                </div>
                <div className="flex justify-between text-xs font-medium mb-2">
                  <span className="text-primary animate-pulse">Downloading...</span>
                  <span className="text-gray-500">73%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary h-1.5 rounded-full w-[73%] relative overflow-hidden">
                     <div className="absolute inset-0 bg-white/30 animate-[shimmer_1s_infinite] skew-x-12"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Item 2 */}
            <div className="glass-panel rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-all">
              <div className="flex-shrink-0 w-12 h-16 bg-gray-800 rounded-lg flex items-center justify-center border border-white/5">
                <span className="font-bold text-xs text-gray-400">PDF</span>
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-semibold text-white truncate pr-4">Deep Learning with Python</h4>
                  <button className="text-gray-500 hover:text-red-500"><X className="w-4 h-4"/></button>
                </div>
                <div className="flex justify-between text-xs font-medium mb-2">
                  <span className="text-yellow-500">Queued</span>
                  <span className="text-gray-500">Waiting for slot...</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-yellow-500 h-1.5 rounded-full w-[5%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent History */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Recent History</h2>
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="divide-y divide-white/5">
            {[
              { title: "Clean Code", author: "Robert C. Martin", status: "success", time: "2 mins ago" },
              { title: "Project Hail Mary", author: "Andy Weir", status: "success", time: "Yesterday" },
              { title: "Dune: Messiah", author: "Frank Herbert", status: "failed", time: "2 days ago" },
            ].map((item, i) => (
              <div key={i} className="p-4 flex items-center gap-4 hover:bg-white/5 transition-colors group">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  item.status === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                }`}>
                  {item.status === 'success' ? <DownloadCloud className="w-5 h-5"/> : <AlertCircle className="w-5 h-5"/>}
                </div>
                <div className="flex-grow min-w-0">
                  <h5 className="text-sm font-semibold text-white truncate">{item.title}</h5>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-gray-500">{item.author}</span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-500">{item.time}</span>
                  </div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-white transition-all">
                  <DownloadCloud className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white/5 p-3 text-center border-t border-white/5">
            <button className="text-sm text-primary hover:text-white transition-colors font-medium">View full history</button>
          </div>
        </div>
      </div>
    </div>
  );
};