// uuid：arid=VALUE
// 获取标识
let sid = uuid.substring(0, uuid.indexOf('='));
// 获取id
let nid = uuid.substring(uuid.indexOf('=') + 1);

let arid = {
	1: `https://surveys.universalresearchpanels.com/newdesign/site/Universalresearchpanels/lp.php?q=25724&qresult=8adc4fcdd7f4f0fcd6b32ceb78bdae6d&id=${nid}`,
	2: `https://surveys.universalresearchpanels.com/newdesign/site/Universalresearchpanels/lp.php?q=25724&qresult=eccb54b7ca12e1b8b4519ed8fd4ae30a&id=${nid}`,
	3: `https://surveys.universalresearchpanels.com/newdesign/site/Universalresearchpanels/lp.php?q=25724&qresult=dd3680980e73cacd4a5e68bb8bc70622&id=${nid}`
};

let crid = {
	1: `https://pixel-research.com/survey/complete`,
	2: `https://pixel-research.com/survey/sorry`,
	3: `https://pixel-research.com/survey/quota`
};

// 如果有标识并且有对应的变量才跳转（说明有对应的对接链接），否则不跳转，后台只记录id
try {
	// 如果sid为假（为空），则抛出异常。
	if (!sid) {
		throw Error('没有标识，sid为空');
	}

	// 使用eval()函数来检查变量是否存在。
	eval(sid);

	// 如果变量存在，则会执行到这里。
	console.log('变量存在');
	skip(eval(sid)?.[stateNumber]);
} catch (error) {
	// 如果捕获到异常，则会执行到这里。
	if (error.message === '没有标识，sid为空') {
		console.log(error.message + '，后台只记录id');
	} else if (error.message.indexOf('is not defined') !== -1) {
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
