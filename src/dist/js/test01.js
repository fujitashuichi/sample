// sample

"use strict";

var marked0$0 = [arrayA].map(regeneratorRuntime.mark);
var max = +process.argv[2];
/*
var iterator = {
	next: function() {
		if (this.count >= this.elements.length) {
			throw "end";
		}
		return this.elements[this.count++];
	},
	count: 0,
	elements: ["01-a", "02-b", "03-c", "04-d", "05-e", "06-f", "07-g", "08-h", "09-i"]
};

for (var i = 0; i < max; i++) {
	console.log(iterator.next());
};
*/

function arrayA() {
	var prev, curr, _ref;

	return regeneratorRuntime.wrap(function arrayA$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				prev = 0;
				curr = 1;
				_ref = [curr, prev + 1];
				prev = _ref[0];
				curr = _ref[1];
				context$1$0.next = 7;
				return curr;

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = arrayA()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var n = _step.value;

		// 1000 のときに反復終了
		if (n > max) break;
		console.log(n);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator["return"]) {
			_iterator["return"]();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

// ジェネレータ関数