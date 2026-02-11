// ====== テーマ（ライト/ダーク/システム） ======
const THEME_KEY = "themePref"; // localStorage key
const themeSelect = document.getElementById("themeSelect");
const mqlDark = window.matchMedia("(prefers-color-scheme: dark)");

let themePref = localStorage.getItem(THEME_KEY) || "system";

function effectiveTheme(pref) {
  if (pref === "system") return mqlDark.matches ? "dark" : "light";
  return pref; // "light" or "dark"
}

function applyTheme() {
  const eff = effectiveTheme(themePref);
  document.documentElement.dataset.theme = eff; // CSSは data-theme="dark" を見る
  if (themeSelect) themeSelect.value = themePref;
}

function setThemePref(pref) {
  themePref = pref;
  localStorage.setItem(THEME_KEY, themePref);
  applyTheme();
}

// システム設定が変わったら追従（system選択中のみ）
mqlDark.addEventListener("change", () => {
  if (themePref === "system") applyTheme();
});

// UI操作
if (themeSelect) {
  themeSelect.addEventListener("change", () => {
    setThemePref(themeSelect.value);
  });
}

// 初期適用（デフォルトはブラウザに合わせる）
applyTheme();


// ====== 問題データ======
// date は YYYY-MM-DD で統一
const datasets = {
  meme: {
    label: "ネットミームとか編",
    events: [
      { id: "m1", text: "漫画『野原ひろし 昼メシの流儀』連載開始", date: "2015-12-04" },
      { id: "m2", text: "ピコ太郎　『PPAP』Youtubeに投稿", date: "2016-08-25" },
      { id: "m3", text: "星野源　楽曲『恋』リリース", date: "2016-10-05" },
      { id: "m4", text: "アニメ『けものフレンズ』第1話初回放送", date: "2017-01-10" },
      { id: "m5", text: "「閉場しています！」「営業しています！」(番組『NEWSZERO』の築地市場閉場に関するニュースでこのシーンが放送された日)", date: "2018-10-11" },
      { id: "m6", text: "アニメ映画『劇場版「鬼滅の刃」無限列車編』公開", date: "2020-10-16" },
      { id: "m7", text: "Ado　楽曲『うっせぇわ』リリース", date: "2020-10-23" },
      { id: "m8", text: "「わ わかんないっピ…」(漫画『タコピーの原罪』11話公開日)", date: "2022-02-18" },
      { id: "m9", text: "アニメ『ちいかわ』放送開始", date: "2022-04-04" },
      { id: "m10", text: "MAD動画『おとわっか』Youtubeならびにniconicoで公開", date: "2022-05-07" },
      { id: "m11", text: "ゆこぴ氏の楽曲『強風オールバック』Youtubeならびにniconicoで公開", date: "2023-03-15" },
      { id: "m12", text: "プロ野球　読売ジャイアンツがTwitterに「父のキゲンは巨人が決めている」を投稿", date: "2025-06-15" },
      { id: "m13", text: "『トムとジェリー』公式Twitterアカウントが「さかな」のイラストを投稿", date: "2025-07-09" },
      { id: "m14", text: "AIサービス「Grok」のアバター「Ani」公開(金髪ツインテール、黒いゴスロリ姿で話題に)", date: "2025-07-14" },
      { id: "m15", text: "世界地図にピクセルアートを描くサイト『Wplace』リリース", date: "2025-07-21" },
      { id: "m16", text: "戦わずして完全王者！(動画『カービィのエアライダー Direct』公開日)", date: "2025-08-19" },
      { id: "m17", text: "アニメ『野原ひろし 昼メシの流儀』第1話初回放送", date: "2025-10-03" },
      { id: "m18", text: "新ポケモン「メガスターミー」公開(ゲーム『Pokémon LEGENDS Z-A』発売日)", date: "2025-10-16" },
      { id: "m19", text: "米津玄師　MV『KICK BACK』Youtubeで公開(アニメ『チェンソーマン』OPがYoutubeに公開されて13日後)", date: "2022-10-25" },
      { id: "m20", text: "日清　アニメ「チャージマン研!」とのコラボ商品「魔改造カップヌードル」を発売", date: "2025-09-08" },
      { id: "m21", text: "新語・流行語大賞　年間大賞に「ふてほど」が選出(その後Xで「不適切報道」がトレンド入り」)", date: "2024-12-02" },
      { id: "m22", text: "YOASOBI　MV『アイドル』Youtubeで公開", date: "2023-04-13" },
      { id: "m23", text: "Creepy Nuts　楽曲『Bling-Bang-Bang-Born』公開", date: "2024-01-07" },
      { id: "m24", text: "ゲーム『8番出口』Steamにて発売", date: "2023-11-29" },
      { id: "m25", text: "デジタル雑誌『社会人一年生』公開(部長に対する「ぽんぽんぺいん」のメールで話題に)", date: "2019-04-08" },
      { id: "m26", text: "バチ氏による動画『たべるんごのうた』niconicoに投稿", date: "2020-01-11" },
      { id: "m27", text: "アニメ『鬼滅の刃』にて、パワハラ会議が話題に(読売テレビにてアニメ第26話が初回放送された日[26時台放送])", date: "2019-09-28" },
      { id: "m28", text: "「デカ過ぎんだろ…」(漫画『新テニスの王子様』289話掲載のジャンプSQ発売日)", date: "2020-02-04" },
      { id: "m29", text: "「バカなことやってねえで働け！」(アニメ『ドラゴンボール超』第77話公開日)", date: "2017-02-05" },
      { id: "m30", text: "ペプシによるプロモーション企画「本田とじゃんけん」開始", date: "2019-04-09" },
      { id: "m31", text: "「『ある』のがいけない!!!『ある』のがいけない!!!!」(漫画「ドカ食いダイスキ!もちづきさん」第4話公開日)", date: "2024-07-05" },
      { id: "m32", text: "「恋人といる時の雪って特別な気分に浸れて僕は好きです」(日テレの大雪に関する緊急報道番組で、件の街頭インタビューが放送された日)", date: "2013-01-14" },
      { id: "m33", text: "京セラによる新卒採用向けムービーにて「アル中カラカラ」ことニコニコ投稿者のwawawa氏と思われる人物が登場し話題に", date: "2025-01-28" },
      { id: "m34", text: "アニメ『黒岩メダカに私の可愛いが通じない』の第一話初回放送日[24:00放送](OPの「メダかわダンス」が話題に)", date: "2025-01-06" },
      { id: "m35", text: "吉田夜世氏の楽曲『オーバーライド』リリース", date: "2023-11-29" },
      { id: "m36", text: "サツキ氏の楽曲『メズマライザー』リリース", date: "2024-04-27" },
      { id: "m37", text: "柊マグネタイト氏の楽曲『テトリス』リリース", date: "2024-11-08" },
      { id: "m38", text: "滝川クリステル氏が東京オリンピック招致プレゼンテーションで「お・も・て・な・し」のスピーチを披露", date: "2013-09-07" },
      { id: "m39", text: "テレビ番組『びじゅチューン！』にて、『何にでも牛乳を注ぐ女』が初回放送された日", date: "2018-04-25" },
      { id: "m40", text: "Youtubeチャンネル『Stardy-河野玄斗の神授業』がある動画を投稿。「何やってるんですか　勉強してください！」のセリフで話題に", date: "2023-07-21" },
      { id: "m41", text: "マクドナルドのハッピーセット「星のカービィ」が発売。カービィのぬいぐるみの個体差が話題に", date: "2024-02-23" },
      { id: "m42", text: "ゲーム『トリッカル・もちもちほっぺ大作戦』のTwitter公式アカウントにて、キャラクター「ｽﾋﾟｷ」がゲーム内に実装予定であることを発表", date: "2025-12-28" },
      { id: "m43", text: "漫画家ナガノ氏がゲーム『ポケポケ』に関連した漫画をTwitterに投稿。「もうさァッ無理だよ ルールわかんないんだからさァッ」", date: "2024-11-03" },
      { id: "m44", text: "マクドナルドが期間限定のイメージキャラクター「いまだけダブチ食べ美」を発表", date: "2024-10-22" },
      { id: "m45", text: "マクドナルドが期間限定のイメージキャラクター「サムライたまご食べ美」を発表", date: "2025-03-28" },
      { id: "m46", text: "テレビ番組『ネプリーグ』にて、「ぼうにあ○る」の誤答が放送", date: "2019-07-08" },
      { id: "m47", text: "れすぽん氏の楽曲『45秒』ニコニコ動画に投稿。「45秒で何ができる?」のフレーズで話題に", date: "2013-05-29" },
      { id: "m48", text: "元兵庫県議・野々村竜太郎氏の政務活動費不正支出疑惑に関する記者会見が行われた日(いわゆる「号泣会見」)", date: "2014-07-01" },
      { id: "m49", text: "TikTokにて『ゴールドタイガー』の動画が投稿。「おまえの苦労をずっと見てたぞ」「本当によく頑張ったな？」等のフレーズが有名。", date: "2024-04-25" },
      { id: "m50", text: "ゲーム『アイドルマスターシャイニーカラーズ』に関連したネタ動画『エビ揉め』がniconicoに投稿", date: "2024-08-25" },
      { id: "m51", text: "映画『シン・ゴジラ』が地上波で初放送された日。「内閣総辞職ビーム」が話題に", date: "2017-11-12" },
      { id: "m52", text: "Twitter上に「金子獲得へ、広島5億年20円提示」のネタ投稿", date: "2014-11-03" },
      { id: "m53", text: "テレビ番組『ビートたけしのTVタックル』にて、ひろゆき氏が「あなたの感想ですよね」と発した回の放送日", date: "2015-06-22" },
      { id: "m54", text: "Twitterにてきくちゆうき氏「100日後に死ぬワニ」の100日目が投稿", date: "2020-03-20" },
      { id: "m55", text: "サカナクション　楽曲『新宝島』リリース", date: "2015-09-30" },
      { id: "m56", text: "二次創作キャラクター「クッパ姫」登場(きっかけとなったNintendo Direct放送日)", date: "2018-09-14" },
      { id: "m57", text: "チョコワの投票企画「ココくんのチョコワvsスフィンクスのワサビ」結果発表", date: "2012-08-15" },
      { id: "m58", text: "「激おこぷんぷん丸」が流行(起点とされるツイートの投稿日)", date: "2013-03-02" },
      { id: "m59", text: "simurashi氏がTwitterに「ティッシュおいしい」の画像を投稿", date: "2013-06-16" },
      { id: "m60", text: "「青黒か白金か」の議論を巻き起こしたドレス画像の投稿日", date: "2015-02-26" },
      { id: "m61", text: "ケースワベ氏がTwitterに「5000兆円欲しい！」の画像を投稿", date: "2016-09-02" },
      { id: "m62", text: "ニュース番組に「自己防衛おじさん」が登場", date: "2016-12-24" },
      { id: "m63", text: "テレビ番組『ザ!世界仰天ニュース』にて、「オタクは学校来んなよ」の一幕が登場", date: "2016-11-26" },
      { id: "m64", text: "テレビ番組『報道ステーション』にて、眞子さまの御結婚に関する街頭インタビューで「でも幸せならOKです」の一幕が放送", date: "2017-05-16" },
      { id: "m65", text: "テレビ番組『報道ステーション』にて、「熱盛」が誤爆する放送事故が発生", date: "2017-04-20" },
      { id: "m66", text: "Twitterに「もちろん俺らは抵抗するで？拳で」の動画が投稿", date: "2017-09-21" },
      { id: "m67", text: "Twitterに「頭が良い人と悪い人の物の見方の違い(元ネタから改変した＂ばなな＂の方)」のイラストが投稿", date: "2017-05-30" },
      { id: "m68", text: "「止まるんじゃねえぞ…」(アニメ『機動戦士ガンダム 鉄血のオルフェンズ』第48話初回放送日)", date: "2017-03-19" },
      { id: "m69", text: "東京新聞がTwitterに「水を吐くフグ」の画像を投稿", date: "2019-03-10" },
      { id: "m70", text: "Twitterに「右フック犬」の画像が投稿", date: "2019-04-15" },
      { id: "m71", text: "テレビ番組『嵐にしやがれ』において、櫻井翔のコメント「シコシコ感がすごい」が放送", date: "2016-05-14" },
      { id: "m72", text: "👺「判断が遅い」(アニメ『鬼滅の刃』第2話初回放送日)", date: "2019-04-13" },
      { id: "m73", text: "小池百合子東京都知事が報道陣に対し「密です！」「密です！」と注意喚起", date: "2020-04-09" },
      { id: "m74", text: "群青ちきん氏の企画「遺伝的アルゴリズムで最高にエッチな画像を作ろう！」が公開", date: "2021-01-10" },
      { id: "m75", text: "「江ノ電自転車ニキ」事件が発生", date: "2021-08-05" },
      { id: "m76", text: "Youtubeに「やばいクレーマーのSUSURU TV(本人ver)」が投稿", date: "2021-09-03" },
      { id: "m77", text: "「連邦に反省を促すダンス」ブームのきっかけとなったしらとり氏の動画『やっちゃいなよ！そんな偽物なんか！』がYoutubeとniconicoに投稿", date: "2021-05-14" },
      { id: "m78", text: "アニメ『PUI PUI モルカー』1期第1話の初回放送日", date: "2021-01-05" },
      { id: "m79", text: "アニメ『仮面ライダーゼロワン』第1話初回放送日(腹筋崩壊太郎が登場)", date: "2019-09-01" },
      { id: "m80", text: "「クリスマスにはシャケを食え」(アニメ『快盗戦隊ルパンレンジャーVS警察戦隊パトレンジャー』第45話初回放送日)", date: "2018-12-23" },
      { id: "m81", text: "実況者のジャック・オ・蘭たん氏がゲーム『ポケットモンスターバイオレット』の実況中に「Oh! パモさん 床の隙間の汚れ watch…」のセリフを発し話題に", date: "2023-01-05" },
      { id: "m82", text: "宮崎駿監督の映画『君たちはどう生きるか』のポスタービジュアルが解禁(君生きバード)", date: "2022-12-13" },
      { id: "m83", text: "中古車販売チェーン「ビッグモーター」の不祥事に関連して、「教育教育教育…死刑死刑死刑…教育教育教育…」の副社長構文がフライデーによって報道", date: "2023-07-28" },
      { id: "m84", text: "Twitterに「君は完璧で究極のゲッター」のMAD動画が投稿", date: "2023-04-19" },
      { id: "m85", text: "ゲーム『Fall Guys』が発売(PlayStation 4およびMicrosoft Windowsにて)", date: "2020-08-04" },
      { id: "m86", text: "しぐれうい（9さい）氏の楽曲『粛聖!!ロリ神レクイエム☆』がYoutubeに投稿", date: "2023-09-10" },
      { id: "m87", text: "「ヒンメルはもういないじゃない。」(アニメ『葬送のフリーレン』第9話初回放送日)", date: "2023-11-03" },
      { id: "m88", text: "TV番組『芸能人格付けチェック』にて浜田チャーハンが登場", date: "2024-01-07" },
      { id: "m89", text: "「無課金おじさん」がオリンピック混合団体10mエアピストル競技で銀メダルを獲得", date: "2024-07-30" },
      { id: "m90", text: "ンバヂ氏の楽曲『好きな惣菜発表ドラゴン』がniconicoに投稿", date: "2023-08-05" },
      { id: "m91", text: "HIKAKIN氏が自身プロデュースのカップラーメン「みそきん」をYoutube上で初公開", date: "2023-04-27" },
      { id: "m92", text: "Twitterに「データなんかねえよ」のセリフと共にガタイの良いひろゆきの画像が投稿", date: "2021-12-21" },
      { id: "m93", text: "アニメ『しかのこのこのここしたんたん』のOPイントロ耐久動画がYoutubeに投稿", date: "2024-05-28" },
      { id: "m94", text: "AiScReam　楽曲『愛♡スクリ〜ム！』リリース", date: "2025-01-22" },
      { id: "m95", text: "Nintendo Switchダウンロードソフト「スイカゲーム」が流行。その後iOS版がリリースされた日", date: "2024-01-01" },
      { id: "m96", text: "アニメ『ポプテピピック』第1話初回放送[25:00放送]", date: "2018-01-06" },
      { id: "m97", text: "ゲーム『ポケットモンスター スカーレット・バイオレット』のDLC「キビキビパニック」が配信開始。「キビキビダンス」が話題に", date: "2024-01-11" },
      { id: "m98", text: "「ずんだどん」の元ネタとなった「ずんだもんは身長198㌢体重160㌔の36歳の巨漢で……」のTwitterへの投稿日", date: "2024-04-01" },
      { id: "m99", text: "ぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬ氏の楽曲『みむかｩわナイストライ』リリース", date: "2024-12-06" },
      { id: "m100", text: "マクドナルドが期間限定のイメージキャラクター「いまだけ月見食べ美」を発表", date: "2025-09-03" },
      { id: "m101", text: "DECO*27氏の楽曲『モニタリング』リリース", date: "2024-11-22" },
      { id: "m102", text: "DECO*27氏の楽曲『ラビットホール』リリース", date: "2023-05-19" },
      { id: "m103", text: "Nintendo Switch発売日", date: "2017-03-03" },
      { id: "m104", text: "Nintendo Switch2発売日", date: "2025-06-05" },
      { id: "m105", text: "GYARI氏による動画『何でも言うことを聞いてくれるアカネチャン』Youtubeならびにniconicoに投稿", date: "2017-12-28" },
      { id: "m106", text: "ニンテンドー3DS、WiiUのオンラインプレイサービスが終了", date: "2024-04-09" },
      { id: "m107", text: "ゲーム『大乱闘スマッシュブラザーズ SPECIAL』が発売", date: "2018-12-07" },
      { id: "m108", text: "アニメ映画『アナと雪の女王』日本で公開", date: "2014-03-14" },
      { id: "m109", text: "Youtubeで動画『うるまでるびのGO！GO！選挙　第１話』が公開", date: "2009-05-18" },
      { id: "m110", text: "アニメ映画『君の名は』が公開", date: "2016-08-26" },
      { id: "m111", text: "映画『カメラを止めるな!』日本で公開", date: "2017-11-04" },
      { id: "m112", text: "ゲーム『モンスターハンターワイルズ』が発売", date: "2025-02-28" },
      { id: "m113", text: "黒うさP氏の楽曲『千本桜』niconicoで公開", date: "2011-09-17" },
      { id: "m114", text: "米津玄師　楽曲『IRIS OUT』リリース", date: "2025-09-15" },
      { id: "m115", text: "niconicoに動画『【東方】Bad Apple!! ＰＶ【影絵】』が投稿", date: "2009-10-27" },
      { id: "m116", text: "プロ野球・大谷翔平選手の専属通訳であった水原一平氏が違法賭博ならびに着服のスキャンダルを受けドジャースから解雇", date: "2024-03-20" },
      { id: "m117", text: "2025年大阪・関西万博のマスコットキャラクターの名前が「ミャクミャク」に決定したと発表", date: "2022-07-18" },
      { id: "m118", text: "平昌オリンピック開会式(この頃会場に設置されていたオブジェが「モルゲッソヨ」の愛称で親しまれるように)", date: "2018-02-09" },
      { id: "m119", text: "HIKAKIN氏がYoutubeで結婚を報告", date: "2024-01-01" },
      { id: "m120", text: "「さかなー」「ちんあなごー」(アニメ『リコリス・リコイル』第4話初回放送日)", date: "2022-07-23" },
      { id: "m121", text: "アニメ『ご注文はうさぎですか？』(第1期)1話初回放送日", date: "2014-04-10" },
      { id: "m122", text: "アニメ『サザエさん』のエピソード「ノリスケ出入り禁止」が放送", date: "2022-09-04" },
      { id: "m123", text: "「キッショ　なんで分かるんだよ」(アニメ『呪術廻戦』第33話初回放送日)", date: "2023-09-22" },
      { id: "m124", text: "当時アイドルであった橋本環奈氏の「奇跡の一枚」が撮影", date: "2013-11-03" },
      { id: "m125", text: "プレイステーション3発売(当時のニュース映像で「物売るってレベルじゃねえぞ」の発言が放送され話題に)", date: "2006-11-11" },
      { id: "m126", text: "Norman Kochanowski氏が動画サイトにある動画を投稿。後に「キーボードクラッシャー」と呼称され流行", date: "2006-02-14" },
      { id: "m127", text: "同人サークル「てつくずおきば」制作の楽曲『エアーマンが倒せない』がniconicoで公開", date: "2007-05-26" },
      { id: "m128", text: "「ニコニコ動画」サービス開始", date: "2006-12-12" },
      { id: "m129", text: "TV番組『おかあさんといっしょ』にて、はいだしょうこ氏によるスプーの絵描き歌事件が発生", date: "2006-04-28" },
      { id: "m130", text: "松岡修造氏が「俺だってこの-10℃んところ、シジミがトゥルルって頑張ってるんだよ！」の動画を投稿", date: "2007-03-13" },
      { id: "m131", text: "ジョージ-メンズコーチ-氏がYoutubeにある動画を投稿。「ガチで危機感持った方がいいと思う」「厳しいって」などの発言で話題に", date: "2023-11-15" },
      { id: "m132", text: "Twitterが「X」に名称変更", date: "2023-07-24" },
      { id: "m133", text: "Vtuber・兎田ぺこら氏が当初予定していたある配信を急遽キャンセル。それに対し5ちゃんねるにて「チキン冷めちゃった」の書き込みが投稿", date: "2021-12-25" },
      { id: "m134", text: "Nintendo Directにて『スーパーマリオブラザーズ ワンダー』での新強化「ゾウマリオ」が初公開", date: "2023-06-21" },
      { id: "m135", text: "鎹氏によるTwitterでの企画「石バトル」において、初代出禁石174,874票vsいいね石174,175票の激戦となった回の投稿日", date: "2025-06-03" },
      { id: "m136", text: "油粘土マン氏がYoutubeに動画『全員ドッペルゲンガーで開幕死ぬグループYouTuber』を投稿", date: "2023-12-09" },
      { id: "m137", text: "Twitterにて『レゼダンス』が公開", date: "2025-12-12" },
      { id: "m138", text: "Youtubeに動画『やる気以前のダースベイダーのテーマ』が投稿", date: "2015-09-01" },
      { id: "m139", text: "バーバパパ氏が動画『ウ”ィ”エ”』をYoutubeに投稿", date: "2020-07-22" },
      { id: "m140", text: "TV番組『芸能人格付けチェック』にて、鬼龍院翔氏によるスライディング土下座や「また誰もいない部屋に辿りついてしまった」の発言で話題となった回の放送日", date: "2020-01-01" },
      { id: "m141", text: "TVCM『光るパジャマ』内に登場するワード「マジカル畜光」が「マジカルち〇こ」に空耳してしまうことで話題に。Twitterのトレンド1位になった日", date: "2019-06-02" },
      { id: "m142", text: "センター試験　英語リスニングの最初の問題で謎の野菜・果物のキャラクターイラストが登場", date: "2019-01-19" },
      { id: "m143", text: "Twitterが「お気に入り（ふぁぼ）」を「いいね」に変更", date: "2015-11-04" },
      { id: "m144", text: "弁護士・政治家の橋下徹氏(の娘)がTwitterに「スマイルプリキュア」と投稿", date: "2013-06-01" },
      { id: "m145", text: "どん兵衛がゲーム『ファイナルファンタジー』とコラボしたCMが放送開始。セフィロスどんぎつねが登場", date: "2024-02-28" },
      { id: "m146", text: "「でも ただのリトライじゃねぇぞ 何度でも心の強さで立ち上がり前に進む ド級のリトライ ドリトライだ!」(週刊少年ジャンプ　漫画『ドリトライ』第17話公開日)", date: "2023-09-04" },
      { id: "m147", text: "声優の竹達彩奈氏がTwitterに「や、おっぱいは揺れてないからね（笑）」と投稿", date: "2012-01-25" },
      { id: "m148", text: "前澤友作氏がTwitter上で100人に100万円ずつ総額1億円をプレゼントするRTキャンペーンを投稿", date: "2019-01-05" },
      { id: "m149", text: "漫画『ぷにるはかわいいスライム』が連載開始", date: "2022-03-15" },
      { id: "m150", text: "漫画家・冨樫義博氏のTwitterアカウントが開設", date: "2022-05-24" },
      { id: "m151", text: "アニメ『ぼっち・ざ・ろっく！』第1話初回放送日[24:00放送]", date: "2022-10-08" },
      { id: "m152", text: "DLsiteにて音声作品『ダウナー系お姉さんに毎日カスの嘘を流し込まれる音声』が販売開始", date: "2023-12-15" },
      { id: "m153", text: "Twitterにて「月曜が近いよbot」が運用開始(同アカウントにおけるMAD「月曜が近いよ」の初投稿日)", date: "2024-02-18" },
      { id: "m154", text: "Twitterにて「お嬢様ずんだもん」ブームの起点となったツイートが投稿", date: "2024-03-21" },
      { id: "m155", text: "アニメ映画『僕のヒーローアカデミア THE MOVIE ユアネクスト』公開日(この1~2か月前より予告のあらすじ文や敵キャラクターのセリフが「ダークマイト構文」として流行)", date: "2024-08-02" },
      { id: "m156", text: "アニメ映画『名探偵コナン ゼロの執行人』公開日(本作の主要キャラクターである安室透を「100憶の男」にしようというムーブメントが巻き起こる)", date: "2018-04-13" },
      { id: "m157", text: "偽中国語専門の掲示板「対多」がリリース", date: "2024-12-10" },
      { id: "m158", text: "オリンピック閉会式　安倍首相(当時)がマリオのコスプレをして登場", date: "2016-08-21" },
      { id: "m159", text: "Twitterに「お前それ次やったらマジで〝これ〟だからな(パイ〇リのジェスチャー)」の元ネタツイートが投稿", date: "2025-03-04" },
      { id: "m160", text: "ゲーム『ポケットモンスター スカーレット・バイオレット』の情報が初公開された日。(その後、新ポケモンに対する願望の構文「ニャオハ立つな」が流行)", date: "2022-02-27" },
      { id: "m161", text: "アニメ『逃げ上手の若君』第1話初回放送(「こら、死んだらどうする」のシーンが話題に)", date: "2024-07-06" },
      { id: "m162", text: "お笑い芸人・松本人志氏がTwitterに「後輩芸人達は不安よな。松本 動きます。」と投稿", date: "2019-07-20" },
      { id: "m163", text: "Instagramに「うちのお風呂…一年半、お湯替えてません！マコモ湯って知っていますか？」の動画が投稿", date: "2024-12-18" },
      { id: "m164", text: "ある通販番組での「水素の音」発言が話題に(動画に出演していた販売士のタイガー尾藤氏がこの流行を受けて8年ぶりにTwitterを再開した日)", date: "2018-04-06" },
      { id: "m165", text: "動画『てんどんまん ソロ』 が流行(Twitterアカウント「良いサムネとタイトル」が2013年投稿の当動画を取り上げた日)", date: "2021-04-30" },
      { id: "m166", text: "HoneyWorks 楽曲『可愛くてごめん』Youtubeならびにniconicoで公開", date: "2022-11-18" },
      { id: "m167", text: "クイズメーカーにて「SCPかボーボボかクイズ」が公開", date: "2020-12-12" },
      { id: "m168", text: "クイズメーカーの投稿「ちいかわか米津玄師か当てるクイズ」が話題に(米津玄師氏がTwitterで反応した日)", date: "2022-07-12" },
      { id: "m169", text: "明治の企画「きのこの山・たけのこの里　国民総選挙２０●●」に関連して、元レスリング選手の吉田沙保里氏がたけのこの里を持っている画像をTwitterに投稿", date: "2018-02-28" },
      { id: "m170", text: "アニメ『機動戦士ガンダム　水星の魔女』第6話初回放送(最後のシーンがそれ自体衝撃的であったことに加え、当時のコラボ商品「エアリアル 直火で炙った焼きとうもろこし味」とリンクしているとして話題に)", date: "2022-11-06" },
      { id: "m171", text: "Nintendo DirectでNintendo Switch2の情報やローンチタイトルが紹介された日(中でも、ゲーム『マリオカート ワールド』の紹介動画の中で電線の上を走るウシの映像が話題に)", date: "2025-04-02" },
      { id: "m172", text: "サイバー攻撃を受け2か月近くサービスを停止していたニコニコ動画がサービスを再開", date: "2024-08-05" },
      { id: "m173", text: "アニメ『ダイナミックコード』第4話初回放送[TBSで25:58放送](謎の構造をしたY字路が登場し、「Why字路」と呼ばれるように)", date: "2017-10-26" },
      { id: "m174", text: "TV番組『鉄腕DASH!』内で「まな板にしようぜ!」のシーンが放送", date: "2014-03-16" },
      { id: "m175", text: "健康骨氏がMAD動画『吉良吉影がごちうさのココアさんをアフレコしたようです 第１羽』をniconicoに投稿", date: "2016-10-08" },
      { id: "m176", text: "さの氏が動画『おどる紲星あかり　BB素材+使用例』をniconicoに投稿", date: "2022-03-19" },
      { id: "m177", text: "Appleが従来の製品からデザインを一新したMac Proを発表(日本時間)。その外見が「おろし金」のようだと話題に", date: "2019-06-04" },
      { id: "m178", text: "TV番組『人志松本の酒のツマミになる話』内で、手元のタオルを褒めるように言われたアンミカ氏が「白って200色あんねん」と発言", date: "2021-08-20" },
      { id: "m179", text: "ゲーム『妖怪惑星クラリス』サービス開始(カオスなキャラクターデザインやキャラクター名・フレーバーテキストをTwitterのフォロワーから募集する運営手法などで当時話題に)", date: "2017-12-10" },
      { id: "m180", text: "ディスカウントストア「ドン・キホーテ」がTwitterで公式マスコットキャラクターを「ドンペン」から「ド情ちゃん」に変更すると発表(その後即日撤回)", date: "2022-12-16" },
      { id: "m181", text: "ゲーム『カイジ -闇の黙示録-』サービス開始(あまりの低クオリティにネットをざわざわさせた)", date: "2022-01-20" },
      { id: "m182", text: "ゲーム『どうぶつタワーバトル(iOS/Android版)』サービス開始", date: "2017-03-31" },
      { id: "m183", text: "FIFAワールドカップ 日本対スペイン戦にて、「三笘の1mm」のアシストから決勝点に繋がり日本が勝利(日本時間)", date: "2022-12-02" },
      { id: "m184", text: "Twitterにてホカホカ通信氏がオランダにあるアザラシの保護施設「ピーテルブーレンアザラシセンター」を紹介。「アザラシ幼稚園」としてブームとなる", date: "2024-08-01" },
      { id: "m185", text: "ペプシがTwitterに「クールポコ。_高解像度の裏側_シールなし.jpeg」を投稿", date: "2023-06-13" },
      { id: "m186", text: "こっちのけんと 楽曲『はいよろこんで』リリース", date: "2024-05-27" },
      { id: "m187", text: "フランスの研究者マーク・アントワン・ファルダン氏が「猫は固体かつ液体の両方になれるのか？」の研究でイグノーベル賞を受賞(日本時間)", date: "2017-09-16" },
      { id: "m188", text: "ゲーム『ファイナルソード』Nintendo Switchで配信開始(尚著作権違反のため4日後に配信停止)", date: "2020-07-02" },
      { id: "m189", text: "Twitterのロゴが一時的に「柴犬の画像」になる", date: "2023-04-04" },
      { id: "m190", text: "闘病の末22歳で亡くなられたなかやま氏が死去2日後にTwitterの予約投稿で「グエー死んだンゴ」と投稿", date: "2025-10-14" },
      { id: "m191", text: "アニメ『呪術廻戦』第48話初回放送日[24:26放送](前髪をかき上げながら相手をタコ殴りにするアニオリシーンが話題になり、「ドブカスラッシュ」と呼ばれるように)", date: "2026-01-08" },
      { id: "m192", text: "ポケモンセンターオンラインにて等身大サーナイトのぬいぐるみが発売", date: "2025-02-06" },
      { id: "m193", text: "ニュース番組『スーパーJチャンネル』の大雪に関する報道の中で、翌日の電車運行についての小田急電鉄のコメント「明日のことはとても考えられる状況にない」が放送", date: "2018-01-22" },
      { id: "m194", text: "KOTOKO 楽曲『INTERNET YAMERO』リリース", date: "2023-03-17" },
      { id: "m195", text: "透明飲料ブーム(『コカ・コーラ クリア』発売日)", date: "2018-06-11" },
      { id: "m196", text: "アニメ映画『劇場版「鬼滅の刃」無限城編 第一章 猗窩座再来』公開", date: "2025-07-18" },
      { id: "m197", text: "クリプトン・フューチャー・メディアから『初音ミク』が初めて発売", date: "2007-08-31" },
      { id: "m198", text: "アニメ『けいおん！』第1話初回放送", date: "2009-04-03" },
      { id: "m199", text: "ハリウッド映画『ソニック・ザ・ムービー』のトレーラー一般公開日(実写ソニックの容姿に批判の声が集まり、数か月後にデザインが変更された)", date: "2019-04-30" },
      { id: "m200", text: "ゲーム『ウマ娘 プリティーダービー』サービス開始", date: "2021-02-24" },
      { id: "m201", text: "新垣結衣氏と星野源氏が結婚を発表", date: "2021-05-19" },
      { id: "m202", text: "ゲーム『Pokémon GO』日本でサービス開始", date: "2016-07-22" },
      { id: "m203", text: "アニメ映画『プロメア』公開", date: "2019-05-24" },
      { id: "m204", text: "「100日間生きたワニ」のアニメ映画版が公開", date: "2021-07-09" },
      { id: "m205", text: "これまで「NX」と呼称されていた任天堂ゲーム機の情報が「Nintendo Switch」の名称で初公開", date: "2016-10-20" },
      { id: "m206", text: "ポケモンと初音ミクのコラボプロジェクト『ポケモン feat. 初音ミク Project VOLTAGE 18 Types/Songs(通称ポケミク)』が初公開", date: "2023-08-31" },
      { id: "m207", text: "Twitterに「PS5がグルメスパイザーたったの23個分！？」という内容のツイートが投稿(グルメスパイザーブームのきっかけとされる)", date: "2020-09-17" },
      { id: "m208", text: "『鬼滅の刃 DX日輪刀』発売日(竈門炭治郎の刀を模したシリーズ最初の商品)", date: "2020-10-31" },
      { id: "m209", text: "料理研究家リュウジ氏がTwitterで公開したレシピに対する引用リツイートで、鍋から大きくはみ出たキャベツの画像と共に「リュウジ、信じてるからな」のコメントが投稿", date: "2025-11-26" },
      { id: "m210", text: "サイコロを振り＂特殊な役＂を出すことを目指すゲーム『NKODICE』がSteamで発売", date: "2021-05-29" },
      { id: "m211", text: "ゲーム『ガンダムトライヴ』公式Twitterが「9999無量大数ダメージロゴ」を配布", date: "2024-03-29" },
      { id: "m212", text: "ゲーム『ホグワーツ・レガシー』発売に関連して、「薩摩ホグワーツ」が話題に(松永マグロ氏がTwitterに関連する内容を複数投稿していた中で、特に3万RT超えとなった「エ゛クズベリア゛ア゛ア゛ーーーーッ！！！！」から始まるツイートが投稿された日)", date: "2023-02-14" },
      { id: "m213", text: "映画『RRR』日本で公開", date: "2022-10-21" },
      { id: "m214", text: "ユニバーサル・スタジオ・ジャパン『スーパー・ニンテンドー・ワールド』グランドオープン", date: "2021-03-18" },
      { id: "m215", text: "インターネット掲示板「2ちゃんねる」が「5ちゃんねる」に名称変更", date: "2017-10-01" },
      { id: "m216", text: "メンフクロウのヒナが地面を必死に走る写真が大ブームとなり、「エッホエッホ」が初めてTwitterトレンド1位に", date: "2025-02-25" },
      { id: "m217", text: "弌誠氏のMV『モエチャッカファイア』がYoutubeに投稿", date: "2024-07-19" },
      { id: "m218", text: "niconicoに動画『音割れポッターBB』が投稿", date: "2018-03-28" },
      { id: "m219", text: "こっぴー氏がTwitterに「UNIで使用キャラに迷っている人向けの動画ですゆ」という内容で映画『IT』の嘘字幕動画を投稿(以降「ペニーワイズがオススメするシリーズ」が流行)", date: "2017-11-15" },
      { id: "m220", text: "YouTubeチャンネル「終わった人」が、ホラー作家・雨穴氏『変な家』シリーズのパロディ動画『察しの悪い雨穴』を投稿", date: "2024-03-05" },
    ],
  },
};


