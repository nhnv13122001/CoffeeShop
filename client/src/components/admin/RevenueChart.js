import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const RevenueChart = ({type}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      }
    },
  };
  
  const labels = [
    "24/10",
    "25/10",
    "26/10",
    "27/10",
    "28/10",
    "29/10",
    "30/10",
    "01/11",
    "02/11",
    "03/11",
    "04/11",
    "05/11",
    "06/11",
    "07/11",
    "08/11",
    "09/11",
    "10/11",
    "11/11",
    "12/11",
    "13/11",
    "14/11",
    "15/11",
    "16/11",
    "17/11",
    "18/11",
    "19/11",
    "20/11",
    "21/11",
    "22/11",
    "23/11"
  ];
  
  const weekLabels =[
    "17/11",
    "18/11",
    "19/11",
    "20/11",
    "21/11",
    "22/11",
    "23/11"
  ];
  
  const yearLabels=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  
  const revenueData = [
    1750, 
    3990, 
    4350, 
    2998, 
    3249, 
    3555, 
    1779, 
    2900, 
    3800,
    1100, 
    2299, 
    1800,
    2102,
    2984,
    3992,
    1000,
    2999,
    3128,
    2322,
    1292,
    1582,
    3283,
    3282,
    4000,
    3222,
    1292,
    1829,
    1929,
    2935,
    3940
  ];
  
  const weekRe = [
    4000,
    3222,
    1292,
    1829,
    1929,
    2935,
    3940
  ];
  
  const yearRe = [
    78902,
    82324,
    85023,
    92020,
    82372,
    79283,
    93495,
    98392,
    83427,
    82389,
    89329,
    94293
  ];
  
  const weekData = {
    labels: weekLabels,
    datasets: [
      {
        label: "Doanh thu (nghìn đồng)",
        data: weekRe,
        backgroundColor: 'red',
        
      }
    ],
  };
  
  const yearData = {
    labels: yearLabels,
    datasets: [
      {
        label: "Doanh thu (nghìn đồng)",
        data: yearRe,
        backgroundColor: 'red',
        
      }
    ],
  };
  
  
  const monthData = {
    labels,
    datasets: [
      {
        label: "Doanh thu (nghìn đồng)",
        data: revenueData,
        backgroundColor: 'red',
        
      }
    ],
  };

  return (
    <div className='d-flex my-auto mx-5'>
      {
        type === "week"
          ? <Bar options={options} data={weekData}/>
          : type === "month"
            ? <Bar options={options} data={monthData}/>
            : <Bar options={options} data={yearData}/>
      }
    </div>
  )
}

export default RevenueChart