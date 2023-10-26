var loc = location.href;
var idJie = loc.substr(loc.indexOf("=") + 1, loc.length - loc.indexOf("="));

var jinbutuXuBox = document.getElementById("jinbutu_xu_box");
var jinbutuBox = document.getElementById("jinbutu_box");
var jieshaoBox = document.getElementById("jieshao");

var jinbutuXu = '<img id="jinbutu_xu" src="./img/';
console.log(jinbutuXu.concat(this.idJie).concat('js_x.png" alt="">'));
jinbutuXuBox.innerHTML = jinbutuXu.concat(this.idJie).concat('js_x.png" alt="">');

var jinbutu = '<img id="jinbutu" src="./img/';
console.log(jinbutu.concat(this.idJie).concat('js.png" alt="">'));
jinbutuBox.innerHTML = jinbutu.concat(this.idJie).concat('js.png" alt="">');

function jiese(name, nameZheng, biaoti, zhengwen, cvName) {
	this.name = name;
	this.nameZheng = nameZheng;
	this.biaoti = biaoti;
	this.zhengwen = zhengwen;
	this.cvName = cvName;
	
	this.getHtml = function() {
		var jieString = '<h2 id="jieshao_xiaomong">';
		jieString = jieString.concat(this.name, '</h2><h4 id="jieshao_daming">', this.nameZheng, '</h4>');
		if (this.biaoti != null) {
			jieString = jieString.concat('<h3 id="jieshao_biaoti">', this.biaoti, '</h3>');
		}
		jieString = jieString.concat('<p id="jieshao_gushi">', this.zhengwen, '</p><h5 id="jieshao_cv">CV:', this.cvName, '</h5>')
		return jieString;
	}
}

var jueseJi = new Map();
jueseJi.set('2b', new jiese('2B', '正式名称：ヨルハニ号B型', '静かな意志の、刃。', '正式名称：ヨルハニ号B型静かな意志の、刃。自動歩兵人形「ヨルハ」部隊の一員として派遣された、<br>汎用戦闘モデルのアンドロイド。<br>各種武器による近距離攻撃能力に優れているが、<br>サポートシステム「ポツド」を利用した遠距離攻撃も可能。<br>戦闘用ゴーグルを装着しているため、目元を見せる事はほとんどない。<br>ヨルハ部隊員は名前を持たず、全て記号で呼ばれる。<br>感情を持つことは規則上禁止されているが、モデルごとの個体差があり、<br>2Bは比較的冷静沈着な性格の持ち主。', '石川由依'));
jueseJi.set('9s', new jiese('9S', '正式名称：ョルハ九号9型', '儚い優しさと、魂。', '攻撃機能も有するが、調査任務に特化した機体で、<br>主にハッキングによる情報収集を得意とするョルハ部隊の一員。<br>ョルハ部隊の中で、は感情表現が豊かなタイプで、やさしい性格。', '花江夏樹'));
jueseJi.set('a2', new jiese('A2', '正式名称：ョルハA型二号', '過去と憎悪の、渦。', 'A型は現在運用されていない近接攻撃に特化した、<br>ヨルハのプロトタイプモデルで、<br>2 Bや9 Sなどの正式モデルの実用化に向け運用されていた。<br>あまり多くを語る性格ではなく、常に一人で、行動している。', '諷訪彩花'));
jueseJi.set('pd', new jiese('ポッド042/153', 'Pod042/153', null, 'ヨルハ部隊員に標準装備されている随行支援ユニット。<br>主に遠距離攻撃用の各種武装を搭載。移動面のサポートも行う。<br><br>司令部からの通信を表示したり、<br>複数機体での作戦情報の交換も可能。<br>2Bにはポッド042が、9Sにはポッド153が随行する。', '042 - 安元洋貴/153 - あきやまかおる'));
jueseJi.set('ht', new jiese('ョノレハ部隊司令官', 'Commander', null, '衛星軌道上に浮かぶ基地「バンカー」の長官であり、<br>ヨノレハ全部隊を指揮する責任者。<br>立場上は冷静沈着に振る舞うが、23や98のことは気にかけているようである。<br>ヨルハのプロトタイプモデルである八2とは何らかの因縁があるようだ。', '加納千秋'));
jueseJi.set('zh', new jiese('オペレーター60/210', 'Operator 6O/21O', null, '「バンカー」に常駐している通信オペレーター<br>地上にいるョルハ部隊員への指令伝達や、情報分析を担当。<br> 性格は個体によって多少のバラつきがあり、 <br>2B担当の6Oは比較的明るく、<br>対して9S担当の21Oは冷静。', '6O - 磯部恵子/21O - 初美メアリ'));
jueseJi.set('yx', new jiese('アダム/イブ', 'Adam/Eva', null, 'アダムは謎の青年。眼鏡をかけており、高い知性を持っている。<br> 性格的には冷静で、あるが、目的のためなら、<br>容赦のない残酷さも見せる。<br>イブはアダムの双子の弟。<br>兄とは対照的に、短絡的で物事を深く考えない性格。 <br>兄のアダムを慕っている。', 'アダム - 浪川大輔/イブ - 鈴木達央'));
jueseJi.set('ps', new jiese('パスカル', 'Pascal', null, '機械生命体にもかかわらず、争いを嫌う平和主義者で、<br>同じ志をもつ機械生命体たちと共に和平の道を模索している。<br>人類や機械生命体の歴史などに興味を持つほどの高い知性がある。', '悠木碧'));
jueseJi.set('db', new jiese('デボル/ボポル', 'Devola/Popola', null, 'レジスタンスのキャンプにいる旧型アンドロイド。<br>大昔に自分たちと同型の機体が暴走したことを知っており、 <br>それを負い目に感じている。アンドロイドの中では珍しく、<br> 飲酒を可能とするモデル。', '白石涼子'));
jueseJi.set('em', new jiese('エミール', 'Emil', null, '前作にも登場したキャラクター。<br>長い年月を経て、記憶の大部分が欠落している。', '門脇舞以'));
jueseJi.set('an', new jiese('アネモネ', 'Anemone', null, 'ョルハ部隊より前に地球に降下し、<br>各地で奮闘を続けるレジスタンスたちのリーダー。 <br>リーダーにふさわしく、しっかりとした性格で、仲間想い。<br>主人公たちには数多くの有益な情報を教えてくれる。', '初美メアリ'));

var thisJieshao = jueseJi.get(idJie);

jieshaoBox.innerHTML = thisJieshao.getHtml();

console.log(jueseJi);
console.log(jueseJi.get(idJie));