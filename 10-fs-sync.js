const { readFileSync, writeFileSync} = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/first.txt", "utf8");

console.log(first, second)

const result = writeFileSync("./content/result-sync.txt",`This is the result: ${first}, ${second} `, {flag:"a"})