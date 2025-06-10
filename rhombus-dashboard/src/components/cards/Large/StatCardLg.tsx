import MoreIcon from '../../../assets/icons/misc/ic_more_vert.svg';
import CustomPieChart from './charts/PieChart';
import CustomBarChart from './charts/BarChart';
import CustomLineChart from './charts/LineChart';

type StatCardLgProps = {
    title: string,
    subtitle?: string,
    chartType?: 'pie' | 'bar' | 'line',
    pieData?: {
        label: string
        value: number
    }[],
    barData?: {
        day: string
        lastMonth: number
        lastWeek: number
        thisWeek: number
    }[],
    target?: number,
    lineData?: {
        value: number
    }[]
}



const StatCardLg = ({ title, subtitle, chartType, pieData, barData, target, lineData }: StatCardLgProps) => {
    return (
        <div className="w-1/3 flex flex-col justify-between p-8 bg-white rounded-xl shadow-md overflow-auto ">

                {/* Title and More Icon */}
                <div className='flex justify-between items-center w-full mb-2'>
                    <div className="text-2xl font-semibold text-gray-800">{title}</div>
                    <img src={MoreIcon} alt="Send icon" className="shrink-0"/>
                </div>


                {subtitle && <div className="text-sm text-gray-400">{subtitle}</div>}
                
                {/* Chart Placeholder */}
                { chartType == 'pie' && <CustomPieChart data = {pieData ?? []} /> }

                { chartType == 'bar' && <CustomBarChart data = {barData ?? []} target={target} /> }

                { chartType == 'line' && <CustomLineChart data={lineData ?? []} /> }
            </div>
    );
}

export default StatCardLg;