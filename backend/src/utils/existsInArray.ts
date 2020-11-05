const existsInArray = (array1: string[], array2: string[]): boolean => {
  let exists = false;

  array1.forEach(array1Item => {
    exists = array2.indexOf(array1Item) !== -1 && true;
  });

  return exists ? true : false;
};

export default existsInArray;