// ====== 難易度定義 ======
const difficulty = {
  free:   { label: "フリー（制限なし）", minDays: 0,   maxDays: Infinity },
  easy:   { label: "かんたん（1年以上）", minDays: 365, maxDays: Infinity },
  normal: { label: "ふつう（4か月〜1年）", minDays: 120, maxDays: 365 },
  hard:   { label: "むずかしい（4か月以内）", minDays: 0,   maxDays: 120 },
};

// ====== 状態 ======
let modeKey = null;
let diffKey = null;
let events = [];
let correct = 0;
let wrong = 0;
let currentPair = null;
let locked = false;      // 回答済みかどうか
let canNext = false;    // Enterで次へ進めるか


// ====== 出題の偏り防止（直近3問に出さない） ======
// 現在表示されたA/Bのうち、ランダムに1つを「次の3問に出さない」対象にする
const BAN_WINDOW = 3;
let recentBanIds = []; // 先頭が最も古い

function isBanned(eventId) {
  return recentBanIds.includes(eventId);
}

function registerRandomBanFromCurrentPair() {
  if (!currentPair) return;
  const chosen = Math.random() < 0.5 ? currentPair.a : currentPair.b;
  recentBanIds.push(chosen.id);
  if (recentBanIds.length > BAN_WINDOW) recentBanIds.shift();
}
// ====== 要素 ======
const modeScreen = document.getElementById("modeScreen");
const gameScreen = document.getElementById("gameScreen");
const modeLabel = document.getElementById("modeLabel");
const diffLabel = document.getElementById("diffLabel");

