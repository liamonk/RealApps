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

  static CosineRuleSides(b: number, c: number, A: number) {
    return Number(
      Math.sqrt(
        b * b + c * c - 2 * b * c * Math.cos(A * (Math.PI / 180))
      ).toFixed(2)
    );
  }

  static cosineRuleAngles = (
    adjacent_side_1: number,
    adjacent_side_2: number,
    opposite_side: number
  ) => {
    return Number(
      (
        Math.acos(
          (adjacent_side_1 * adjacent_side_1 +
            adjacent_side_2 * adjacent_side_2 -
            opposite_side * opposite_side) /
            (2 * adjacent_side_1 * adjacent_side_2)
        ) *
        (180 / Math.PI)
      ).toFixed(2)
    );
  };
}
