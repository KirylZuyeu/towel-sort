
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == null) return [];
    let sortArr = [];
    for (let i = 0; i < matrix.length; i++){
        if (i % 2 == 0) {
            sortArr.push(matrix[i]);
        } else {
            sortArr.push(matrix[i].reverse());
        }
}
return [].concat(...sortArr);
}
