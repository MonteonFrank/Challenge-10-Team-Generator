//Inquirer Module and File System
const inquirer = require('inquirer');
const fs = require('fs');

//Clases for manager, engineer, intern
const manager = require('./Classes/manager');
const engineer = require('./Classes/engineer');
const intern = require('./Classes/intern');

//Object array to store information
let engineeringteam = [];
let displayengineeringteam;

let managerialteam = [];
let displaymanagerialteam;

let internteam = [];
let displayinternteam;



//Questions for the manager class
const managerquestions = [
        {
          type: 'input',
          message: 'Please provide manager name',
          name: 'name',
        },
        {
          type: 'input',
          message: 'Please provide ID',
          name: 'ID',
        },
        {
          type: 'input',
          message: 'Please provide email address:',
          name: 'email',
        },
        {
            type: 'input',
            message: 'Please provide office number',
            name: 'number',
        },
  ]

//Questions for the engineer class
const engineerquestions = [
        {
            type: 'input',
            message: 'Please provide engineers name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please provide ID',
            name: 'ID',
        },
        {
            type: 'input',
            message: 'Please provide email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please provide github account',
            name: 'github',
        }
  ]

  //Questions for the intern class
  const internquestions = [
        {
            type: 'input',
            message: 'Please provide interns name',
            name: 'name',
          },
          {
            type: 'input',
            message: 'Please provide ID',
            name: 'ID',
          },
          {
            type: 'input',
            message: 'Please provide email address:',
            name: 'email',
          },
          {
            type: 'input',
            message: 'Please provide school name',
            name: 'school',
          }
      ]


//Prompt questions for engineer, store results in object array and return to the main menu
function newengineerfunction(){
      inquirer.prompt(engineerquestions)
          .then((answer) => {
              let role;
              let newengineer = new engineer (answer.name, answer.ID, answer.email, answer.github, role);
              engineeringteam.push(newengineer);
              init();            
          });
}

//Prompt questions for intern, store results in the object array and return to the main menu
function newinternfunction(){
      inquirer.prompt(internquestions)
          .then((answer) => {
                let role;
                let newintern = new intern (answer.name, answer.ID, answer.email, answer.school, role);
                internteam.push(newintern);
                init()
        });
}

//Prompt questions for the manager, store results in the object array and return to the main menu
function newmanagerfunction(){
      inquirer.prompt(managerquestions)
          .then((answer) => {
                let role;
                let newmanager = new manager (answer.name, answer.ID, answer.email, answer.number, role);
                managerialteam.push(newmanager);
                init();
          });
}

//Finish the program and send information to HTML 
function finishteam (){

    console.log('Finished team setup!')

    if (engineeringteam.length =! null){
      displayengineeringteam = engineeringteam.reduce(
          (accumulator, currentValue) => 
          accumulator + 
          '<div class="card" style="width: 18rem;">' +
          '<div class="card-body">'+
          '<h5 class="card-title">' + currentValue.name + '</h5>'+
          '<h6 class="card-subtitle mb-2 text-muted">' + currentValue.role + '</h6>'+
          '<p class="card-text">ID: ' + currentValue.ID + '</p>'+
          '<a href= mailto: '+ currentValue.email +  'class="card-link"> '+ currentValue.email + '</a>'+
          '<p> <a href= https://github.com/'+currentValue.github + 'class="card-link">' + currentValue.github + '</a> </p>'+
          '</div>'+
          '</div>',[])
    }

    if (managerialteam.length =! null){
    displaymanagerialteam = managerialteam.reduce(
          (accumulator, currentValue) => 
          accumulator + 
          '<div class="card" style="width: 18rem;">' +
          '<div class="card-body">'+
          '<h5 class="card-title">' + currentValue.name + '</h5>'+
          '<h6 class="card-subtitle mb-2 text-muted">' + currentValue.role + '</h6>'+
          '<p class="card-text">ID: ' + currentValue.ID + '</p>'+
          '<a href= mailto: '+ currentValue.email +  'class="card-link"> '+ currentValue.email + '</a>'+
          '<p class="card-text">Number: ' + currentValue.officenumber + '</p>'+
          '</div>'+
          '</div>',[])
    }

    if (internteam.length =! null){
      displayinternteam = internteam.reduce(
            (accumulator, currentValue) => 
            accumulator + 
            '<div class="card" style="width: 18rem;">' +
            '<div class="card-body">'+
            '<h5 class="card-title">' + currentValue.name + '</h5>'+
            '<h6 class="card-subtitle mb-2 text-muted">' + currentValue.role + '</h6>'+
            '<p class="card-text">ID: ' + currentValue.ID + '</p>'+
            '<a href= mailto: '+ currentValue.email +  'class="card-link"> '+ currentValue.email + '</a>'+
            '<p class="card-text">School: ' + currentValue.school + '</p>'+
            '</div>'+
            '</div>',[])
      }

    const HTML = 

      `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="./assets/style.css" />
        <title>Challenge 10: Meet My Team!</title>
      </head>
      <body>
      <div class = "title">
        <h1>Meet the Team</h1>
      </div>
        <div class = container>
        ${displaymanagerialteam}
        ${displayengineeringteam}
        ${displayinternteam}
        </div>
        <script src = index.js></script>
      </body>
      </html>`

      fs.writeFile("TeamComposition.html", HTML, (err) => err ? console.error(err) : console.log('Success, Team Composition file created!'));

}


//Initiate program where it asks the user what time of team member they would like to add and calls the function based on the selection
function init (){
      inquirer.prompt([{
            type: 'list',
            message: 'Please add an intern, engineer, manager or finish team composition',
            name: 'teammember',
            choices: ['Engineer', 'Intern', 'Manager', 'Finish Team'],
      }])
      .then((answer) => {
            if (answer.teammember == 'Engineer'){
                newengineerfunction();
            }
            else if (answer.teammember == 'Intern'){
                newinternfunction();
            }
            else if (answer.teammember == 'Manager'){
                newmanagerfunction();
            }
            else if(answer.teammember == 'Finish Team'){
                finishteam();
            }
      });
}


//Initate the program
init()


