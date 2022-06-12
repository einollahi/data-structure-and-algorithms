// pos = lo + [ (x-arr[lo])*(hi-lo) / (arr[hi]-arr[Lo]) ]

function interpolationSearch(array: number[], x: number): number {
  let pos;
  let lo = 0;
  let hi = array.length - 1;

  while (lo <= hi && x >= array[lo] && x <= array[hi]) {
    pos = lo + floor(((hi - lo) / (array[hi] - array[lo])) * (x - array[lo]));

    if (array[pos] === x) return pos;
    else if (array[pos] < x) {
      lo = pos + 1;
    } else {
      hi = pos - 1;
    }
  }

  return -1;
}

function floor(number: number): number {
  return Math.floor(number);
}
