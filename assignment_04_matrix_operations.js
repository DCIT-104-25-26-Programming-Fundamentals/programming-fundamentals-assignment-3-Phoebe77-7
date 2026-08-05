// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
function transposeMatrix(matrix) {
    let result = [];

    for (let col = 0; col < matrix[0].length; col++) {
        let row = [];

        for (let line = 0; line < matrix.length; line++) {
            row.push(matrix[line][col]);
        }

        result.push(row);
    }

    return result;
}

function addMatrices(first, second) {
    let result = [];

    for (let i = 0; i < first.length; i++) {
        let row = [];

        for (let j = 0; j < first[i].length; j++) {
            row.push(first[i][j] + second[i][j]);
        }

        result.push(row);
    }

    return result;
}

function multiplyMatrices(first, second) {
    let result = [];

    for (let i = 0; i < first.length; i++) {
        let row = [];

        for (let j = 0; j < second[0].length; j++) {
            let value = 0;

            for (let k = 0; k < second.length; k++) {
                value = value + first[i][k] * second[k][j];
            }

            row.push(value);
        }

        result.push(row);
    }

    return result;
}

function readMatrix(rows, columns) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let input = readlineSync.question("Enter row " + (i + 1) + ": ");
        let values = input.split(" ").map(Number);

        matrix.push(values);
    }

    return matrix;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join("  "));
    }
}

function main() {
    console.log("Part A: Transpose Matrix");

    let rows = readlineSync.questionInt("Enter number of rows: ");
    let columns = readlineSync.questionInt("Enter number of columns: ");

    let matrix = readMatrix(rows, columns);

    console.log("\nOriginal Matrix:");
    printMatrix(matrix);

    console.log("\nTransposed Matrix:");
    printMatrix(transposeMatrix(matrix));


    console.log("\nPart B: Add Two Matrices");

    let addRows = readlineSync.questionInt("Enter number of rows: ");
    let addColumns = readlineSync.questionInt("Enter number of columns: ");

    console.log("Enter first matrix");
    let matrixOne = readMatrix(addRows, addColumns);

    console.log("Enter second matrix");
    let matrixTwo = readMatrix(addRows, addColumns);

    console.log("\nSum Matrix:");
    printMatrix(addMatrices(matrixOne, matrixTwo));


    console.log("\nPart C: Multiply Two Matrices");

    let firstRows = readlineSync.questionInt("Enter rows for first matrix: ");
    let firstColumns = readlineSync.questionInt("Enter columns for first matrix: ");

    console.log("Enter first matrix");
    let multiplyOne = readMatrix(firstRows, firstColumns);

    let secondRows = readlineSync.questionInt("Enter rows for second matrix: ");
    let secondColumns = readlineSync.questionInt("Enter columns for second matrix: ");

    console.log("Enter second matrix");
    let multiplyTwo = readMatrix(secondRows, secondColumns);

    if (firstColumns !== secondRows) {
        console.log("Error: Matrices cannot be multiplied.");
    } else {
        console.log("\nProduct Matrix:");
        printMatrix(multiplyMatrices(multiplyOne, multiplyTwo));
    }
}

main();
