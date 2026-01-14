import React from 'react';
import { 
  Server, 
  Activity, 
  AlertTriangle, 
  Database, 
  RefreshCw,
  Users,
  HardDrive,
  Search,
  Bell,
  Plus,
  TrendingUp,
  ArrowUp,
  Clock,
  Wrench,
  Scan,
  Save,
  Eraser,
  Terminal,
  RotateCcw,
  Ban,
  CheckCircle,
  ArrowRight,
  Menu,
  BookOpen,
  CloudDownload
} from 'lucide-react';

export const Admin: React.FC = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden relative text-slate-800 dark:text-slate-100 font-sans">
      {/* Admin Header - Specific to this view as per request */}
      <header className="h-16 flex items-center justify-between mb-6 z-10 glass-panel border-b border-white/5 rounded-xl px-6">
        <div className="flex items-center md:hidden">
          <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Bot Status: Online
          </span>
          <span className="h-4 w-px bg-slate-300 dark:bg-slate-700"></span>
          <span>Version: v7.1.1</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input 
              className="pl-10 pr-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64 text-slate-900 dark:text-slate-100 placeholder-slate-400 transition-all" 
              placeholder="Search logs, books..." 
              type="text"
            />
          </div>
          <button className="relative p-2 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto pr-2 pb-6">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">System Health & Admin</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Real-time overview of the ZeepubBot ecosystem.</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 dark:bg-slate-700 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors shadow-lg">
              <RefreshCw className="w-4 h-4" />
              Refresh Stats
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30">
              <Plus className="w-4 h-4" />
              New Deployment
            </button>
          </div>
        </div>

        {/* KPI Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card 1 */}
          <div className="glass-panel p-5 rounded-xl flex items-start justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Users</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">12,482</h3>
              <div className="flex items-center mt-2 text-xs text-green-500 font-medium">
                <TrendingUp className="w-4 h-4 mr-1" />
                +4.5% this week
              </div>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-500/20 rounded-lg">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-5 rounded-xl flex items-start justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Library Index</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">843,209</h3>
              <div className="flex items-center mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <Database className="w-4 h-4 mr-1" />
                2.4 TB storage used
              </div>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-500/20 rounded-lg">
              <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all duration-500"></div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-5 rounded-xl flex items-start justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Downloads (24h)</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">1,024</h3>
              <div className="flex items-center mt-2 text-xs text-green-500 font-medium">
                <ArrowUp className="w-4 h-4 mr-1" />
                +12% vs yesterday
              </div>
            </div>
            <div className="p-3 bg-emerald-100 dark:bg-emerald-500/20 rounded-lg">
              <CloudDownload className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
          </div>

          {/* Card 4 */}
          <div className="glass-panel p-5 rounded-xl flex items-start justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">System Uptime</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">99.9%</h3>
              <div className="flex items-center mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <Clock className="w-4 h-4 mr-1" />
                14d 2h since reboot
              </div>
            </div>
            <div className="p-3 bg-amber-100 dark:bg-amber-500/20 rounded-lg">
              <Server className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all duration-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Maintenance Actions */}
          <div className="lg:col-span-1 glass-panel rounded-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" />
                Maintenance
              </h3>
              <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded border border-green-500/20 font-mono">Operational</span>
            </div>
            
            <div className="space-y-4 flex-1">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Scan Library</h4>
                  <Scan className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  Trigger <code className="bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded text-primary">/scan_library</code> to index new content.
                </p>
                <button className="w-full py-1.5 text-xs font-medium text-center bg-primary hover:bg-primary-dark text-white rounded transition-colors">
                  Execute Scan
                </button>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Backup Database</h4>
                  <Save className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  Run <code className="bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded text-primary">/backup_db</code> for manual snapshot.
                </p>
                <button className="w-full py-1.5 text-xs font-medium text-center bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded transition-colors">
                  Start Backup
                </button>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Clean Cache</h4>
                  <Eraser className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  Clear thumbnails and temp files.
                </p>
                <button className="w-full py-1.5 text-xs font-medium text-center bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded transition-colors">
                  Purge
                </button>
              </div>
            </div>
          </div>

          {/* Live Logs */}
          <div className="lg:col-span-2 glass-panel rounded-xl p-0 overflow-hidden flex flex-col h-[500px] lg:h-auto">
            <div className="p-4 border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50 flex justify-between items-center">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-400" />
                Live System Logs
              </h3>
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/50"></span>
              </div>
            </div>
            <div className="flex-1 bg-slate-900 p-4 font-mono text-xs overflow-y-auto">
              <div className="space-y-1">
                <div className="text-slate-500">[10:42:01] <span className="text-blue-400">INFO</span>: Worker process started with PID 8821</div>
                <div className="text-slate-500">[10:42:05] <span className="text-blue-400">INFO</span>: Connecting to Telegram API... <span className="text-green-400">OK</span></div>
                <div className="text-slate-500">[10:42:06] <span className="text-yellow-400">WARN</span>: High latency detected on webhook (450ms)</div>
                <div className="text-slate-500">[10:43:12] <span className="text-blue-400">INFO</span>: User <span className="text-purple-400">@devil1210</span> requested /scan_library</div>
                <div className="text-slate-500 pl-4">→ Initializing Universal Hash Architecture scanner...</div>
                <div className="text-slate-500 pl-4">→ Found 12 new EPUB files in /mnt/books/incoming</div>
                <div className="text-slate-500 pl-4">→ Generating thumbnails (Glassmorphism settings applied)</div>
                <div className="text-slate-500">[10:43:45] <span className="text-green-400">SUCCESS</span>: Library index updated. +12 items.</div>
                <div className="text-slate-500">[10:45:00] <span className="text-blue-400">INFO</span>: Watchtower checking for container updates...</div>
                <div className="text-slate-500">[10:45:02] <span className="text-blue-400">INFO</span>: No updates found.</div>
                <div className="text-slate-300 animate-pulse">_</div>
              </div>
            </div>
          </div>
        </div>

        {/* User Management */}
        <div className="glass-panel rounded-xl overflow-hidden mb-6">
          <div className="p-6 border-b border-gray-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">User Management</h3>
            <div className="flex gap-2">
              <input 
                className="px-3 py-1.5 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-primary focus:border-primary text-slate-900 dark:text-white placeholder-slate-400" 
                placeholder="Find user ID..." 
                type="text" 
              />
              <button className="px-3 py-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-white rounded-lg text-sm font-medium transition-colors">
                Filter
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-slate-800/50 border-b border-gray-200 dark:border-slate-700 text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold tracking-wider">
                  <th className="px-6 py-4">User ID</th>
                  <th className="px-6 py-4">Username</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Daily Limit</th>
                  <th className="px-6 py-4">Last Active</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-slate-700 text-sm">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-400">5892104</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">A</div>
                      <span className="font-medium text-slate-900 dark:text-white">Alex_Reader</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 border border-purple-200 dark:border-purple-700/50">
                      VIP
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                    <div className="w-24 bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 mt-1 mb-1">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <span className="text-xs text-slate-400">12 / 100 DLs</span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">2 mins ago</td>
                  <td className="px-6 py-4 text-right flex justify-end gap-2">
                    <button className="text-slate-400 hover:text-primary transition-colors" title="Reset Limit">
                      <RotateCcw className="w-5 h-5" />
                    </button>
                    <button className="text-slate-400 hover:text-red-500 transition-colors" title="Ban">
                      <Ban className="w-5 h-5" />
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-400">9218401</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-xs">J</div>
                      <span className="font-medium text-slate-900 dark:text-white">JustABookWorm</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                      Free
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                    <div className="w-24 bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 mt-1 mb-1">
                      <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    <span className="text-xs text-red-400">9 / 10 DLs</span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">4 hrs ago</td>
                  <td className="px-6 py-4 text-right flex justify-end gap-2">
                    <button className="text-slate-400 hover:text-primary transition-colors" title="Reset Limit">
                      <RotateCcw className="w-5 h-5" />
                    </button>
                    <button className="text-slate-400 hover:text-red-500 transition-colors" title="Ban">
                      <Ban className="w-5 h-5" />
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-400">1102938</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold text-xs">?</div>
                      <span className="font-medium text-slate-900 dark:text-white italic text-slate-400">Deleted User</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300 border border-red-200 dark:border-red-700/50">
                      Banned
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                    <span className="text-xs text-slate-400">-</span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">5 days ago</td>
                  <td className="px-6 py-4 text-right flex justify-end gap-2">
                    <button className="text-slate-400 hover:text-green-500 transition-colors" title="Unban">
                      <CheckCircle className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-slate-700 flex justify-center">
            <button className="text-sm text-primary hover:text-primary-dark font-medium flex items-center gap-1">
              View all users 
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};