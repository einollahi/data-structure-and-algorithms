export function linearSearch<T>(array: T[], data: T): number {
  let foundedIndex: number = -1;

  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === data) {
      foundedIndex = i;
      break;
    }
  }

  return foundedIndex;
}
