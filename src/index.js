module.exports = function solveEquation(equation) {
    let array = equation.split(' ');
    let a = +array[0];
    let b = +array[4];
    if (array[3] === '-')
    {
        b *= (-1);
    }
    let c = +array[8];
    if (array[7] === '-')
    {
        c *= (-1);
    }

    let D = b * b - 4 * a * c;
    let x1 = Math.round((-b + Math.sqrt(D)) / (2 * a));
    let x2 = Math.round((-b - Math.sqrt(D)) / (2 * a));
    return [x1, x2].sort(function (a, b) {
        return a > b ? 1 : -1;
    });
}
