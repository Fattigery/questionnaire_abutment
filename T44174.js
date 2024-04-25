// uuid：arid=VALUE
// 获取标识
let sid = uuid.substring(0, uuid.indexOf('='));
// 获取id
let nid = uuid.substring(uuid.indexOf('=') + 1);

let arid = {
	1: `https://d8aspring.post-survey.com/ans/back/?key=4Et0U3Kx&status=comp&uid=${nid}`,
	2: `https://d8aspring.post-survey.com/ans/back/?key=4Et0U3Kx&status=scrout&uid=${nid}`,
	3: `https://d8aspring.post-survey.com/ans/back/?key=4Et0U3Kx&status=quotafull&uid=${nid}`
};

let brid = {
	1: `https://www.drsay.cn/bk/s/14496_7a02f73fd5a287ee?uid=${nid}`,
	2: `https://www.drsay.cn/bk/s/14496_742071dcdf3df04a?uid=${nid}`,
	3: `https://www.drsay.cn/bk/s/14496_e2b69e4846699ac0?uid=${nid}`
};

// 如果有标识并且有对应的变量才跳转（说明有对应的对接链接），否则不跳转，后台只记录id
try {
	// 如果URL为假（为空），则抛出异常。
	if (!sid) {
		throw Error('URL为空');
	}
	// 使用eval()函数来检查变量是否存在。
	eval(sid);
	// 如果变量存在，则会执行到这里。
	console.log('变量存在');
	skip(eval(sid)?.[stateNumber]);
} catch (error) {
	console.log(error.message);
	// 如果变量不存在，则会捕获到异常。
	// console.log(error.message === "URL为空" ? "URL为空" : "变量不存在，只记录id");
}

function skip(url) {
	console.log(url);
	// if (!url) return;
	location.href = url;
}
