export function binarySearch<T>(array: T[], data: T): number {
  let foundedIndex: number = -1;
  let min: number = 0;
  let max: number = array.length - 1;
  let mid!: number;

  let foundAnIndex: boolean = false;
  while (min <= max || foundAnIndex) {
    mid = floor((min + max) / 2);

    if (array[mid] === data) {
      foundedIndex = mid;
      foundAnIndex = true;
    } else if (array[mid] > data) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return foundedIndex;
}

function floor(number: number): number {
  return Math.floor(number);
}
