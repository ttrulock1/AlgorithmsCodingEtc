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