const elA = document.getElementById("a");
const elB = document.getElementById("b");
const elResult = document.getElementById("result");
const elWarning = document.getElementById("warning");
const elCorrect = document.getElementById("correct");
const elWrong = document.getElementById("wrong");

// ====== 日付ユーティリティ ======
const DAY_MS = 24 * 60 * 60 * 1000;

function toDate(s) {
  return new Date(`${s}T00:00:00Z`);
}

function diffDays(a, b) {
  return Math.abs(Math.round((toDate(a) - toDate(b)) / DAY_MS));
}

// ====== 出題NGの組み合わせ（同じ問題でA/Bとして出さないペア） ======
const forbiddenPairList = {
  meme: [
//103:Switch 104:Switch2 128:ニコニコ 197:初音ミク
    ["m114", "m137"], 
    ["m1", "m17"],
    ["m27", "m72"],
    ["m82", "m132"],
    ["m15", "m59"],
    ["m127", "m128"],
    ["m103", "m104"],
    ["m54", "m204"],
    ["m128", "m172"],
    ["m22", "m84"],
    ["m103", "m107"],
    ["m104", "m107"],
    ["m103", "m134"],
    ["m103", "m95"],
    ["m104", "m134"],
    ["m95", "m103"],
    ["m95", "m104"],
    ["m18", "m160"],
    ["m6", "m27"],
    ["m44", "m45"],
    ["m45", "m100"],
    ["m44", "m100"],
    ["m103", "m205"],
    ["m103", "m188"],
    ["m103", "m171"],
    ["m104", "m205"],
    ["m104", "m188"],
    ["m104", "m171"],
    ["m103", "m160"],
    ["m104", "m160"],
    ["m123", "m191"],
    ["m121", "m175"],
    ["m125", "m112"],
    ["m68", "m170"],
    ["m103", "m56"],
    ["m104", "m56"],
    ["m19", "m114"],
    ["m103", "m16"],
    ["m128", "m10"],
    ["m128", "m11"],
    ["m128", "m26"],
    ["m128", "m33"],
    ["m128", "m47"],
    ["m128", "m50"],
    ["m128", "m90"],
    ["m128", "m105"],
    ["m128", "m113"],
    ["m128", "m115"],
    ["m128", "m127"],
    ["m128", "m166"],
    ["m128", "m172"],
    ["m128", "m175"],
    ["m128", "m176"],
    ["m128", "m218"],
    ["m197", "m11"],
    ["m197", "m35"],
    ["m197", "m36"],
    ["m197", "m37"],
    ["m197", "m47"],
    ["m197", "m90"],
    ["m197", "m98"],
    ["m197", "m99"],
    ["m197", "m101"],
    ["m197", "m102"],
    ["m197", "m105"],
    ["m197", "m113"],
    ["m197", "m154"],
    ["m197", "m176"],
    ["m197", "m206"],

    ["m6", "m196"],
    ["m103", "m205"],
    ["m104", "m205"],
    ["m97", "m160"],
  ],
};

