// uuid：arid=VALUE
// 获取标识
let sid = uuid.substring(0, uuid.indexOf('='));
// 获取id
let nid = uuid.substring(uuid.indexOf('=') + 1);

let arid = {
	1: `http://medpaneljunction.surveybackoffice.com/endcapture.php?cada=MTEwODgtYldWa2NHRnVaV3hxZFc1amRHbHZiZz09&st=111`,
	2: `http://medpaneljunction.surveybackoffice.com/endcapture.php?cada=MTEwODgtYldWa2NHRnVaV3hxZFc1amRHbHZiZz09&st=222`,
	3: `http://medpaneljunction.surveybackoffice.com/endcapture.php?cada=MTEwODgtYldWa2NHRnVaV3hxZFc1amRHbHZiZz09&st=333`
};

let brid = {
	1: ``,
	2: ``,
	3: ``
};

// 如果有标识并且有对应的变量才跳转（说明有对应的对接链接），否则不跳转，后台只记录id
try {
	// 使用eval()函数来检查变量是否存在。
	eval(sid);
	// 如果变量存在，则会执行到这里。
	console.log('变量存在');
	skip(eval(sid)?.[currentStateNumber]);
} catch (error) {
	// 如果变量不存在，则会捕获到异常。
	console.log('变量不存在，只记录id');
}

function skip(url) {
	console.log(url);
	if (url == '') return;
	location.href = url;
}
