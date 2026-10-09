/* Regional Japan: content data. Edit here, then run tools/build_site.py */

const REGIONS = [
  { id: "hokkaido", en: "Hokkaido", ja: "北海道", prefs: [1], color: "#1f5f8b",
    tag: "Cold seas, kombu and wide fields",
    text: "Japan's northern frontier: cold currents grow nearly all of the country's kombu, salmon and crab run through its waters, and its dairy, wheat and soba fields are the largest in Japan. Food culture is young (settled widely from the 1870s) and open to outside influence, so ramen, jingisukan and beer are as native here as seafood.",
    meter: { salt: 3, sweet: 2, dashi: 4, rich: 4 } },
  { id: "tohoku", en: "Tohoku", ja: "東北", prefs: [2, 3, 4, 5, 6, 7], color: "#2a7ba0",
    tag: "Salted, preserved, snow-country depth",
    text: "Long winters shaped a cuisine of salting, drying and fermenting: pickles, fish sauce, red miso. Rice and sake are central. The Sanriku coast on the Pacific side is one of the richest fishing grounds in the world, where cold and warm currents meet.",
    meter: { salt: 5, sweet: 2, dashi: 2, rich: 3 } },
  { id: "kanto", en: "Kanto", ja: "関東", prefs: [8, 9, 10, 11, 12, 13, 14], color: "#3a8aa8",
    tag: "Dark shoyu and Edo-style punch",
    text: "Edo (Tokyo) grew into a megacity of workers, which favoured fast food with strong flavour: dark koikuchi shoyu, katsuobushi dashi, firm soba, edomae sushi cured in vinegar and soy. Choshi and Noda in Chiba are the heart of soy sauce.",
    meter: { salt: 4, sweet: 3, dashi: 3, rich: 3 } },
  { id: "chubu", en: "Chubu", ja: "中部", prefs: [15, 16, 17, 18, 19, 20, 21, 22, 23], color: "#3f9a9a",
    tag: "Mountains, miso and two seas",
    text: "A huge, varied belt: snowy Hokuriku on the Sea of Japan (rice, sake, winter yellowtail, crab), the Japan Alps (soba, miso, wine), and the Tokai Pacific coast (Aichi's dark miso and tamari, Shizuoka's wasabi and tea). Miso country, from Shinshu's pale to Hatcho's black.",
    meter: { salt: 4, sweet: 3, dashi: 3, rich: 4 } },
  { id: "kinki", en: "Kinki (Kansai)", ja: "近畿", prefs: [24, 25, 26, 27, 28, 29, 30], color: "#4aa88a",
    tag: "Kombu, light shoyu, refined umami",
    text: "Ancient capitals (Nara, Kyoto) and the merchant city of Osaka built a cuisine on clear dashi: Hokkaido kombu arrived by ship, and lighter usukuchi shoyu kept ingredients bright. Osaka calls itself the nation's kitchen; Kyoto perfected kaiseki; Hyogo gave us Nada sake.",
    meter: { salt: 2, sweet: 3, dashi: 5, rich: 2 } },
  { id: "chugoku", en: "Chugoku", ja: "中国", prefs: [31, 32, 33, 34, 35], color: "#5bb27a",
    tag: "Oysters, crab and Seto Inland Sea fish",
    text: "Two coasts with different personalities: the San'in side facing the Sea of Japan (winter crab, soba, shijimi clams) and the sunny San'yo side on the Seto Inland Sea (oysters, sawara mackerel, anago, sake). Shimonoseki's fugu sits at the western tip.",
    meter: { salt: 3, sweet: 3, dashi: 3, rich: 2 } },
  { id: "shikoku", en: "Shikoku", ja: "四国", prefs: [36, 37, 38, 39], color: "#72bb68",
    tag: "Citrus, iriko dashi and Tosa katsuo",
    text: "Four prefectures, four flavours: Tokushima's sudachi, Kagawa's udon and iriko, Ehime's mikan and sea bream, and Kochi's straw-seared bonito and dry sake. The Pacific side is wild; the Seto Inland side is gentle.",
    meter: { salt: 3, sweet: 2, dashi: 4, rich: 2 } },
  { id: "kyushu", en: "Kyushu & Okinawa", ja: "九州・沖縄", prefs: [40, 41, 42, 43, 44, 45, 46, 47], color: "#8cc063",
    tag: "Sweet shoyu, pork, shochu and the south",
    text: "Warmer, closer to China and Korea, and the home of pork-bone broths, sweet soy sauce, barley miso and shochu rather than sake. Nagasaki's open port added Chinese and Portuguese influence; Okinawa (once the Ryukyu Kingdom) has its own cuisine of pork, kombu, awamori and goya.",
    meter: { salt: 2, sweet: 5, dashi: 3, rich: 5 } }
];

