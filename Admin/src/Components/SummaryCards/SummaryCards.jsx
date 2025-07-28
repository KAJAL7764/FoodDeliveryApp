// SummaryCards.jsx
import React from 'react';
import './SummaryCards.css';

const data = [
  { label: 'Orders received', value: 1520, color: '#ff7043' },
  { label: 'Orders served', value: 1428, color: '#66bb6a' },
  { label: 'Pending orders', value: 30, color: '#42a5f5' },
  { label: 'Refund', value: '$105', color: '#ef5350' },
  { label: 'New customers', value: 36, color: '#ffa726' },
];

const SummaryCards = () => {
  return (
    <div className="summary-card-container">
      {data.map((item, index) => (
        <div
          className="summary-card"
          key={index}
          style={{ borderBottom: `4px solid ${item.color}` }}
        >
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
