


type ProgressBarProps = {
  percentage: number,
  color?: string;
};


const ProgressBar = ({ percentage, color }: ProgressBarProps) => {
  return (
    <div className = "flex gap-2 w-full items-center justify-between">
        <div className=" w-full z-0 bg-gray-200 rounded-full h-1 dark:bg-gray-700">
            <div
                        className={`h-1 rounded-full transition-all duration-300 ease-in-out z-1`}
                        style={{ width: `${percentage}%`, backgroundColor: color || 'pink' }}
                        ></div>      </div>
        <div className="text-xs">{`${percentage}%`}</div>
    </div>
  );
}

export default ProgressBar;