import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            EventCraft
            <span className="block text-2xl md:text-3xl text-indigo-600 mt-2">
              Streamline, Simplify, Succeed.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-8">
            Streamline your workflow, deliver unforgettable experiences, and take the stress out of event planning.
            EventCraft empowers you to plan, execute, and succeed like never before—all on one powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/dashboard')}
            >
              Start Planning Today <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="btn btn-secondary">
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}