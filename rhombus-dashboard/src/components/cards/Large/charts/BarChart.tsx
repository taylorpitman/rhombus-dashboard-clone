import { BarChart, Bar, Rectangle, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import arrowUp from '../../../../assets/icons/general_stats_large/ic_arrow_drop_up.svg';
import arrowDown from '../../../../assets/icons/general_stats_large/ic_arrow_drop_down.svg';

type BarData = {
  day: string
  lastMonth: number
  lastWeek: number
  thisWeek: number
}

  type BarChartProps = {
    data: BarData[]
    target?: number
  }


  const CustomBarChart = ({ data , target}: BarChartProps) => {

  return (
    <div className='flex flex-col gap-4'>
        <ResponsiveContainer width="100%" height={175}>
        <BarChart
        data={data}
        >
            <XAxis dataKey="day" />
            <Tooltip />

            <Bar dataKey="lastMonth" fill="#8884d8" name="Last Month" />
            <Bar dataKey="lastWeek" fill="#82ca9d" name="Last Week" />
            <Bar dataKey="thisWeek" fill="#ffc658" name="This Week" />
        </BarChart>
        </ResponsiveContainer>

            <div className="flex justify-between text-sm ">
            <div className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1">
                    <span>Target</span>
                    <div className = "flex items-center gap-1">
                        <img src={target && target > 0 ? arrowUp : arrowDown} alt="Arrow Icon" className="inline-block w-4 h-4" />
                        <p>{target}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1">
                    <span>Last Week</span>
                    <div className = "flex items-center gap-1">
                        <img src={arrowDown} alt="Arrow Icon" className="inline-block w-4 h-4" />
                        <p>{target}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1">
                    <span>Last Month</span>
                    <div className = "flex items-center gap-1">
                        <img src={target && target > 0 ? arrowUp : arrowDown} alt="Arrow Icon" className="inline-block w-4 h-4" />
                        <p>{target}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CustomBarChart;