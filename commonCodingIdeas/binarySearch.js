// iteraivebinary Search
//
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    let mid = math.floor((low + high) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

// recursive Binary Search

function binarySearchRecursive(arr, target, low = 0, high = arr.length){
  if (low > high) {
    return -1;
  }

  let mid = Math.floor((high + low) / 2);

  if (arr[mid] === target) {
    return mid; // target found
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, high);
  } else {
    return binarySearchRecursive(arr, target, low, mid - 1);
  }
}



//sort arranges the array in order.

binarySearchRecursive (arr, target){
  arr.sort((a,b) => a-b)
  let low = 0;
  let high = arr.length;
  let mid = Math.floor((high + low) / 2);
 
  const Search = function (low, high){

  if(target===arr[mid]) {
    return mid
  } else if (target > arr[mid]){
    return search(mid + 1 ,high)
  } else{ 
    return search(low, arr[mid-1])
  }
}
}