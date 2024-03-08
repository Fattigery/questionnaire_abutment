// 对第三方链接进行跳转进行统一管理的JS文件
/**
 * 变量说明
 * project：项目名
 * mark：标识（也就是项目下的第几条第三方链接）
 * uid：ID
 */

let 项目名 = {
	标识1: '链接',
	标识2: '链接'
};

let AAA = {
	a: `https://www.baidu.com/s?wd=李银河${uid}`
};

// 如果有标识才跳转（说明有对应的对接链接），否则不跳转，后台只记录id
if (project) {
	skip(eval(project)?.[mark]);
}

function skip(url) {
	console.log(url);
	if (url == '') return;
	location.href = url;
}
