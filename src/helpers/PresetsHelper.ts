class PresetsHelper {
  private static ACCURACY = 10;

  public static makePressetValue(value: number, rate: number): number {
    if (rate === 1) {
      return value;
    }

    return Math.round((value * rate) / PresetsHelper.ACCURACY) * PresetsHelper.ACCURACY;
  }
}

export default PresetsHelper;
