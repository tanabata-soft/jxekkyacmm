// この作品の基本情報と、裏面ノートの文章。
// エンジン（src/ のほかのファイル）は、このフォルダ（src/album/）のデータだけを差し替えれば
// 別の作品になるよう作られている。新しい作品の作り方は docs/PRODUCTION.md、
// シングルの仕様は docs/SINGLE.md を参照。

export const ALBUM: {
  title: string;
  catalog: string;
  format: string;
  layout: 'album' | 'single';
  /** 裏ジャケットに曲目リストが印刷済みなら true（裏面の重ねリストを表示しない。アルバム形態用） */
  printedBackList?: boolean;
} = {
  /** 題名（シングルでは表題曲と同名にするのが通例） */
  title: 'キラキラ木曽旅',
  /** カタログ番号（新作では NK-SNNN の連番を付番する。docs/START-HERE.md 参照） */
  catalog: 'NK-S010',
  /** 形式の呼び名 */
  format: 'デジタルシングルCD',
  /** 形: 'album'（正方形ジャケット＋ブックレット） / 'single'（短冊型ジャケット＋裏面ノート、ブックレットなし） */
  layout: 'single',
};

/** 裏ジャケット下部の表記（例: NK-S001 ／ デジタルシングルCD） */
export const FOOT_NOTE = `${ALBUM.catalog} ／ ${ALBUM.format}`;

/** 裏面ノートの本文（シングルではブックレットの代わりにジャケット裏面へ置く） */
export const NOTE: string[] = [
  '終バスを逃した昼の木曽福島から始まる、小さな旅の歌です。時刻表を逆さに持つサングラスの彼と、地図を見る私。バスは一日数えるほどしかなくても、木曽馬も、とうもろこしソフトも、御嶽山の夕日も、ちゃんと待っていてくれます。',
  'カップリング『谷底にも朝が来る』は、同じ木曽の霧の朝の歌。叫ぶ人と、黙る山と、そのあいだにいる私。谷底から見上げた空は、こんなにも近かった。表題曲の夜と対になる、朝の景色です。',
  'ボーナストラック「Thank You for the Corn」は、温泉にサングラスを忘れた彼からの英語の伝言。御嶽山への静かな感動と、とうもろこしソフトへの大きな感謝を込めた、旅の余韻の一曲です。',
];

/** ライナーノーツ（アルバム形態のブックレット冒頭。本文は NOTE と共通） */
export const LINER: readonly [string, string, string] = [NOTE[0], NOTE[1], NOTE[2]];

/** ライナーノーツの見出し（アルバム形態のブックレット冒頭2ページ。シングル形態では使わない） */
export const LINER_TITLES: readonly [string, string] = ['木曽への小さな旅', '叫ぶ人と、待つ山と'];

/** ブックレット「聴き方について」のページに置く一文（アルバム形態用） */
export const HOWTO_EXTRA = '電波の届かない場所でも聴けるよう、初回に全曲を端末へ保存します。';

/** 奥付（シングルでは裏面ノートの下部に置く） */
export const COLOPHON: string[] = [
  `『${ALBUM.title}』（全3曲／総再生時間 約8分54秒）`,
  `${ALBUM.catalog} ― ${ALBUM.format}`,
  'ボーナストラックは、Suno のリリックビデオから音声のみを収録しています。',
];
