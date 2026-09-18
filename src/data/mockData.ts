import type {
  Medicine,
  Doctor,
  Pharmacy,
  Ambulance,
  InsurancePlan,
  Order,
  Prescription,
} from "@/types";

// ── Pharmacies ──────────────────────────────────────────────────────
export const pharmacies: Pharmacy[] = [
  { id: "ph1", name: "MediPlus Pharmacy", distanceKm: 1.2, etaMinutes: [18, 25], rating: 4.6 },
  { id: "ph2", name: "CareFirst Chemist", distanceKm: 2.4, etaMinutes: [25, 35], rating: 4.4 },
  { id: "ph3", name: "Wellness Pharmacy", distanceKm: 3.1, etaMinutes: [30, 45], rating: 4.7 },
];

// ── Medicines (5) ───────────────────────────────────────────────────
export const medicines: Medicine[] = [
  {
    id: "m1",
    name: "Paracetamol",
    strength: "500 mg",
    price: 32,
    mrp: 40,
    category: "Pain Relief",
    prescriptionRequired: false,
    inStock: true,
    image: "💊",
    pharmacyId: "ph1",
  },
  {
    id: "m2",
    name: "Cetirizine",
    strength: "10 mg",
    price: 45,
    category: "Cold & Cough",
    prescriptionRequired: false,
    inStock: true,
    image: "💊",
    pharmacyId: "ph1",
  },
  {
    id: "m3",
    name: "Azithromycin",
    strength: "250 mg",
    price: 128,
    mrp: 145,
    category: "Cold & Cough",
    prescriptionRequired: true,
    inStock: true,
    image: "💊",
    pharmacyId: "ph2",
  },
  {
    id: "m4",
    name: "Vitamin D3",
    strength: "60,000 IU",
    price: 95,
    category: "Vitamins",
    prescriptionRequired: false,
    inStock: true,
    image: "💊",
    pharmacyId: "ph1",
  },
  {
    id: "m5",
    name: "Pantoprazole",
    strength: "40 mg",
    price: 78,
    category: "Digestive Health",
    prescriptionRequired: true,
    inStock: false,
    image: "💊",
    pharmacyId: "ph3",
  },
];

export const medicineCategories = [
  "Pain Relief",
  "Cold & Cough",
  "Vitamins",
  "Digestive Health",
  "Personal Care",
  "First Aid",
];

// ── Doctors (5) ─────────────────────────────────────────────────────
export const doctors: Doctor[] = [
  {
    id: "d1",
    name: "Dr. Aarav Mehta",
    specialty: "General Physician",
    experience: 12,
    rating: 4.8,
    reviews: 1240,
    fee: 349,
    online: true,
    languages: ["English", "Hindi"],
    modes: ["chat", "audio", "video"],
    avatar: "👨‍⚕️",
    nextSlot: "Available now",
  },
  {
    id: "d2",
    name: "Dr. Priya Nair",
    specialty: "Dermatologist",
    experience: 9,
    rating: 4.7,
    reviews: 890,
    fee: 499,
    online: true,
    languages: ["English", "Malayalam", "Hindi"],
    modes: ["chat", "video"],
    avatar: "👩‍⚕️",
  },
  {
    id: "d3",
    name: "Dr. Rohan Kapoor",
    specialty: "Pediatrician",
    experience: 15,
    rating: 4.9,
    reviews: 2100,
    fee: 449,
    online: false,
    languages: ["English", "Hindi", "Punjabi"],
    modes: ["audio", "video"],
    avatar: "👨‍⚕️",
    nextSlot: "Today, 6:30 PM",
  },
  {
    id: "d4",
    name: "Dr. Sneha Reddy",
    specialty: "Gynecologist",
    experience: 11,
    rating: 4.8,
    reviews: 1560,
    fee: 549,
    online: true,
    languages: ["English", "Telugu", "Hindi"],
    modes: ["chat", "audio", "video"],
    avatar: "👩‍⚕️",
  },
  {
    id: "d5",
    name: "Dr. Vikram Singh",
    specialty: "Cardiologist",
    experience: 18,
    rating: 4.9,
    reviews: 3020,
    fee: 799,
    online: false,
    languages: ["English", "Hindi"],
    modes: ["video"],
    avatar: "👨‍⚕️",
    nextSlot: "Tomorrow, 10:00 AM",
  },
];

export const specialties = [
  "General Physician",
  "Dermatologist",
  "Pediatrician",
  "Gynecologist",
  "Cardiologist",
];

// ── Ambulances (3) ──────────────────────────────────────────────────
export const ambulances: Ambulance[] = [
  { id: "a1", driver: "Partner Driver A", vehicle: "Basic Life Support", distanceKm: 2.1, etaMinutes: 7, available: true },
  { id: "a2", driver: "Partner Driver B", vehicle: "Advanced Life Support", distanceKm: 3.8, etaMinutes: 11, available: true },
  { id: "a3", driver: "Partner Driver C", vehicle: "Patient Transport", distanceKm: 5.2, etaMinutes: 15, available: false },
];

