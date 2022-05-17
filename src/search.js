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

// Create a readline interface for the file
const rl = readline.createInterface({input: fs.createReadStream(filePath)});

// Read the file line by line asynchronously and search for the key in the column
rl.on("line", (line) => {
  if(line.split(/,|;/)[column] == key) {
    // Print the result
    console.log(line)
  }
});