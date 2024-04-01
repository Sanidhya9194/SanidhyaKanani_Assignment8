const fs = require("fs").promises;

const readFile = async (filename) => {
  await fs
    .readFile(filename, "utf-8")
    .then((list) =>
      console.log(
        `Filename: ${filename}\n=======================================\n${list}`
      )
    )
    .catch((error) => console.log(error));
};

// We are getting path on 2nd position of process.argv array
const script = process.argv[1];
// To retreieve filename from argument from 3rd position of process.argv array 
const filename = process.argv[2];

console.log("Script: " , script)

if (!filename) {
  console.error("Error : Please provide filename as an argument.");
  process.exit(1);
}

readFile(filename);
