'use client';

import React, { useEffect, useState } from 'react'

const BuySellMarketChart = () => {

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            const fetchData = async () => {
                const ApexCharts = (await import('apexcharts')).default;
    
                const options = {
                    // add data series via arrays, learn more here: https://apexcharts.com/docs/series/
                    series: [
                      {
                        name: "Buy",
                        data: [1500, 1418, 1456, 1526, 1356, 1256],
                        color: "green",
                      },
                      {
                        name: "Sell",
                        data: [643, 413, 765, 412, 1423, 1731],
                        color: "red",
                      },
                    ],
                    chart: {
                      height: "100%",
                      maxWidth: "100%",
                      type: "area",
                      fontFamily: "Inter, sans-serif",
                      dropShadow: {
                        enabled: false,
                      },
                      toolbar: {
                        show: false,
                      },
                    },
                    tooltip: {
                      enabled: true,
                      x: {
                        show: false,
                      },
                    },
                    legend: {
                      show: true
                    },
                    fill: {
                      type: "gradient",
                      gradient: {
                        opacityFrom: 0.55,
                        opacityTo: 0,
                        shade: "#1C64F2",
                        gradientToColors: ["#1C64F2"],
                      },
                    },
                    dataLabels: {
                      enabled: false,
                    },
                    stroke: {
                      width: 6,
                    },
                    grid: {
                      show: false,
                      strokeDashArray: 4,
                      padding: {
                        left: 2,
                        right: 2,
                        top: -26
                      },
                    },
                    xaxis: {
                      categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
                      labels: {
                        show: false,
                      },
                      axisBorder: {
                        show: false,
                      },
                      axisTicks: {
                        show: false,
                      },
                    },
                    yaxis: {
                      show: false,
                      labels: {
                        formatter: function (value: string) {
                          return '$' + value;
                        }
                      }
                    },
                    }
    
                if (document.querySelector("#legend-chart")  && typeof ApexCharts !== 'undefined') {
                    const chart = new ApexCharts(document.querySelector('#legend-chart'), options);
                    console.log("Chart Rendered");
                    chart.render();
                }
            };
    
            setIsMounted(true);
            fetchData();
            
        }, 5000)
        return () => clearTimeout(timeout);
      }, []);
    


  return (
    
<div className="max-w-sm w-full rounded-lg">
  <div className="flex justify-between mb-5">
    <div>
      <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-black pb-2">AAPL</h5>
    </div>
   
  </div>
  {!isMounted && <div className='bg-slate-500 animate-pulse h-[350px] w-full'></div>}
  {isMounted && <div suppressHydrationWarning suppressContentEditableWarning id="legend-chart"></div>}
 
</div>

  )
}

export default BuySellMarketChart