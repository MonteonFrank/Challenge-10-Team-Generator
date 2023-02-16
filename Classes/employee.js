
class employee{
    constructor (name, ID, email, role){
        
        this.name = name
        this.ID = ID
        this.email = email;
        this.role = 'Employee';
       
        this.getName = function (){
            console.log(this.name);
        },
        this.getID = function (){
            console.log(this.ID)
        }
        this.getEmail = function (){
            console.log(this.email);
        }
        this.getRole = function (){
            console.log(role)
        }
    }
}
  module.exports =  employee;