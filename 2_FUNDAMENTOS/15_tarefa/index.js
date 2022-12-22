const inquirer = require("inquirer")
const chalk = require("chalk")

inquirer.prompt([
    {
      name: 'name',
      message: "What is your name?",
    },
    {
      name: 'old',
      message: 'How old are you?',
    }
  ])
  .then((answers) => {

    if(!answers.name || !answers.old){
      throw new Error('Name and old are mandatories datas.')
    }    
    const response = `My name is ${answers.name} and I'm ${answers.old} years old.`
    console.log(answers)
    console.log(chalk.bgYellow.black(response))
  })
  .catch((err) => console.log(err))