const City = require('../src/Models/City');

test('creates a city object', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});
test('creates a city object using the factory method', () => {
    let city = City.create();
    expect(city).toBeInstanceOf(City);
});