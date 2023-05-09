// import Chart from './lib/chart.js';

// import 'chartjs-plugin-doughnutlabel';




const bmrValue = parseInt(document.getElementById("bmr-value").innerText);
console.log(bmrValue)
const calorieCount = parseInt(document.getElementById("calorie-count").innerText);
console.log(calorieCount)
const remainingCalories = bmrValue - calorieCount;
console.log(remainingCalories)

    const ctx = document.getElementById("chartJs").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [calorieCount, remainingCalories],
            backgroundColor: ["green", "blue"],
            hoverBackgroundColor: ["green", "blue"],
          },
        ],
        labels: ["Calorie Count", "Remaining Calories"],
      },
      options: {
        cutoutPercentage: 70,
        elements: {
          arc: {
            borderWidth: 0,
          },
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
      },
    });