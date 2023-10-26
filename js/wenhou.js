var jie = true;
function wenhou() {
	if (jie) {
		var imaTime = new Date;
		if (imaTime.getHours() >= 3 && imaTime.getHours()< 12) {
			alert("早上好！")
		} else if (imaTime.getHours() >= 12 && imaTime.getHours() < 16) {
			alert("中午好！")
		} else if (imaTime.getHours() >= 16 && imaTime.getHours() < 19) {
			alert("下午好！")
		} else {
			alert("晚上好！")
		}
		jie = false;
	}
}

wenhou();