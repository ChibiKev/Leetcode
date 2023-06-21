function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  let result : number[] = [];
  for (let index = 0; index < arr.length; index++){
    result.push(fn(arr[index], index));
  }
  return result;
};