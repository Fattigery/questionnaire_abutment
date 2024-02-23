// 获取标识
let sid = uuid.substring(0, uuid.indexOf('='));
// 获取id
let nid = uuid.substring(uuid.indexOf('=') + 1);

let arid = {
	1: `http://medpaneljunction.surveybackoffice.com/endcapture.php?cada=MTEwODgtYldWa2NHRnVaV3hxZFc1amRHbHZiZz09&st=111`,
	2: `http://medpaneljunction.surveybackoffice.com/endcapture.php?cada=MTEwODgtYldWa2NHRnVaV3hxZFc1amRHbHZiZz09&st=222`,
	3: `http://medpaneljunction.surveybackoffice.com/endcapture.php?cada=MTEwODgtYldWa2NHRnVaV3hxZFc1amRHbHZiZz09&st=333`
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
