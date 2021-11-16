"use strict";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (str) => new Promise(answer => rl.question(str, answer));

const Input = {
  name: async () => {
    const name = await question("Enter your name: ");
    this.name = name;
    return Input.pass();
  },
  pass: async () => {
    const pass = await question("Enter your pass: ");
    this.pass = pass;
    return Input.results();
  },
  results: async () => {
    console.log(`Hello ${this.name}!`);
    console.log(`Your pass is ${this.pass}!`);
    return Input.end();
  },
  end: async () => {
    rl.close();
  }
};

Input.name();