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
import { Library } from './pages/Library';
import { Series, Volume } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isReading, setIsReading] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState<Series | null>(null);
  const [selectedVolume, setSelectedVolume] = useState<Volume | null>(null);

  // Helper to construct a mock series/volume for Library items to open BookDetail
  const handleLibraryBookClick = (bookTitle: string, author: string, cover: string) => {
      const mockSeries: Series = {
          id: 'lib-series-1',
          title: bookTitle,
          author: author,
          coverUrl: cover,
          description: 'Description loaded from library...',
          genre: 'Fantasy',
          rating: 5.0,
          volumesCount: 1,
          status: 'Ongoing',
          lastUpdated: 'Hoy',
          volumes: []
      };
      const mockVolume: Volume = {
          id: 'lib-vol-1',
          seriesId: 'lib-series-1',
          title: bookTitle,
          volumeNumber: 1,
          coverUrl: cover,
          publishedDate: '2023',
          pages: 300,
          format: 'EPUB',
          rating: 5.0
      };
      setSelectedSeries(mockSeries);
      setSelectedVolume(mockVolume);
      setActiveTab('search'); // Re-use the search/detail view logic
  };

  const handleSearchNavigation = (term: string, type?: string) => {
    // In a real app, this would set the search query context/state
    console.log(`Navegando a búsqueda: ${term} [${type}]`);
    setSelectedVolume(null);
    setSelectedSeries(null);
    setActiveTab('search');
  };

  // Simple router logic for SPA/TMA environment
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onNavigate={setActiveTab} />;
      case 'search':
        if (selectedVolume && selectedSeries) {
          return (
            <BookDetail 
              volume={selectedVolume} 
              series={selectedSeries} 
              onBack={() => setSelectedVolume(null)}
              onSearch={handleSearchNavigation}
              onNavigate={setActiveTab}
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
        return <Search onSelectSeries={setSelectedSeries} onNavigate={setActiveTab} />;
      case 'requests':
        return <RequestBook onNavigate={setActiveTab} />;
      case 'admin':
        return <Admin onNavigate={setActiveTab} />;
      case 'settings':
        return <Settings onNavigate={setActiveTab} />;
      case 'library':
        return <Library onNavigate={setActiveTab} onSelectBook={handleLibraryBookClick} />;
      default:
        return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  if (isReading) {
    return <Reader onClose={() => setIsReading(false)} />;
  }

  // Hide the global bottom nav on Dashboard (cards are used instead), Search (has custom nav), Settings (has custom nav), etc.
  const showMobileBottomNav = activeTab !== 'dashboard' && activeTab !== 'search' && activeTab !== 'settings' && activeTab !== 'admin' && activeTab !== 'library' && activeTab !== 'requests';

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