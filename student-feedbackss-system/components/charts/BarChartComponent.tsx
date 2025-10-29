
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartData } from '../../types';

interface BarChartComponentProps {
    data: ChartData[];
    title: string;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data, title }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-96">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#374151',
                            borderColor: '#4b5563',
                            color: '#e5e7eb'
                        }}
                    />
                    <Legend />
                    <Bar dataKey="value" fill="#4f46e5" name="Average Rating" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;
