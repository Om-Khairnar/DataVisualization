import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChartData } from '../types';
import { useStore } from '../store/useStore';

interface Props {
  data: ChartData[];
}

export const FeatureBarChart: React.FC<Props> = ({ data }) => {
  const { setSelectedFeature } = useStore();

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="feature" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="timeSpent"
            fill="#8884d8"
            onClick={(data) => setSelectedFeature(data.feature)}
            cursor="pointer"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};