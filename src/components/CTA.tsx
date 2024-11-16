import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Ready to Transform the Way You Plan?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn bg-white text-indigo-600 hover:bg-gray-100">
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="btn bg-transparent text-white border-2 border-white hover:bg-white/10">
            Request a Free Demo
          </button>
        </div>
      </div>
    </section>
  );
}