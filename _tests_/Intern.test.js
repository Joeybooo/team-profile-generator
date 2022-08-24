const Intern = require('../lib/Intern');

test('Inter Object', () => {
    const intern = new Intern('Joey', 50, 'joeybyrd9999@gmail.com', 'Berkley');
    expect.(intern.school).toEqual(expect.any(String));
})