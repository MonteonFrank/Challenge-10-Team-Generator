const employee = require("./employee");

class intern extends employee {
        
    constructor (name, ID, email, school, role){
        
        super (name, ID, email);
        this.school = school;
        this.role = 'Intern';

        this. getSchool = function (){
            console.log(this.school)
        }
        this.getRole = function (){
            console.log(role)
        }

    }
}

  module.exports = intern;




