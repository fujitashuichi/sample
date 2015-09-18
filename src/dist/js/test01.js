// sample

"use strict";

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

/*
function* arrayA() { // ジェネレータ関数
	[symbol.iterator]() {
		let prev = 0;
		let curr = 1;

		[prev, curr] = [curr, prev + 1];
		yield curr;
	};
}

for (let n of arrayA()) {
	// 1000 のときに反復終了
	if (n > max)
		break;
	console.log(n);
}
*/