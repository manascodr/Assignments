let mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 6]
];

let size = mat.length * mat[0].length;
let ans = [];

let minr = 0, maxr = mat.length - 1;
let minc = 0, maxc = mat[0].length - 1;

while (ans.length < size) {

  // Left to Right
  for (let i = minc; i <= maxc && ans.length < size; i++) {
    ans.push(mat[minr][i]);
  }
  minr++;

  // Top to Bottom
  for (let i = minr; i <= maxr && ans.length < size; i++) {
    ans.push(mat[i][maxc]);
  }
  maxc--;

  // Right to Left
  for (let i = maxc; i >= minc && ans.length < size; i--) {
    ans.push(mat[maxr][i]);
  }
  maxr--;

  // Bottom to Top
  for (let i = maxr; i >= minr && ans.length < size; i--) {
    ans.push(mat[i][minc]);
  }
  minc++;
}

console.log(ans);
