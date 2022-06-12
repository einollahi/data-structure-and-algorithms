export function jumpSearch<T>(array: T[], data: T): number {
  let step = sqrt(array.length);
  let startPoint = 0;
  const arraySize = array.length - 1;

  while (array[min(step, arraySize) - 1] < data) {
    startPoint = step;
    step++;

    if (startPoint > arraySize) return -1;
  }

  while (array[startPoint] < data) {
    startPoint++;

    if (startPoint === min(step, arraySize)) return -1;
  }

  if (array[startPoint] === data) return startPoint;

  return -1;
}

function sqrt(number: number): number {
  return Math.sqrt(number);
}

function min(number1: number, number2: number): number {
  return Math.min(number1, number2);
}