function pairKey(id1, id2) {
  return id1 < id2 ? `${id1}|${id2}` : `${id2}|${id1}`;
}

const forbiddenPairSets = Object.fromEntries(
  Object.entries(forbiddenPairList).map(([mode, list]) => [
    mode,
    new Set(list.map(([a, b]) => pairKey(a, b))),
  ])
);

function isForbiddenPair(id1, id2) {
  const set = forbiddenPairSets[modeKey];
  if (!set) return false;
  return set.has(pairKey(id1, id2));
}


// ====== 出題 ======
function pickTwoDistinctWithDifficulty(useBans = true) {
  const { minDays, maxDays } = difficulty[diffKey];
  const MAX_TRIES = 600;

  for (let t = 0; t < MAX_TRIES; t++) {
    const i = Math.floor(Math.random() * events.length);
    let j = Math.floor(Math.random() * events.length);
    while (j === i) j = Math.floor(Math.random() * events.length);

    const a = events[i];
    const b = events[j];

    // この2つの組み合わせは出題しない
    if (isForbiddenPair(a.id, b.id)) continue;

    // 直近BANの対象は避ける（useBans=false なら無視）
    if (useBans) {
      if (isBanned(a.id) || isBanned(b.id)) continue;
    }

    if (a.date === b.date) continue;

    const d = diffDays(a.date, b.date);
    if (d >= minDays && d <= maxDays) {
      return { a, b, d };
    }
  }
  return null;
}

