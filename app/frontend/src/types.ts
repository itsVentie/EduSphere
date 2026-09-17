export interface Course {
  id: string;
  title: string;
  code: string;
  instructor: string;
  description: string;
}

export interface Submission {
  id: string;
  course_id: string;
  student_name: string;
  file_name: string;
  submitted_at: string;
  grade: string;
  status: string;
}

export interface SystemStats {
  active_students: number;
  total_courses: number;
  submissions: number;
  storage_used_gb: number;
}