// SalesChart.jsx
import React from 'react';
import './SalesChart.css';

const SalesChart = () => {
  return (
    <div className="chart-card">
      <h3>Sales Report</h3>
      <img
        src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],datasets:[{label:'Orders Received',data:[10,20,15,30,25,20,25,30,35,28,32],backgroundColor:'#42a5f5'},{label:'Orders Served',data:[8,18,13,28,20,18,22,27,32,24,30],backgroundColor:'#66bb6a'}]}}"
        alt="Sales Chart"
        className="chart-img"
      />
    </div>
  );
};

export default SalesChart;
