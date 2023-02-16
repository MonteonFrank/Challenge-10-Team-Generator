const employee = require("./employee");

class engineer extends employee {
        
    constructor (name, ID, email, github, role){
        
        super (name, ID, email);
        this.github = github;
        this.role = 'Engineer';

        this.getGithub = function (){
            console.log(this.github);
        }
        this.getRole = function (){
            console.log(role)
        }
    }
}

  module.exports = engineer;