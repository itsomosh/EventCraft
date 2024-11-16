import React, { useState } from 'react';
import { Menu, X, Plus, Calendar, Settings, LogOut } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { EventModal } from './EventModal';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const showDashboardItems = location.pathname === '/dashboard';

  return (
    <>
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span 
                className="text-2xl font-bold text-indigo-600 cursor-pointer"
                onClick={() => navigate('/')}
              >
                EventCraft
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {showDashboardItems ? (
                <>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setShowEventModal(true)}
                  >
                    <Plus className="h-5 w-5 mr-2" /> New Event
                  </button>
                  <button className="nav-link">
                    <Calendar className="h-5 w-5 mr-2" /> Calendar
                  </button>
                  <button className="nav-link">
                    <Settings className="h-5 w-5" />
                  </button>
                </>
              ) : (
                <button 
                  className="nav-link"
                  onClick={() => navigate('/dashboard')}
                >
                  Dashboard
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {showDashboardItems ? (
                <>
                  <button 
                    className="mobile-nav-button"
                    onClick={() => {
                      setShowEventModal(true);
                      setIsOpen(false);
                    }}
                  >
                    <Plus className="h-5 w-5 mr-2" /> New Event
                  </button>
                  <button className="mobile-nav-button">
                    <Calendar className="h-5 w-5 mr-2" /> Calendar
                  </button>
                  <button className="mobile-nav-button">
                    <Settings className="h-5 w-5 mr-2" /> Settings
                  </button>
                </>
              ) : (
                <button 
                  className="mobile-nav-button"
                  onClick={() => {
                    navigate('/dashboard');
                    setIsOpen(false);
                  }}
                >
                  Dashboard
                </button>
              )}
              <button className="mobile-nav-button text-red-600">
                <LogOut className="h-5 w-5 mr-2" /> Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      <EventModal 
        isOpen={showEventModal} 
        onClose={() => setShowEventModal(false)} 
      />
    </>
  );
}