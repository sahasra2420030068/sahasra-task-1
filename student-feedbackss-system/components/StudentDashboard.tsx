
import React, { useState } from 'react';
import { Course, ActionTaken, Suggestion } from '../types';
import FeedbackForm from './FeedbackForm';

const mockCourses: Course[] = [
  { id: 'CS101', name: 'Introduction to Computer Science', faculty: 'Dr. Alan Turing' },
  { id: 'MA202', name: 'Advanced Calculus', faculty: 'Dr. Ada Lovelace' },
  { id: 'PY301', name: 'Quantum Physics', faculty: 'Dr. Marie Curie' },
];

const mockActions: ActionTaken[] = [
  { id: 'A01', title: 'CS101 Mid-term review session added', description: 'Based on feedback about difficulty with recursion, an extra review session will be held next Tuesday.', date: '2023-10-15', relatedFeedbackIds: [] },
  { id: 'A02', title: 'MA202 Pace Adjustment', description: 'We\'ve received feedback that the pace was a bit fast. The upcoming lectures on series will be adjusted to allow for more examples.', date: '2023-10-12', relatedFeedbackIds: [] },
];

const StudentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('feedback');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const handleFeedbackSubmit = (feedback: any) => {
    console.log('Feedback Submitted:', feedback);
    setSelectedCourse(null);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleSuggestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestion.trim()) {
        const newSuggestion: Suggestion = { id: Date.now().toString(), text: suggestion, date: new Date().toLocaleDateString() };
        setSuggestions(prev => [newSuggestion, ...prev]);
        setSuggestion('');
    }
  };

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
      {showSuccessMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Your feedback has been submitted anonymously.</span>
        </div>
      )}
      
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-4" aria-label="Tabs">
          <TabButton tabName="feedback" label="Give Feedback" />
          <TabButton tabName="actions" label="Actions Taken" />
          <TabButton tabName="suggestions" label="Suggestion Box" />
        </nav>
      </div>
      
      <div className="mt-6">
        {activeTab === 'feedback' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCourses.map(course => (
              <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{course.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{course.faculty}</p>
                </div>
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Give Feedback
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'actions' && (
          <div className="space-y-4">
             {mockActions.map(action => (
                <div key={action.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                    <h3 className="font-bold text-indigo-700 dark:text-indigo-400">{action.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">{action.description}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{action.date}</p>
                </div>
             ))}
          </div>
        )}

        {activeTab === 'suggestions' && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">General Suggestions for Improvement</h3>
                <form onSubmit={handleSuggestionSubmit}>
                    <textarea 
                        value={suggestion}
                        onChange={(e) => setSuggestion(e.target.value)}
                        rows={4} 
                        placeholder="Share your ideas for improving the overall student experience..."
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <button type="submit" className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Submit Suggestion</button>
                </form>
                <div className="mt-6">
                    <h4 className="font-semibold mb-2">Submitted Suggestions:</h4>
                    <div className="space-y-2">
                        {suggestions.map(s => (
                            <div key={s.id} className="p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                               <p>{s.text}</p>
                               <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
      </div>

      {selectedCourse && (
        <FeedbackForm 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    </div>
  );
};

export default StudentDashboard;