const PREFS = [
  [1, "Hokkaido", "北海道", "Cold-water kingdom: nearly all of Japan's kombu, salmon, crab, uni and scallops, plus the biggest wheat and soba fields."],
  [2, "Aomori", "青森県", "Oma tuna, scallops and apples; salty, niboshi-heavy Tsugaru ramen; Tsugaru-style sake."],
  [3, "Iwate", "岩手県", "Sanriku coast abalone, uni and wakame; wanko soba, Morioka reimen and jajamen."],
  [4, "Miyagi", "宮城県", "Sendai miso, oysters from Matsushima Bay, Kesennuma bonito, and light sake built for sushi."],
  [5, "Akita", "秋田県", "Hata-hata fish and shottsuru fish sauce, kiritanpo, hand-pulled Inaniwa udon and snow-country sake."],
  [6, "Yamagata", "山形県", "Ginjo sake, cherries, imoni stew, Dewa soba and the origin of cold ramen."],
  [7, "Fukushima", "福島県", "Kitakata ramen, peaches, and one of the most decorated sake prefectures in Japan."],
  [8, "Ibaraki", "茨城県", "Mito natto, sweet potatoes, monkfish (ankō) hot pot, and Hitachi's coastal catch."],
  [9, "Tochigi", "栃木県", "Strawberries, Utsunomiya gyoza, Sano's bamboo-pressed ramen and kanpyo gourd strips."],
  [10, "Gunma", "群馬県", "Wheat country: Mizusawa udon, okkirikomi and konnyaku."],
  [11, "Saitama", "埼玉県", "Musashino-style udon, Sayama tea, Kawagoe sweet potatoes and Chichibu whisky."],
  [12, "Chiba", "千葉県", "Choshi and Noda, the capital of soy sauce; sardines, peanuts and Boso Peninsula seafood."],
  [13, "Tokyo", "東京都", "Edomae sushi, tsukudani, dark-dipped soba and the national benchmark for shoyu ramen."],
  [14, "Kanagawa", "神奈川県", "Yokohama iekei ramen, Sagami Bay shirasu whitebait and Odawara kamaboko."],
  [15, "Niigata", "新潟県", "Koshihikari rice and the most sake breweries in Japan; hegi soba and ginger-shoyu ramen."],
  [16, "Toyama", "富山県", "Himi winter yellowtail, firefly squid, white shrimp, kombu-jime and Toyama Black ramen."],
  [17, "Ishikawa", "石川県", "Kaga cuisine, hand-made Noto salt, nodoguro, Kobako crab and fish sauce (ishiru)."],
  [18, "Fukui", "福井県", "Echizen crab, oroshi soba, Tsuruga's shaved kombu and Wakasa mackerel."],
  [19, "Yamanashi", "山梨県", "Koshu wine, hoto noodle stew, peaches and Hakushu whisky."],
  [20, "Nagano", "長野県", "Shinshu miso, Togakushi soba, apples, nozawana pickles, Mars Shinshu whisky and sake."],
  [21, "Gifu", "岐阜県", "Hida beef, hoba miso on a magnolia leaf, ayu sweetfish and tamari country."],
  [22, "Shizuoka", "静岡県", "Izu wasabi, Yaizu and Nishiizu katsuobushi, sakura shrimp, green tea and Fuji whisky."],
  [23, "Aichi", "愛知県", "Nagoya-meshi: Hatcho miso, tamari, shiro shoyu, Mikawa mirin, kishimen and hitsumabushi."],
  [24, "Mie", "三重県", "Ise lobster, Matsusaka beef, soft Ise udon in black tamari sauce and tekone-zushi."],
  [25, "Shiga", "滋賀県", "Lake Biwa's funa-zushi (ancient fermented sushi), ayu and Omi beef."],
  [26, "Kyoto", "京都府", "Kaiseki, Saikyo white miso, usukuchi shoyu, yuba, tsukemono, Fushimi sake and Taiza crab."],
  [27, "Osaka", "大阪府", "Kitchen of Japan: takoyaki, okonomiyaki, kitsune udon, kombu trading and Yamazaki whisky."],
  [28, "Hyogo", "兵庫県", "Tatsuno usukuchi shoyu, Nada sake, Akashi octopus, Ibonoito somen, Kobe beef and Tajima crab."],
  [29, "Nara", "奈良県", "The birthplace of sake (bodaimoto), Miwa somen, kakinoha-zushi and narazuke pickles."],
  [30, "Wakayama", "和歌山県", "Yuasa, the cradle of shoyu; Kishu ume, Wakayama ramen and Katsuura tuna."],
  [31, "Tottori", "鳥取県", "Matsuba crab at Sakaiminato, beef-bone ramen and Daisen cuisine."],
  [32, "Shimane", "島根県", "Izumo warigo soba, shijimi clams of Lake Shinji, nodoguro and Izumo sake."],
  [33, "Okayama", "岡山県", "Spring sawara, barazushi, white peaches and the Omachi sake rice."],
  [34, "Hiroshima", "広島県", "Oysters, Saijo soft-water sake, layered okonomiyaki, Onomichi ramen and anago-meshi."],
  [35, "Yamaguchi", "山口県", "Fugu (here called fuku) at Shimonoseki, Dassai sake and rich saishikomi shoyu."],
  [36, "Tokushima", "徳島県", "Sudachi citrus, Naruto sea bream and wakame, and brown-broth Tokushima ramen."],
  [37, "Kagawa", "香川県", "Udon prefecture: Sanuki udon on iriko dashi, Shodoshima shoyu and white-miso zoni."],
  [38, "Ehime", "愛媛県", "Mikan citrus, two styles of taimeshi (sea bream rice), jakoten fish cakes and barley miso."],
  [39, "Kochi", "高知県", "Straw-seared katsuo tataki, yuzu, very dry Tosa sake and hachikin banquet culture."],
  [40, "Fukuoka", "福岡県", "Hakata tonkotsu ramen, mentaiko, motsunabe, soft udon and yatai street stalls."],
  [41, "Saga", "佐賀県", "Japan's top nori from Ariake Bay, Yobuko squid, Ureshino tea and Nabeshima sake."],
  [42, "Nagasaki", "長崎県", "Champon, sara udon, karasumi, ago (flying fish) dashi and Iki barley shochu."],
  [43, "Kumamoto", "熊本県", "Kumamoto tonkotsu with garlic oil, karashi renkon, basashi and Hitoyoshi rice shochu."],
  [44, "Oita", "大分県", "Seki-aji and seki-saba from Saganoseki, Iichiko barley shochu, onsen eggs and yuzukosho."],
  [45, "Miyazaki", "宮崎県", "Chicken nanban, hiyajiru, mango, and sweet-potato and soba shochu."],
  [46, "Kagoshima", "鹿児島県", "Sweet-potato shochu, kurobuta pork, Makurazaki katsuobushi, Fukuyama kurozu and Amami kokuto shochu."],
  [47, "Okinawa", "沖縄県", "Awamori, Okinawa soba, goya, shima-dofu, kombu stir-fry and Shima-masu salt."]
].map(([id, en, ja, sum]) => ({ id, en, ja, sum, reg: REGIONS.find(r => r.prefs.includes(id)).id }));

const CATS = [
  { id: "fish", label: "Fish names", ja: "魚の名前" },
  { id: "shoyu", label: "Shoyu", ja: "醤油" },
  { id: "miso", label: "Miso", ja: "味噌" },
  { id: "dashi", label: "Kombu & dashi", ja: "昆布・出汁" },
  { id: "salt", label: "Salt & more", ja: "塩・酢・薬味" },
  { id: "ramen", label: "Ramen", ja: "ラーメン" },
  { id: "noodle", label: "Udon, soba & more", ja: "麺" },
  { id: "sake", label: "Sake", ja: "日本酒" },
  { id: "shochu", label: "Shochu & awamori", ja: "焼酎・泡盛" },
  { id: "whisky", label: "Whisky, beer & wine", ja: "ウイスキー他" }
];

const CAT_INTRO = {
  fish: "Many Japanese fish carry a ladder of names that changes with size, season and region. This is called shusse-uo (出世魚), the 'career-climbing fish', and the ladder is a way of marking promotion. Pick a fish to see which names are used where.",
  shoyu: "Soy sauce is not one thing. Eight or so regional styles differ in the ratio of soy to wheat, the salt, the colour and the sweetness. Pick a style to see where it belongs.",
  miso: "Miso varies with its koji (rice, barley or soybean), how long it ferments, and how much salt it carries. As a rule of thumb: warmer and sweeter in the west and south, saltier and redder in the cold north and east.",
  dashi: "Hokkaido grows almost all of Japan's kombu, but each stretch of coast makes a different kind. Ships then carried it down the Sea of Japan to Osaka, shaping the dashi of the west. Katsuobushi, iriko and flying fish give other regions their own bases.",
  salt: "Salt, vinegar and condiments tell the geography of the coast and the mountains: hand-boiled salt on Noto, black vinegar fermented in pots in Kagoshima, wasabi from cold spring water in Izu.",
  ramen: "Ramen is a Chinese import that every region has rewritten. The map shows the best-known local styles; many towns have their own bowl as well.",
  noodle: "Wheat noodles (udon, somen) and buckwheat (soba) follow the climate: wheat for the mild south and west, buckwheat for cold mountains. Each region differs in thickness, firmness and the broth.",
  sake: "Sake character comes from rice, water, yeast and the brewers' tradition. Soft water gives rounder sake (Fushimi, Saijo); hard water gives drier, firmer sake (Nada). Cold northern prefectures tend toward clean and crisp.",
  shochu: "Shochu is distilled, not brewed like sake. The base decides the style: sweet potato in the far south, barley in Oita and Iki, rice in Kumamoto, brown sugar in Amami, and awamori in Okinawa made with black koji and Thai rice.",
  whisky: "Japanese whisky dates from the 1920s. Distilleries sit in cool water-rich places, from Hokkaido's coast to Yamanashi's forest. Beer and wine have their own regional stories."
};

