const manager = require("../Classes/manager");


describe (manager, () => {
    describe("manager class should extend from the employee class", () =>{
        it ("getname should show the name from the manager", ()=>{
            const testmanager = new manager ("frank", "1081575", 'frank.monteon@gmail.com', '3338084064', 'employee');
        expect(testmanager.getName() === 'frank');
        })
    })
    describe("employee class that is the base of the other roles", () =>{
        it ("should sow the ID from the new role", ()=>{
            const testmanager = new manager ("frank", "1081575", 'frank.monteon@gmail.com', '3338084064', 'employee');
        expect(testmanager.getID() === '1081576');
        })
    })
    describe("employee class that is the base of the other roles", () =>{
        it ("should show the email of the new role", ()=>{
            const testmanager = new manager ("frank", "1081575", 'frank.monteon@gmail.com', '3338084064', 'employee');
        expect(testmanager.getEmail() === 'frank.monteon@gmail.com');
        })
    })
    describe("employee class that is the base of the other roles", () =>{
        it ("should show the role from the new role", ()=>{
            let role;
            const testmanager = new manager ("frank", "1081575", 'frank.monteon@gmail.com', '3338084064', role);
        expect(testmanager.getRole() === 'manager');
        })
    })
    describe("employee class that is the base of the other roles", () =>{
        it ("should show the officenumber", ()=>{
            let role;
            const testmanager = new manager ("frank", "1081575", 'frank.monteon@gmail.com', '3338084064', role);
        expect(testmanager.getNumber() === '3338084064');
        })
    })
})