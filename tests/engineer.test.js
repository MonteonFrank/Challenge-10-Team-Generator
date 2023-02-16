const engineer = require("../Classes/engineer");


describe (engineer, () => {
    describe("engineer class should extend from the employee class", () =>{
        it ("getname should show the name from the engineer", ()=>{
            const testengineer = new engineer ("frank", "1081575", 'frank.monteon@gmail.com', 'MonteonFrank', 'employee');
        expect(testengineer.getName() === 'frank');
        })
    })
    describe("employee class that is the base of the other roles", () =>{
        it ("should sow the ID from the new role", ()=>{
            const testengineer = new engineer ("frank", "1081575", 'frank.monteon@gmail.com', 'MonteonFrank', 'employee');
        expect(testengineer.getID() === '1081576');
        })
    })
    describe("employee class that is the base of the other roles", () =>{
        it ("should show the email of the new role", ()=>{
            const testengineer = new engineer ("frank", "1081575", 'frank.monteon@gmail.com', 'MonteonFrank', 'employee');
        expect(testengineer.getEmail() === 'frank.monteon@gmail.com');
        })
    })
    describe("employee class that is the base of the other roles", () =>{
        it ("should show the role from the new role", ()=>{
            let role;
            const testengineer = new engineer ("frank", "1081575", 'frank.monteon@gmail.com', 'MonteonFrank', role);
        expect(testengineer.getRole() === 'manager');
        })
    })
    describe("employee class that is the base of the other roles", () =>{
        it ("should show the officenumber", ()=>{
            let role;
            const testengineer = new engineer ("frank", "1081575", 'frank.monteon@gmail.com', 'MonteonFrank', role);
        expect(testengineer.getGithub() === 'MonteonFrank');
        })
    })
})