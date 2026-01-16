import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Search } from './pages/Search';
import { Admin } from './pages/Admin';
import { Reader } from './pages/Reader';
import { Settings } from './pages/Settings';
import { SeriesDetail } from './pages/SeriesDetail';
import { BookDetail } from './pages/BookDetail';
import { RequestBook } from './pages/RequestBook';
import { Series, Volume } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isReading, setIsReading] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState<Series | null>(null);
  const [selectedVolume, setSelectedVolume] = useState<Volume | null>(null);

  // Simple router logic for SPA/TMA environment
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'search':
        if (selectedVolume && selectedSeries) {
          return (
            <BookDetail 
              volume={selectedVolume} 
              series={selectedSeries} 
              onBack={() => setSelectedVolume(null)} 
            />
          );
        }
        if (selectedSeries) {
          return (
            <SeriesDetail 
              series={selectedSeries} 
              onBack={() => setSelectedSeries(null)} 
              onSelectVolume={setSelectedVolume}
            />
          );
        }
        return <Search onSelectSeries={setSelectedSeries} />;
      case 'requests':
        return <RequestBook />;
      case 'admin':
        return <Admin onNavigate={setActiveTab} />;
      case 'settings':
        return <Settings onNavigate={setActiveTab} />;
      case 'library':
        // Reuse Dashboard or create placeholder
        return (
          <div className="flex flex-col items-center justify-center h-[50vh] text-center p-8">
            <h2 className="text-2xl font-bold text-white mb-4">My Library</h2>
            <p className="text-gray-400 mb-6">Select a book to start reading.</p>
            <button 
              onClick={() => setIsReading(true)} 
              className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors"
            >
              Open Last Read (Atomic Habits)
            </button>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  if (isReading) {
    return <Reader onClose={() => setIsReading(false)} />;
  }

  // Hide the global bottom nav when in the 'search' (Catalog), 'settings', or 'admin' tabs
  const showMobileBottomNav = activeTab !== 'search' && activeTab !== 'settings' && activeTab !== 'admin';

  return (
    <ThemeProvider>
      <Layout 
        activeTab={activeTab} 
        onTabChange={(tab) => {
          setActiveTab(tab);
          // Reset navigation state when changing tabs, except if clicking search again
          if (tab !== 'search') {
            setSelectedSeries(null);
            setSelectedVolume(null);
          }
        }}
        showMobileBottomNav={showMobileBottomNav}
      >
        {renderContent()}
      </Layout>
    </ThemeProvider>
  );
};

export default App;