// uuid：arid=VALUE
// 获取标识
let sid = uuid.substring(0, uuid.indexOf('x'));
// 获取id
let nid = uuid.substring(uuid.indexOf('x') + 1);

let app = {
	1: `https://api.catpanel.cn/business/renwu/design/call/otherSuccessUrl?surveyId=979367921400676352&uid=${nid}`,
	2: `https://api.catpanel.cn/business/renwu/design/call/otherFailUrl?surveyId=979367921400676352&uid=${nid}`,
	3: `https://api.catpanel.cn/business/renwu/design/call/otherQuotaFull?surveyId=979367921400676352&uid=${nid}`
};

let arid = {
	1: `https://message.opinionest.com/survey/survey-callback.aspx?s=3&TOID=${nid}`,
	2: `https://message.opinionest.com/survey/survey-callback.aspx?s=5&TOID=${nid}`,
	3: `https://message.opinionest.com/survey/survey-callback.aspx?s=4&TOID=${nid}`
};

let brid = {
	1: `https://www.drsay.cn/bk/s/14272_0aa9e3a792e65e2e?uid=${nid}`,
	2: `https://www.drsay.cn/bk/s/14272_b3640b004c9ff270?uid=${nid}`,
	3: `https://www.drsay.cn/bk/s/14272_47f0e4c1f11acc3d?uid=${nid}`
};

let crid = {
	1: `https://3asresearchsolutions.in/PMT/public/admin/c2s?pcode=${nid}&pnum=AC30-A5343&status=1`,
	2: `https://3asresearchsolutions.in/PMT/public/admin/c2s?pcode=${nid}&pnum=AC30-A5343&status=2`,
	3: `https://3asresearchsolutions.in/PMT/public/admin/c2s?pcode=${nid}&pnum=AC30-A5343&status=3`
};

// 如果有标识并且有对应的变量才跳转（说明有对应的对接链接），否则不跳转，后台只记录id
try {
	// 使用eval()函数来检查变量是否存在。
	eval(sid);
	// 如果变量存在，则会执行到这里。
	console.log('变量存在');
	skip(eval(sid)?.[stateNumber]);
} catch (error) {
	// 如果变量不存在，则会捕获到异常。
	console.log('变量不存在');
}

function skip(url) {
	console.log(url);
	if (!url) return;
	location.href = url;
}
