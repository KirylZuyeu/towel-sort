
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!arguments.length) return [];
    let sortArr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            Array.prototype.push.apply(sortArr, matrix[i])
        } else {
            Array.prototype.push.apply(sortArr, matrix[i].reverse())
        }
    }
    return sortArr;
}
