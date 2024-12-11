import React, { useEffect, useState } from 'react';
import { BarChart, Filter } from 'lucide-react';
import { DateRangeSelector } from './components/DateRangeSelector';
import { Filters } from './components/Filters';
import { FeatureBarChart } from './components/FeatureBarChart';
import { TimeLineChart } from './components/TimeLineChart';
import { fetchData } from './services/api';
import { useStore } from './store/useStore';
import { ChartData, UserData } from './types';

function App() {
  const { filters, selectedFeature } = useStore();
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const result = await fetchData(
          filters.dateRange.start,
          filters.dateRange.end,
          filters.ageRange,
          filters.gender
        );
        setData(result);
      } catch (error) {
        console.error('Error loading data:', error);
      }
      setLoading(false);
    };

    loadData();
  }, [filters]);

  const aggregatedData: ChartData[] = React.useMemo(() => {
    const grouped = data.reduce((acc, curr) => {
      const existing = acc.find((item) => item.feature === curr.feature);
      if (existing) {
        existing.timeSpent += curr.timeSpent;
      } else {
        acc.push({ feature: curr.feature, timeSpent: curr.timeSpent });
      }
      return acc;
    }, [] as ChartData[]);

    return grouped.sort((a, b) => b.timeSpent - a.timeSpent);
  }, [data]);

  const selectedFeatureData = React.useMemo(() => {
    if (!selectedFeature) return [];
    return data.filter((item) => item.feature === selectedFeature);
  }, [selectedFeature, data]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <BarChart className="w-6 h-6" />
              Data Visualization Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <DateRangeSelector />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </h2>
                <Filters />
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              {loading ? (
                <div className="flex items-center justify-center h-96">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                </div>
              ) : (
                <>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4">Feature Usage Overview</h2>
                    <FeatureBarChart data={aggregatedData} />
                  </div>

                  {selectedFeature && (
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h2 className="text-lg font-semibold mb-4">
                        Time Trend for Feature {selectedFeature}
                      </h2>
                      <TimeLineChart data={selectedFeatureData} />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;