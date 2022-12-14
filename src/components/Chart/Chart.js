import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import styles from "./Chart.module.css";


import { Chart as ChartJS, registerables } from 'chart.js';

import {Line , Bar} from "react-chartjs-2";
// import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);


function Chart({data:{confirmed,recovered,deaths},country}) {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchedDailyData = async () => {

            setDailyData(await fetchDailyData());

        }
       

        fetchedDailyData();
    },[])

    const lineChart = (
        dailyData.length ?
            (
                <Line
                    data={{
                        labels: dailyData.map(({ date })=> date),
    datasets: [{
        data: dailyData.map(({ confirmed })=> confirmed),
        label: 'Infected',
        borderColor: '#3333ff',
        fill: true,
               }, {
    data: dailyData.map(({ deaths })=> deaths),
    label: 'Deaths',
        borderColor: 'red',
            backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true,

            }],
           }}
/>):null
    )


    const barChart = (
        confirmed?
        (
         <Bar
          data={{
             labels:['Infected','Recovered','Deaths'],
             datasets:[{
                 label:'People',
                 backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                 data:[confirmed.value, recovered.value, deaths.value]
             }]
          }}
          options={{
              plugins:{
                legend: { display:false},
                title: { display:true , text:`Current state in ${country}`,},
              },
          }}
         />
        ):null
    )

return (
    <div className={styles.container}>
        {country? barChart : lineChart}
    </div>
)
}

export default Chart;