// uuid：arid=VALUE
// 获取标识
let sid = uuid.substring(0, uuid.indexOf('='));
// 获取id
let nid = uuid.substring(uuid.indexOf('=') + 1);

let arid = {
	1: `https://globalmarketsurvey.com/surveyProcess.php?authToken=a680c9339c8566607c748184a0a5609b`,
	2: `https://globalmarketsurvey.com/surveyProcess.php?authToken=4d195008dd1995a7b6bc65bca97d23b2`,
	3: `https://globalmarketsurvey.com/surveyProcess.php?authToken=a8e85c1c8210144d1cd9f133ae3b898a`
};

let brid = {
	1: `http://sample-polls.net/Thankyou.php?PID=SNSU25126&UID=${nid}`,
	2: `http://sample-polls.net/Terminate.php?PID=SNSU25126&UID=${nid}`,
	3: `http://sample-polls.net//Quotafull.php?PID=SNSU25126&UID=${nid}`
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
