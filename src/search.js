const fs = require('fs');

// Read arguments from command line
const args = process.argv;

// Check if the number of arguments is correct
if (args.length != 5) {
  console.log("Usage: node src/search.js <file_path> <column> <key>");
  process.exit(1);
}

const filePath = args[2];
const column = args[3];
const key = args[4];

// Read a file line by line synchronously
const fileContent = fs.readFileSync(filePath, "utf8");

// Search for the FIRST line with key in the column
const found = fileContent
  .toString()
  .split(/\r?\n/)
  .find((line) => line.split(/,|;/)[column] == key);

// Print the result
console.log(found ? found : "Not found");
