// リズムゲームの収録曲リスト（作品データ。ここは作品ごとに書き換える場所で、
// エンジン側の部品ではない。CD 側の作品データが src/album/ にあるのと同じ考え方）。
//
// 1曲ごとに決めるもの:
// - id: 曲 ID（半角英数の短い名前。譜面・歌詞データのキーになる。公開後に変えない）
// - audioUrl / jacketUrl: 音源とジャケット。音源は制作入口で用意した唯一の
//   正規音源 MP3 192kbps（src/game/assets/track0N.mp3。CD 側プレイヤーも
//   同じ音源を src/album/assets/audio/track0N.mp3 として参照し、ビルドでは
//   内容が同一のため dist 上は1ファイルにまとまる）、ジャケットは
//   CD 側の曲ジャケット（1200×1200）のコピー。作り方は docs/PRODUCTION.md の
//   「リズムゲーム（任意モジュール）」参照
// - frameInset: ジャケット絵の四辺に焼き込まれた紙枠の幅（実画像ピクセル）。
//   演奏画面の背景では、この枠を除いた内側の絵だけを敷く。枠が無い絵は 0
// - slidePosition: メニューのカルーセルでジャケットを寄せる位置（CSS の
//   object-position）。未指定なら中央
// - accent: 曲のテーマ色（#rrggbb）。ジャケットから scripts/jacket-accent.py
//   で抜き出した（視認性のために明度・彩度を持ち上げる処理込み）
// - bonus: ボーナストラックなら true（CD 側 tracks.ts の bonus と一致）
// - album: 収録アルバム名（表示用） / genre: ジャンル（表示用）
//
// 譜面（data/charts.json）と歌詞（data/lyrics.json）は生成物なので、ここには
// 書かない。生成手順は docs/PRODUCTION.md 参照。
import track01Audio from './assets/track01.mp3';
import track01Jacket from './assets/track01.jpg';
import track02Audio from './assets/track02.mp3';
import track02Jacket from './assets/track02.jpg';
import track03Audio from './assets/track03.mp3';
import track03Jacket from './assets/track03.jpg';

export interface GameSongDef {
  id: string;
  audioUrl: string;
  jacketUrl: string;
  frameInset: number;
  slidePosition?: string;
  accent: string;
  bonus?: boolean;
  album: string;
  genre: string;
}

// NK-S010『nami／キラキラ木曽旅』の収録曲（CD 側 tracks.ts と同じ順）。
// frameInset は全曲 0: 全曲ジャケットを目視し、四辺とも紙色（R−B>22 かつ
// 85≤R≤215）・無彩色の明るい画素（min>190・spread<36）の割合を端から実測して、
// 帯状にほぼ 1.0 が続く紙枠・白枠が無いことを確かめた（実測した割合は
// track01 が全辺 0.00、track02 は空と雲の絵柄で最大 0.31 まで緩やかに増減、
// track03 は水彩の空と岩の絵柄で 0.2〜0.66 を緩やかに増減するのみで、
// 境界で急に落ちる帯は無し。2026-11-25 実測）。
export const SONG_DEFS: GameSongDef[] = [
  {
    id: 'kirakira',
    audioUrl: track01Audio,
    jacketUrl: track01Jacket,
    frameInset: 0,
    accent: '#5196d6',
    album: 'キラキラ木曽旅',
    genre: 'ポップ',
  },
  {
    id: 'tanizoko',
    audioUrl: track02Audio,
    jacketUrl: track02Jacket,
    frameInset: 0,
    accent: '#d6b251',
    album: 'キラキラ木曽旅',
    genre: 'バラード',
  },
  {
    id: 'corn',
    audioUrl: track03Audio,
    jacketUrl: track03Jacket,
    frameInset: 0,
    accent: '#d69e51',
    bonus: true,
    album: 'キラキラ木曽旅',
    genre: 'スポークン・ワード',
  },
];
