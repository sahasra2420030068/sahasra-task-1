
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartData } from '../../types';

interface PieChartComponentProps {
    data: ChartData[];
    title: string;
}

const COLORS = ['#4f46e5', '#818cf8', '#a78bfa', '#c4b5fd'];

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data, title }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-96">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#374151',
                            borderColor: '#4b5563',
                            color: '#e5e7eb'
                        }}
                    />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PieChartComponent;
