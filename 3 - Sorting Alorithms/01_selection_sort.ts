export function selectionSort(array: number[]): void {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];

    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        min = array[j];
      }

      if (min !== array[i]) {
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
}
