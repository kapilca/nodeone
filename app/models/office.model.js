const sql = require('./db');

//constructor
const Office = function (office) {
    this.officename = office.officename
}

module.exports = Office;