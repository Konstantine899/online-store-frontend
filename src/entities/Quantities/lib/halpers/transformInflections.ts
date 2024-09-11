// трансформация окончаний

interface IParams {
  count: number;
  one?: string;
  two?: string;
  three?: string;
}

export function transformInflections({
  count,
  one,
  two,
  three,
}: IParams): string {
  const n: number = count % 100;

  const isOne: boolean =
    n === 1 ||
    n === 21 ||
    n === 31 ||
    n === 41 ||
    n === 51 ||
    n === 61 ||
    n === 71 ||
    n === 81 ||
    n === 91;

  const isTwo: boolean =
    (n > 1 && n < 5) ||
    (n > 21 && n < 25) ||
    (n > 31 && n < 35) ||
    (n > 41 && n < 45) ||
    (n > 51 && n < 55) ||
    (n > 61 && n < 65) ||
    (n > 71 && n < 75) ||
    (n > 81 && n < 85) ||
    (n > 91 && n < 95);

  const isThree: boolean =
    (n >= 5 && n <= 20) ||
    (n >= 25 && n <= 30) ||
    (n >= 35 && n <= 40) ||
    (n >= 45 && n <= 50) ||
    (n >= 55 && n <= 60) ||
    (n >= 65 && n <= 70) ||
    (n >= 75 && n <= 80) ||
    (n >= 85 && n <= 90) ||
    (n >= 95 && n <= 99);

  if (isOne) {
    return `${count} ${one}`;
  }
  if (isTwo) {
    return `${count} ${two}`;
  }
  if (isThree) {
    return `${count} ${three}`;
  }
  return '';
}
