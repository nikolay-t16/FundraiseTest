interface CurrenciesData {
  name: string;
  code: string;
  symbol: string;
  rate: number;
}

class DonateState {
  private readonly DEFAULT_CURRENCY = 'USD';

  public readonly presets = [40, 100, 200, 1000, 2500, 5000];

  public readonly currencies: Map<string, CurrenciesData> = new Map();

  public currentCurrency = this.DEFAULT_CURRENCY;

  constructor() {
    this.currencies.set('USD', {
      name: 'US Dollar', code: 'USD', symbol: '$', rate: 1,
    });
    this.currencies.set('EUR', {
      name: 'Euro', code: 'EUR', symbol: '€', rate: 0.897597,
    });
    this.currencies.set('GBP', {
      name: 'British Pound', code: 'GBP', symbol: '£', rate: 0.81755,
    });
    this.currencies.set('RUB', {
      name: 'Russian Ruble', code: 'RUB', symbol: '₽', rate: 63.461993,
    });
  }
}

export default DonateState;
