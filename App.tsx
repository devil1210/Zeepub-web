import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Search } from './pages/Search';
import { Admin } from './pages/Admin';
import { Reader } from './pages/Reader';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isReading, setIsReading] = useState(false);

  // Simple router logic for SPA/TMA environment
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'search':
        return <Search />;
      case 'admin':
        return <Admin />;
      case 'library':
        // Reuse Dashboard or create placeholder
        return (
          <div className="flex flex-col items-center justify-center h-[50vh] text-center">
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

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;