require('babel-polyfill');
require('babel-core/register');

var configure = require('enzyme').configure;
var Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });