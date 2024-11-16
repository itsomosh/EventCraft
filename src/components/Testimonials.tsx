import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I've saved countless hours using EventCraft. From organizing vendors to managing contracts, everything is seamless.",
    author: "James",
    role: "Wedding Planner"
  },
  {
    quote: "The budget optimizer alone was a game-changer. I delivered an amazing event and stayed under budget!",
    author: "Lilian",
    role: "Corporate Event Organizer"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Planners Who Transformed Their Process
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}