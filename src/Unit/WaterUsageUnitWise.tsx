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
      display: false, // Hide the legend
    },
    title: {
      display: true,
      text: 'Water usage',
      position:'top',
      align:'start',
      color:'#01337C',
      font:{
        size:'8px'
      }
    },
    backgroundColor: '#ffff',
  },


  scales: {
    x: {
        ticks: {
            font: {
                size: '8px',
                family:'inter',
               
                weight:'500',
                lineHeight:'0.5'
                
            }
        },
        grid: {
          display: false,
        },
    },
    y: {
        ticks: {
            font: {
              size: '8px',
              family:'inter',
              
              weight:'500',
              lineHeight:'0.7'
              
            },
            maxTicksLimit: 4, 
        },
        grid: {
          display: false,
        }
      
    }                       
}
};

// Function to generate labels based on interval
const generateLabels = (interval) => {
  switch (interval) {
    case 'weekly':
      return ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    case 'monthly':
      return ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    case 'yearly':
      return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    default:
      return [];
  }
};

export default function WaterUsageUnitWise() {
  const [interval, setInterval] = useState('weekly');
  const labels = generateLabels(interval);
  const createLinearGradient = (context) => {
    const ctx = context.chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(1, 58, 140, 1)');
    gradient.addColorStop(0.5, 'rgba(1, 51, 124, 1)');
    gradient.addColorStop(1, 'rgba(0, 193, 123, 1)');
    return gradient;
  }
  

  const data = {
    labels,
    datasets: [
      {
        label: 'Estimated Usages',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        backgroundColor: createLinearGradient,
        barThickness: 25,
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
    <div className='w-[100%] '>
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
