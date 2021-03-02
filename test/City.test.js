const City = require('../src/models/City')

test('creates a new city object', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});
test('creates a city object by factory', () => {
    let city = City.create();
    expect(city).toBeInstanceOf(City);
});