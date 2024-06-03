// uuid：arid=VALUE
// 获取标识
let sid = uuid.substring(0, uuid.indexOf('='));
// 获取id
let nid = uuid.substring(uuid.indexOf('=') + 1);

let arid = {
	1: `https://message.insight.rakuten.com/survey/Spassback.do?pid=c9f0c1a34c2f4f69&uid=${nid}&st=c`,
	2: `https://message.insight.rakuten.com/survey/Spassback.do?pid=c9f0c1a34c2f4f69&uid=${nid}&st=s`,
	3: `https://message.insight.rakuten.com/survey/Spassback.do?pid=c9f0c1a34c2f4f69&uid=${nid}&st=q`
};

let app = {
	1: `https://api.catpanel.cn/business/renwu/design/call/otherSuccessUrl?surveyId=1004369912212226048&uid=${nid}`,
	2: `https://api.catpanel.cn/business/renwu/design/call/otherFailUrl?surveyId=1004369912212226048&uid=${nid}`,
	3: `https://api.catpanel.cn/business/renwu/design/call/otherQuotaFull?surveyId=1004369912212226048&uid=${nid}`
};

let brid = {
	1: `http://invitoresearch.com/redirect/endpage/Success.php?PID=INVTT85462732&UID=${nid}`,
	2: `http://invitoresearch.com/redirect/endpage/over-quota.php?PID=INVTT85462732&UID=${nid}`,
	3: `http://invitoresearch.com/redirect/endpage/screenout.php?PID=INVTT85462732&UID=${nid}`
};

// 如果有标识并且有对应的变量才跳转（说明有对应的对接链接），否则不跳转，后台只记录id
try {
	// 如果uid为空（没有id），则抛出异常。
	if (!uuid) {
		throw Error('uid为空，uid没有值');
	} else if (sid) {
		// 有标识
		// 使用eval()函数来检查变量是否存在。
		eval(sid);
		// 如果变量存在，则会执行到这里。
		console.log('变量存在');
		skip(eval(sid)?.[stateNumber]);
	} else {
		console.log('sid没有值，nid有值');
		skip(arid[stateNumber]);
	}
} catch (error) {
	// 如果捕获到异常，则会执行到这里。
	if (error.message.indexOf('is not defined') !== -1) {
		let endIndex = error.message.indexOf('is not defined') - 1;
		console.log(`变量${error.message.substring(0, endIndex)}不存在`);
	} else {
		console.log(error.message);
	}
}

function skip(url) {
	console.log(url);
	if (!url) return;
	location.href = url;
}
