import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
  } from 'recharts'

  type PieData = {
    label: string
    value: number
  }

  type PieChartProps = {
    data: PieData[]
    colors?: string[]
  }

  type LabelProps = {
    cx: number
    cy: number
    midAngle: number
    innerRadius: number
    outerRadius: number
    percent: number
    index: number
  }

  

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: LabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.50;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN); 
    return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          className="text-sm font-semibold"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
}

  
  const CustomPieChart = ({ data, colors = ['#FF6384', '#36A2EB', '#FFCE56'] }: PieChartProps) => {
    return (
      <div className="w-full ">
        <ResponsiveContainer width="100%" height={210}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="w-full flex justify-between text-sm mt-1">
          
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex justify-between items-center gap-2">
              <span
                className="w-2 h-1.5 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              <span>{entry.value} {entry.label}</span>
            </div>
          ))}
        </div>
      </div>

    )
  }
export default CustomPieChart;