import React from 'react';
import './dashboard.css'; // Import the CSS file

function Dashboard() {
  return (
    <div className="dashboard">
      <header>
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Employee List</li>
          </ul>
        </nav>
        <div className="user-info">
          <p>Hukum Gupta</p>
          <button>Logout</button>
        </div>
      </header>

      <div className="content">
        <div className="welcome-message">
          <h2>Welcome Admin Panel</h2>
        </div>
        {/* Add other content sections here */}
      </div>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default Dashboard;