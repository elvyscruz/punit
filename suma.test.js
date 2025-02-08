const suma = require('./suma')

test('suma 1 + 2 debe ser igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('adds -1 + 1 to equal 0', () => {
    expect(suma(-1, 1)).toBe(0);
});

test('adds 0 + 0 to equal 0', () => {
    expect(suma(0, 0)).toBe(0);
});