// ── Insurance Plans (3) ─────────────────────────────────────────────
export const insurancePlans: InsurancePlan[] = [
  {
    id: "i1",
    name: "Essential Health",
    provider: "Partner Insurer A",
    coverage: "₹3 Lakh",
    premium: "₹420/mo",
    tagline: "Everyday protection for individuals",
    features: ["Hospitalisation cover", "Day-care procedures", "60-day pre/post care"],
  },
  {
    id: "i2",
    name: "Family Shield",
    provider: "Partner Insurer B",
    coverage: "₹10 Lakh",
    premium: "₹890/mo",
    tagline: "Complete cover for your family",
    features: ["Floater for 4 members", "Maternity cover", "Annual health check-up"],
  },
  {
    id: "i3",
    name: "Premium Care",
    provider: "Partner Insurer C",
    coverage: "₹25 Lakh",
    premium: "₹1,650/mo",
    tagline: "Advanced protection with no waiting",
    features: ["Zero waiting period", "Global emergency cover", "Unlimited teleconsults"],
  },
];

// ── Sample order ────────────────────────────────────────────────────
export const sampleOrder: Order = {
  id: "MED-10245",
  status: "Out for delivery",
  items: [
    { name: "Paracetamol 500 mg", qty: 1, price: 32 },
    { name: "Cetirizine 10 mg", qty: 1, price: 45 },
    { name: "Vitamin D3 60,000 IU", qty: 1, price: 95 },
  ],
  total: 182,
  eta: "18–25 min",
  steps: [
    { label: "Order placed", done: true },
    { label: "Pharmacy confirmed", done: true },
    { label: "Preparing", done: true },
    { label: "Out for delivery", done: false, active: true },
    { label: "Delivered", done: false },
  ],
};

// ── Prescriptions ───────────────────────────────────────────────────
export const prescriptions: Prescription[] = [
  {
    id: "RX-2041",
    doctor: "Dr. Aarav Mehta",
    date: "12 Feb 2026",
    diagnosis: "Viral fever",
    medicines: [
      { name: "Paracetamol 500 mg", dosage: "1 tablet, 3× a day after food" },
      { name: "Cetirizine 10 mg", dosage: "1 tablet at night" },
    ],
  },
  {
    id: "RX-2038",
    doctor: "Dr. Priya Nair",
    date: "02 Feb 2026",
    diagnosis: "Seasonal allergy",
    medicines: [{ name: "Levocetirizine 5 mg", dosage: "1 tablet at night for 5 days" }],
  },
];

// ── FAQ ─────────────────────────────────────────────────────────────
export const faqs = [
  {
    q: "What is MEDICO?",
    a: "MEDICO is a digital healthcare platform that brings medicine delivery, online doctor consultation, emergency ambulance assistance and health insurance services together in one place.",
  },
  {
    q: "Can I order medicines through MEDICO?",
    a: "Yes. You can search and order medicines from nearby partner pharmacies. Availability, pricing and delivery times depend on your location and the partner pharmacy.",
  },
  {
    q: "Do I need a prescription?",
    a: "Prescription medicines require a valid prescription from a registered medical practitioner. Non-prescription items can be ordered without one. Prescription requirements are shown on each medicine.",
  },
  {
    q: "Can I consult a doctor online?",
    a: "Yes, you can connect with available doctors through chat, audio or video consultation. Availability depends on the doctor's schedule and coverage.",
  },
  {
    q: "Is doctor consultation available 24/7?",
    a: "MEDICO aims to offer 24/7 coverage, but actual availability depends on doctor schedules and service coverage in your area.",
  },
  {
    q: "How does ambulance assistance work?",
    a: "You can request available ambulance support based on your location and track the trip. Availability and response time depend on partner vehicles and traffic conditions. In a life-threatening emergency, please also contact your local emergency services directly.",
  },
  {
    q: "Can I track my medicine order?",
    a: "Yes. Once your order is confirmed by a partner pharmacy, you can track its status from confirmation through to delivery in the app.",
  },
  {
    q: "Does MEDICO provide health insurance?",
    a: "MEDICO helps you explore and manage health insurance through partner insurers. Products, coverage, claims and services are subject to the relevant insurer and applicable regulatory requirements.",
  },
  {
    q: "Is MEDICO available everywhere?",
    a: "Service availability varies by location and expands over time. Coverage depends on partner pharmacies, doctors, ambulance partners and insurers in your area.",
  },
  {
    q: "When will the MEDICO mobile app launch?",
    a: "The MEDICO mobile app is coming soon to iOS and Android. You can join the waitlist from this website to be notified.",
  },
];
