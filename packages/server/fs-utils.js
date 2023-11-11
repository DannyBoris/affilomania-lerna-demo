const fs = require("fs");
const dataPath = "./data.json";

const readData = async () => {
  const data = await new Promise((resolve, reject) => {
    fs.readFile(dataPath, "utf-8", (err, data) => {
      if (!err) {
        resolve(JSON.parse(data));
      }
      reject(err);
    });
  });
  return data;
};

const writeData = async (newItem) => {
  const data = await readData();
  data.push(newItem);
  fs.writeFile(dataPath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been updated");
  });
};

module.exports = { readData, writeData };
