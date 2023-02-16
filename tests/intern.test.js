const intern = require("../Classes/intern");


describe (intern, () => {
    describe("intern class should extend from the employee class", () =>{
        it ("getname should show the name from the intern", ()=>{
            const testintern = new intern ("frank", "1081575", 'frank.monteon@gmail.com', 'Tec', 'employee');
        expect(testintern.getName() === 'frank');
        })
    })
    describe("employee class that is the base of the other roles", () =>{
        it ("should sow the ID from the new role", ()=>{
            const testintern = new intern ("frank", "1081575", 'frank.monteon@gmail.com', 'Tec', 'employee');
        expect(testintern.getID() === '1081576');
        })
    })
    describe("employee class that is the base of the other roles", () =>{
        it ("should show the email of the new role", ()=>{
            const testintern = new intern ("frank", "1081575", 'frank.monteon@gmail.com', 'Tec', 'employee');
        expect(testintern.getEmail() === 'frank.monteon@gmail.com');
        })
    })
    describe("employee class that is the base of the other roles", () =>{
        it ("should show the role from the new role", ()=>{
            let role;
            const testintern = new intern ("frank", "1081575", 'frank.monteon@gmail.com', 'Tec', role);
        expect(testintern.getRole() === 'manager');
        })
    })
    describe("employee class that is the base of the other roles", () =>{
        it ("should show the officenumber", ()=>{
            let role;
            const testintern = new intern ("frank", "1081575", 'frank.monteon@gmail.com', 'Tec', role);
        expect(testintern.getSchool() === 'Tec');
        })
    })
})