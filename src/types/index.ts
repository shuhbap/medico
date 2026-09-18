export interface Medicine {
  id: string;
  name: string;
  strength: string;
  price: number;
  mrp?: number;
  category: string;
  prescriptionRequired: boolean;
  inStock: boolean;
  image: string;
  pharmacyId: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  reviews: number;
  fee: number;
  online: boolean;
  languages: string[];
  modes: ("chat" | "audio" | "video")[];
  avatar: string;
  nextSlot?: string;
}

export interface Pharmacy {
  id: string;
  name: string;
  distanceKm: number;
  etaMinutes: [number, number];
  rating: number;
}

export interface Ambulance {
  id: string;
  driver: string;
  vehicle: string;
  distanceKm: number;
  etaMinutes: number;
  available: boolean;
}

export interface InsurancePlan {
  id: string;
  name: string;
  provider: string;
  coverage: string;
  premium: string;
  tagline: string;
  features: string[];
}

export interface OrderStep {
  label: string;
  done: boolean;
  active?: boolean;
}

export interface Order {
  id: string;
  status: string;
  items: { name: string; qty: number; price: number }[];
  total: number;
  eta: string;
  steps: OrderStep[];
}

export interface CartItem {
  medicine: Medicine;
  qty: number;
}

export interface Prescription {
  id: string;
  doctor: string;
  date: string;
  diagnosis: string;
  medicines: { name: string; dosage: string }[];
}

export interface User {
  id: string;
  phone: string;
  name: string;
}
