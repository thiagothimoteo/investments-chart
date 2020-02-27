import numberToCurrency from './numberToCurrency'

describe('numberToCurrency', () => {
  it('formats number to currency', () => {
    const n1 = 100.58
    const n2 = 0.50
    const n3 = 140560

    expect(numberToCurrency(n1)).toBe('R$ 100,58')
    expect(numberToCurrency(n2)).toBe('R$ 0,50')
    expect(numberToCurrency(n3)).toBe('R$ 140.560,00')
  })
})
