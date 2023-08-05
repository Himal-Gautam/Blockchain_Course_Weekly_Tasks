//  Question 1: Write a program using a for loop to print the following right-aligned star pattern.
function printPattern(num_rows) {
  for (let i = 1; i <= num_rows; i++) {
    let space = "  ".repeat(num_rows-i);
    let stars = "* ".repeat(i);
    console.log(space + stars);
  }
}
printPattern(5);// Replace this argument with the desired number of rows

// Question 2: Write a program using a for loop to print the following diamond star pattern.

function printDiamondPattern(rows) {
  if (rows % 2 === 0) {
    console.log("Please enter an odd number of rows to create a diamond pattern.");
    return;
  }

  const midRow = Math.floor(rows / 2) + 1;
  let spaces = midRow - 1;
  let stars = 1;

  for (let i = 1; i <= rows; i++) {
    let spaceStr = "  ".repeat(spaces);
    let starStr = "* ".repeat(stars);

    console.log(spaceStr + starStr);

    if (i < midRow) {
      spaces--;
      stars += 2;
    } else {
      spaces++;
      stars -= 2;
    }
  }
}

const numRows = 7; // Change this to the desired number of rows (should be an odd number)
printDiamondPattern(numRows);





