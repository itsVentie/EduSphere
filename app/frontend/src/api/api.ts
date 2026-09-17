import type { Course, SystemStats, Submission } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1';

async function fetchJson<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  getStats: () => fetchJson<SystemStats>('/stats'),
  getCourses: () => fetchJson<Course[]>('/courses'),
  getSubmissions: () => fetchJson<Submission[]>('/submissions'),
};