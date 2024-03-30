import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";

// Initialize additional Highcharts modules
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);

const Bubbles = () => {
  useEffect(() => {
    // Chart configuration
    const options = {
      chart: {
        type: "packedbubble",
        height: "20%", // Set height to 100% to fill the container
        style: {
          background: "green",
          fontFamily: "Arial, sans-serif", // Optional: Change font family for better readability
        },
      },
      title: null, // Remove chart title
      credits: {
        enabled: false, // Remove Highcharts credits
      },
      tooltip: {
        useHTML: true,
        pointFormat: "<b>{point.name}:</b> {point.y}</sub>",
      },
      plotOptions: {
        packedbubble: {
          dataLabels: {
            enabled: false, // Disable data labels for better clean look
          },
          minPointSize: 5,
        },
      },
      series: [
        {
          name: "Traveling",
          data: [
            {
              value: 12,
              name: "Bert",
            },
            {
              value: 5,
              name: "Sam",
            },
            {
              value: 10,
              name: "John",
            },
            {
              value: 7,
              name: "Dick",
            },
          ],
        },
        {
          name: "Energy drinks",
          data: [
            {
              value: 10,
              name: "Ma",
            },
          ],
        },
        {
          name: "Tea",
          data: [
            5,
            6,
            8,
            {
              value: 10,
              name: "Mustapha",
              color: "pink",
            },
          ],
        },
      ],
    };

    // Render the Highcharts chart
    Highcharts.chart("container", options);
    Highcharts.setOptions({
      chart: {
        backgroundColor: {
          linearGradient: [0, 0, 500, 500],
          stops: [
            [0, "rgb(255, 255, 255)"],
            [1, "rgb(240, 240, 255)"],
          ],
        },
        borderWidth: 2,
        plotBackgroundColor: "rgba(255, 255, 255, .9)",
        plotShadow: true,
        plotBorderWidth: 1,
      },
    });
  }, []); // Empty dependency array to run the effect only once

  return <div id="container" />;
};

export default Bubbles;
