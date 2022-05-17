const fs = require("fs");
const readline = require("readline");

const filePath = "./file.csv";
const column = 2;
const key = "Alberto";
// Read a file line by line synchronously
const fileContent = fs.readFileSync(filePath, "utf8");

const found = fileContent
  .toString()
  .split(/\r?\n/)
  .find((line) => line.split(",")[column] == key);

if (found) {
  console.log(found);
}
