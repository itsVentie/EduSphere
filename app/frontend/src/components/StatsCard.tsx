import type { FunctionalComponent } from 'preact';

interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
}

export const StatsCard: FunctionalComponent<StatsCardProps> = ({ title, value, description }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
      <h3 className="text-sm font-medium text-slate-400">{title}</h3>
      <div className="text-2xl font-bold text-sky-400 mt-2">{value}</div>
      <p className="text-xs text-slate-500 mt-1">{description}</p>
    </div>
  );
};