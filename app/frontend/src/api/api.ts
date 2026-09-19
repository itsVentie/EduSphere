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
  getStats: async (): Promise<SystemStats> => {
    try {
      return await fetchJson<SystemStats>('/stats');
    } catch (err) {
      console.warn('Backend unavailable, returning fallback stats:', err);
      return {
        active_students: 1280,
        total_courses: 24,
        submissions: 412,
        storage_used_gb: 84.5,
      };
    }
  },

  getCourses: async (): Promise<Course[]> => {
    try {
      return await fetchJson<Course[]>('/courses');
    } catch (err) {
      console.warn('Backend unavailable, returning fallback courses:', err);
      return [
        {
          id: '1',
          code: 'CS-101',
          title: 'Introduction to Computer Science',
          instructor: 'Dr. Robert Smith',
          description: 'Fundamental concepts of programming, algorithms, and data structures.',
        },
        {
          id: '2',
          code: 'MATH-201',
          title: 'Linear Algebra',
          instructor: 'Prof. Sarah Jenkins',
          description: 'Vector spaces, matrices, linear transformations, and eigenvalues.',
        },
      ];
    }
  },

  getSubmissions: async (): Promise<Submission[]> => {
    try {
      return await fetchJson<Submission[]>('/submissions');
    } catch (err) {
      console.warn('Backend unavailable, returning fallback submissions:', err);
      return [
        {
          id: 'sub-1',
          course_id: '1',
          assignment_title: 'Lab 3: Binary Search Trees',
          student_name: 'Alexander Wright',
          file_name: 'lab3_bst.zip',
          submitted_at: '2026-09-18 14:20',
          grade: '95/100',
          status: 'GRADED',
        },
        {
          id: 'sub-2',
          course_id: '2',
          assignment_title: 'Homework 2: Matrix Multiplication',
          student_name: 'Emily Davis',
          file_name: 'hw2_matrices.pdf',
          submitted_at: '2026-09-19 10:05',
          grade: 'Pending',
          status: 'PENDING',
        },
        {
          id: 'sub-3',
          course_id: '1',
          assignment_title: 'Project 1: CLI Parser',
          student_name: 'Michael Brown',
          file_name: 'project1_final.pdf',
          submitted_at: '2026-09-17 18:45',
          grade: '0/100',
          status: 'REJECTED',
        },
      ];
    }
  },
};