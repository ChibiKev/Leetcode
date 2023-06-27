function chunk(arr: any[], size: number): any[][] {
  let result: any[] = [];
  let save: any[] = [];
  for (let index = 0; index < arr.length; index++){
    save.push(arr[index]);
    if (save.length % size == 0){
      result.push(save);
      save = [];
    }
  }
  if (save.length != 0){
    result.push(save);
  }
  return result;
};