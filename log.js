// ES5
module.exports = function log(val, base) {
	return Math.log(val) / Math.log(base);
};

// ES6
export default log = (val, base) => Math.log(val) / Math.log(base);
