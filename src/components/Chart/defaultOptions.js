const parseToCurrency = (value) => {
  const localesOptions = { minimumFractionDigits: 2 }
  const formattedValue = value.toLocaleString('pt-BR', localesOptions)

  return `R$ ${formattedValue}`
}

export default {
  legend: false,
  elements: {
  },
  tooltips: {
    callbacks: {
      label: (tooltipItem) => parseToCurrency(tooltipItem.yLabel)
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
      },
      type: 'time',
      time: {
        stepSize: 6,
        tooltipFormat: 'DD MMM YY',
        displayFormats: {
          day: 'DD MMM YY',
        }
      },
    }],
    yAxes: [{
      position: 'right',
      ticks: {
        callback: (value) => parseToCurrency(value)
      }
    }]
  }
}