/* [cat, name, ja, prefs, text, flavor, use] */
const ITEMS_RAW = [
  /* SHOYU */
  ["shoyu", "Koikuchi (dark)", "濃口醤油", [12, 13], "The default soy sauce, around 80% of all production. Edo's huge, hungry population and river trade made Noda and Choshi in Chiba the giants of the craft, now home to the largest makers.", "Balanced salt, umami and light sweetness, with a roasted aroma.", "All-purpose: dipping, simmering, soba tsuyu, teriyaki, yakitori tare."],
  ["shoyu", "Usukuchi (light)", "淡口醤油", [28, 26, 27], "Lighter in colour but about 2% saltier than koikuchi, often softened with amazake. Developed around Tatsuno in Hyogo and adopted by Kyoto kaiseki cooks to keep vegetables and soups bright.", "Salty, clean and delicate; does not darken food.", "Clear soups, simmered vegetables, chawanmushi, udon broth in Kansai."],
  ["shoyu", "Tamari", "たまり醤油", [23, 24, 21], "Made mainly from soybeans with little or no wheat, descended from the liquid that pools in miso barrels. Centred on the Tokai area (Aichi, Gifu, Mie).", "Thick, deep umami, round and low in sharpness.", "Sashimi dip, teriyaki glaze, senbei, Ise udon sauce. Check the label for wheat if avoiding gluten."],
  ["shoyu", "Shiro (white)", "白醤油", [23], "Made mostly from wheat with few soybeans, giving a pale amber colour. The style is associated with Hekinan in Aichi.", "Sweet, light, faintly aromatic.", "Ohitashi, chawanmushi, senbei and dishes where colour matters."],
  ["shoyu", "Saishikomi (twice-brewed)", "再仕込み醤油", [35, 32, 31], "Brewed a second time using finished soy sauce instead of brine. Traditionally from Yamaguchi and the San'in coast.", "Syrupy, intense, sweet-savoury.", "Finishing sauce for sashimi, cold tofu and rice."],
  ["shoyu", "Kyushu sweet shoyu", "九州の甘口醤油", [40, 41, 42, 43, 44, 45, 46], "Kyushu tastes sweeter. The sauce is typically sweetened with sugar or other sweeteners and matches sweet-leaning local cooking and sashimi.", "Sweet, mellow, thick.", "Sashimi (especially horse and fish), simmered dishes, local sweet-savoury stews."],
  ["shoyu", "Yuasa: where shoyu began", "湯浅醤油", [30], "Often credited as the birthplace of Japanese soy sauce. In the 13th century, kinzanji miso brought from Song China left a savoury liquid in the barrels, which locals refined into shoyu.", "Traditional, rounded, a deeper aroma.", "A pilgrimage town for shoyu lovers; the old brewing streets are preserved."],
  ["shoyu", "Shodoshima", "小豆島醤油", [37], "An island in the Seto Inland Sea with 400 years of shoyu making. Some makers still use huge cedar kioke barrels; salt came from the surrounding salt fields.", "Rounded with a sweet aromatic finish.", "Sanuki udon topped with shoyu and grated daikon (shoyu udon)."],

  /* MISO */
  ["miso", "Sendai miso", "仙台味噌", [4], "Red rice miso aged around a year. Tradition says the warlord Date Masamune built a miso brewery in Sendai to supply his troops.", "Salty, savoury, robust.", "Hearty soups and miso-marinated grilling."],
  ["miso", "Shinshu miso", "信州味噌", [20], "Pale yellow rice miso from Nagano, one of the best-selling miso in Japan (about a third of national production). Cool mountain climate, clean flavour.", "Bright, savoury with gentle sweetness.", "Everyday miso soup, pickled mountain vegetables and nozawana."],
  ["miso", "Hatcho miso", "八丁味噌", [23], "Soybean-only miso aged two years or more in cedar barrels, weighted with a pyramid of river stones. Made in Hatcho village in Okazaki (Aichi).", "Dark, intensely umami, a little bitter and sour.", "Miso-katsu, dote-ni (beef tendon stew), miso-nikomi udon, red miso soup."],
  ["miso", "Saikyo miso", "西京味噌", [26], "A sweet white rice miso with large quantities of koji, short-aged and low in salt. Prized by the Kyoto court.", "Sweet, creamy and mild.", "Saikyo-yaki (fish marinated and grilled), ozoni, dengaku."],
  ["miso", "Sanuki white miso (an-mochi zoni)", "讃岐白味噌", [37], "At New Year, Kagawa serves rounded mochi stuffed with sweet bean paste in a white miso soup: sweet and savoury at once.", "Very sweet, mellow.", "New Year zoni."],
  ["miso", "Kyushu & Setouchi barley miso", "麦味噌", [40, 41, 42, 43, 44, 45, 46, 38, 35], "Made with barley koji: warm climate, faster fermentation, sweeter style. Common across Kyushu, with Ehime and Yamaguchi on the Inland Sea.", "Sweet, malty and earthy.", "Satsuma-jiru, Kumamoto dagojiru dumpling soup, everyday soups."],
  ["miso", "Echigo miso", "越後味噌", [15], "Red rice miso from snow country, high in rice koji, matching Niigata's rice culture.", "Savoury, deeper red, full-bodied.", "Miso soup with local salmon and vegetables."],
  ["miso", "Edo-ama miso", "江戸甘味噌", [13], "A dark, sweet red miso with plenty of rice koji and a short ageing time, associated with Edo.", "Sweet and rich with low salt for a red miso.", "Dengaku, nuta dressings, miso-oden."],
  ["miso", "Kinzanji miso", "径山寺味噌", [30], "A chunky 'eating miso' of soybeans, barley and vegetables, the ancestor of shoyu, from the old town of Yuasa.", "Sweet-salty, crunchy, rustic.", "A topping for rice, cucumbers and tofu."],
  ["miso", "Hida hoba miso", "朴葉味噌", [21], "Miso with scallions and mushrooms grilled over charcoal on a dried magnolia leaf, a mountain village breakfast.", "Toasty, sweet, with the fragrance of magnolia.", "Eaten with rice and Hida beef."],

  /* KOMBU & DASHI */
  ["dashi", "Rishiri kombu", "利尻昆布", [1], "Grown off Rishiri and Rebun, islands at the far north of Hokkaido. Hard and firm, giving a clear amber dashi favoured by Kyoto kaiseki restaurants.", "Clean, elegant, a little salty with mineral notes.", "Clear soups, yudofu, kombu-jime of white fish."],
  ["dashi", "Rausu kombu", "羅臼昆布", [1], "From the Shiretoko coast. A thick, golden kombu with a rich, slightly sweet dashi, often called the king of kombu.", "Deep, sweet, full-bodied.", "Strong dashi, hot pots, simmering."],
  ["dashi", "Ma-kombu", "真昆布", [1], "From southern Hokkaido around Hakodate. Wide, thick blades give a sweet, refined and clear dashi, and it is the favourite of Osaka cooks.", "Sweet, refined, transparent.", "Osaka udon dashi, shio-kombu, kombu-jime."],
  ["dashi", "Hidaka kombu", "日高昆布 (三石昆布)", [1], "From the Hidaka coast. Soft and quick to cook, so it is the kombu you eat, not just infuse.", "Mild, soft and tender.", "Oden, nimono, kombu-maki, tsukudani."],
  ["dashi", "Naga kombu", "長昆布", [1], "From eastern Hokkaido (Kushiro, Nemuro). Long ribbons, mild flavour and economical.", "Mild and approachable.", "Household simmering, tsukudani and oden."],
  ["dashi", "The Kombu Road", "昆布ロード", [1, 16, 18, 27, 26, 47], "From the 17th century, kitamae-bune merchant ships carried Hokkaido kombu down the Sea of Japan to Osaka. Ports along the way (Toyama, Tsuruga) developed their own kombu foods, and Satsuma carried kombu south to Ryukyu and onward to China. The line on the map is a simplified route.", "Kombu dashi for the west, katsuobushi for the east.", "Explains why Kansai broth is kombu-forward and Okinawa eats so much kombu."],
  ["dashi", "Toyama: kombu-jime & kobu-musubi", "富山の昆布文化", [16], "Toyama households use a lot of kombu. Fish fillets are pressed between kombu sheets (kombu-jime) to absorb umami, and onigiri are wrapped in tororo kombu. Kombu-maki kamaboko is local.", "Savoury and clean, the kombu perfume carries through.", "Kombu-jime sashimi, kobu-musubi, kombu-maki kamaboko."],
  ["dashi", "Oboro & tororo kombu", "おぼろ・とろろ昆布", [18, 27], "Craftsmen in Tsuruga (Fukui) and Sakai (Osaka) shave vinegared kombu into feather-thin sheets, ready to melt into soup or wrap rice.", "Soft, tangy-sweet and silky.", "Soup garnish, wrapping onigiri."],
  ["dashi", "Okinawa kubu-irichi", "クーブイリチー", [47], "Okinawa is one of Japan's biggest kombu eaters thanks to trade through the Kombu Road. Strips are stir-fried with pork and konnyaku.", "Savoury, porky and tender.", "Everyday side dish and celebration food."],
  ["dashi", "Katsuobushi", "鰹節", [46, 22], "Smoked, dried and (for karebushi) mold-cured skipjack. Kagoshima (Makurazaki, Yamakawa) and Shizuoka (Yaizu, Nishiizu) make most of Japan's supply.", "Smoky, deeply savoury, clean.", "Ichiban dashi with kombu, shavings on okonomiyaki, tamago kake gohan."],
  ["dashi", "Ago (flying fish) dashi", "あごだし", [42, 40, 41], "Grilled and dried flying fish (ago) from Nagasaki's Goto Islands, Hirado and northern Kyushu make a clear, mild dashi with little fishiness.", "Light, sweet and clean.", "Goto udon, ramen broth, nabe."],
  ["dashi", "Iriko (dried sardine) dashi", "いりこ出汁", [37], "Tiny dried sardines from the Seto Inland Sea, including Ibuki Island, give Sanuki udon its character.", "Sweet-savoury with a hint of bitterness.", "Sanuki udon broth and miso soup."],
  ["dashi", "Kanto vs Kansai dashi", "関東と関西の出汁", [13, 27, 26], "Kanto leans on dark shoyu and strong katsuobushi, giving a dark, punchy broth. Kansai uses kombu and usukuchi shoyu so you can see through it. The border is traditionally said to sit around Lake Hamana or Sekigahara.", "Kanto: bold and salty. Kansai: soft, sweet-savoury and clear.", "Compare the udon at a Tokyo and an Osaka shop."],

  /* SALT & MORE */
  ["salt", "Ako salt", "赤穂の塩", [28], "Ako on the Seto Inland Sea was one of the great salt-farm regions of Japan since the Edo period (and the setting of the 47 Ronin story).", "Mild and round.", "General cooking; pickles."],
  ["salt", "Noto agehama salt", "能登の揚げ浜塩", [17], "Seawater is carried up by hand in buckets to sand beds, then boiled in iron pots. The labour-intensive agehama method has been practised for 400+ years.", "Mellow, mineral, sweet finish.", "Finishing salt for sashimi and tempura."],
  ["salt", "Shima-masu (Okinawa salt)", "島マース", [47], "Mineral-rich sea salt from the subtropical sea, with a long history in Ryukyu cuisine and pickling.", "Mineral, soft and slightly bitter.", "Salting fish, pork and goya."],
  ["salt", "Kurozu (black vinegar)", "黒酢", [46], "Fermented in clay pots set out in the fields at Fukuyama (Kirishima, Kagoshima), aged a year or more, from rice, koji and water.", "Mellow, deep, rounded acidity.", "Dumpling dip, dressings and drinks."],
  ["salt", "Mirin", "みりん", [23, 12], "Hon-mirin is a sweet rice liqueur (around 14% alcohol) used for sweetness and gloss. Mikawa in Aichi and Nagareyama in Chiba have been key production areas.", "Sweet, honeyed.", "Teriyaki, simmering, glaze."],
  ["salt", "Hon-wasabi", "わさび", [22, 20], "Grown in cold spring water, in terraced Izu beds (Shizuoka) and Azumino (Nagano); freshly grated on sharkskin.", "Sharp aromatic heat with sweetness.", "Sushi, soba, sashimi."],
  ["salt", "Yuzu-kosho", "柚子胡椒", [44, 40, 43], "A paste of green chilli, yuzu peel and salt that belongs to Kyushu: Oita, Fukuoka and Kumamoto.", "Fiery, citrusy, salty.", "Nabe, grilled chicken, noodles."],
  ["salt", "Sudachi & yuzu", "すだち・柚子", [36, 39], "Tokushima produces nearly all of Japan's sudachi; Kochi and Tokushima grow the most yuzu. Both are used instead of vinegar.", "Sharply fragrant, tart.", "Squeezed on grilled fish, soba, ponzu."],
  ["salt", "Fish sauces: shottsuru, ishiru, ikanago-shoyu", "魚醤", [5, 17, 37], "Akita's shottsuru (from hata-hata), Noto's ishiru (from squid or sardine) and Kagawa's ikanago-shoyu (sand-lance) are Japan's fish sauces.", "Salty, deeply savoury, ocean-funky.", "Shottsuru nabe, seasoning for stews."],

  /* RAMEN */
  ["ramen", "Sapporo miso ramen", "札幌味噌ラーメン", [1], "Born in the 1950s: rich miso soup with wok-fried vegetables, lard on top and curly noodles to hold the heat in the cold.", "Hearty, rich and warming.", "A bowl built for winter."],
  ["ramen", "Hakodate shio ramen", "函館塩ラーメン", [1], "Clear salt-based broth from pork, chicken and seafood. Hakodate was an early open port.", "Light, clear and refined.", "Thin noodles, simple toppings."],
  ["ramen", "Asahikawa shoyu ramen", "旭川ラーメン", [1], "Double soup of pork bone and fish, finished with a layer of lard to hold the heat.", "Deep and savoury.", "Thin, curly noodles."],
  ["ramen", "Tsugaru niboshi ramen", "津軽ラーメン", [2], "Aomori's ramen leans on sardine (niboshi) and dried seafood broth in a shoyu-based soup.", "Fishy-sweet and salty.", "Often topped with a strip of niboshi powder."],
  ["ramen", "Yamagata hiyashi ramen", "冷やしラーメン", [6], "Yamagata claims to have created cold ramen, served in chilled broth.", "Cool, savoury and slightly sweet.", "A summer ramen."],
  ["ramen", "Kitakata ramen", "喜多方ラーメン", [7], "Flat, thick, wavy noodles in a pork-bone and niboshi shoyu soup. Locals eat it for breakfast ('asa-ra').", "Mild and savoury.", "Chewy noodles; good with char siu."],
  ["ramen", "Sano ramen", "佐野ラーメン", [9], "Hand-made noodles pressed with a bamboo pole (aodake-uchi), served in a clear shoyu soup.", "Light, clean, springy noodles.", "Chuka soba style."],
  ["ramen", "Tokyo shoyu ramen", "東京ラーメン", [13], "A clear chicken-and-fish shoyu broth with thin curly noodles: the 'classic' ramen, tied to Asakusa in the 1910s.", "Clean shoyu and fish.", "Menma, nori, naruto."],
  ["ramen", "Yokohama iekei", "家系ラーメン", [14], "Tonkotsu-shoyu soup with thick straight noodles, spinach and nori. Customize noodle firmness, oil and saltiness.", "Rich and salty.", "Free rice and 'ryo' custom options."],
  ["ramen", "Tsubame-Sanjo seabura", "燕三条ラーメン", [15], "Thick noodles and a shoyu broth with floating back fat, developed for metalworkers. Nagaoka has its own ginger-shoyu bowl.", "Heavy, salty and thick.", "Metalworkers' fuel."],
  ["ramen", "Toyama Black", "富山ブラック", [16], "A very dark, very salty shoyu soup with black pepper, once designed to feed labourers with rice.", "Intensely salty and peppery.", "Best with rice."],
  ["ramen", "Taiwan ramen", "台湾ラーメン", [23], "A Nagoya invention: spicy minced meat, garlic and chives in a chilli soup, despite the name.", "Spicy and garlicky.", "Nagoya-meshi."],
  ["ramen", "Kyoto kotteri", "京都ラーメン", [26], "Thick chicken-based soup rich with back fat, in contrast to the refined kaiseki image.", "Thick, rich and hearty.", "Straight noodles, green onion."],
  ["ramen", "Wakayama chuka soba", "和歌山ラーメン", [30], "A tonkotsu-shoyu hybrid, usually eaten with hayazushi (mackerel sushi) on the side.", "Salty, rounded and porky.", "Hayazushi side."],
  ["ramen", "Tottori gyukotsu", "鳥取牛骨ラーメン", [31], "Beef bone broth, a rarity in a pork-dominated world.", "Sweet, clean beef flavour.", "Thin noodles."],
  ["ramen", "Onomichi ramen", "尾道ラーメン", [34], "Chicken, pork and Seto fish in a shoyu soup with floating pork back fat and flat noodles.", "Savoury and fishy-sweet.", "Back-fat cap."],
  ["ramen", "Tokushima ramen", "徳島ラーメン", [36], "A brown pork-bone shoyu soup topped with sweet-simmered pork belly and a raw egg, eaten with rice.", "Sweet, salty and rich.", "Rice on the side."],
  ["ramen", "Hakata tonkotsu", "博多ラーメン", [40], "Milky pork-bone broth with extra-thin, firm noodles. 'Kaedama' extra noodles are standard. Kurume claims to be the origin.", "Creamy, pork-forward.", "Pickled ginger and sesame on the table."],
  ["ramen", "Kumamoto ramen", "熊本ラーメン", [43], "Tonkotsu broth with fried garlic and garlic oil, medium noodles.", "Rich with roasted garlic.", "Rich and comforting."],
  ["ramen", "Kagoshima ramen", "鹿児島ラーメン", [46], "Lighter tonkotsu with chicken, vegetables and a gentle sweetness, with pickles served alongside.", "Light, sweet and savoury.", "Served with pickles."],

  /* NOODLES */
  ["noodle", "Sanuki udon", "讃岐うどん", [37], "Kagawa's thick, firm, chewy udon, in iriko dashi. The prefecture is nicknamed 'Udon Prefecture'.", "Wheaty and springy; sweet-savoury broth.", "Kake, bukkake, kamaage, zaru, shoyu udon."],
  ["noodle", "Inaniwa udon", "稲庭うどん", [5], "Hand-stretched, thin, flat-ish dried noodles of Akita with a silky texture; a luxury product.", "Silky and delicate.", "Cold with dipping sauce; in warm soup."],
  ["noodle", "Mizusawa udon & okkirikomi", "水沢うどん・おっきりこみ", [10], "Gunma is wheat country. Mizusawa udon is glossy and firm; okkirikomi is a stew of flat noodles with vegetables.", "Firm and hearty.", "Zaru udon; winter stew."],
  ["noodle", "Ise udon", "伊勢うどん", [24], "Extra-soft, fat noodles served in a thick, dark tamari sauce with scallions, no soup.", "Soft and sweet-salty.", "Pilgrims' fast food."],
  ["noodle", "Kishimen & miso-nikomi udon", "きしめん・味噌煮込みうどん", [23], "Nagoya's flat kishimen, and miso-nikomi udon simmered in a clay pot of Hatcho miso.", "Savoury; the miso is intense.", "Served in clay pot."],
  ["noodle", "Hoto", "ほうとう", [19], "Wide flat noodles simmered with pumpkin and vegetables in miso soup. Noodles are not salted. Legend ties it to Takeda Shingen's troops.", "Sweet pumpkin and miso.", "A warming winter pot."],
  ["noodle", "Hakata soft udon", "博多うどん", [40], "Soft, quick-to-serve udon in a light dashi, topped with burdock tempura (gobo-ten).", "Soft and mild.", "Fast food for merchants."],
  ["noodle", "Kanto vs Kansai noodle culture", "関東と関西の麺", [13, 27, 26], "Kanto prefers soba with a dark dipping sauce (dip only the tip); Kansai prefers udon in a light broth. 'Kitsune' (fried tofu) in Kansai is 'tanuki' in some Kanto shops, and the names flip in Kyoto.", "Kanto: bold and salty. Kansai: light and sweet.", "A fun regional food argument."],
  ["noodle", "Hokkaido soba", "北海道そば", [1], "Hokkaido grows more soba than any other prefecture; Horokanai is a famous centre.", "Fresh, nutty.", "Zaru soba in autumn."],
  ["noodle", "Wanko soba", "わんこそば", [3], "Iwate's eating challenge: servers keep tossing mouthfuls of soba into your bowl until you close the lid.", "Light and playful.", "Competition and hospitality."],
  ["noodle", "Morioka reimen & jajamen", "盛岡冷麺・じゃじゃ麺", [3], "Morioka serves cold chewy noodles (reimen, from Korean naengmyeon) and jajamen (with meat miso).", "Cool, sour, spicy / savoury.", "Often finished with chicken broth (chi-tan)."],
  ["noodle", "Hegi soba", "へぎそば", [15], "Niigata's soba uses funori seaweed as a binder, served in a wooden hegi tray in bundles.", "Smooth and springy.", "Bundles of noodles on a tray."],
  ["noodle", "Echizen oroshi soba", "越前おろしそば", [18], "Fukui serves cold soba with grated daikon radish and dashi poured over, rather than dipping.", "Sharp, fresh.", "Dashi over soba."],
  ["noodle", "Shinshu & Togakushi soba", "信州そば・戸隠そば", [20], "Nagano is soba's heartland. Togakushi soba is served in neat bundled coils on a bamboo tray.", "Fragrant, firm.", "Zaru and with tempura."],
  ["noodle", "Izumo warigo soba", "出雲そば", [32], "Soba milled whole (dark, fragrant) and served in three stacked round lacquered bowls (warigo).", "Earthy and strongly buckwheat.", "Dashi poured over each tier."],
  ["noodle", "Miwa, Ibonoito & Shodoshima somen", "素麺", [29, 28, 37], "Thin wheat noodles: Miwa (Nara) is considered the oldest, Ibonoito (Hyogo) is thin and chewy, and Shodoshima (Kagawa) uses sesame oil.", "Delicate and cool.", "Summer; nagashi somen."],
  ["noodle", "Champon & sara udon", "ちゃんぽん・皿うどん", [42], "Nagasaki's Chinese-influenced noodle bowl of pork, seafood and vegetables in a milky broth, and crisp fried noodles with an ankake topping.", "Hearty, milky, savoury.", "Created for students."],
  ["noodle", "Okinawa soba", "沖縄そば", [47], "Contains no buckwheat: wheat noodles in a pork-and-bonito broth, topped with braised pork (soki) and eaten with kōrēgūsu chili awamori.", "Porky with a hint of bonito.", "Everyday meal."],
  ["noodle", "Fujinomiya & Yokote yakisoba", "焼きそば", [22, 5], "Fujinomiya's yakisoba uses rendered pork scraps and dried sardine powder; Yokote's (Akita) is topped with a fried egg.", "Savoury, umami-rich.", "B-gourmet street food."],

  /* SAKE */
  ["sake", "Niigata: tanrei-karakuchi", "新潟の淡麗辛口", [15], "The prefecture with the most breweries in Japan. Soft snowmelt water and rice give a clean, light, dry sake.", "Clean, crisp and dry.", "Chilled, with sashimi and salted fish."],
  ["sake", "Nada (Hyogo)", "灘の男酒", [28], "Japan's largest sake district. Hard Miyamizu water gives a robust, dry 'male' sake. Yamada Nishiki rice is grown here.", "Firm, dry and full.", "Great with grilled fish."],
  ["sake", "Fushimi (Kyoto)", "伏見の女酒", [26], "Soft water brings a gentle, rounded 'female' sake, a counterpoint to Nada.", "Soft, smooth and mildly sweet.", "Pair with kaiseki."],
  ["sake", "Saijo (Hiroshima)", "西条の酒", [34], "Brewers developed soft-water brewing here; Miura Senzaburo's methods made a sweet, mellow style.", "Soft, aromatic, mellow.", "Pair with oysters."],
  ["sake", "Akita: Kyokai No. 6 yeast", "秋田の酒", [5], "The famous Kyokai No. 6 yeast was isolated at the Aramasa brewery in Akita in 1930; the prefecture is a ginjo heartland.", "Fragrant and balanced.", "Pair with kiritanpo."],
  ["sake", "Fukushima", "福島の酒", [7], "A consistent winner at the national sake awards, with a clean, balanced style.", "Round, clean.", "Pair with local seafood."],
  ["sake", "Yamagata ginjo", "山形の吟醸酒", [6], "Cold winters and clear water, a strong focus on ginjo; Yamagata is the first prefecture with a geographical indication for sake.", "Aromatic and refined.", "Chilled."],
  ["sake", "Miyagi sushi sake", "宮城の酒", [4], "Sasanishiki rice and a crisp, light style designed to pair with Sendai's sushi and seafood.", "Light, soft and clean.", "Seafood."],
  ["sake", "Shizuoka ginjo", "静岡吟醸", [22], "Shizuoka yeast (HD-1) created a calm, fruity, soft ginjo style in the 1980s.", "Soft, fruity and calm.", "With light dishes."],
  ["sake", "Nagano: Kyokai No. 7 yeast", "長野の酒", [20], "Kyokai No. 7 yeast comes from the Miyasaka brewery (Masumi) in Suwa. Nagano's sake is aromatic with bright acidity.", "Fragrant, bright and crisp.", "Pair with mountain vegetables."],
  ["sake", "Ishikawa: Noto toji", "石川の酒", [17], "The Noto toji guild is renowned. Rich, deep sake to stand up to Sea of Japan seafood.", "Rich and full.", "With winter seafood."],
  ["sake", "Nara: birthplace of sake", "奈良の清酒発祥", [29], "Shoryakuji temple's bodaimoto method is considered the earliest clear sake; the style survives in Nara.", "Tangy and complex.", "Historic style."],
  ["sake", "Okayama: Omachi rice", "岡山の酒", [33], "The heirloom sake rice Omachi comes from Okayama, with a distinctive wild, earthy character.", "Wild, earthy, complex.", "Good with food."],
  ["sake", "Yamaguchi: Dassai", "山口の酒", [35], "Home of Dassai, famous for polishing Yamada Nishiki down to 23% and pioneering premium junmai daiginjo.", "Elegant, fruity and clean.", "Chilled, aperitif."],
  ["sake", "Kochi: Tosa-karakuchi", "土佐の辛口", [39], "Very dry sake for the prefecture's banquet (hachikin) drinking culture, made to go with katsuo tataki.", "Very dry, sharp.", "Tataki and fish."],
  ["sake", "Kumamoto: Kyokai No. 9 yeast", "熊本の酒", [43], "Kyokai No. 9, the yeast that triggered the ginjo boom, comes from Kumamoto.", "Fruity and fragrant.", "Ginjo."],
  ["sake", "Saga: Nabeshima", "佐賀の酒", [41], "Kyushu rice-growing land, with rich and sweet-leaning sake.", "Rich and sweet.", "Sweeter dishes."],
  ["sake", "Hokkaido sake", "北海道の酒", [1], "Cold-region sake from Hokkaido rice (Ginpu, Kitashizuku) and clear water, clean and light.", "Clean and light.", "With seafood."],

  /* SHOCHU */
  ["shochu", "Imo-jochu (Kagoshima)", "芋焼酎", [46], "Sweet potato shochu, dominant in Kagoshima, with a rich, earthy-sweet aroma. Kuro-koji (black) or shiro-koji (white) shape the style.", "Sweet, earthy, aromatic.", "Oyuwari (with hot water), on the rocks, rokuyon (6 shochu : 4 hot water)."],
  ["shochu", "Imo & soba shochu (Miyazaki)", "宮崎の焼酎", [45], "Miyazaki makes a lighter sweet-potato shochu and is known for soba shochu in Takachiho.", "Mellow, sweet.", "With chicken nanban."],
  ["shochu", "Mugi-jochu (Oita, Iichiko)", "大分の麦焼酎", [44], "Light, clean barley shochu, made famous by Iichiko. Smooth, easy-drinking.", "Light, clean and a little sweet.", "Highballs, on the rocks."],
  ["shochu", "Iki shochu", "壱岐焼酎", [42], "Barley shochu with rice koji from Iki Island, with protected geographic indication status.", "Mild and round.", "Easy-drinking."],
  ["shochu", "Kuma shochu", "球磨焼酎", [43], "Rice shochu from the Hitoyoshi basin, with a clean, sweet-rice aroma and a strong geographic identity.", "Clean, gentle rice sweetness.", "Neat or on the rocks."],
  ["shochu", "Amami kokuto shochu", "奄美黒糖焼酎", [46], "Brown-sugar shochu made only in the Amami Islands (Kagoshima), thanks to a postwar exception.", "Mellow, with a hint of brown sugar.", "On the rocks."],
  ["shochu", "Awamori", "泡盛", [47], "Okinawa's spirit: Thai long-grain rice, black koji (Aspergillus luchuensis), single distillation. Aged 3+ years it becomes kusu (old awamori).", "Bold, aromatic; aged kusu is smooth and vanilla-like.", "Neat, with water, mixed."],

  /* WHISKY, BEER, WINE */
  ["whisky", "Yamazaki", "山崎蒸溜所", [27], "Suntory's first malt distillery (1923), at a historic spot in Shimamoto, Osaka, known for its fine water.", "Fruity, floral and mellow, with Mizunara notes.", "Neat."],
  ["whisky", "Hakushu", "白州蒸溜所", [19], "A forest distillery in the Southern Alps (Yamanashi).", "Fresh, green, herbal and lightly smoky.", "Highball."],
  ["whisky", "Chichibu", "秩父蒸溜所", [11], "Ichiro's Malt, a small independent distillery in Saitama using local barley and Mizunara casks.", "Rich, fruity and complex.", "Neat."],
  ["whisky", "Miyagikyo", "宮城峡蒸溜所", [4], "Nikka's distillery near Sendai, with a soft, fruity house style.", "Soft, fruity.", "Neat or water."],
  ["whisky", "Yoichi", "余市蒸溜所", [1], "Nikka's first distillery (1934), coal-fired pot stills and the cool sea air of Hokkaido.", "Briny, peaty and rich.", "Neat."],
  ["whisky", "Akkeshi", "厚岸蒸溜所", [1], "A new distillery on Hokkaido's wild east coast, in a misty region with local peat.", "Smoky, maritime.", "Neat."],
  ["whisky", "Fuji Gotemba", "富士御殿場蒸溜所", [22], "Kirin's distillery at the foot of Mt Fuji, combining malt and grain whisky.", "Smooth, sweet.", "Highball."],
  ["whisky", "Shizuoka Distillery", "静岡蒸溜所", [22], "A craft distillery with wood-fired stills.", "Fruity, smoky.", "Neat."],
  ["whisky", "Mars Shinshu", "マルス信州蒸溜所", [20], "Distillery at altitude in the Nagano Alps.", "Clean, fruity.", "Neat."],
  ["whisky", "Mars Tsunuki", "マルス津貫蒸溜所", [46], "Honbo Shuzo's southern whisky distillery in Kagoshima, warm climate ageing.", "Mellow, sweet.", "Neat."],
  ["whisky", "Eigashima (White Oak)", "江井ヶ嶋酒造", [28], "One of Japan's earliest whisky licences (1919), alongside sake and shochu.", "Smooth, sweet.", "Neat."],
  ["whisky", "Sapporo Beer", "サッポロビール", [1], "Japan's first beer company (1876), at the centre of Hokkaido's beer culture, with Sapporo Classic available only locally.", "Crisp lager.", "With jingisukan."],
  ["whisky", "Echigo Beer", "エチゴビール", [15], "Japan's first licensed microbrewery after the 1994 deregulation.", "Fresh, crafty.", "Craft beer movement."],
  ["whisky", "Koshu wine", "甲州ワイン", [19], "Katsunuma in Yamanashi grows the native Koshu grape for a white wine that pairs with Japanese food.", "Light, citrusy, subtle.", "With sushi and tempura."],
  ["whisky", "Nagano & Hokkaido wine", "長野・北海道のワイン", [20, 1], "Cool-climate wines: Nagano's Merlot and Chardonnay (Shiojiri, Kikyogahara) and Hokkaido's Pinot Noir and Kerner (Yoichi, Furano).", "Crisp, fresh.", "Seafood and game."],
  ["whisky", "Umeshu", "梅酒", [30], "Wakayama grows most of Japan's ume plums, and the region's umeshu (plum liqueur) is synonymous with them.", "Sweet-sour, plummy.", "On the rocks or with soda."]
];

