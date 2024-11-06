export class MathHelper {
  static findHcf(a: number, b: number) {
    a = Math.abs(Math.floor(a));
    b = Math.abs(Math.floor(b));
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  static coefficentGenerator(range: number, negative = true, zero = true) {
    let coefficent = Math.floor(Math.random() * range);
    while (coefficent == 0 && zero == false) {
      coefficent = Math.floor(Math.random() * range);
    }
    let sign = Math.random();
    sign < 0.5 ? (sign = -1) : (sign = 1);
    return coefficent * (negative ? sign : 1);
  }
  static RemovePlusMinus(string: string) {
    return string.replace(/\+\-/g, "-");
  }
  static Remove1x(string: string) {
    return string.replace(/1n/g, "n");
  }
  static RemoveSpaces(string: string) {
    return string.replace(/ /g, "");
  }
  static ReformatMathStrings(string: string) {
    return string
      .replace(/ /g, "")
      .replace(/1n/g, "n")
      .replace(/\+\-/g, "-")
      .replace(/1x/g, "x");
  }
}
