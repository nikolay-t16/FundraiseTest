class PresetsHelper {
  private static ACCURACY = 10;

  public static makePressetValue(value: number, rate: number): number {
    if (rate === 1) {
      return value;
    }

    return Math.round((value * rate) / PresetsHelper.ACCURACY) * PresetsHelper.ACCURACY;
  }

  public static makePresetLabel(value: number, locale: string, currency: string): string {
    try {
      return value.toLocaleString(locale, { currency });
    } catch (e) {
      console.log(e);
      return '';
    }
  }
}

export default PresetsHelper;
