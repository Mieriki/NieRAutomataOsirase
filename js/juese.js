console.log("此页面用于介绍游戏中的主要人物");
console.log("此页面的BGM采用了カイネ／救済（凯尼/救济），在尼尔系列中要说对我触动最深的人物那必是凯尼，凯尼也是我最喜欢的人物，不论是她悲惨的经历还是那" +
			"“飒爽”的性格，的、电梯门打开的那一刻，随着映入眼帘的月之泪花海，BGM响起，凯尼家门口本不太显眼的画像显得格外刺眼");

var idJie = new Array();
idJie.push(document.getElementById("2b").onclick = function() {toJueseXx(this)});
idJie.push(document.getElementById("9s").onclick = function() {toJueseXx(this)});
idJie.push(document.getElementById("a2").onclick = function() {toJueseXx(this)});
idJie.push(document.getElementById("pd").onclick = function() {toJueseXx(this)});
idJie.push(document.getElementById("ht").onclick = function() {toJueseXx(this)});
idJie.push(document.getElementById("zh").onclick = function() {toJueseXx(this)});
idJie.push(document.getElementById("yx").onclick = function() {toJueseXx(this)});
idJie.push(document.getElementById("ps").onclick = function() {toJueseXx(this)});
idJie.push(document.getElementById("db").onclick = function() {toJueseXx(this)});
idJie.push(document.getElementById("em").onclick = function() {toJueseXx(this)});
idJie.push(document.getElementById("an").onclick = function() {toJueseXx(this)});

function toJueseXx(idLinshi) {
	location.href = "http://127.0.0.1:8848/NieRAutomata%20Osirase/juiese_xx.html?=" + idLinshi.id;
}