export function insertionSort(array: number[]): void {
  for (let i = 1; i < array.length; i++) {
    let j: number = i - 1;
    let key = array[i];

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = key;
  }
}
