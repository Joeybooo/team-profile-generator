const Engineer = require('../lib/Engineer');

test('Engineer Objest', () => {
    const engineer= new Engineer('Joey', 50, 'joeybyrd9999@gmail.com', 'joeybooo');
    expect(engineer.github).toEqual(expect.any(String));
});

test('Engineer Github', () => {
    const engineer= new Engineer('Joey', 50, 'joeybyrd9999@gmail.com', 'joeybooo');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Role', () => {
    const engineer= new Engineer('Joey', 50, 'joeybyrd9999@gmail.com', 'joeybooo');
    expect(engineer.getRole()).toEqual("Engineer");
});