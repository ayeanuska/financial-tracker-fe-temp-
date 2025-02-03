// Function to aggregate data by type (income/expenses)
const aggregateData = (transactions) => {
  const result = { income: {}, expenses: {} };

  transactions.forEach((transaction) => {
    const date = transaction.tDate.split("T")[0];
    if (transaction.type === "income") {
      result.income[date] = (result.income[date] || 0) + transaction.amount;
    } else if (transaction.type === "expenses") {
      result.expenses[date] = (result.expenses[date] || 0) + transaction.amount;
    }
  });

  return result;
};

// Prepare data for the chart
const prepareChartData = (aggregatedData) => {
  const labels = Object.keys(aggregatedData.income)
    .concat(Object.keys(aggregatedData.expenses))
    .filter((value, index, self) => self.indexOf(value) === index);
  const incomeData = labels.map((label) => aggregatedData.income[label] || 0);
  const expensesData = labels.map(
    (label) => aggregatedData.expenses[label] || 0
  );

  return { labels, incomeData, expensesData };
};

export const formatChartData = (transactionData) => {
  transactionData.sort((a, b) => new Date(a.tDate) - new Date(b.tDate));

  const incomeRecord = transactionData
    .filter((record) => record.type == "income")
    .map((record) => ({
      date: record.tDate.split("T")[0],
      amount: record.amount,
    }));

  const expenseRecord = transactionData
    .filter((record) => record.type == "expenses")
    .map((record) => ({
      date: record.tDate.split("T")[0],
      amount: record.amount,
    }));

  const income = {
    amount: incomeRecord.reduce((acc, i) => acc + parseInt(i.amount), 0),
    dataset: incomeRecord.map((i) => i.amount),
    label: incomeRecord.map((i) => i.date),
    color: "#198754",
  };

  const expense = {
    amount: expenseRecord.reduce((acc, i) => acc + parseInt(i.amount), 0),
    dataset: expenseRecord.map((i) => i.amount),
    label: expenseRecord.map((i) => i.date),
    color: "#dc3545",
  };

  const aggregatedData = aggregateData(transactionData);
  const combinedData = prepareChartData(aggregatedData);

  let tempChardData = {
    balance: {
      amount: income.amount + expense.amount,
      chartData: {
        labels: ["Income", "Expense"],
        datasets: [
          {
            label: "Amount",
            data: [income.amount, expense.amount],
            backgroundColor: [income.color + "99", expense.color + "99"],
            borderColor: [income.color, expense.color],
            borderWidth: 1,
          },
        ],
      },
    },
    income: {
      amount: income.amount,
      lineData: {
        labels: income.label,
        datasets: [
          {
            label: "Income",
            data: income.dataset,
            borderColor: income.color,
            backgroundColor: income.color + "33",
            tension: 0.2, // Curved line effect
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true, // Y-axis starts at 0
          },
          x: {
            ticks: {
              maxRotation: 180, // Maximum rotation for X-axis labels
              minRotation: 20, // Minimum rotation for X-axis labels
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Income Over Time",
          },
        },
      },
    },
    expense: {
      amount: expense.amount,
      lineData: {
        labels: expense.label,
        datasets: [
          {
            label: "Expense",
            data: expense.dataset,
            borderColor: expense.color,
            backgroundColor: expense.color + "33",
            tension: 0.2,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true, // Y-axis starts at 0
          },
          x: {
            ticks: {
              maxRotation: 180, // Maximum rotation for X-axis labels
              minRotation: 20, // Minimum rotation for X-axis labels
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Expense Over Time",
          },
        },
      },
    },
    combined: {
      data: {
        labels: combinedData.labels,
        datasets: [
          {
            label: "Income",
            data: combinedData.incomeData,
            borderColor: income.color,
            backgroundColor: income.color + "99",
            tension: 0.2,
          },
          {
            label: "Expense",
            data: combinedData.expensesData,
            borderColor: expense.color,
            backgroundColor: expense.color + "99",
            tension: 0.2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true, // Y-axis starts at 0
          },
          x: {
            ticks: {
              maxRotation: 180, // Maximum rotation for X-axis labels
              minRotation: 20, // Minimum rotation for X-axis labels
            },
          },
        },
      },
    },
  };

  return tempChardData;
};
