const fs = require("fs");
const { json } = require("stream/consumers");

const readFile = fs.readFileSync("read.txt", "utf-8");
const reversed = readFile.split("").reverse().join("");
const writeText = fs.writeFileSync("reversed.txt", reversed);
// task1
// ეს კი შემეძლო ასინქრონულად დამეწერა მაგრამ რატომღაც ესე ვარჩიე

// Fetch data from this API: https://jsonplaceholder.typicode.com/users. Parse the data so that each object contains only four properties: id, name, username, and email. Write the resulting array to a file called users.json.

async function fetchData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await data.json();

  const filteredData = res.map((item) => ({
    id: item.id,
    name: item.name,
    userName: item.userName,
    email: item.email,
  }));
  const writeData = fs.writeFileSync(
    "users.json",
    JSON.stringify(filteredData)
  );
}
fetchData();
// task2

//task3

const [, , carModel, releaseDate, color] = process.argv;
async function main() {
  const readCarData = fs.readFileSync("cars.json", "utf-8");
  const pardesData = JSON.parse(readCarData);

  const Car = {
    id: readCarData.length + 1,
    carModel: carModel,
    carReleaseDate: releaseDate,
    carColor: color,
  };

  pardesData.push(Car);
  fs.writeFileSync("cars.json", JSON.stringify(pardesData));
}
main();

// task4
let count = 0;
function xmovnebi() {
  const importText = fs.readFileSync("text.txt", "utf-8");
  importText.split("").map((item) => {
    if (
      item === "a" ||
      item === "e" ||
      item === "i" ||
      item === "o" ||
      item === "u"
    ) {
      count++;
    }
  });
  console.log(count);
}
xmovnebi();
