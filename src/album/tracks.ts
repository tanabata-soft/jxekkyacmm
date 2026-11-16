// 曲目と解説（この作品のデータ）。src は歌詞データ（src/album/sync.ts）のキー。
// 並びが曲順。シングルでは1曲目が表題曲、2曲目がカップリング（docs/SINGLE.md）。
// time はプレイヤー表示（秒切り捨て）に合わせて実測で確定した（音源の実測長：211.6秒／263.3秒／59.7秒）。
import type { TrackMeta } from '../logic';

export const TRACKS: TrackMeta[] = [
  { src: 'キラキラ木曽旅', title: 'キラキラ木曽旅', genre: 'ポップ', time: '3:31', note: '終バスは、もう行った。それでも焦らない木曽の午後を、ニコラス・ケイジと木曽と私の三人で歩く、旅の表題曲。' },
  { src: '谷底にも朝が来る', title: '谷底にも朝が来る', genre: 'バラード', time: '4:23', note: '谷底の霧の中、叫ぶ人と待つ山のあいだで。朝が来ることを歌う、静かなバラード。' },
  { src: 'Thank You for the Corn', title: 'Thank You for the Corn', genre: 'スポークン・ワード', time: '0:59', bonus: true, note: '温泉にサングラスを忘れた彼からの伝言。英語の語りで綴る、木曽の旅の小さなオチ。' },
];
