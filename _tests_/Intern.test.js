const Intern = require('../lib/Intern');

test('Inter Object', () => {
    const intern = new Intern('Joey', 50, 'joeybyrd9999@gmail.com', 'Berkley');
    expect(intern.school).toEqual(expect.any(String));
});

test('Employee School', () => {
    const intern = new Intern('Joey', 50, 'joeybyrd9999@gmail.com', 'Berkley');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Role', () => {
    const intern = new Intern('Joey', 50, 'joeybyrd9999@gmail.com', 'Berkley');
    expect(intern.getRole()).toEqual("Intern");
});