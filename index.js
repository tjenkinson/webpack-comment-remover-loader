var stripJsonComments = require("strip-json-comments");

module.exports = function(source) {
	this.cacheable && this.cacheable();
	return stripJsonComments(source);
};