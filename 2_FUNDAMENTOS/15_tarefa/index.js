const inquirer = require("inquirer")
const chalk = require("chalk")

inquire.prompt([
    {
      name: p1,
      message: "What is your name?",
    },
    {
      name: p2,
      message: 'How old are you?',
    }
  ])
  .then((answers) => {
    console.log(answers)
    console.log(chalk.bgYellow.black(`My name is ${answers.p1} and I'm ${answers.p2} years old.`))
  })
  .catch((err) => console.log(err))