import ProgressBar from './ProgressBar.tsx';

type StatCardSmallProps = {
  value: string,
  icon: React.ReactNode,
  subtitle: string,
  percentage: number,
  color?: string;
}

const StatCardSmall = ({ value, icon, subtitle, percentage, color }: StatCardSmallProps) => {
  return (
    <div className="w-1/4 p-6 bg-white rounded-xl shadow-md">
      <div className ="flex flex-col items-start">
          <div className="flex justify-between items-center w-full">
            <div className="text-2xl font-bold text-gray-800">{value}</div>
            <div className="shrink-0">{icon}</div>
          </div>

          <div className="font-inter text-sm text-gray-400 mb-6">
            {subtitle}
          </div>

          <div className="w-full text-sm text-gray-600 mb-2">
            <ProgressBar percentage={percentage} color = {color} />
          </div>
        </div>
    </div>
  );
}

export default StatCardSmall;