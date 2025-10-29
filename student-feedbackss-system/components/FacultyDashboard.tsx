
import React, { useState } from 'react';
import BarChartComponent from './charts/BarChartComponent';
import PieChartComponent from './charts/PieChartComponent';

const courseComparisonData = [
  { name: 'CS101', value: 4.2 },
  { name: 'MA202', value: 3.8 },
  { name: 'PY301', value: 4.5 },
  { name: 'HI100', value: 3.5 },
];

const facultyComparisonData = [
  { name: 'Dr. Turing', value: 4.2 },
  { name: 'Dr. Lovelace', value: 3.8 },
  { name: 'Dr. Curie', value: 4.5 },
  { name: 'Dr. Jones', value: 3.9 },
];

const paceData = [
    { name: 'Too Fast', value: 15 },
    { name: 'Just Right', value: 70 },
    { name: 'Too Slow', value: 15 },
];

const clarityData = [
    { name: 'Excellent', value: 50 },
    { name: 'Good', value: 35 },
    { name: 'Average', value: 10 },
    { name: 'Poor', value: 5 },
];

const FacultyDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    const TabButton: React.FC<{ tabName: string; label: string }> = ({ tabName, label }) => (
        <button
            onClick={() => setActiveTab(tabName)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === tabName ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}`}
        >
            {label}
        </button>
    );

    return (
        <div className="max-w-7xl mx-auto">
            <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                <nav className="-mb-px flex space-x-4" aria-label="Tabs">
                    <TabButton tabName="overview" label="Analytics Overview" />
                    <TabButton tabName="comparison" label="Comparisons" />
                    <TabButton tabName="actions" label="Manage Actions" />
                </nav>
            </div>
            
            {activeTab === 'overview' && (
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <PieChartComponent data={paceData} title="Overall Course Pace Distribution" />
                    <PieChartComponent data={clarityData} title="Overall Clarity of Concepts" />
                </div>
            )}

            {activeTab === 'comparison' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <BarChartComponent data={courseComparisonData} title="Course-wise Average Ratings" />
                    <BarChartComponent data={facultyComparisonData} title="Faculty-wise Average Ratings" />
                </div>
            )}

            {activeTab === 'actions' && (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Publish Action Taken on Feedback</h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="actionTitle" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                            <input type="text" id="actionTitle" className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div>
                            <label htmlFor="actionDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                            <textarea id="actionDescription" rows={4} className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                        </div>
                        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Publish Action</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default FacultyDashboard;
