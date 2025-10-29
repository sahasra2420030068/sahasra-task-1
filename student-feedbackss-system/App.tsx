
import React, { useState, useCallback } from 'react';
import LoginPage from './components/LoginPage';
import StudentDashboard from './components/StudentDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import Header from './components/Header';
import { User, UserRole } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = useCallback((role: UserRole) => {
    setUser({ role, name: role === 'student' ? 'Jane Doe' : 'Dr. Smith' });
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
  }, []);

  const renderDashboard = () => {
    if (!user) {
      return <LoginPage onLogin={handleLogin} />;
    }

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header user={user} onLogout={handleLogout} />
        <main className="p-4 sm:p-6 lg:p-8">
          {user.role === 'student' ? <StudentDashboard /> : <FacultyDashboard />}
        </main>
      </div>
    );
  };

  return (
    <div className="antialiased">
      {renderDashboard()}
    </div>
  );
};

export default App;
