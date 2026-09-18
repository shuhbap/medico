// ────────────────────────────────────────────────────────────────────
// MEDICO API service layer
// Placeholders for future backend integration. All functions return
// mock data today and can be swapped for real HTTP calls without
// touching UI components.
// ────────────────────────────────────────────────────────────────────

import {
  medicines,
  doctors,
  pharmacies,
  ambulances,
  insurancePlans,
  sampleOrder,
  prescriptions,
} from "@/data/mockData";

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

// Auth
export const authService = {
  async sendOtp(_phone: string): Promise<{ ok: true }> {
    await delay();
    // TODO: POST /auth/otp
    return { ok: true };
  },
  async verifyOtp(_phone: string, _otp: string): Promise<{ token: string }> {
    await delay();
    // TODO: POST /auth/verify
    return { token: "mock-jwt-token" };
  },
};

// Medicines
export const medicineService = {
  async list(_filters?: { category?: string; q?: string; rx?: boolean; inStock?: boolean }) {
    await delay();
    // TODO: GET /medicines
    return medicines;
  },
  async get(id: string) {
    await delay();
    return medicines.find((m) => m.id === id);
  },
};

// Doctors
export const doctorService = {
  async list(_filters?: { specialty?: string; online?: boolean }) {
    await delay();
    // TODO: GET /doctors
    return doctors;
  },
  async get(id: string) {
    await delay();
    return doctors.find((d) => d.id === id);
  },
};

// Pharmacies
export const pharmacyService = {
  async nearby() {
    await delay();
    // TODO: GET /pharmacies/nearby?lat&lng
    return pharmacies;
  },
};

// Ambulance
export const ambulanceService = {
  async nearby() {
    await delay();
    // TODO: GET /ambulances/nearby?lat&lng
    return ambulances;
  },
  async request(_location: { lat: number; lng: number }) {
    await delay(600);
    // TODO: POST /ambulances/request
    return { requestId: "AMB-" + Date.now(), status: "requested" };
  },
};

// Orders
export const orderService = {
  async current() {
    await delay();
    // TODO: GET /orders/current
    return sampleOrder;
  },
  async place(_items: unknown, _address: string) {
    await delay();
    // TODO: POST /orders
    return { orderId: "MED-" + Math.floor(Math.random() * 90000 + 10000) };
  },
};

// Insurance
export const insuranceService = {
  async plans() {
    await delay();
    // TODO: GET /insurance/plans
    return insurancePlans;
  },
};

// Prescriptions
export const prescriptionService = {
  async list() {
    await delay();
    // TODO: GET /prescriptions
    return prescriptions;
  },
};
