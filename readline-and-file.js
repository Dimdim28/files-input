"use strict";
var readline = require("readline");
const fs = require("fs");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fileContent = fs.readFileSync("database.txt", "utf8");
rl.question("Input your username and password: ", function (answer) {
  fs.readFile("database.txt", "utf8", function (error, data) {
    let pulledData = data;
    let flag = false;
    pulledData = pulledData.split(", ");
    for (let i = 0; i < pulledData.length; i++) {
      if (answer == pulledData[i]) {
        let wlcm = pulledData[i];
        wlcm = wlcm.split(" ");
        wlcm.pop();
        console.log(`welcome ${wlcm}`);
        flag = true;
        return;
      }
    }
    if (flag == false) {
      rl.question(
        "Wrong data! Would you like to add a new user (y/n?): ",
        function (choice) {
          if (choice == "y") {
            fs.appendFileSync("database.txt", `, ${answer}`);
            console.log(`successfully added ${answer}`);
          } else if (choice == "n") {
            console.log("We are so sorry");
          }
          rl.close();
        }
      );
    }
  });
});