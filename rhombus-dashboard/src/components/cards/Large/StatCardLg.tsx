

type StatCardLgProps = {
    title: string,
    subtitle?: string,
    chartType?: 'pie' | 'bar' | 'line',
    chartData?: any 
}

const StatCardLg = ({ title, subtitle, chartType, chartData }: StatCardLgProps) => {
    return (
        <div className="w-full p-6 bg-white rounded-xl shadow-md">
            <div className="flex flex-col items-start">
                <div className="text-2xl font-bold text-gray-800 mb-2">{title}</div>
                {subtitle && <div className="text-sm text-gray-400 mb-4">{subtitle}</div>}
                
                {/* Placeholder for chart rendering */}
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    {/* Chart would be rendered here based on chartType and chartData */}
                    <span className="text-gray-500">Chart Placeholder ({chartType})</span>
                </div>
            </div>
        </div>
    );
}

export default StatCardLg;