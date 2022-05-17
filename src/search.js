//import { createReadStream } from "fs";
//import { ReadLine } from "readline";
const readline = require("readline");
const fs = require("fs");

// Read arguments from command line

// Check if the number of arguments is correct
const argv = process.argv
if(argv.length != 5) {
  console.log("Usage: node src/search.js <file_path> <column> <key>");
  process.exit(1);
}

const filePath = argv[2];
const column = argv[3];
const key =  argv[4];

const rl = readline.createInterface({input: fs.createReadStream(filePath)});

rl.on("line", (line) => {
  if(line.split(/,|;/)[column] == key) {
    console.log(line)
    rl.close();
  }
});
rl.close();


// Read a file line by line synchronously
//const fileContent = readFileSync(filePath, "utf8");


// Search for the first line with key in the column
//const found = fileContent
//  .toString()
//  .split(/\r?\n/)
//  .find((line) => line.split(/,|;/)[column] == key);

// Print the result
//console.log(found ? found : "Not found");