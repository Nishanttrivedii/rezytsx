import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import { CategoryScale, Chart } from "chart.js";
import { registerables } from 'chart.js';
import { MenuItem, Select } from '@mui/material';
import { useEffect } from 'react';
import "./Chart.css"
Chart.register(...registerables);
Chart.register(CategoryScale);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      align: "end",
      labels: {
        boxWidth: 20, // Adjust legend label box width
        boxHeight: 20, // Adjust legend label box height
      },
    },
    title: {
      display: true,
      text: 'Water kpi',
      position:'top',
      align:'start',
      color:'#01337C'
    },
    backgroundColor: '#ffff',
  },


  scales: {
    x: {
        ticks: {
            font: {
                size: '14px',
                family:'inter',
               
                weight:'500',
                lineHeight:'2'
                
            }
        },
        grid: {
          display: false,
        },
    },
    y: {
        ticks: {
            font: {
              size: '14px',
              family:'inter',
              
              weight:'500',
              
            }
        },
        grid: {
          display: false,
        },
    }                       
}
};

// Function to generate labels based on interval
const generateLabels = (interval) => {
  switch (interval) {
    case 'weekly':
      return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    case 'monthly':
      return ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    case 'yearly':
      return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    default:
      return [];
  }
};

export default function NewGraph() {
  const [interval, setInterval] = useState('weekly');
  const labels = generateLabels(interval);

  const data = {
    labels,
    datasets: [
      {
        label: 'Estimated Usages',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: '#00C17B',
        barThickness: 20,
        borderWidth: 4, // Set border width
        borderRadius: 8,
        borderColor: '#ffff',
      },
      {
        label: 'Current Usages',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: '#01337C',
        barThickness: 20,
        borderWidth: 4, // Set border width
        borderRadius: 8,
        borderColor: '#ffff',
      },
    ],
  };




  

  const handleIntervalChange = (newInterval) => {
    setInterval(newInterval);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <div className=' '>
    <Bar style={{ backgroundColor: '#FFFF'}} options={options} data={data} />
    
    </div>
    {/* <Select
        value={interval}
        onChange={(e) => handleIntervalChange(e.target.value)}
        variant="outlined"
        style={{ marginLeft: '16px',position:"relative",top:'0',right:"0" }}
      >
        <MenuItem value="weekly">Weekly</MenuItem>
        <MenuItem value="monthly">Monthly</MenuItem>
        <MenuItem value="yearly">Yearly</MenuItem>
      </Select> */}
    
    </div>
  );
  
}
