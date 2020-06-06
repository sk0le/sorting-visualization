let i = 0;
let j = 0;

const bubbleSort = (arr) => {
  if (i < arr.length) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      let a = arr[j];
      let b = arr[j + 1];
      if (a > b) {
        swap(arr, j, j + 1);
      }
    }
  }
  i++;
};

const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

export default bubbleSort;
