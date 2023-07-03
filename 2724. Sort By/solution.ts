function sortBy(arr: any[], fn: Function): any[] {
  return arr.sort(function(a, b){return fn(a) - fn(b)});
};