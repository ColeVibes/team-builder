const Intern = require('../lib/Intern');

test('return school name', () => {
    const intern = new Intern('Lindsey', '123', 'linds@email.com', 'School');

    expect(intern.getSchool()).toBe('School')
})

test('return role', () => {
    const intern = new Intern('Lindsey', '123', 'linds@email.com', 'School');

    expect(intern.getRole()).toBe('Intern')
})