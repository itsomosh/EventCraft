export interface Event {
  id: string;
  title: string;
  date: string;
  type: 'wedding' | 'corporate' | 'concert' | 'other';
  status: 'planning' | 'in-progress' | 'completed';
  budget: number;
  location: string;
  description?: string;
}

export interface Task {
  id: string;
  eventId: string;
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: string;
  assignedTo?: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Vendor {
  id: string;
  name: string;
  type: string;
  contact: string;
  rating: number;
  price: number;
}