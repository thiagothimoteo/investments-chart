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
      scaleLabel: {
        display: true,
      },
      type: 'time',
      time: {
        tooltipFormat: 'DD MMM YY',
        unit: 'day',
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