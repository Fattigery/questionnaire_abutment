// uuid：arid=VALUE
// 获取标识
let sid = uuid.substring(0, uuid.indexOf('='));
// 获取id
let nid = uuid.substring(uuid.indexOf('=') + 1);

let arid = {
	1: `http://www.52survey.com/endNaire.mdq?status=suc&key=${nid}`,
	2: `http://www.52survey.com/endNaire.mdq?status=fail&key=${nid}`,
	3: `http://www.52survey.com/endNaire.mdq?status=full&key=${nid}`
};

let brid = {
	1: `http://www.datibar.com/cathsuerysback.do?uid=${nid}&pid=X12297&status=C`,
	2: `http://www.datibar.com/cathsuerysback.do?uid=${nid}&pid=X12297&status=S`,
	3: `http://www.datibar.com/cathsuerysback.do?uid=${nid}&pid=X12297&status=Q`
};

let uid = {
	1: `https://api.catpanel.cn/business/renwu/design/call/otherSuccessUrl?surveyId=1019993596012527616&uid=${nid}`,
	2: `https://api.catpanel.cn/business/renwu/design/call/otherFailUrl?surveyId=1019993596012527616&uid=${nid}`,
	3: `https://api.catpanel.cn/business/renwu/design/call/otherQuotaFull?surveyId=1019993596012527616&uid=${nid}`
};

// 如果有标识并且有对应的变量才跳转（说明有对应的对接链接），否则不跳转，后台只记录id
try {
	if (!sid && !nid) {
		// sid和nid为假（uid没有值），则抛出异常。
		throw Error('uid为空');
	} else if (sid) {
		// 有标识，有id
		// 使用eval()函数来检查变量是否存在。
		eval(sid);

		// 如果变量存在，则会执行到这里。
		console.log('变量存在');
		skip(eval(sid)?.[stateNumber]);
	} else {
		/**
		 * 没有标识，只有id
		 *  - 情况一：单条链接
		 *  - 情况二：供应商对接没有标识（只能有一个）
		 */
		console.log('sid没有值，nid有值');
		// console.log(uid[stateNumber]);
		// // app
		// skip(uid[stateNumber]);
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
