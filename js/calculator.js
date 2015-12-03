// javascript calculator

var total = 0;
var input = "";
var calculate = "+";
var flag = 1; // 前回入力したものは[数値: 0]か[文字: 1]か

// push key 0~1 or .
function isValue(plusData) {
	flag = 0;
	input += plusData;
	document.calculatorForm.displayLine.value = input;
}

function isCalculate(plusData) {
	if (flag == 0) {
		flag = 1;
		var calculateWorks = total + calculate + input;
		total = eval(calculateWorks);
		input = "";
		document.calculatorForm.displayLine.value = total;
	}
	if (plusData == "=") {
		total = 0;
		calculate = "+";
	} else {
		calculate = plusData;
	}
}

function isC() {
	total = 0;
	input = "";
	calculate = "+";
	document.calculatorForm.displayLine.value = total;
}