// A が新しいか？

function isALater() {
  return toDate(currentPair.a.date) > toDate(currentPair.b.date);
}

function renderNewQuestion() {
  locked = false;
  canNext = false;
  elResult.textContent = "";
  elWarning.textContent = "";
  elA.disabled = false;
  elB.disabled = false;

// 直近BAN（次の3問に出さない）を考慮して出題
let picked = pickTwoDistinctWithDifficulty(true);

// BANが厳しすぎて出題できない場合は、BAN無視で出題しつつ警告だけ出す
if (!picked) {
  picked = pickTwoDistinctWithDifficulty(false);
  if (picked) {
    elWarning.textContent = "⚠️ 直近3問BANの条件が厳しすぎたため、この問題は例外的にBANを無視して出題しました。";
  }
}
  if (!picked) {
    elA.innerHTML = `<b>A</b><br>出題できません`;
    elB.innerHTML = `<b>B</b><br>データ不足`;
    elA.disabled = true;
    elB.disabled = true;
    currentPair = null;
    return;
  }

  currentPair = picked;

  // A/Bのどちらか1つをランダムにBAN登録（次の3問に出さない）
  registerRandomBanFromCurrentPair();

  elA.innerHTML = `<b>A</b><br>${currentPair.a.text}`;
  elB.innerHTML = `<b>B</b><br>${currentPair.b.text}`;
}

