/* Town layer: places where a craft or catch is actually concentrated.
   Each town links to the entries (and fish) already researched; facts live in those entries. */

const TOWNS = [];
const T = (en, ja, pref, lon, lat, line, items = [], fish = []) => TOWNS.push({ id: "t" + TOWNS.length, en, ja, pref, ll: [lon, lat], line, items, fish });

// Hokkaido
T("Hakodate", "函館", 1, 140.73, 41.77, "Ma-kombu country: Hakodate grows about 30% of Japan's kombu, and its clear shio ramen leans on kombu.", ["Ma-kombu", "Gagome kombu", "Hakodate shio ramen"]);
T("Rishiri & Rebun", "利尻・礼文", 1, 141.24, 45.18, "The islands off Wakkanai that give Kyoto its clear-dashi kombu.", ["Rishiri kombu"]);
T("Rausu", "羅臼", 1, 145.19, 44.02, "Shiretoko's cold coast: the 'king of dashi' kombu, and the place where rare immature salmon (keiji) are landed.", ["Rausu kombu"], ["sake"]);
T("Sapporo", "札幌", 1, 141.35, 43.06, "Miso ramen, the 1876 Kaitakushi brewery and the lamb grill.", ["Sapporo miso ramen", "Sapporo Beer", "Jingisukan"]);
T("Asahikawa", "旭川", 1, 142.37, 43.77, "Double soup, floating lard and low-hydration noodles.", ["Asahikawa shoyu ramen"]);
T("Muroran", "室蘭", 1, 140.97, 42.32, "Yakitori that is pork and onion, with yogarashi mustard.", ["Yakitori regional styles"]);
// Tohoku
T("Oma", "大間", 2, 140.91, 41.53, "Line-caught bluefin of the Tsugaru Strait, the most famous tuna name.", [], ["bluefin"]);
T("Hirosaki & Tsugaru", "弘前・津軽", 2, 140.46, 40.60, "Niboshi-forward ramen is the bowl of the Tsugaru region.", ["Tsugaru niboshi ramen"]);
T("Morioka", "盛岡", 3, 141.15, 39.70, "Cold noodles and jajamen; Iwate's wanko soba is the local challenge.", ["Morioka reimen & jajamen", "Wanko soba"]);
T("Kesennuma", "気仙沼", 4, 141.57, 38.90, "A big bonito port where autumn modori-gatsuo is landed.", [], ["katsuo"]);
T("Sendai", "仙台", 4, 140.87, 38.27, "Red Sendai miso, thick-sliced tongue, zunda mochi and Nikka's Miyagikyo.", ["Sendai miso", "Sendai gyutan", "Zunda mochi", "Miyagikyo", "Surimi towns: Odawara, Sendai, Tottori"]);
T("Yuzawa (Inaniwa)", "湯沢（稲庭）", 5, 140.49, 39.16, "Hand-rolled Inaniwa udon, wrapped on rods and dried.", ["Inaniwa udon"]);
T("Yokote", "横手", 5, 140.55, 39.31, "Yakitori's cousin in noodles: yakisoba with a fried egg on top.", ["Fujinomiya & Yokote yakisoba"]);
T("Yamagata city", "山形", 6, 140.33, 38.24, "The cold ramen and the summer 'dashi' relish.", ["Yamagata hiyashi ramen", "Yamagata dashi"]);
T("Nakayama", "中山町", 6, 140.28, 38.37, "Called the birthplace of imoni, from the Mogami River boatmen.", ["Imoni: Yamagata vs Miyagi"]);
T("Kitakata", "喜多方", 7, 139.88, 37.65, "Flat, curly, high-hydration noodles in clear shoyu soup.", ["Kitakata ramen"]);
// Kanto
T("Mito", "水戸", 8, 140.47, 36.37, "The famous name for natto, though not the top consumer.", ["Natto"]);
T("Nikko", "日光", 9, 139.60, 36.75, "Shaved ice from natural pond ice.", ["Nikko himuro kakigori"]);
T("Sano", "佐野", 9, 139.58, 36.31, "Bamboo-pole pressed noodles in a clear shoyu soup.", ["Sano ramen"]);
T("Utsunomiya", "宇都宮", 9, 139.88, 36.56, "Gyoza city: first in household purchase for 15 years to 2010, third in 2025.", ["Gyoza towns"]);
T("Ikaho (Shibukawa)", "伊香保", 10, 138.99, 36.49, "Mizusawa udon, made with only flour, salt and water.", ["Mizusawa udon & okkirikomi"]);
T("Noda", "野田", 12, 139.88, 35.96, "One of the two soy sauce capitals of Chiba.", ["Koikuchi (dark)"]);
T("Choshi", "銚子", 12, 140.83, 35.73, "The other soy sauce capital, at the river mouth.", ["Koikuchi (dark)"]);
T("Asakusa", "浅草", 13, 139.80, 35.71, "Nori and shoyu ramen's classic address, plus the Yagenbori shichimi.", ["Asakusa nori", "Tokyo shoyu ramen", "Shichimi: three great blends"]);
T("Tsukudajima & Tsukishima", "佃島・月島", 13, 139.78, 35.67, "Where tsukudani began, a short walk from monja street.", ["Tsukudani of Tsukudajima", "Takoyaki, Akashi-yaki & monja"]);
T("Odawara", "小田原", 14, 139.15, 35.26, "Kamaboko from washed white-fish paste.", ["Surimi towns: Odawara, Sendai, Tottori"]);
T("Sugita, Yokohama", "杉田", 14, 139.61, 35.39, "Yoshimuraya's tonkotsu-shoyu started iekei in 1974.", ["Yokohama iekei"]);
// Chubu
T("Tsubame", "燕", 15, 138.88, 37.66, "Back-fat ramen for metal-workers.", ["Tsubame-Sanjo seabura"]);
T("Nagaoka", "長岡", 15, 138.85, 37.45, "Ginger shoyu ramen, said to date from the late 1960s.", ["Tsubame-Sanjo seabura"]);
T("Himi", "氷見", 16, 136.99, 36.86, "The winter yellowtail (kan-buri) harbour.", [], ["buri"]);
T("Toyama & Jinzu River", "富山", 16, 137.21, 36.70, "Black ramen, trout sushi and the highest household kombu spend in Japan.", ["Toyama Black", "Toyama masu-zushi", "Toyama: kombu-jime & kobu-musubi"]);
T("Suzu (Noto)", "珠洲", 17, 137.26, 37.44, "Hand-worked agehama salt farms.", ["Noto agehama salt"]);
T("Kanazawa", "金沢", 17, 136.66, 36.56, "Kaga cuisine, Kaga vegetables and tea-ceremony sweets.", ["Kaga cuisine: jibu-ni & kaburazushi", "Kaga yasai", "Kanazawa higashi"]);
T("Mikuni & the Echizen coast", "三国", 18, 136.15, 36.22, "Home of Echizen crab with its yellow tag.", [], ["zuwai"]);
T("Echizen city", "越前", 18, 136.17, 35.90, "Cold soba with grated spicy daikon, since 1601.", ["Echizen oroshi soba"]);
T("Tsuruga", "敦賀", 18, 136.06, 35.65, "A Kombu Road port with hand-shaved oboro kombu.", ["Oboro & tororo kombu", "The Kombu Road"]);
T("Katsunuma", "勝沼", 19, 138.72, 35.65, "Koshu wine, the first wine GI in Japan.", ["Koshu wine"]);
T("Hakushu (Hokuto)", "白州", 19, 138.30, 35.78, "A forest distillery at about 700 m.", ["Hakushu"]);
T("Nozawa Onsen", "野沢温泉", 20, 138.44, 36.92, "Nozawana pickle, tied to turnip seed from Kyoto around 1756.", ["Nozawana-zuke"]);
T("Togakushi", "戸隠", 20, 138.08, 36.74, "Soba served in bundled 'bocchi' mouthfuls.", ["Shinshu & Togakushi soba"]);
T("Azumino", "安曇野", 20, 137.90, 36.33, "Cold spring water wasabi; Nagano leads in total wasabi.", ["Hon-wasabi"]);
T("Takayama (Hida)", "高山", 21, 137.25, 36.14, "Magnolia-leaf miso and Hida beef.", ["Hida hoba miso", "Hida beef"]);
T("Izu Peninsula", "伊豆", 22, 138.93, 34.85, "Wasabi beds and hand-gathered tengusa for tokoroten.", ["Hon-wasabi", "Izu tengusa"]);
T("Yaizu", "焼津", 22, 138.32, 34.87, "Katsuobushi's Yaizu school, the second producing region.", ["Katsuobushi"]);
T("Fujinomiya", "富士宮", 22, 138.62, 35.22, "Steamed yakisoba with niku-kasu and fish powder.", ["Fujinomiya & Yokote yakisoba"]);
T("Makinohara", "牧之原", 22, 138.22, 34.74, "Flatland deep-steamed tea.", ["Shizuoka: fukamushi & mountain tea"]);
T("Okazaki (Hatcho)", "岡崎", 23, 137.17, 34.95, "Hatcho village, where soybean miso sits under cones of river stones.", ["Hatcho miso"]);
T("Hekinan", "碧南", 23, 136.99, 34.88, "White shoyu and Mikawa mirin.", ["Shiro (white)", "Mirin"]);
T("Nagoya", "名古屋", 23, 136.91, 35.18, "Hitsumabushi, miso-katsu, Taiwan ramen and kishimen.", ["Hitsumabushi", "Tonkatsu & miso-katsu", "Taiwan ramen", "Kishimen & miso-nikomi udon"]);
// Kinki
T("Ise", "伊勢", 24, 136.71, 34.49, "Soft udon in black tamari tare, and steamed hijiki.", ["Ise udon", "Ise & Boso hijiki"]);
T("Matsusaka", "松阪", 24, 136.53, 34.58, "Beef from virgin heifers of the old Matsusaka area.", ["Matsusaka beef"]);
T("Lake Biwa", "琵琶湖", 25, 136.05, 35.30, "Funa-zushi, the ancestor of sushi, and Omi beef.", ["Funa-zushi", "Omi beef"]);
T("Kyoto (centre)", "京都", 26, 135.77, 35.01, "Kaiseki, yuba, fu, pickles and heritage vegetables.", ["Kaiseki (tea) vs kaiseki (banquet)", "Kyo-yasai", "Kyo-yuba & kyo-fu", "Kyoto tsukemono"]);
T("Fushimi", "伏見", 26, 135.76, 34.93, "Soft-water 'female sake'.", ["Fushimi (Kyoto)"]);
T("Uji", "宇治", 26, 135.80, 34.88, "Matcha from shaded tencha.", ["Uji matcha"]);
T("Taiza (Tango)", "間人", 26, 135.07, 35.70, "Premium crab landed with a green tag.", [], ["zuwai"]);
T("Osaka", "大阪", 27, 135.50, 34.69, "Takoyaki, okonomiyaki and pressed battera sushi.", ["Takoyaki, Akashi-yaki & monja", "Okonomiyaki: Hiroshima vs Osaka", "Osaka battera & hako-zushi"]);
T("Sakai", "堺", 27, 135.48, 34.57, "Kombu shavers and a Kombu Road port.", ["Oboro & tororo kombu"]);
T("Shimamoto (Yamazaki)", "山崎", 27, 135.67, 34.89, "Suntory's first malt distillery, 1923.", ["Yamazaki"]);
T("Tatsuno", "龍野", 28, 134.55, 34.85, "Where usukuchi shoyu began in 1666.", ["Usukuchi (light)"]);
T("Nada", "灘", 28, 135.27, 34.72, "Hyogo's sake district with hard Miyamizu water.", ["Nada (Hyogo)"]);
T("Akashi", "明石", 28, 135.00, 34.65, "Tamago-yaki dipped in dashi, and brand sea bream.", ["Takoyaki, Akashi-yaki & monja"], ["tai"]);
T("Sasayama", "篠山", 28, 135.22, 35.07, "Boar and miso in botan-nabe, from 15 November.", ["Botan-nabe (boar)"]);
T("Shoryakuji (Nara)", "正暦寺", 29, 135.89, 34.64, "Where the bodaimoto starter was revived in 1999.", ["Nara: birthplace of sake", "Kakinoha-zushi"]);
T("Miwa (Sakurai)", "三輪", 29, 135.85, 34.52, "Somen said to be over 1,200 years old.", ["Miwa, Ibonoito & Shodoshima somen"]);
T("Yoshino", "吉野", 29, 135.86, 34.37, "Winter-washed kudzu starch.", ["Yoshino kuzu"]);
T("Yuasa", "湯浅", 30, 135.18, 34.04, "Where shoyu is said to have begun, in 1249.", ["Yuasa: where shoyu began", "Kinzanji miso"]);
T("Minabe", "みなべ", 30, 135.34, 33.77, "Wakayama's ume heart: umeboshi and umeshu.", ["Umeboshi", "Umeshu"]);
T("Aridagawa", "有田川", 30, 135.37, 34.07, "Budo sansho country.", ["Budo sansho"]);
T("Wakayama city", "和歌山", 30, 135.17, 34.23, "The tonkotsu-shoyu chuka soba and hayazushi.", ["Wakayama chuka soba"]);
// Chugoku
T("Sakaiminato", "境港", 31, 133.23, 35.54, "San'in's Matsuba crab port.", [], ["zuwai"]);
T("Izumo", "出雲", 32, 132.75, 35.37, "Whole-kernel soba in three stacked bowls.", ["Izumo warigo soba"]);
T("Hiroshima city", "広島", 34, 132.46, 34.39, "Layered okonomiyaki.", ["Okonomiyaki: Hiroshima vs Osaka"]);
T("Saijo", "西条", 34, 132.74, 34.43, "Soft-water brewing born from Miura Senzaburo's 1887 method.", ["Saijo (Hiroshima)"]);
T("Onomichi", "尾道", 34, 133.20, 34.41, "Chicken-and-fish shoyu ramen under minced back fat.", ["Onomichi ramen"]);
T("Miyajima", "宮島", 34, 132.32, 34.30, "Maple-leaf manju from about 1906.", ["Momiji manju"]);
T("Iwakuni", "岩国", 35, 132.22, 34.17, "Dassai's 23% polish.", ["Yamaguchi: Dassai"]);
T("Yanai", "柳井", 35, 132.10, 33.96, "Kanro (twice-brewed) shoyu.", ["Saishikomi (twice-brewed)"]);
T("Shimonoseki", "下関", 35, 130.94, 33.96, "The 'fuku' port and its bag auction at Haedomari.", ["Shimonoseki fugu and the bag auction"], ["fugu"]);
// Shikoku
T("Naruto", "鳴門", 36, 134.61, 34.17, "Fast-tide wakame and sea bream with the 'Naruto bone'.", ["Sanriku & Naruto wakame"], ["tai"]);
T("Tonosho (Shodoshima)", "土庄", 37, 134.19, 34.49, "A shoyu island that also makes hand-pulled somen.", ["Shodoshima", "Miwa, Ibonoito & Shodoshima somen"]);
T("Takamatsu", "高松", 37, 134.04, 34.34, "The centre of Sanuki udon on iriko dashi.", ["Sanuki udon", "Iriko (dried sardine) dashi"]);
T("Imabari", "今治", 38, 133.00, 34.07, "Skin pressed on an iron plate, not skewered.", ["Yakitori regional styles"]);
T("Uwajima", "宇和島", 38, 132.56, 33.22, "Raw sea-bream taimeshi with a sauce.", ["Taimeshi: Uwajima vs Matsuyama"]);
T("Kochi city", "高知", 39, 133.53, 33.56, "Straw-seared katsuo and platter banquets.", ["Sawachi ryori & katsuo tataki"], ["katsuo"]);
// Kyushu & Okinawa
T("Hakata (Fukuoka)", "博多", 40, 130.40, 33.59, "Milky tonkotsu with extra-thin noodles, soft udon and motsunabe.", ["Hakata tonkotsu", "Hakata soft udon", "Motsunabe & mizutaki"]);
T("Yame", "八女", 40, 130.56, 33.21, "Shaded gyokuro.", ["Ureshino & Yame"]);
T("Saga city", "佐賀", 41, 130.30, 33.25, "Japan's top nori from Ariake Bay.", ["Ariake nori"]);
T("Ureshino", "嬉野", 41, 129.99, 33.10, "Steamed and pan-fired tea.", ["Ureshino & Yame"]);
T("Nagasaki city", "長崎", 42, 129.87, 32.75, "Champon, castella and karasumi.", ["Champon & sara udon", "Castella", "Nagasaki karasumi"]);
T("Iki", "壱岐", 42, 129.69, 33.75, "GI barley shochu with rice koji at 1 to 2.", ["Iki shochu"]);
T("Kumamoto city", "熊本", 43, 130.71, 32.80, "Garlic-oil ramen and horse sashimi.", ["Kumamoto ramen", "Basashi"]);
T("Aso", "阿蘇", 43, 131.09, 32.95, "Slender spring takana stems.", ["Takana-zuke"]);
T("Hitoyoshi", "人吉", 43, 130.76, 32.21, "GI rice shochu from basin groundwater.", ["Kuma shochu"]);
T("Hita", "日田", 44, 130.94, 33.32, "One claimed birthplace of yuzu-kosho.", ["Yuzu-kosho"]);
T("Nakatsu", "中津", 44, 131.19, 33.60, "The karaage shop town.", ["Nakatsu karaage"]);
T("Oita city", "大分", 44, 131.61, 33.24, "Kabosu and Iichiko's barley shochu country.", ["Kabosu", "Mugi-jochu (Oita, Iichiko)"]);
T("Nobeoka", "延岡", 45, 131.66, 32.58, "Chicken nanban's declared birthplace.", ["Chicken nanban"]);
T("Takachiho", "高千穂", 45, 131.30, 32.71, "Soba shochu of the Gokase mountains.", ["Imo & soba shochu (Miyazaki)"]);
T("Makurazaki", "枕崎", 46, 130.30, 31.27, "Over half of Japan's katsuobushi.", ["Katsuobushi"]);
T("Fukuyama (Kirishima)", "福山", 46, 130.78, 31.74, "Kurozu in outdoor clay pots.", ["Kurozu (black vinegar)"]);
T("Tsunuki (Minamisatsuma)", "津貫", 46, 130.31, 31.38, "A southern malt distillery since 2016.", ["Mars Tsunuki"]);
T("Kagoshima city", "鹿児島", 46, 130.56, 31.60, "Light tonkotsu with daikon pickles; sweet tsukeage.", ["Kagoshima ramen", "Tsukeage (satsuma-age)"]);
T("Naha", "那覇", 47, 127.68, 26.21, "Wheat 'soba', goya champuru, rafute and chinsuko.", ["Okinawa soba", "Goya champuru & rafute", "Chinsuko & sata andagi"]);
T("Onna", "恩納", 47, 127.85, 26.50, "Where sea-grape farming took off.", ["Umibudo (sea grapes)"]);

// resolve links
for (const t of TOWNS) {
  t.items = t.items.map(n => { const it = ITEMS.find(i => i.name === n); if (!it) throw new Error("Town " + t.en + " -> missing item " + n); return it.id; });
  for (const f of t.fish) if (!FISH.find(x => x.id === f)) throw new Error("Town " + t.en + " -> missing fish " + f);
}
