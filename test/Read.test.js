const Read = require('../src/CSV/Read');
const City = require('../src/models/City');
const expect = require('expect');

test('reads the CSV File', () => {
    let filename  = 'data/worldcities.csv';
    let records = Read.printRecords(filename, City);
    expect(records.length).toBe(6);
});