const ITEMS = ITEMS_RAW.map(([cat, name, ja, prefs, text, flavor, use], i) => ({ id: "i" + i, cat, name, ja, prefs, text, flavor, use }));

/* months: 0 off, 1 good, 2 peak (Jan..Dec) */
const FISH = [
  { id: "bluefin", en: "Bluefin tuna", ja: "クロマグロ", latin: "Thunnus orientalis", alt: "Hon-maguro, Kuro-maguro",
    intro: "Japan's most prized fish. The juveniles are named differently in east and west, while the adults are called hon-maguro (true tuna) or kuro-maguro (black tuna) everywhere. Oma in Aomori is the celebrity name.",
    months: [2, 2, 1, 0, 0, 0, 0, 1, 1, 2, 2, 2],
    seasons: [{ m: [10, 2], n: "Winter tuna", j: "寒マグロ", t: "Fattiest when caught in cold water: Oma's season runs from autumn to winter." }],
    systems: [
      { label: "East: Tohoku, Kanto & Hokuriku", prefs: [3, 4, 5, 6, 7, 8, 12, 13, 14, 15, 16, 17, 22], names: [{ n: "Meji", j: "メジ", s: "young", t: "The common name for juvenile bluefin in the east." }, { n: "Hon-maguro / Kuro-maguro", j: "本鮪・黒鮪", s: "adult", t: "Full-grown fish." }] },
      { label: "Aomori (Oma)", prefs: [2], names: [{ n: "Oma-maguro", j: "大間まぐろ", s: "brand", t: "Line-caught in the Tsugaru Strait, the most expensive tuna in the market." }] },
      { label: "West: Kansai to Kyushu", prefs: [24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], names: [{ n: "Yokowa", j: "ヨコワ", s: "young", t: "Juvenile bluefin in Kansai, Shikoku and Kyushu." }, { n: "Shibi", j: "シビ", s: "older, western word", t: "An older western word for tuna, still heard in Kyushu and Kochi." }, { n: "Hon-maguro", j: "本鮪", s: "adult", t: "Full-grown fish." }] }
    ],
    flavor: "Lean akami is clean and iron-rich; chutoro is balanced; otoro is rich and melting.", use: "Sushi, sashimi, zuke (soy-marinated), negitoro." },

  { id: "buri", en: "Yellowtail", ja: "ブリ", latin: "Seriola quinqueradiata", alt: "Buri, Hamachi, Inada",
    intro: "The textbook shusse-uo. Every region has its own ladder of four or five names as the fish grows, and the names change at the border between east and west.",
    months: [2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2],
    seasons: [{ m: [12, 2], n: "Kan-buri", j: "寒鰤", t: "Winter yellowtail at its fattiest, especially from Himi (Toyama)." }],
    systems: [
      { label: "East & Tokai", prefs: [3, 4, 7, 8, 12, 13, 14, 22, 23], names: [{ n: "Wakashi", j: "ワカシ", s: "under 35 cm", t: "Smallest stage." }, { n: "Inada", j: "イナダ", s: "35-60 cm", t: "Popular for grilling and sashimi." }, { n: "Warasa", j: "ワラサ", s: "60-80 cm", t: "Medium-large." }, { n: "Buri", j: "ブリ", s: "80 cm+", t: "Adult." }] },
      { label: "Kansai & Setouchi", prefs: [24, 25, 26, 27, 28, 29, 30, 33, 34, 36, 37, 38, 39], names: [{ n: "Tsubasu / Wakana", j: "ツバス", s: "small", t: "Smallest stage." }, { n: "Hamachi", j: "ハマチ", s: "medium", t: "Also the name for farmed yellowtail all over Japan (first farmed in Kagawa, 1920s)." }, { n: "Mejiro", j: "メジロ", s: "larger", t: "Medium-large." }, { n: "Buri", j: "ブリ", s: "adult", t: "Winter fat." }] },
      { label: "Hokuriku (Sea of Japan)", prefs: [15, 16, 17, 18], names: [{ n: "Tsubaiso", j: "ツバイソ", s: "small", t: "Toyama name." }, { n: "Kozukura", j: "コズクラ", s: "medium", t: "Mid stage." }, { n: "Fukuragi", j: "フクラギ", s: "larger", t: "Popular for sashimi." }, { n: "Buri", j: "ブリ", s: "adult", t: "Winter fish from Himi." }] },
      { label: "Kyushu & San'in", prefs: [31, 32, 35, 40, 41, 42, 43, 44, 45, 46], names: [{ n: "Yazu", j: "ヤズ", s: "young", t: "Young yellowtail." }, { n: "Hamachi", j: "ハマチ", s: "medium", t: "Used as in Kansai." }, { n: "Buri", j: "ブリ", s: "adult", t: "Adult." }] }
    ],
    flavor: "Winter buri is rich, firm and sweet; Inada is lighter and cleaner.", use: "Sashimi, teriyaki, buri-daikon simmered with radish, shabu-shabu (Toyama)." },

  { id: "suzuki", en: "Japanese seabass", ja: "スズキ", latin: "Lateolabrax japonicus", alt: "Seigo, Fukko, Suzuki",
    intro: "A summer fish with a ladder of three or four names. Seigo to Fukko to Suzuki in the east; Seigo to Hane to Suzuki in the west.",
    months: [0, 0, 0, 1, 1, 2, 2, 2, 1, 1, 0, 0],
    seasons: [{ m: [6, 8], n: "Summer suzuki", j: "夏スズキ", t: "In peak summer, served as 'arai' (washed in ice water) sashimi." }],
    systems: [
      { label: "Kanto & Tokai", prefs: [4, 7, 8, 12, 13, 14, 22, 23], names: [{ n: "Seigo", j: "セイゴ", s: "under 30 cm", t: "Smallest." }, { n: "Fukko", j: "フッコ", s: "30-60 cm", t: "Medium." }, { n: "Suzuki", j: "スズキ", s: "60 cm+", t: "Adult." }] },
      { label: "Kansai & Setouchi", prefs: [27, 28, 30, 33, 34, 36, 37, 38], names: [{ n: "Seigo", j: "セイゴ", s: "small", t: "Smallest." }, { n: "Hane", j: "ハネ", s: "medium", t: "Named for its leaps." }, { n: "Suzuki", j: "スズキ", s: "adult", t: "Adult." }] },
      { label: "Lake Shinji (Shimane)", prefs: [32], names: [{ n: "Suzuki hosho-yaki", j: "鱸奉書焼", s: "dish", t: "One of the 'Seven delicacies of Lake Shinji'; the fish is steamed in paper." }] }
    ],
    flavor: "White, clean flesh with light sweetness; best in summer.", use: "Arai sashimi, hosho-yaki, shioyaki, meuniere." },

  { id: "bora", en: "Grey mullet", ja: "ボラ", latin: "Mugil cephalus", alt: "Bora",
    intro: "The Edo-era classic of promotion: five stages, with the last name 'todo' giving us the phrase 'todo no tsumari', meaning 'in the end'.",
    months: [2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 2],
    seasons: [{ m: [10, 12], n: "Roe season", j: "子持ちボラ", t: "Karasumi (dried mullet roe) is made from October to December." }],
    systems: [
      { label: "Edo lineage (Kanto)", prefs: [12, 13, 14], names: [{ n: "Hairan / Oboko", j: "ハク・オボコ", s: "tiny", t: "Fry." }, { n: "Subashiri", j: "スバシリ", s: "small", t: "Juvenile." }, { n: "Ina", j: "イナ", s: "medium", t: "Prized for its tender flesh; the origin of 'ina-se' (dashing)." }, { n: "Bora", j: "ボラ", s: "large", t: "Adult." }, { n: "Todo", j: "トド", s: "huge", t: "Old, huge fish." }] },
      { label: "Nagasaki (karasumi)", prefs: [42], names: [{ n: "Karasumi", j: "からすみ", s: "salted roe", t: "One of Nagasaki's three delicacies (chinmi)." }] }
    ],
    flavor: "Mild, slightly earthy flesh; roe is intensely savoury and sweet when salted.", use: "Karasumi (sliced thin with sake), simmered Ina." },

  { id: "tai", en: "Red sea bream", ja: "マダイ", latin: "Pagrus major", alt: "Madai, Kasugo",
    intro: "The fish of celebration. Its name echoes 'medetai' (auspicious). Famous brand names (Naruto, Akashi) come from the tidal currents, and seasonal names mark its colour.",
    months: [0, 0, 1, 2, 2, 1, 0, 0, 0, 1, 2, 1],
    seasons: [{ m: [3, 5], n: "Sakura-dai", j: "桜鯛", t: "Spring spawning sea bream with a pink cherry blossom blush." }, { m: [10, 12], n: "Momiji-dai", j: "紅葉鯛", t: "Autumn sea bream, fat before winter, red like fall leaves." }],
    systems: [
      { label: "Nationwide", prefs: [12, 13, 14, 22, 23, 24, 27, 30, 33, 34, 35, 38, 39, 40, 41, 42, 43, 44, 45, 46], names: [{ n: "Kasugo", j: "カスゴ", s: "young", t: "Small bream." }, { n: "Madai", j: "真鯛", s: "adult", t: "Auspicious." }] },
      { label: "Naruto & Akashi", prefs: [28, 36, 37], names: [{ n: "Naruto-dai / Akashi-dai", j: "鳴門鯛・明石鯛", s: "brand", t: "Firm flesh from fast tides of the Naruto Strait and Akashi Strait." }] }
    ],
    flavor: "Delicate, sweet and clean with a firm texture.", use: "Sashimi, whole grilled (for festivals), taimeshi (rice), kobujime." },

  { id: "katsuo", en: "Skipjack / Bonito", ja: "カツオ", latin: "Katsuwonus pelamis", alt: "Katsuo",
    intro: "Two seasons, two names. The lean Hatsu-gatsuo (first bonito) heads north in spring; the fatty Modori-gatsuo (returning bonito) comes back south in autumn.",
    months: [0, 0, 0, 1, 2, 2, 1, 0, 1, 2, 1, 0],
    seasons: [{ m: [4, 6], n: "Hatsu-gatsuo", j: "初鰹", t: "'First bonito', lean and fresh. Edo townspeople pawned their belongings to eat it." }, { m: [9, 11], n: "Modori-gatsuo", j: "戻り鰹", t: "'Returning bonito', fatter and richer from the northern feeding grounds." }],
    systems: [
      { label: "Tosa (Shikoku)", prefs: [36, 38, 39], names: [{ n: "Hatsu-gatsuo", j: "初鰹", s: "spring", t: "First of the season." }, { n: "Modori-gatsuo", j: "戻り鰹", s: "autumn", t: "Fatty." }] },
      { label: "Kanto & Tokai", prefs: [12, 13, 14, 22, 23, 24], names: [{ n: "Hatsu-gatsuo", j: "初鰹", s: "spring", t: "Edo's craze." }, { n: "Modori-gatsuo", j: "戻り鰹", s: "autumn", t: "Autumn." }] },
      { label: "Sanriku", prefs: [3, 4], names: [{ n: "Modori-gatsuo", j: "戻り鰹", s: "autumn", t: "Kesennuma in Miyagi lands lots of bonito in autumn." }] },
      { label: "Katsuobushi coast", prefs: [45, 46], names: [{ n: "Arabushi → Karebushi", j: "荒節・枯節", s: "processed", t: "Smoked and dried; then mold-cured to karebushi." }] }
    ],
    flavor: "Hatsu: lean, grassy, clean. Modori: fatty, rich, savoury.", use: "Tosa-zukuri tataki with garlic and ponzu, sashimi, katsuobushi." },

  { id: "sawara", en: "Spanish mackerel", ja: "サワラ", latin: "Scomberomorus niphonius", alt: "Sagoshi, Sawara",
    intro: "The kanji 鰆 combines fish and spring: in the Seto Inland Sea, it is the spring fish. But in the east and on the Japan Sea, winter 'kan-sawara' is prized.",
    months: [2, 1, 0, 1, 2, 1, 0, 0, 0, 1, 1, 2],
    seasons: [{ m: [4, 5], n: "Haru-sawara", j: "春鰆", t: "Spring spawning run in Seto Inland Sea; Okayama's spring tradition." }, { m: [12, 2], n: "Kan-sawara", j: "寒鰆", t: "Winter fat Sawara, popular in the Kanto region and the Sea of Japan." }],
    systems: [
      { label: "East (Kanto, Tohoku)", prefs: [4, 7, 8, 12, 13, 14], names: [{ n: "Sagoshi", j: "サゴシ", s: "young", t: "Under 50 cm." }, { n: "Sawara", j: "サワラ", s: "adult", t: "Winter fat Sawara." }] },
      { label: "West (Hokuriku, Kansai, Setouchi)", prefs: [15, 16, 17, 18, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38], names: [{ n: "Sagoshi", j: "サゴシ", s: "young", t: "Under 50 cm." }, { n: "Yanagi", j: "ヤナギ", s: "medium", t: "Medium." }, { n: "Sawara", j: "サワラ", s: "adult", t: "Spring fish." }] }
    ],
    flavor: "Delicate, soft flesh, light fat, mild flavor.", use: "Saikyo-yaki, sashimi (very fresh), sawara sushi (Okayama)." },

  { id: "zuwai", en: "Snow crab", ja: "ズワイガニ", latin: "Chionoecetes opilio", alt: "Matsuba, Echizen, Taiza",
    intro: "A single species wearing different brand names depending on the port it is landed at, and male and female crabs carry different names.",
    months: [2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2],
    seasons: [{ m: [11, 3], n: "Crab season", j: "解禁", t: "Opens November 6 on the Sea of Japan; closes in March." }],
    systems: [
      { label: "Fukui (Echizen)", prefs: [18], names: [{ n: "Echizen-gani", j: "越前ガニ", s: "male", t: "Marked with a yellow tag at Mikuni port." }, { n: "Seiko-gani", j: "セイコガニ", s: "female", t: "Small female with eggs; only caught until late December." }] },
      { label: "Ishikawa (Kano)", prefs: [17], names: [{ n: "Kano-gani", j: "加能ガニ", s: "male", t: "Ishikawa's male brand." }, { n: "Kobako-gani", j: "香箱ガニ", s: "female", t: "Female crab, eaten whole from the shell." }] },
      { label: "Kyoto (Tango)", prefs: [26], names: [{ n: "Taiza-gani", j: "間人ガニ", s: "male", t: "A top premium crab from Taiza port, with a green tag." }] },
      { label: "San'in (Tajima, Tottori, Shimane)", prefs: [28, 31, 32], names: [{ n: "Matsuba-gani", j: "松葉ガニ", s: "male", t: "The San'in name for male snow crab." }, { n: "Seko-gani", j: "セコガニ", s: "female", t: "Female crab." }] }
    ],
    flavor: "Sweet, delicate flesh; the miso (innards) and eggs of the female are prized.", use: "Boiled, grilled, sashimi, kani-nabe, kani-meshi." },

  { id: "fugu", en: "Tiger pufferfish", ja: "トラフグ", latin: "Takifugu rubripes", alt: "Fugu, Fuku, Teppo",
    intro: "Same fish, three attitudes. In Shimonoseki it's called 'fuku' (fortune) rather than 'fugu', Osaka calls it 'teppo' (gun) because its poison can kill, and in Tokyo it is just fugu.",
    months: [2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2],
    seasons: [{ m: [11, 2], n: "Winter fugu", j: "冬のふぐ", t: "The tiger puffer is fattiest in cold water." }],
    systems: [
      { label: "Shimonoseki & northern Kyushu", prefs: [35, 40], names: [{ n: "Fuku", j: "ふく", s: "lucky name", t: "Written in hiragana as 'fuku', meaning fortune; avoids 'fu-gu' (misfortune)." }] },
      { label: "Osaka & Kansai", prefs: [26, 27, 28, 30], names: [{ n: "Teppo", j: "てっぽう", s: "nickname", t: "'Gun': it can hit you." }, { n: "Tessa", j: "てっさ", s: "sashimi", t: "Fugu sashimi sliced paper-thin." }, { n: "Tecchiri", j: "てっちり", s: "hot pot", t: "Fugu nabe." }] },
      { label: "Elsewhere", prefs: [13, 22, 23, 24, 33, 34, 41, 42, 43, 44], names: [{ n: "Fugu", j: "ふぐ", s: "standard", t: "Standard name." }] }
    ],
    flavor: "Mild, lean and firm, with a subtle sweetness; texture is the point.", use: "Tessa, tecchiri, karaage, hirezake (hot sake with grilled fin)." },

  { id: "sake", en: "Chum salmon", ja: "シロザケ", latin: "Oncorhynchus keta", alt: "Shake, Aki-aji, Tokishirazu",
    intro: "Salmon is the fish of Hokkaido and Tohoku, with seasonal names that follow its run: from the rare early-summer fish to the autumn run.",
    months: [0, 0, 0, 0, 1, 1, 1, 0, 2, 2, 2, 1],
    seasons: [{ m: [5, 7], n: "Tokishirazu", j: "時知らず", t: "'Out-of-season salmon', caught early summer and rich in fat." }, { m: [9, 11], n: "Aki-aji", j: "秋味", t: "'Taste of autumn', the main autumn run." }],
    systems: [
      { label: "Hokkaido & Tohoku", prefs: [1, 2, 3, 4, 5, 15], names: [{ n: "Tokishirazu", j: "時知らず", s: "early summer", t: "Rich and fatty." }, { n: "Aki-aji", j: "秋味", s: "autumn", t: "Autumn run." }, { n: "Ginke / Buna", j: "銀毛・ブナ", s: "silver / dark", t: "Fresh silver fish vs. dark spawning fish." }] }
    ],
    flavor: "Mild with moderate fat; roe (ikura) is salty and popping.", use: "Shioyaki, ishikari-nabe, ikura, chanchan-yaki." }
];
