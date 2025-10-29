
import React, { useState } from 'react';
import { Course } from '../types';
import Rating from './Rating';

interface FeedbackFormProps {
  course: Course;
  onClose: () => void;
  onSubmit: (feedback: any) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ course, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [clarity, setClarity] = useState('');
  const [pace, setPace] = useState('');
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        onSubmit({ courseId: course.id, rating, clarity, pace, comments });
        setIsSubmitting(false);
    }, 1500);
  };
  
  const paceOptions = [
    { value: 'too_fast', label: 'Too Fast' },
    { value: 'just_right', label: 'Just Right' },
    { value: 'too_slow', label: 'Too Slow' },
  ];

  const clarityOptions = [
    { value: 'excellent', label: 'Excellent' },
    { value: 'good', label: 'Good' },
    { value: 'average', label: 'Average' },
    { value: 'poor', label: 'Poor' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 sm:p-8 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Feedback for {course.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Your response is anonymous and confidential.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Overall Rating</label>
              <Rating count={5} value={rating} onChange={setRating} />
            </div>
            
            <div>
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Clarity of Concepts</label>
                <div className="flex flex-wrap gap-2">
                    {clarityOptions.map(option => (
                        <button type="button" key={option.value} onClick={() => setClarity(option.value)} className={`px-4 py-2 text-sm rounded-full transition-colors ${clarity === option.value ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Pace of the Course</label>
                <div className="flex flex-wrap gap-2">
                    {paceOptions.map(option => (
                        <button type="button" key={option.value} onClick={() => setPace(option.value)} className={`px-4 py-2 text-sm rounded-full transition-colors ${pace === option.value ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            <div>
              <label htmlFor="comments" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Comments & Suggestions</label>
              <textarea id="comments" rows={4} value={comments} onChange={(e) => setComments(e.target.value)} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
            </div>
          </div>
          <div className="p-6 sm:p-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Cancel</button>
            <button type="submit" disabled={isSubmitting || rating === 0 || !clarity || !pace} className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 disabled:cursor-not-allowed">
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
