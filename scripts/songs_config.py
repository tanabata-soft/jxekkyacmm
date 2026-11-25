"""作品の曲設定（NK-S010）。

単位D（生成器一本化）: 生成器本体の正はテンプレート repo
（mmishina-art/digitalcd-engine）の scripts/chartgen/ パッケージ1か所。
作品側はこの SONGS メタデータと歌詞入力（src/game/data/lyrics.json）だけを
持ち、scripts/generate-charts.py（入口ブートストラップ）がテンプレートの
chartgen を参照して生成する。曲を足すときはここに1曲分を足す。
各キーの意味はテンプレート scripts/chartgen/config.py のコメント参照。
"""

SONGS = {
    # NK-S010『nami／キラキラ木曽旅』の収録曲。音源は src/game/assets/track0N.mp3
    # （制作入口で用意した唯一の正規音源 MP3 192kbps。CD 側プレイヤーも同じ音源を共有する）。
    # FEVER（サビ）区間は、歌詞（src/album/sync.ts）の反復ブロックから決める:
    # サビの歌詞ブロックの先頭行の開始秒を開始、末尾行の歌唱が終わる頃を終了とする
    # （NK-S003 での決め方）。
    # サビは歌に合わせて主レイヤーを vocal にする（NK-S003 のオーナー指示）。
    "kirakira": {
        "title": "キラキラ木曽旅",
        "audio": "src/game/assets/track01.mp3",
        # サビ1: 58.9「Hey, hey,」〜81.1「Tonight we walk, 木曽川沿い」の歌唱終わり /
        # サビ2: 157.0「ニコラス・ケイジと 木曽と私」〜195.0「…また 明日！」の歌唱終わり
        # （132〜157秒はシンセソロで歌詞なし）
        "fever": [[58.0, 89.0], [156.0, 202.0]],
        "chart_v5": True,
        "flick": True,
        "chorus_layer": "vocal",
        "chorus_bonus": 0.5,
        # v6-5: バラードプロファイルは対象外（アップテンポなポップ。実測 BPM 151）
        "ballad": False,
    },
    "tanizoko": {
        "title": "谷底にも朝が来る",
        "audio": "src/game/assets/track02.mp3",
        # サビ1: 99.5「ニコラス・ケイジと 木曽と私 (Hallelujah!)」〜117.8「谷底にも 朝が来る」の歌唱終わり /
        # サビ2: 200.8「ニコラス・ケイジと 木曽と私」〜210.9「谷底にも 朝が来る！」の歌唱終わり
        # （223.2〜は英語アウトロ）
        "fever": [[99.0, 124.0], [200.0, 219.0]],
        "chart_v5": True,
        "flick": True,
        "chorus_layer": "vocal",
        "chorus_bonus": 0.5,
        # v6-5: バラードプロファイルを明示 ON。根拠は実測: 静かなバラードで
        # レガート歌唱のため候補ノーツが生まれにくく、v6-4 の被覆では hard で
        # 109ノーツの合成補填が必要だった（歌詞区間の空白の深刻さが集中。
        # CHART-DESIGN のバラード指定の目安 (3)(4)）。拍検出は BPM 150 と
        # 倍速側に出るため、自動判定のテンポ加点には乗らない
        "ballad": True,
    },
    "corn": {
        "title": "Thank You for the Corn",
        "audio": "src/game/assets/track03.mp3",
        # スポークン・ワード（ボーナストラック）。反復するサビは無いため、
        # クライマックスの叫び（38.0「Thank you for the corn soft-serve.」〜
        # 40.9「THANK YOU FOR THE CORN SOFT-SERVE!」の歌唱終わり）を FEVER とする
        "fever": [[36.0, 46.0]],
        "chart_v5": True,
        "flick": True,
        "chorus_layer": "vocal",
        "chorus_bonus": 0.5,
        # 同時押しの強さゲートだけを下げる（初回生成で hard のレーン0割合が
        # 0.17 と下限 0.18 を割ったための曲別調整。同時押しは左右ペアで
        # 置かれるため、レーン配分の偏りを均す方向に働く。2 では 0.175 と
        # 届かず、6 で検証通過）
        "chord_gate_drop": 6,
        # v6-5: バラードプロファイルは対象外（歌唱でなく語りの曲）
        "ballad": False,
    },
}
