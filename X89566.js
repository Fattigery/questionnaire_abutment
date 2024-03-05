// 获取标识
let sid = uuid.substring(0, uuid.indexOf('='));
// 获取id
let nid = uuid.substring(uuid.indexOf('=') + 1);

let arid = {
	1: `http://invitoresearch.com/redirect/endpage/Success.php?PID=INVTX89566&UID=${nid}`,
	2: `http://invitoresearch.com/redirect/endpage/screenout.php?PID=INVTX89566&UID=${nid}`,
	3: `http://invitoresearch.com/redirect/endpage/over-quota.php?PID=INVTX89566&UID=${nid}`
};

let brid = {
	1: `https://ups.surveyrouter.com/trafficui/mscui/SOQualified.aspx?sname=X89566&gid=${nid}`,
	2: `https://ups.surveyrouter.com/trafficui/mscui/SOTerminated.aspx?sname=X89566&gid=${nid}`,
	3: `https://ups.surveyrouter.com/trafficui/mscui/SOQuotafull.aspx?sname=X89566&gid=${nid}`
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
