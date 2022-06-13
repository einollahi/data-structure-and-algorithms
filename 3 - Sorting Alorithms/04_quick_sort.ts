function quickSort(
  array: number[],
  low: number = 0,
  high: number = array.length - 1
): void {
  if (low > high) return;

  let mid: number = floor((low + high) / 2);
  let pivot = array[mid];

  let i = low;
  let j = high;

  while (i <= j) {
    while (array[i] < pivot) i++;

    while (array[j] > pivot) j--;

    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }

  if (low < j) {
    quickSort(array, low, j);
  }
  if (high > i) {
    quickSort(array, i, high);
  }
}

function floor(number: number): number {
  return Math.floor(number);
}

function swap<T>(array: T[], index1: number, index2: number): void {
  let temp: T = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
