const Manager = require("../lib/Manager");

Test('Manager Object Create', () => {
    const manager = new Manager('Joey', 50, 'joeybyrd9999@gmail.com', 2);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Employe Role', () => {
    const manager = new Manager('Joey', 50, 'joeybyrd9999@gmail.com');
    expect(manager.getRole()).toEqual('Manager')
})