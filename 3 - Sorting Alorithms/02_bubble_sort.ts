export function bubbleSort(array: number[]): void {
  for (let i = 0; i < array.length; i++) {
    for (let j =  0; j <= array.length - i - 1; j++) {
      if (array[j] > array[j+1]) swap(array, j, j+1);
    }
  }
}

function swap(array: number[], index1: number, index2: number): void {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