// ====== 回答 ======
function answer(choice) {
  if (locked || !currentPair) return;

  locked = true;
  canNext = true;
  elA.disabled = true;
  elB.disabled = true;

  const aLater = isALater(); // Aが新しい？
  const userIsRight =
    (choice === "a" && aLater) || (choice === "b" && !aLater);

  const correctLetter = aLater ? "A" : "B";

  if (userIsRight) {
    correct++;
    elResult.textContent =
      `✅ 正解！ 新しい方は「${correctLetter}」 ` +
      `日付差：${currentPair.d}日（A:${currentPair.a.date} / B:${currentPair.b.date}）`;
  } else {
    wrong++;
    elResult.textContent =
      `❌ 不正解… 正解は「${correctLetter}」（新しい方） ` +
      `日付差：${currentPair.d}日（A:${currentPair.a.date} / B:${currentPair.b.date}）`;
  }

  elCorrect.textContent = String(correct);
  elWrong.textContent = String(wrong);
}

// ====== スコア ======
function resetScore() {
  correct = 0;
  wrong = 0;
  elCorrect.textContent = "0";
  elWrong.textContent = "0";
}

// ====== 画面切替 ======
function startMode(mKey, dKey) {
  modeKey = mKey;
  diffKey = dKey;
  events = datasets[mKey].events;

  //modeLabel.textContent = datasets[mKey].label;
  diffLabel.textContent = difficulty[dKey].label;

  resetScore();
  recentBanIds = [];
  modeScreen.style.display = "none";
  gameScreen.style.display = "block";
  renderNewQuestion();
}

