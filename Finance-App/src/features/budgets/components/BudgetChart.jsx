import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { hexToRGB } from '../../../utils/hexToRGB.js';

const BudgetChart = ({
    budgets
}) => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    let data = budgets.map(budget => ({
        label: budget.category,
        value: budget.spent,
        color: hexToRGB(budget.theme),
        cutout: "50%",
    }))

    const options ={
        plugins: {
            responsive: true,
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    // Change tooltip label
                    label: (ctx) => {
                        const label = ctx.label || "";
                        const value = ctx.parsed || 0;
                        return ` $${value.toLocaleString()}`;
                    },
                },
            },
        },
        cutout: data.map((item) => item.cutout),
    }

    const finalData = {
        labels: data.map((item) => item.label),
        datasets: [
            {
                data: data.map((item) => item.value),
                backgroundColor: data.map((item) => `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, 0.7)`),
                borderColor: data.map((item) => `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, 1)`),
                borderWidth: 1,
                cutout: data.map((item) => item.cutout),
            },
        ],
    }

  return (
    <div className="relative w-full h-full min-h-[256px] max-h-[320px]">
      <Doughnut data={finalData} options={options} />
    </div>
  )
}

export default BudgetChart