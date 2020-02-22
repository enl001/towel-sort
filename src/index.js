
module.exports = function towelSort (matrix) {

  let result = [];
  if (!matrix) return result;
  let forward = true;
  for(let arr of matrix)
  {
      result = (forward)? result.concat(arr) : result.concat(arr.reverse());
      forward= !forward;
  }
  return result;
}
