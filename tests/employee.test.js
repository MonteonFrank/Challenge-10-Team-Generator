const employee = require("../Classes/employee");


describe (employee, () => {
    describe("employee class that is the base of the other roles", () =>{
        it ("getname should show the name from the new role", ()=>{
            const testemployee = new employee ("frank", "1081575", 'frank.monteon@gmail.com', 'employee');
        expect(testemployee.getName() === 'frank');
        })
    })
    describe("employee class that is the base of the other roles", () =>{
        it ("should sow the ID from the new role", ()=>{
            const testemployee = new employee ("frank", "1081575", 'frank.monteon@gmail.com', 'employee');
        expect(testemployee.getID() === '1081576');
        })
    })
    describe("employee class that is the base of the other roles", () =>{
        it ("should show the email of the new role", ()=>{
            const testemployee = new employee ("frank", "1081575", 'frank.monteon@gmail.com', 'employee');
        expect(testemployee.getEmail() === 'frank.monteon@gmail.com');
        })
    })
    describe("employee class that is the base of the other roles", () =>{
        it ("should sow the role from the new role", ()=>{
            let role;
            const testemployee = new employee ("frank", "1081575", 'frank.monteon@gmail.com', role);
        expect(testemployee.getID() === 'employee');
        })
    })

})

