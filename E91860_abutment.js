/**
 * stateNumber：状态数字
 * project：国家
 * uuid：id
 */

// 获取标识
let sid = uuid.substring(0, uuid.indexOf('='));
// 获取id
let nid = uuid.substring(uuid.indexOf('=') + 1);

let US1 = {
	arid: {
		1: ``,
		2: ``,
		3: ``
	}
};

let US2 = {
	arid: {
		1: ``,
		2: ``,
		3: ``
	}
};

let TW = {
	arid: {
		1: ``,
		2: ``,
		3: ``
	}
};

let KR = {
	arid: {
		1: ``,
		2: ``,
		3: ``
	}
};

// 如果有供应商标识才跳转（说明有对应的对接链接），否则不跳转，后台只记录id
if (sid) {
	skip(eval(project)?.[sid]?.[stateNumber]);
}

function skip(url) {
	console.log(url);
	if (url == '') return;
	location.href = url;
}
