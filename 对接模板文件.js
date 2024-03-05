/**
 * 说明
 * sid：标识
 * uuid：ID
 * currentStateNumber：状态数字
 */

let arid = {
	1: ``,
	2: ``,
	3: ``
};

let brid = {
	1: ``,
	2: ``,
	3: ``
};

// 如果有标识才跳转（说明有对应的对接链接），否则不跳转，后台只记录id
if (sid) {
	skip(eval(sid)?.[currentStateNumber]);
}

function skip(url) {
	console.log(url);
	// $('#text').css('display', 'none');
	if (url == '') return;
	location.href = url;
}
