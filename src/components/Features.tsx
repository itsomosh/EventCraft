import React from 'react';
import { Calendar, Clock, Users, Briefcase } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-8 w-8 text-indigo-600" />,
    title: 'Task Automation',
    description: 'Automatically generate schedules, reminders, and checklists based on event type.'
  },
  {
    icon: <Users className="h-8 w-8 text-indigo-600" />,
    title: 'Vendor Coordination',
    description: 'Streamline communication and scheduling with all your suppliers.'
  },
  {
    icon: <Briefcase className="h-8 w-8 text-indigo-600" />,
    title: 'Contracts & Proposals',
    description: 'Create professional agreements and client pitches effortlessly.'
  },
  {
    icon: <Clock className="h-8 w-8 text-indigo-600" />,
    title: 'Real-Time Updates',
    description: 'Stay on top of every detail with instant notifications and updates.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          The Smarter Way to Plan Events
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}