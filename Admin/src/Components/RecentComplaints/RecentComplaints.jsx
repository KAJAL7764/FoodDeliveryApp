// RecentComplaints.jsx
import React from 'react';
import './RecentComplaints.css';

const complaints = [
  { name: 'Wilder Scott', time: '3 min ago' },
  { name: 'Tatum Lewis', time: '10 min ago' },
  { name: 'Fletcher Trey', time: '25 min ago' },
];

const RecentComplaints = () => {
  return (
    <div className="complaints-card">
      <h3>Recent Complaints</h3>
      {complaints.map((user, index) => (
        <div className="complaint-item" key={index}>
          <img src={`https://i.pravatar.cc/40?img=${index + 1}`} alt={user.name} />
          <div>
            <strong>{user.name}</strong>
            <p>{user.time}</p>
            <a href="#">View message</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentComplaints;
