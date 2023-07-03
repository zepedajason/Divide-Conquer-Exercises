function countZeroes(arr) {
let count = 0;
  for(let i = 0; i <= arr.length; i++){
    if(arr[i] == 0){
        count++;
    }
  }
  return count;
}
let arr = [1,1,1,0,0,0];
let count = countZeroes(arr);
console.log(count);
module.exports = countZeroes