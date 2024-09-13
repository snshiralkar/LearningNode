const fs = require("fs");
fs.writeFile("read.txt", "welcome", (err) => {
  console.log(err);
});

fs.appendFile("read.txt", " to my home", (err) => {
  console.log(err);
});

fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
  console.log(err);
});

fs.rename("read.txt", "module.txt", (err) => {
  console.log(err);
});

fs.unlink("module.txt", (err) => {
  console.log(err);
});

fs.mkdir("ram", (err) => {
  console.log(err);
});

fs.rmdir("ram", () => {});