function backToMode() {
  modeScreen.style.display = "block";
  gameScreen.style.display = "none";
  currentPair = null;
}

// ====== マウス操作 ======
elA.addEventListener("click", () => answer("a"));
elB.addEventListener("click", () => answer("b"));
document.getElementById("next").addEventListener("click", renderNewQuestion);
document.getElementById("reset").addEventListener("click", () => {
  resetScore();
  recentBanIds = [];
  renderNewQuestion();
});
document.getElementById("backToMode").addEventListener("click", backToMode);

document.querySelectorAll("#modeScreen button[data-mode]").forEach(btn => {
  btn.addEventListener("click", () => {
    startMode(
      btn.getAttribute("data-mode"),
      btn.getAttribute("data-diff")
    );
  });
});

// ====== キーボード操作（PC用） ======
document.addEventListener("keydown", (e) => {
  if (modeScreen.style.display !== "none") return;

  if (e.key === "a" || e.key === "A") {
    answer("a");
  } else if (e.key === "b" || e.key === "B") {
    answer("b");
  } else if (e.key === "Enter") {
    if (canNext) renderNewQuestion();
  } else if (e.key === "Escape") {
    backToMode();
  }
});

// ====== X(Twitter)に結果投稿 ======
function buildResultTextForX() {
    const diff = diffLabel.textContent || "";
    const total = correct + wrong;

    // 例：お好みで絵文字/改行/ハッシュタグは調整OK
    const lines = [
        "「ドッチアト？」をプレーしました",
        `難易度：${diff}`,
        `問題数：${total}（正解${correct}／不正解${wrong}）`,
    ];

    // 公開URLがある場合は末尾に付ける（ローカルfile://だと微妙なので http(s) の時だけ）
    if (location.protocol === "http:" || location.protocol === "https:") {
        lines.push(location.href);
    }

    lines.push("#ドッチアト");
    return lines.join("\n");
}

