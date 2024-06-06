// 对第三方链接进行跳转进行统一管理的JS文件
/**
 * 变量说明
 * project：项目名
 * mark：标识（也就是项目下的第几条第三方链接）
 * uid：ID
 */

let S81517 = {
	a: `https://s1.intellisurvey.com/pub/is029027m?pan=218&d1=1&o1=2&co=8&trans_id=appx${uid}`
};

let R45511 = {
	a: `https://hub.m3globalresearch.com/welcome/U10NOSQ7PGB1GNV5/?user_id=app=${uid}`
};

let R57156 = {
	a: `https://hub.m3globalresearch.com/welcome/RXZROFJ9TQ3WOR7U/?user_id=app=${uid}`,
	b: `https://hub.m3globalresearch.com/welcome/IJ4K5U6J0XUP49H4/?user_id=app2=${uid}`
};

let X50893 = {
	a: `https://singapore.decipherinc.com/survey/selfserve/55f/240412?list=9&userid=app=${uid}&decLang=simplifiedchinese`
};

let K58113 = {
	a: `https://www.expertsmarketresearch.com/panel/05f34eaa-f08d-48bb-adc4-1989c29704a4/app=${uid}`
};

// 如果有标识才跳转（说明有对应的对接链接），否则不跳转，后台只记录id
try {
	// 检测是否有对应的变量
	eval(project);
	// 如果存在，则跳转
	skip(eval(project)?.[mark]);
} catch (error) {
	let endIndex = error.message.indexOf('is not defined') - 1;
	console.log(`不存在${error.message.substring(0, endIndex)}项目对象`);
}

function skip(url) {
	console.log(url);
	// 如果url的值为false（取反为true），则return，不进行跳转
	if (!url) return;
	location.href = url;
}
