const parseToCurrency = (value) => {
  const localesOptions = { minimumFractionDigits: 2 }
  const formattedValue = value.toLocaleString('pt-BR', localesOptions)

  return `R$ ${formattedValue}`
}

export default {
  legend: false,
  tooltips: {
    callbacks: {
      label: (tooltipItem) => parseToCurrency(tooltipItem.yLabel)
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
        tickMarkLength: 15
      },
      scaleLabel: {
        display: true,
      },
      type: 'time',
      distribution: 'series',
      time: {
        tooltipFormat: 'DD MMM YY',
        unit: 'day',
        displayFormats: {
          day: 'DD MMM YY',
        }
      },
      ticks: {
        source: 'data',
        autoSkip: true,
        autoSkipPadding: 20,
        maxRotation: 0,
        fontColor: '#888',
      }
    }],
    yAxes: [{
      position: 'right',
      ticks: {
        callback: (value) => parseToCurrency(value),
        fontColor: '#888'
      }
    }]
  }
}
