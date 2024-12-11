import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useStore } from '../store/useStore';

export const DateRangeSelector: React.FC = () => {
  const { filters, setFilters } = useStore();
  const { dateRange } = filters;

  return (
    <div className="flex gap-4 items-center">
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <DatePicker
          selected={dateRange.start}
          onChange={(date) =>
            setFilters({
              dateRange: { ...dateRange, start: date },
            })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">End Date</label>
        <DatePicker
          selected={dateRange.end}
          onChange={(date) =>
            setFilters({
              dateRange: { ...dateRange, end: date },
            })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          dateFormat="yyyy-MM-dd"
        />
      </div>
    </div>
  );
};