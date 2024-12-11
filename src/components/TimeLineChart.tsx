import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { UserData } from '../types';

interface Props {
  data: UserData[];
}

export const TimeLineChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="timeSpent" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};