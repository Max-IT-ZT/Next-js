// utils/calculator.ts
export function calculateWithCallback(
  numbers: number[],
  formatter: (result: number) => string
): string {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return formatter(sum);
}
