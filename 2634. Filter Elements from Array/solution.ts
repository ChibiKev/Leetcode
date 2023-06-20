function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  let result : number[] = [];
  for (let index = 0; index < arr.length; index++){
    if (fn(arr[index], index)){
      result.push(arr[index]);
    }
  }
  return result;
};