export class MergeSort {
  private static array: number[] = [];
  private static tempArray: number[] = [];

  private static mergeSort(low: number, high: number): void {
    if (low < high) {
      let mid = MergeSort.floor((low + high) / 2);
      MergeSort.mergeSort(low, mid);
      MergeSort.mergeSort(mid + 1, high);
      MergeSort.merge(low, mid, high);
    }
  }

  private static merge(low: number, mid: number, high: number) {
    for (let i = low; i <= high; i++) this.tempArray[i] = this.array[i];

    let i = low;
    let j = mid + 1;
    let k = low;

    while (i <= mid && j <= high) {
      if (this.tempArray[i] <= this.tempArray[j]) {
        this.array[k] = this.tempArray[i];
        i++;
      } else {
        this.array[k] = this.tempArray[j];
        j++;
      }
      k++;
    }

    while (i <= mid) {
      this.array[k] = this.tempArray[i];
      k++;
      i++;
    }
  }

  public static sort(array: number[]): number[] {
    MergeSort.array = array;
    MergeSort.tempArray = new Array(array.length);
    MergeSort.mergeSort(0, array.length - 1);

    return MergeSort.array;
  }

  private static floor(number: number): number {
    return Math.floor(number);
  }
}
