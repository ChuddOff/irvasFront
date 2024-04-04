const path = require('path');

module.exports = {
 entry: './js/main.js',
 output: {
    filename: 'start.js',
    path: path.resolve(__dirname, './public'),
 },
};
