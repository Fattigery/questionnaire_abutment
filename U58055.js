// uuid：arid=VALUE
// 获取标识
let sid = uuid.substring(0, uuid.indexOf('='));
// 获取id
let nid = uuid.substring(uuid.indexOf('=') + 1);

let arid = {
	1: `https://irconsortium.com/thanks?status=c&guid=${nid}`,
	2: `https://irconsortium.com/thanks?status=t&guid=${nid}`,
	3: `https://irconsortium.com/thanks?status=q&guid=${nid}`
};

let brid, crid, drid;
brid = {
	1: `https://globalmarketsurvey.com/surveyProcess.php?authToken=f89a77e013b5f9fe936eb8ec83ec0dfa`,
	2: `https://globalmarketsurvey.com/surveyProcess.php?authToken=a672a2fd70c84fcade79d6a16408b1fc`,
	3: `https://globalmarketsurvey.com/surveyProcess.php?authToken=c8c368a142402dd0f16694a7c996f0b8`
};
drid = crid = brid;

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
