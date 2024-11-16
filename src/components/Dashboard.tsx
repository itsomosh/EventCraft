import React from 'react';
import { Calendar, Clock, Users, DollarSign, BarChart2, Plus } from 'lucide-react';
import { useEventStore } from '../store/eventStore';
import { format } from 'date-fns';

const stats = [
  { label: 'Active Events', value: '12', icon: Calendar, color: 'bg-blue-500' },
  { label: 'Pending Tasks', value: '28', icon: Clock, color: 'bg-yellow-500' },
  { label: 'Total Vendors', value: '45', icon: Users, color: 'bg-green-500' },
  { label: 'Revenue', value: '$48.5k', icon: DollarSign, color: 'bg-purple-500' },
];

export function Dashboard() {
  const events = useEventStore((state) => state.events);

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <dt>
                <div className={`absolute rounded-md p-3 ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                  {stat.label}
                </p>
              </dt>
              <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </dd>
            </div>
          ))}
        </div>

        {/* Recent Events */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Recent Events</h2>
            <button className="btn btn-secondary text-sm">View all</button>
          </div>
          <div className="mt-4 bg-white shadow rounded-lg">
            {events.length === 0 ? (
              <div className="p-6 text-center">
                <div className="mx-auto h-12 w-12 text-gray-400">
                  <Plus className="h-12 w-12" />
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No events</h3>
                <p className="mt-1 text-sm text-gray-500">Get started by creating a new event.</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {events.map((event) => (
                  <div key={event.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-indigo-600">{event.type}</p>
                        <p className="text-sm text-gray-500">{event.title}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {format(new Date(event.date), 'MMM d, yyyy')}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {event.status}
                        </span>
                        <BarChart2 className="ml-4 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}