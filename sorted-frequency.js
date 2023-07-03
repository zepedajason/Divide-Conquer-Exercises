//Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
function sortedFrequency(arr, num) {
    
    function findFirstOccurrence(arr, num) {
      let left = 0;
      let right = arr.length - 1;
      let firstOccurrence = -1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (arr[mid] === num) {
          firstOccurrence = mid;
          right = mid - 1;
        } else if (arr[mid] < num) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return firstOccurrence;
    }
  

    function findLastOccurrence(arr, num) {
      let left = 0;
      let right = arr.length - 1;
      let lastOccurrence = -1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (arr[mid] === num) {
          lastOccurrence = mid;
          left = mid + 1;
        } else if (arr[mid] < num) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return lastOccurrence;
    }
  
    // Find the first and last occurrences of the number in the array
    const firstIndex = findFirstOccurrence(arr, num);
    const lastIndex = findLastOccurrence(arr, num);
  
    // Calculate the frequency
    const frequency = lastIndex - firstIndex + 1;
  
    return frequency;
  }
  

let occurences = sortedFrequency([1,1,2,2,2,2,3],2)
console.log(occurences);
module.exports = sortedFrequency