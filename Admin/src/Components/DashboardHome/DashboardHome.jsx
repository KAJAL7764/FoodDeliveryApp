// DashboardHome.jsx
import React from 'react';
import SummaryCards from '../SummaryCards/SummaryCards';
import SalesChart from '../SalesChart/SalesChart';
import RecentComplaints from '../RecentComplaints/RecentComplaints';
import PopularFoods from '../PopularFoods/PopularFoods';
import './DashboardHome.css';

const DashboardHome = () => {
  return (
    <div className="dashboard-page">
      <SummaryCards />
      <div className="dashboard-middle">
        <SalesChart />
        <RecentComplaints />
      </div>
      <PopularFoods />
    </div>
  );
};

export default DashboardHome;