function openXIntent(text) {
  const url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
  window.open(url, "_blank", "noopener,noreferrer");
}

function isMobileLike() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

async function shareToX() {
  const text = buildResultTextForX();

  // PCは intent を優先（Windows共有が出るのを避ける）
  if (!isMobileLike()) {
    openXIntent(text);
    return;
  }

  // モバイルは共有→ダメなら intent
  if (navigator.share) {
    try {
      await navigator.share({ text });
      return;
    } catch (e) {
      openXIntent(text);
      return;
    }
  }

  openXIntent(text);
}

const shareBtn = document.getElementById("shareX");
if (shareBtn) shareBtn.addEventListener("click", shareToX);

// ===== 注意事項モーダル =====
const openNoticeBtn = document.getElementById("openNotice");
const closeNoticeBtn = document.getElementById("closeNotice");
const noticeModal = document.getElementById("noticeModal");

if (openNoticeBtn && closeNoticeBtn && noticeModal) {
  openNoticeBtn.addEventListener("click", () => {
    noticeModal.classList.remove("hidden");
  });

  closeNoticeBtn.addEventListener("click", () => {
    noticeModal.classList.add("hidden");
  });

  // 背景クリックで閉じる
  noticeModal.addEventListener("click", (e) => {
    if (e.target === noticeModal) {
      noticeModal.classList.add("hidden");
    }
  });
}


