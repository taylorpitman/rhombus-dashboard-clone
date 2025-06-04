import MoreIcon from '../../../assets/icons/misc/ic_more_vert.svg';
import CustomPieChart from './charts/PieChart';

type StatCardLgProps = {
    title: string,
    subtitle?: string,
    chartType?: 'pie' | 'bar' | 'line',
    chartData?: {
        label: string
        value: number
    }[]
}



const StatCardLg = ({ title, subtitle, chartType, chartData }: StatCardLgProps) => {
    return (
        <div className="w-1/3 p-6 h-full bg-white rounded-xl shadow-md overflow-auto">
            <div className="flex flex-col items-start">

                {/* Title and More Icon */}
                <div className='flex justify-between items-center w-full mb-2'>
                    <div className="text-2xl font-bold text-gray-800">{title}</div>
                    <img src={MoreIcon} alt="Send icon" className="shrink-0"/>
                </div>


                {subtitle && <div className="text-sm text-gray-400 mb-6">{subtitle}</div>}
                
                {/* Chart Placeholder */}
                <CustomPieChart data = {chartData ?? []} />

            </div>
        </div>
    );
}

export default StatCardLg;