/**
 * stateNumber：状态数字
 * project：国家
 * ident：标识
 * uuid：id
 */

// 获取标识
// let sid = uuid.substring(0, uuid.indexOf('='));
// 获取id
// let nid = uuid.substring(uuid.indexOf('=') + 1);

let TW = {
	arid: {
		1: `https://irconsortium.com/thanks?status=c&guid=${uuid}`,
		2: `https://irconsortium.com/thanks?status=t&guid=${uuid}`,
		3: `https://irconsortium.com/thanks?status=q&guid=${uuid}`
	}
};

let KR = {
	arid: {
		1: `http://iris.mangopanel.co.kr/pages/on_line/gSurvey/result.asp?survey_num=3197&status=3&uid=${uuid}`,
		2: `http://iris.mangopanel.co.kr/pages/on_line/gSurvey/result.asp?survey_num=3197&status=2&uid=${uuid}`,
		3: `http://iris.mangopanel.co.kr/pages/on_line/gSurvey/result.asp?survey_num=3197&status=1&uid=${uuid}`
	},
	brid: {
		1: `https://d8aspring.post-survey.com/ans/back/?key=StBjUh28&status=comp&uid=${uuid}`,
		2: `https://d8aspring.post-survey.com/ans/back/?key=StBjUh28&status=scrout&uid=${uuid}`,
		3: `https://d8aspring.post-survey.com/ans/back/?key=StBjUh28&status=quotafull&uid=${uuid}`
	}
};

// 如果有供应商标识才跳转（说明有对应的对接链接），否则不跳转，后台只记录id
if (eval(project)[ident]) {
	skip(eval(project)?.[ident]?.[stateNumber]);
}

function skip(url) {
	console.log(url);
	if (url == '') return;
	location.href = url;
}
