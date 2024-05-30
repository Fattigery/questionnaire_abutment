// currentStateNumber：状态记录
// project：国家标识
// scid：供应商标识
// uid：用户id

let US = {
	arid: {
		1: ``,
		2: ``,
		3: ``
	},
	brid: {
		1: ``,
		2: ``,
		3: ``
	}
};

let UK = {};

// 印度（英语）
let IN = {};

// 韩国
let KR = {};

// 日本
let JP = {};

// 中国
let CN = {};

// 西班牙
let SP = {};

// 法国
let FR = {};

// 印尼 INDO
let ID = {};

// 巴西 BR
let BR = {};

// 德国
let DE = {};

// 获取对应的链接并跳转
if (project?.scid) {
	skip(eval(project)?.[scid]?.[currentStateNumber]);
}

// 跳转函数
function skip(url) {
	console.log(url);
	if (!url) return;
	location.href = url;
}
