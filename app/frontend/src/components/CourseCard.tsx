import { FunctionalComponent } from 'preact';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: FunctionalComponent<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 flex flex-col justify-between">
      <div>
        <span className="text-xs font-mono bg-sky-950 text-sky-400 px-2 py-1 rounded border border-sky-800">
          {course.code}
        </span>
        <h2 className="text-lg font-semibold text-slate-100 mt-3">{course.title}</h2>
        <p className="text-sm text-slate-400 mt-2 line-clamp-2">{course.description}</p>
      </div>
      <div className="mt-4 pt-3 border-t border-slate-700/50 flex justify-between items-center text-xs text-slate-400">
        <span>Преподаватель:</span>
        <span className="font-medium text-slate-300">{course.instructor}</span>
      </div>
    </div>
  );
};