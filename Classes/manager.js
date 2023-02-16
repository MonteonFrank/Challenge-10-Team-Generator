const employee = require("./employee");

class manager extends employee {
        
    constructor (name, ID, email, officenumber, role){
        
        super (name, ID, email);
        this.officenumber = officenumber;
        this.role = 'Manager';

        this.getNumber = function (){
            console.log(this.officenumber)
        }
        this.getRole = function (){
            console.log(role)
        }
    }
}

  module.exports = manager;