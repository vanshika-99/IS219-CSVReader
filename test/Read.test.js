test('reads the CSV File', () => {
    const Read = require('../src/CSV/Read');
    const City = require('../src/Models/City');
    let filename  = 'data/worldcities.csv';
    let records = Read.printRecords(filename, City);
    expect(records.length).toBe(6);
});