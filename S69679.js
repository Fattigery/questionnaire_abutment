// 获取标识
let sid = uuid.substring(0, uuid.indexOf('='));
// 获取id
let nid = uuid.substring(uuid.indexOf('=') + 1);

let arid = {
	1: `https://www.drsay.cn/bk/s/14073_5bb9217143b8b465?uid=${nid}`,
	2: `https://www.drsay.cn/bk/s/14073_b2e11cca0bc91173?uid=${nid}`,
	3: `https://www.drsay.cn/bk/s/14073_6037f972e3a810da?uid=${nid}`
};

let brid = {
	1: `http://invitoresearch.com/redirect/endpage/Success.php?PID=INVTS69679&UID=${nid}`,
	2: `http://invitoresearch.com/redirect/endpage/screenout.php?PID=INVTS69679&UID=${nid}`,
	3: `http://invitoresearch.com/redirect/endpage/over-quota.php?PID=INVTS69679&UID=${nid}`
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
