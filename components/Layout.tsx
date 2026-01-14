import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Search, 
  Library, 
  Settings, 
  ShieldCheck, 
  Menu,
  X,
  BookOpen
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItem = ({ id, icon: Icon, label, isAdmin = false }: { id: string, icon: any, label: string, isAdmin?: boolean }) => (
    <button
      onClick={() => {
        onTabChange(id);
        setIsMobileMenuOpen(false);
      }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
        activeTab === id 
          ? 'bg-primary/10 text-primary border border-primary/20' 
          : 'text-gray-400 hover:bg-white/5 hover:text-gray-100'
      }`}
    >
      <Icon className={`w-5 h-5 ${activeTab === id ? 'text-primary' : 'text-gray-500 group-hover:text-gray-300'}`} />
      <span className={`font-medium ${activeTab === id ? 'font-semibold' : ''}`}>{label}</span>
      {isAdmin && (
        <span className="ml-auto text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded border border-primary/20">PRO</span>
      )}
    </button>
  );

  return (
    <div className="flex h-screen w-full bg-background text-white overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-72 flex-col border-r border-border bg-[#080808] z-20">
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-primary/20">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Zeepub<span className="text-primary">Bot</span></h1>
              <p className="text-xs text-gray-500">v2.4.0 Web</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-2">
          <p className="px-3 text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Menu</p>
          <NavItem id="dashboard" icon={LayoutDashboard} label="Dashboard" />
          <NavItem id="search" icon={Search} label="Discovery" />
          <NavItem id="library" icon={Library} label="My Library" />
          
          <div className="my-4 border-t border-border/50" />
          <p className="px-3 text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">System</p>
          <NavItem id="admin" icon={ShieldCheck} label="Admin Console" isAdmin />
          <NavItem id="settings" icon={Settings} label="Settings" />
        </nav>

        <div className="p-4 border-t border-border/50">
          <div className="glass-panel p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-white/5 transition-colors">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2rcMIxLOx5eu6yRpav3Y8qGpkFD2kC_fFSpyVjNI_zmfvjfPwU7tT0o4IWo8bJUd_Zt_ZE-XvtCRq0VFH6xkeCOZ6RNUSwUMkYvnq49dlaImBSvbx2y0LQ2ZShi-zZJ9SOX46KZQVmAqGJjihqPPZMUyxWkrYEvOQ0wjuaZfwx1Ux3D3P5FEFAo_3D3gvoUpdmv1x-qcgKh0DHSyh9-GHQ9EN3s9kFdAWafA1e_VN0XlAN9MZ3UD7h_56GH1_qsJ9cFtwIf5rKrw" 
              alt="User" 
              className="w-10 h-10 rounded-full border border-primary/30"
            />
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold truncate">Alex Doe</span>
              <span className="text-xs text-primary truncate">VIP Member</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 border-b border-border bg-background/80 backdrop-blur-md flex items-center justify-between px-4 z-30">
          <div className="flex items-center gap-2">
            <BookOpen className="text-primary w-6 h-6" />
            <span className="font-bold text-lg">ZeepubBot</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-400 hover:text-white">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute inset-0 z-20 bg-background pt-20 px-4 pb-6 overflow-y-auto">
            <nav className="flex flex-col gap-2">
              <NavItem id="dashboard" icon={LayoutDashboard} label="Dashboard" />
              <NavItem id="search" icon={Search} label="Discovery" />
              <NavItem id="library" icon={Library} label="My Library" />
              <NavItem id="admin" icon={ShieldCheck} label="Admin Console" isAdmin />
              <NavItem id="settings" icon={Settings} label="Settings" />
            </nav>
          </div>
        )}

        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#050505] relative scroll-smooth">
           {/* Background Glows */}
           <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
              <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]"></div>
           </div>
           
           <div className="relative z-10 max-w-7xl mx-auto">
             {children}
           </div>
        </main>
      </div>
    </div>
  );
};