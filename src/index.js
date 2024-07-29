module.exports = function reverse (n) {
    let absNum = Math.abs(n);
    return Number(String(absNum).split('').reverse().join(''));
}
