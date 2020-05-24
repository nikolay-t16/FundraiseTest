class Helper {
  private static ACCURACY = 10;

  public static makePressetValue(value: number, rate: number): number {
    if (rate === 1) {
      return value;
    }

    return Math.round((value * rate) / Helper.ACCURACY) * Helper.ACCURACY;
  }

  public static makePresetLabel(value: number, locale: string, currency: string): string {
    try {
      return value.toLocaleString(locale, { currency });
    } catch (e) {
      console.log(e);
      return '';
    }
  }

  public static formatDonate(value: string): number {
    const formatedValue = Number.parseInt(value, 10);

    return Number.isNaN(formatedValue) ? 0 : formatedValue;
  }
}

export default Helper;
