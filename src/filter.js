const UpperCase = require("./UpperCase");
const filter = (arr, functionName) => {
	const resultArray = [];
	
	for (let arrayValue of arr) {
		if (functionName(arrayValue)) {
		
		resultArray.push(arrayValue);
		}
	}
	return resultArray;
};

module.exports = filter;
