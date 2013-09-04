var testTable = [['a', 'あ', 'ア'], ['i', 'い', 'イ'], ['u', 'う', 'ウ'], ['e', 'え', 'エ'], ['o', 'お', 'オ'], ['yi', 'い', 'イ'], ['wu', 'う', 'ウ'], ['whu', 'う', 'ウ'], ['vu', 'ヴ', 'ヴ'], ['li', 'ぃ', 'ィ'], ['lu', 'ぅ', 'ゥ'], ['le', 'ぇ', 'ェ'], ['lo', 'ぉ', 'ォ'], ['xa', 'ぁ', 'ァ'], ['xi', 'ぃ', 'ィ'], ['xu', 'ぅ', 'ゥ'], ['xe', 'ぇ', 'ェ'], ['xo', 'ぉ', 'ォ'], ['lyi', 'ぃ', 'ィ'], ['xyi', 'ぃ', 'ィ'], ['lye', 'ぇ', 'ェ'], ['xye', 'ぇ', 'ェ'], ['ye', 'いぇ', 'イェ'], ['wha', 'うぁ', 'ウァ'], ['whi', 'うぃ', 'ウィ'], ['whe', 'うぇ', 'ウェ'], ['who', 'うぉ', 'ウォ'], ['wi', 'うぃ', 'ウィ'], ['we', 'うぇ', 'ウェ'], ['va', 'ヴぁ', 'ヴァ'], ['vi', 'ヴィ', 'ヴぃ'], ['ve', 'ヴぇ', 'ヴェ'], ['vo', 'ヴぉ', 'ヴォ'], ['vyi', 'ヴぃ', 'ヴィ'], ['vye', 'ヴぇ', 'ヴェ'], ['vya', 'ヴゃ', 'ヴャ'], ['vyu', 'ヴゅ', 'ヴュ'], ['vyo', 'ヴょ', 'ヴョ'], ['ka', 'か', 'カ'], ['ki', 'き', 'キ'], ['ku', 'く', 'ク'], ['ke', 'け', 'ケ'], ['ko', 'こ', 'コ'], ['ca', 'か', 'カ'], ['cu', 'く', 'ク'], ['co', 'こ', 'コ'], ['lka', 'ヵ', 'ヵ'], ['lke', 'ヶ', 'ヶ'], ['xka', 'ヵ', 'ヵ'], ['xke', 'ヶ', 'ヶ'], ['kya', 'きゃ', 'キャ'], ['kyi', 'きぃ', 'キィ'], ['kyu', 'きゅ', 'キュ'], ['kye', 'きぇ', 'キェ'], ['kyo', 'きょ', 'キョ'], ['qya', 'くゃ', 'クャ'], ['qyu', 'くゅ', 'クュ'], ['qyo', 'くょ', 'クョ'], ['qwa', 'くぁ', 'クァ'], ['qwi', 'くぃ', 'クィ'], ['qwu', 'くぅ', 'クゥ'], ['qwe', 'くぇ', 'クェ'], ['qwo', 'くぉ', 'クォ'], ['qa', 'くぁ', 'クァ'], ['qi', 'くぃ', 'クィ'], ['qe', 'くぇ', 'クェ'], ['qo', 'くぉ', 'クォ'], ['kwa', 'くぁ', 'クァ'], ['qyi', 'くぃ', 'クィ'], ['qye', 'くぇ', 'クェ'], ['ga', 'が', 'ガ'], ['gi', 'ぎ', 'ギ'], ['gu', 'ぐ', 'グ'], ['ge', 'げ', 'ゲ'], ['go', 'ご', 'ゴ'], ['gya', 'ぎゃ', 'ギャ'], ['gyi', 'ぎぃ', 'ギィ'], ['gyu', 'ぎゅ', 'ギュ'], ['gye', 'ぎぇ', 'ギェ'], ['gyo', 'ぎょ', 'ギョ'], ['gwa', 'ぐぁ', 'グァ'], ['gwi', 'ぐぃ', 'グィ'], ['gwu', 'ぐぅ', 'グゥ'], ['gwe', 'ぐぇ', 'グェ'], ['gwo', 'ぐぉ', 'グォ'], ['sa', 'さ', 'サ'], ['si', 'し', 'シ'], ['su', 'す', 'ス'], ['se', 'せ', 'セ'], ['so', 'そ', 'ソ'], ['ci', 'し', 'シ'], ['ce', 'せ', 'セ'], ['shi', 'し', 'シ'], ['za', 'ざ', 'ザ'], ['zi', 'じ', 'ジ'], ['zu', 'ず', 'ズ'], ['ze', 'ぜ', 'ゼ'], ['zo', 'ぞ', 'ゾ'], ['ji', 'じ', 'ジ'], ['sya', 'しゃ', 'シャ'], ['syi', 'しぃ', 'シィ'], ['syu', 'しゅ', 'シュ'], ['sye', 'しぇ', 'シェ'], ['syo', 'しょ', 'ショ'], ['sha', 'しゃ', 'シャ'], ['shu', 'しゅ', 'シュ'], ['she', 'しぇ', 'シェ'], ['sho', 'しょ', 'ショ'], ['swa', 'すぁ', 'スァ'], ['swi', 'すぃ', 'スィ'], ['swu', 'すぅ', 'スゥ'], ['swe', 'すぇ', 'スェ'], ['swo', 'すぉ', 'スォ'], ['zya', 'じゃ', 'ジャ'], ['zyi', 'じぃ', 'ジィ'], ['zyu', 'じゅ', 'ジュ'], ['zye', 'じぇ', 'ジェ'], ['zyo', 'じょ', 'ジョ'], ['ja', 'じゃ', 'ジャ'], ['ju', 'じゅ', 'ジュ'], ['je', 'じぇ', 'ジェ'], ['jo', 'じょ', 'ジョ'], ['jya', 'じゃ', 'ジャ'], ['jyi', 'じぃ', 'ジィ'], ['jyu', 'じゅ', 'ジュ'], ['jye', 'じぇ', 'ジェ'], ['jyo', 'じょ', 'ジョ'], ['ta', 'た', 'タ'], ['ti', 'ち', 'チ'], ['tu', 'つ', 'ツ'], ['te', 'て', 'テ'], ['to', 'と', 'ト'], ['chi', 'ち', 'チ'], ['tsu', 'つ', 'ツ'], ['ltu', 'っ', 'ッ'], ['xtu', 'っ', 'ッ'], ['ltsu', 'っ', 'ッ'], ['tya', 'ちゃ', 'チャ'], ['tyi', 'ちぃ', 'チィ'], ['tyu', 'ちゅ', 'チュ'], ['tye', 'ちぇ', 'チェ'], ['tyo', 'ちょ', 'チョ'], ['cha', 'ちゃ', 'チャ'], ['chu', 'ちゅ', 'チュ'], ['che', 'ちぇ', 'チェ'], ['cho', 'ちょ', 'チョ'], ['cya', 'ちゃ', 'チャ'], ['cyi', 'ちぃ', 'チィ'], ['cyu', 'ちゅ', 'チュ'], ['cye', 'ちぇ', 'チェ'], ['cyo', 'ちょ', 'チョ'], ['tsa', 'つぁ', 'ツァ'], ['tsi', 'つぃ', 'ツィ'], ['tse', 'つぇ', 'ツェ'], ['tso', 'つお', 'ツォ'], ['tha', 'てゃ', 'テャ'], ['thi', 'てぃ', 'ティ'], ['thu', 'てゅ', 'テュ'], ['the', 'てぇ', 'テェ'], ['tho', 'てょ', 'テョ'], ['twa', 'とぁ', 'トァ'], ['twi', 'とぃ', 'トィ'], ['twu', 'とぅ', 'トゥ'], ['twe', 'とぇ', 'トェ'], ['two', 'とぉ', 'トォ'], ['da', 'だ', 'ダ'], ['di', 'ぢ', 'ヂ'], ['du', 'づ', 'ヅ'], ['de', 'で', 'デ'], ['do', 'ど', 'ド'], ['dya', 'ぢゃ', 'ヂャ'], ['dyi', 'ぢぃ', 'ヂィ'], ['dyu', 'ぢゅ', 'ヂュ'], ['dye', 'ぢぇ', 'ヂェ'], ['dyo', 'ぢょ', 'ヂョ'], ['dha', 'でゃ', 'デャ'], ['dhi', 'でぃ', 'ディ'], ['dhu', 'でゅ', 'デュ'], ['dhe', 'でぇ', 'デェ'], ['dho', 'でょ', 'デョ'], ['dwa', 'どぁ', 'ドァ'], ['dwi', 'どぃ', 'ドィ'], ['dwu', 'どぅ', 'ドゥ'], ['dwe', 'どぇ', 'ドエ'], ['dwo', 'どぉ', 'ドォ'], ['na', 'な', 'ナ'], ['ni', 'に', 'ニ'], ['nu', 'ぬ', 'ヌ'], ['ne', 'ね', 'ネ'], ['no', 'の', 'ノ'], ['nya', 'にゃ', 'ニャ'], ['nyi', 'にぃ', 'ニィ'], ['nyu', 'にゅ', 'ニュ'], ['nye', 'にぇ', 'ニェ'], ['nyo', 'にょ', 'ニョ'], ['ha', 'は', 'ハ'], ['hi', 'ひ', 'ヒ'], ['hu', 'ふ', 'フ'], ['he', 'へ', 'ヘ'], ['ho', 'ほ', 'ホ'], ['fu', 'ふ', 'フ'], ['hya', 'ひゃ', 'ヒャ'], ['hyi', 'ひぃ', 'ヒィ'], ['hyu', 'ひゅ', 'ヒュ'], ['hye', 'ひぇ', 'ヒェ'], ['hyo', 'ひょ', 'ヒョ'], ['fya', 'ふゃ', 'フャ'], ['fyu', 'ふゅ', 'フュ'], ['fyo', 'ふょ', 'フョ'], ['fwa', 'ふぁ', 'ファ'], ['fwi', 'ふぃ', 'フィ'], ['fwu', 'ふぅ', 'フゥ'], ['fwe', 'ふぇ', 'フェ'], ['fwo', 'ふぉ', 'フォ'], ['fa', 'ふぁ', 'ファ'], ['fi', 'ふぃ', 'ファ'], ['fe', 'ふぇ', 'フェ'], ['fo', 'ふぉ', 'フォ'], ['fyi', 'ふぃ', 'フィ'], ['fye', 'ひぇ', 'フェ'], ['ba', 'ば', 'バ'], ['bi', 'び', 'ビ'], ['bu', 'ぶ', 'ブ'], ['be', 'べ', 'ベ'], ['bo', 'ぼ', 'ボ'], ['bya', 'びゃ', 'ビャ'], ['byi', 'びぃ', 'ビィ'], ['byu', 'びゅ', 'ビュ'], ['bye', 'びぇ', 'ビェ'], ['byo', 'びょ', 'ビョ'], ['va', 'ヴぁ', 'ヴァ'], ['vi', 'ヴぃ', 'ヴィ'], ['vu', 'ヴ', 'ヴ'], ['ve', 'ヴぇ', 'ヴェ'], ['vo', 'ヴぉ', 'ヴォ'], ['vya', 'ヴゃ', 'ヴャ'], ['vyi', 'ヴぃ', 'ヴィ'], ['vyu', 'ヴゅ', 'ヴュ'], ['vye', 'ヴぇ', 'ヴェ'], ['vyo', 'ヴょ', 'ヴョ'], ['pa', 'ぱ', 'パ'], ['pi', 'ぴ', 'ピ'], ['pu', 'ぷ', 'プ'], ['pe', 'ぺ', 'ペ'], ['po', 'ぽ', 'ポ'], ['pya', 'ぴゃ', 'ピャ'], ['pyi', 'ぴぃ', 'ピィ'], ['pyu', 'ぴゅ', 'ピュ'], ['pye', 'ぴぇ', 'ピェ'], ['pyo', 'ぴょ', 'ピョ'], ['ma', 'ま', 'マ'], ['mi', 'み', 'ミ'], ['mu', 'む', 'ム'], ['me', 'め', 'メ'], ['mo', 'も', 'モ'], ['mya', 'みゃ', 'ミャ'], ['myi', 'みぃ', 'ミィ'], ['myu', 'みゅ', 'ミュ'], ['mye', 'みぇ', 'ミェ'], ['myo', 'みょ', 'ミョ'], ['ya', 'や', 'ヤ'], ['yu', 'ゆ', 'ユ'], ['yo', 'よ', 'ヨ'], ['lya', 'ゃ', 'ャ'], ['lyu', 'ゅ', 'ュ'], ['lyo', 'ょ', 'ョ'], ['xya', 'ゃ', 'ャ'], ['xyu', 'ゅ', 'ュ'], ['xyo', 'ょ', 'ョ'], ['ra', 'ら', 'ラ'], ['ri', 'り', 'リ'], ['ru', 'る', 'ル'], ['re', 'れ', 'レ'], ['ro', 'ろ', 'ロ'], ['rya', 'りゃ', 'リャ'], ['ryi', 'りぃ', 'リィ'], ['ryu', 'りゅ', 'リュ'], ['rye', 'りぇ', 'リェ'], ['ryo', 'りょ', 'リョ'], ['wa', 'わ', 'ワ'], ['wo', 'を', 'ヲ'], ['lwe', 'ゎ', 'ヮ'], ['xwa', 'ゎ', 'ヮ'], ['n', 'ん', 'ン'], ['nn', 'ん', 'ン'], ['n', 'ん', 'ン'], ['xn', 'ん', 'ン'], ['-', 'ー', 'ー'], ['.', '.', '.']];