class Read {
    static printRecords(filename, models){
        const filePath = require('../filePath/File');
        const fs = require('fs');
        const parse = require('csv-parse/lib/sync');

        let absolutePath = filePath.getAbsolutePath(filename);
        const options = {
            columns: true,
            delimiter: ',',
            trim: true,
            skip_empty_lines: true
        };
        let contents = fs.readFileSync(absolutePath);
        const record = parse(contents, options);
        let list = Array();
        record.forEach(function (data) {
            list.push(models.create(data));
        });
        return list;
    }
}
module.exports = Read;