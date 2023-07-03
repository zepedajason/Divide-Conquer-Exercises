//Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.
function findFloor(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  let floor = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === x) {
      return arr[mid];
    } else if (arr[mid] < x) {
      floor = arr[mid];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return floor;
}
let arr = [1,2,8,10,10,12,19]
let floor = findFloor(arr, 9);
console.log(floor);


module.exports = findFloor