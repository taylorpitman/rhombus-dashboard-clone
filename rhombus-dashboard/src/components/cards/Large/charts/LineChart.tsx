import React, { PureComponent } from 'react';
import {  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type LineData = {
  value: number;
};

type LineChartProps = {
  data: LineData[];
};

const CustomLineChart = ({ data }: LineChartProps) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
        >
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#6B46C1" fill="#E9D8FD"/>
        </AreaChart>
      </ResponsiveContainer>
    );
  }
export default CustomLineChart;
