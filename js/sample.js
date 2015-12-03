// sample programs
/*/--------------------------------\*\
|*| DISPLAY DATE
\*\--------------------------------/*/
var today = new Date();
document.writeln(today + "<br/>");
console.log(today);

/*/--------------------------------\*\
|*| VARIABLES AND IF
\*\--------------------------------/*/
var num = Math.floor(Math.random() * 10);
var answer = "";

if (num < 5) {
	answer = "Small!";
} else if (num >= 5 && num < 10) {
	answer = "Large!";
}

document.writeln(num + ": " + answer + "<br/>");

var testScope = "This is test scope.";
var globalScope = "This is blobal scope.";

function testVariable() {
	// localのtestScopeのスコープが有効になっている為、グローバルのtestScopeは呼ばれない
	// さらにローカル変数の宣言が実行より後にある為、こちらも使えない
	// よってundifindを返す
	document.writeln(testScope + "<br/>");
	var testScope = "This is test scope. but it false to call.";
	// これローカルスコープね
	var localScope = "It is local scope.";
	return localScope;
}
// ローカル参照なので使えないよ
// document.writeln(localScope + "<br/>");
document.writeln(testVariable() + "<br/>");

/*/--------------------------------\*\
|*| FUNCTION
\*\--------------------------------/*/
var obj = {
	a: 10,
	b: 20,
	c: 30
}

document.writeln(obj.c + "<br/>");

// function
// 普通の関数は静的に定義されるため、先に呼び出してもエラー吐かないよ
document.writeln(test(2, 30) + "<br/>");

function test(n, m) {
	if (n === 0 || m === 0) {
		return "それだと何にも無くなってしまいまっせ！";
	} else {
		return n * m;
	}
}

// 基本型と参照型の違い
var testValue = [10, 20, 30, 40];

function incrimentValue(testValue) {
	testValue.pop();
	return testValue;
}

document.writeln(incrimentValue(testValue) + "<br/>");
document.writeln(testValue + "<br/>");

/*/--------------------------------\*\
|*| EVENT LISTENER
\*\--------------------------------/*/
// create event listener
function addListener(elem, ev, listener) {
	elem.addEventListener(ev, listener, false);
}
// use listener (load)
addListener(window, 'load', initSample);

// called init
function initSample() {
	var btn0001 = document.getElementById('btn-0001');
	addListener(btn0001, 'click', function() {
		event01();
		event02();
		event03();
	});
}
// push bitton event
function event01() {
	alert('Event 01 running.');
}

function event02() {
	console.log('Event 02 running.');
}

function event03() {
	var sampleDiv = document.getElementById('event-0003');
	sampleDiv.innerHTML = 'Event 03 running.';

}
/*/--------------------------------\*\
|*| DOM
\*\--------------------------------/*/
// delete nodes
function showBook(e, isNum, isColor) {
	var imgBook = document.createElement('img');
	imgBook.src = 'imgs/sample-eop-' + isNum + '.png';
	imgBook.alt = e.innerHTML;
	imgBook.width = 153;
	//imgBook.height = hoge;

	var showResult = document.getElementById('show-result');
	showResult.style.color = '#' + isColor;
	// showResultに<img>があれば中身を置き換え
	// なければdeleteBookボタンを有効にし、imgBookを追加
	if (showResult.getElementsByTagName('img').length > 0) {
		showResult.replaceChild(imgBook, showResult.lastChild);
	} else {
		document.getElementById('delete-book-btn').disabled = false;
		showResult.appendChild(imgBook);
	}
	console.log(showResult);
}

function deleteBook() {
	var showResult = document.getElementById('show-result');
	showResult.style.color = '#CCC';
	// remove node
	showResult.removeChild(showResult.lastChild);
	document.getElementById('delete-book-btn').disabled = true;

}
// add nodes
function addNode(f) {
	// geting DOM
	var linkName = f.linkname.value;
	var linkUrl = f.linkurl.value;
	var displayLinkNodes = document.getElementById('added-links');

	// create tags
	var addLink = document.createElement('a');
	var nodeName = document.createTextNode(linkName);
	var addBr = document.createElement('br');

	// set links and nodes
	addLink.href = linkUrl;

	// このままではnodeの断片しかできていないので、
	// それらをnodeツリーに組み上げる
	addLink.appendChild(nodeName);

	// divに表示
	displayLinkNodes.appendChild(addBr);
	displayLinkNodes.appendChild(addLink);
}

// list(get class)
function gettingClassBtn() {
	var listVal = [];
	var lists = document.getElementsByClassName('list-text');
	var displayListResult = document.getElementById('list-result');

	for (var i = 0; i < lists.length; i++) {
		listVal.push(lists.item(i).getAttribute('name'));
	}

	displayListResult.innerHTML = 'List value are... <br/>' + listVal.join('<br/>');
	console.log(listVal);
}

// get id
function gettingIdBtn() {
	var gettingIdResult = document.getElementById('getting-id-result');
	var testForm05Text = document.getElementById('inputname').value;
	gettingIdResult.innerHTML = 'Hello, ' + testForm05Text;
}

// selectbox
function alertSelect() {
	var selectResalt = [];
	var displaySlected = document.getElementById('display-slected');
	var selectCountry = document.getElementById('select-country');
	var countryOpt = selectCountry.childNodes;
	for (var i = 0; i < countryOpt.length; i++) {
		if (countryOpt.item(i).nodeType == 1) {
			selectResalt.push(countryOpt.item(i).value);
		}
	}
	alert(selectResalt.join('\n'));
}

/*/--------------------------------\*\
|*| FORM
\*\--------------------------------/*/
// check text
function checkInput() {
	var old = document.testform03.howold;
	if (old.value != null && old.value != '') {
		if (isNaN(old.value)) {
			alert('Use type number, fuckin Jap.');
			old.value = old.defaultValue;
			old.focus(); // not run
			old.select(); // not run
			return false;
		}
	}
}

// checkbox(radio) btn
function initRadioBtn() {
	var radioBtn = document.testform02.fmt;
	var sendRadio = document.testform02.sendradio;
	for (var i = 0; i < radioBtn.length; i++) {
		radioBtn[i].disabled = !document.testform02.need.checked;
		sendRadio.disabled = !document.testform02.need.checked;
	}
	return false
}

function sendRadioBtn() {
	var radioBtn = document.testform02.fmt;
	var radioResult = [];
	for (var i = 0; i < radioBtn.length; i++) {
		radioBtn[i].disabled = !document.testform02.need.checked;
		if (radioBtn[i].checked) {
			radioResult.push(radioBtn[i].value);
		}
	}
	alert(radioResult.toString());
	return false
}

// first test
function onInput(f) {
	// var result = '';
	// for (var i = 0; i < document.testform01.elements.length; i++) {
	// 	result += document.testform01.elements[i].name + '\n';
	// }
	alert(f.name.value);
	return false;
}

/*/--------------------------------\*\
|*| GET APP INFO
\*\--------------------------------/*/
document.writeln('Name: ' + navigator.appName + '<br/>');
document.writeln('Version: ' + navigator.appVersion + '<br/>');
document.writeln('Platform: ' + navigator.platform + '<br/>');
document.writeln('User agent: ' + navigator.userAgent + '<br/>');

/*/----------------END----------------/*/
