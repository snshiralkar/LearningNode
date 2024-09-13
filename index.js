const fs = require("fs");

//to create file
fs.writeFile("read.txt", "welcome", (err) => {
  console.log(err);
});

//to change something in file
fs.appendFile("read.txt", " to my home", (err) => {
  console.log(err);
});

//to read file
fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
  console.log(err);
});

//rename file
fs.rename("read.txt", "module.txt", (err) => {
  console.log(err);
});

// to delete file
fs.unlink("module.txt", (err) => {
  console.log(err);
});

//creating folder

fs.mkdir("ram", (err) => {
  console.log(err);
});

//deleting folder
fs.rmdir("ram", () => {});
