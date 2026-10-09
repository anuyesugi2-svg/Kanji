/* Enrichment pass: corrections and craft-level detail checked against Japanese sources.
   Items with a `src` list were cross-checked; items without one are flagged in the UI. */

const P = (name, o) => { const it = ITEMS.find(i => i.name === name); if (!it) throw new Error("No item: " + name); Object.assign(it, o); };
const FP = (id, o) => { const f = FISH.find(i => i.id === id); if (!f) throw new Error("No fish: " + id); Object.assign(f, o); };

/* ---------- category intros (corrected) ---------- */
CAT_INTRO.shoyu = "Under the JAS standard there are five types: koikuchi (about 85% of output), usukuchi (about 11%), tamari (2%), saishikomi (0.9%) and shiro (0.7%), according to the 2023 industry survey. They differ in the soy-to-wheat ratio, salt, ripening and colour.";
CAT_INTRO.miso = "By koji, rice miso is about 82% of shipments, soybean (mame) miso about 5%, barley (mugi) miso about 4% and blended miso about 9%. Sweetness is set by koji ratio (koji-buai) and salt: more koji and less salt gives a sweet white miso, less koji and more salt a dry red one. Soybean miso uses 100% bean koji.";
CAT_INTRO.dashi = "More than 90% of Japan's kombu is harvested in Hokkaido, and about 30% of it around Hakodate. Each stretch of coast makes a different kind. Naga kombu is the highest-volume type, while Rishiri, Ma, Rausu and Hidaka are the main dashi kombu. Ships carried it down the Sea of Japan to Osaka, shaping the dashi of the west.";

/* ---------- SHOYU ---------- */
P("Koikuchi (dark)", {
  text: "Roughly 85% of all soy sauce (84.9% in the 2023 industry survey). The koji uses soybeans and wheat in about equal parts, and a long ripening builds the colour, aroma and body. Edo's population and the Tone River trade made Noda and Choshi in Chiba the giants of the craft.",
  craft: "Salt is roughly 16% (sources give 16-17%). Equal soy and wheat in the koji is what separates it from tamari (soy-heavy) and shiro (wheat-heavy).",
  src: [["Japan Soy Sauce Association: types", "https://www.soysauce.or.jp/faq/about-kinds"], ["Japan Soy Sauce Association: data", "https://www.soysauce.or.jp/knowledge/data"], ["MAFF: koikuchi and usukuchi", "https://www.maff.go.jp/j/heya/kodomo_sodan/0406/05.html"]] });
P("Usukuchi (light)", {
  text: "Credited to Tatsuno (Hyogo) in 1666 (Kanbun 6) by Enoo Magoemon, who added amazake. The clan promoted it in 1672 as a 'first-rate product of the domain'. Pale so that it does not colour simmered food, which is why Kyoto's shojin and tea-kaiseki cooking adopted it. About 11% of production.",
  craft: "Salt is higher than koikuchi (about 18-19% against 16-17%, roughly a tenth more) and ripening is shorter to hold the colour back. Season less than you would with koikuchi. The soft, low-iron water of the Ibo River is cited as part of Tatsuno's advantage.",
  src: [["Kikkoman Institute: Tatsuno usukuchi", "https://www.kikkoman.com/jp/kiifc/publication/foodculture/pdf/no28_j_006_010.pdf"], ["Osaka Prefecture: Tatsuno and Osaka cuisine", "https://www.pref.osaka.lg.jp/documents/32863/osakanodashi019-2.pdf"], ["Mieman Shoyu: koikuchi vs usukuchi", "https://mieman.co.jp/?mode=f8"]] });
P("Tamari", {
  text: "Made from soybeans only, or soybeans with a small amount of wheat, and mostly in the Tokai region. About 2% of production. Descended from the liquid that gathers in miso barrels.",
  craft: "Salt is about the same as koikuchi, but the umami is so dense that you use less. Viscous, which is why it glazes (teri), simmers tsukudani and dips sashimi well.",
  src: [["Japan Soy Sauce Association: types", "https://www.soysauce.or.jp/faq/about-kinds"], ["San-J: tamari", "https://www.san-j.co.jp/sanjirushi/tamari-soysauce"]] });
P("Shiro (white)", {
  text: "Wheat-dominant: one maker's ratio is wheat 9 to soy 1. Pale amber and high in sugars. Associated with Hekinan in Aichi (one maker dates it to the early 1800s from the liquid on top of kinzanji miso). Only 0.7% of production.",
  craft: "Use where colour is the point: chawanmushi, ohitashi, clear dishes, pale glazes. Sweeter and lighter in aroma than any other type.",
  src: [["Yamashin: about white shoyu", "https://www.yamashin-shoyu.co.jp/know/"], ["Waraku Web: shiro-tamari", "https://intojapanwaraku.com/rock/gourmet-rock/54421/"]] });
P("Saishikomi (twice-brewed)", {
  text: "'Re-brewed': the moromi is mashed with finished raw shoyu in place of brine. Born in Yanai (Yamaguchi), where it is called kanro shoyu, and traditionally made from San'in through northern Kyushu. About 0.9% of production.",
  craft: "A table shoyu rather than a cooking shoyu. Use as a dipping sauce for sashimi, sushi and cold tofu.",
  src: [["Yanai City: kanro shoyu", "https://www.city-yanai.jp/site/kanko/kanroshoyu-sagawa.html"], ["Japan Soy Sauce Association: types", "https://www.soysauce.or.jp/faq/about-kinds"]] });
P("Kyushu sweet shoyu", {
  text: "Sweeter the further south you go, with Kagoshima the sweetest. The sweetness comes from added sugar and sweeteners (licorice, stevia). The origin is debated: sugar landed at Nagasaki's Dejima, a taste for sweet seasoning, and a pairing with fresh sashimi are all cited, and no single reason is settled.",
  craft: "Judge it as a seasoning for sashimi and simmering, not as a swap for koikuchi: the sugar changes how you balance mirin and sugar in a stew.",
  src: [["WalkerPlus: why Kyushu shoyu is sweet", "https://www.walkerplus.com/article/1079167/"], ["Amami Bussan: Kagoshima sweet shoyu", "https://www.amamibussan.jp/info/food/kagoshima-sweet-soysauce/"]] });
P("Yuasa: where shoyu began", {
  text: "In 1249 the priest Kakushin returned from Song China with the kinzanji miso method. The liquid that collected in the barrels is told as the origin of shoyu, and Yuasa is recognised as a Japan Heritage site under the title 'The first drop'. Another account points to the local water.",
  craft: "Visit the old brewing streets to see kioke barrels and the town's long link between kinzanji miso and shoyu.",
  src: [["Japan Heritage: Yuasa", "https://japan-heritage.bunka.go.jp/ja/stories/story047/"], ["Wakayama Tourism", "https://www.wakayama-kanko.or.jp/features/detail_492.html"]] });
P("Shodoshima", { text: "An island in the Seto Inland Sea known as one of Japan's shoyu islands, with makers who still brew in wooden kioke barrels. Confirm each maker's method on a visit." });

/* ---------- MISO ---------- */
P("Sendai miso", {
  text: "A red, dry-style (karakuchi) rice miso. It follows the Onsogura, the miso brewery Date Masamune had built in Sendai.",
  craft: "Karakuchi miso is generally about 12% salt with 5-10 parts of koji per 10 of soybeans. Aged to a deeper red than the sweet misos.",
  src: [["Marukome: miso types", "https://www.marukome.co.jp/miso/"], ["Furunavi: miso types", "https://furunavi.jp/discovery/knowledge_food/202505-miso/"]] });
P("Shinshu miso", {
  text: "A pale, dry-style rice miso from Nagano. By shipping volume it holds roughly 46% to over 50% of the national market, depending on the source. Tradition links its spread to Takeda Shingen's army rations and to relief supplies after the 1923 Kanto earthquake.",
  craft: "Clean, balanced and stable, which is why it is the default miso for everyday soup. Ask for the year of the survey when quoting the share.",
  src: [["Shinshu Miso Association", "https://shinshu-miso.or.jp/learn/"], ["Furunavi: miso types", "https://furunavi.jp/discovery/knowledge_food/202505-miso/"]] });
P("Hatcho miso", {
  text: "Soybean-only miso from Hatcho village, Okazaki, made by two houses (Kakukyu and Maruya). Aged two summers and two winters (two years or more) in cedar barrels topped with a cone of river stones.",
  craft: "A 6-ton barrel carries about 3 tons of stones, 350-500 of them. Very little water, so the weight spreads the moisture through the barrel. Salt is about 11.4 g per 100 g in one maker's product. White crystals are amino acids, not mold. For akadashi, blend with a lighter miso.",
  src: [["Aichi Now: Kakukyu", "https://aichinow.pref.aichi.jp/stories/detail/12/"], ["Marukome: Kakukyu's Hatcho miso", "https://www.marukome.co.jp/marukome_omiso/hakkoubishoku/20250619/21577/"], ["Okazaki Tourism: Hatcho miso", "https://okazaki-kanko.jp/feature/miso/top"]] });
P("Saikyo miso", {
  text: "A sweet white rice miso with a very high koji ratio and short ageing, long used at the Kyoto court. It is one of the white-miso trio together with Hiroshima's Fuchu miso and Kagawa's Sanuki miso.",
  craft: "Koji ratio is reported at 20-25 parts per 10 of soybeans with only 5-7% salt, hence the sweetness and the quick ageing. Salty and sweet balance: reduce other sugars when using it for Saikyo-yaki.",
  src: [["Furunavi: miso types", "https://furunavi.jp/discovery/knowledge_food/202505-miso/"], ["Hikari Miso: miso encyclopedia", "https://www.hikarimiso.co.jp/enjoy-miso/encyclopedia/type.html"]] });
P("Sanuki white miso (an-mochi zoni)", {
  text: "Sanuki miso is counted among Japan's three great white misos. At New Year Kagawa serves round mochi filled with sweet bean paste (an-mochi) in a white miso soup.",
  src: [["Furunavi: miso types", "https://furunavi.jp/discovery/knowledge_food/202505-miso/"]] });
P("Kyushu & Setouchi barley miso", {
  text: "Barley koji miso, made mainly in Kyushu, Shikoku and Chugoku. Satsuma mugi miso (Kagoshima and Kumamoto) is a sweet, light-coloured example used for satsuma-jiru.",
  craft: "Barley miso is only about 4% of national shipments, so most outside Kyushu never taste it.",
  src: [["Marukome: miso", "https://www.marukome.co.jp/miso/"], ["Furunavi: miso types", "https://furunavi.jp/discovery/knowledge_food/202505-miso/"]] });
P("Edo-ama miso", {
  text: "A sweet red rice miso with high koji and little salt, made to ripen quickly. It is one of the Edo-period misos.",
  src: [["Furunavi: miso types", "https://furunavi.jp/discovery/knowledge_food/202505-miso/"]] });

/* ---------- KOMBU & DASHI ---------- */
P("Rishiri kombu", {
  text: "Grown around Rishiri and Rebun near Wakkanai. Firmer than Ma-kombu, with a clear, lightly salty dashi that suits the pale flavours of Kyoto cooking and clear soup. The firm body also makes it the kombu for tororo and oboro.",
  craft: "In Kyoto it is the most trusted dashi kombu. Soft water matters: Kyoto's average hardness is about 42 mg/L and hardness 50 or below is the guide. Hard water cuts extraction.",
  src: [["Kombu Net: kombu types", "https://kombu.or.jp/power/shurui"], ["Kurakon: kombu regions and types", "https://www.kurakon.jp/ency_kombu/03.html"], ["Odashi: Rishiri kombu", "https://odashi.co.jp/rishirikombu-howto/"]] });
P("Rausu kombu", {
  text: "From the Rausu coast of the Shiretoko Peninsula. Fragrant and soft with a yellowish tint, and a rich, full-bodied dashi, called the king of dashi.",
  craft: "Choose it for strong-flavoured dishes and hot pot, where a rich dashi is wanted.",
  src: [["Kombu Net: kombu types", "https://kombu.or.jp/power/shurui"], ["Shirogohan.com: kombu types", "https://www.sirogohan.com/recipe/kobu/"]] });
P("Ma-kombu", {
  text: "From the Hakodate coast. Broad and thick, giving a clear dashi with refined sweetness. Hakodate produces about 30% of Japan's kombu. It is the main dashi kombu of Osaka and used in Kyoto and Osaka restaurants.",
  craft: "The classic partner for katsuobushi in ichiban dashi in the Kansai. Clear and sweet, so it does not fight delicate fish.",
  src: [["Kombu Net: kombu types", "https://kombu.or.jp/power/shurui"], ["Hakodate Ma-kombu", "https://makombu.marine-hakodate.jp/about/"]] });
P("Hidaka kombu", {
  text: "From the Hidaka coast; botanically 'Mitsuishi kombu'. Soft and quick to cook, used both for dashi and for eating.",
  craft: "A home staple and a kobumaki and tsukudani kombu. Sources differ on whether it is a dashi or an eating kombu, and it works as both.",
  src: [["Kombu Net: kombu types", "https://kombu.or.jp/power/shurui"], ["Kobayashi Foods: 6 kombu", "https://www.kobayashi-foods.co.jp/washoku-no-umami/kind-of-kelp"]] });
P("Naga kombu", {
  text: "From Kushiro and Nemuro in eastern Hokkaido. Ribbons of 6 to 15 m, and the highest-volume kombu in Japan. Mostly for tsukudani, kobumaki and oden.",
  craft: "Atsuba (thick-leaf) kombu grows in the same waters and goes into kobumaki, tsukudani and su-kombu.",
  src: [["Kombu Net: kombu types", "https://kombu.or.jp/power/shurui"], ["Kurakon: kombu regions and types", "https://www.kurakon.jp/ency_kombu/03.html"]] });
P("The Kombu Road", {
  text: "Kitamae-bune merchant ships took Hokkaido kombu to Toyama and Tsuruga, then west by the Sea of Japan and Shimonoseki to Osaka and Sakai. Satsuma took kombu south: Naha had a kombu exchange (Kombuza), and Satsuma traded its sugar for kombu at Sakai and Shimonoseki before shipping it through the Ryukyu Kingdom to Qing China. The line on the map is a simplified route.",
  flavor: "Kombu dashi for the west, katsuobushi for the east.",
  src: [["JR West: Kitamae-bune route", "https://www.westjr.co.jp/company/info/issue/bsignal/06_vol_104/feature02.html"], ["Olive Hitomawashi: Satsuma-Ryukyu-Qing", "https://www.olive-hitomawashi.com/column/2018/11/post-3190.html"], ["Agency for Cultural Affairs: Tsuruga kombu", "https://www.bunka.go.jp/seisaku/bunkazai/joseishien/syokubunka_story/pdf/93910607_02.pdf"]] });
P("Toyama: kombu-jime & kobu-musubi", {
  text: "Toyama is a stop on the Kombu Road and still tops Japan in household kombu spending: about 1,887 yen per household in a recent survey, about 2.2 times the national average. Kombu-jime (fish pressed between kombu), kobumaki and tororo kombu onigiri are its habits.",
  craft: "Kombu-jime draws water from the fish while the kombu lends it umami: use a thin, soft kombu and rest it for hours.",
  src: [["Todo-ran: kombu consumption by prefecture", "https://todo-ran.com/t/kiji/14642"], ["Region-case: kombu consumption", "https://region-case.com/rank-r2-konbu/"], ["JR West: Kitamae-bune route", "https://www.westjr.co.jp/company/info/issue/bsignal/06_vol_104/feature02.html"]] });
P("Oboro & tororo kombu", {
  text: "Craftsmen in Tsuruga (Fukui) and Sakai (Osaka) hand-shave vinegared kombu into feather-thin sheets. Tsuruga's oboro kombu was recognised in a 2022 Agency for Cultural Affairs project on Tsuruga's kombu story.",
  src: [["Agency for Cultural Affairs: Tsuruga kombu", "https://www.bunka.go.jp/seisaku/bunkazai/joseishien/syokubunka_story/pdf/93910607_02.pdf"]] });
P("Okinawa kubu-irichi", {
  text: "Kubu is Okinawan for kombu, brought in by the Kombu Road trade. Strips are stir-fried with pork and konnyaku (irichi is the stir-fried-simmered technique). Note that current household statistics put Okinawa only in the middle on kombu consumption, so treat 'Okinawa eats the most' as a historical story.",
  src: [["MAFF: kubu-irichi", "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/47_2_okinawa.html"], ["Todo-ran: kombu consumption", "https://todo-ran.com/t/kiji/14642"]] });
P("Katsuobushi", {
  text: "Smoked, dried and (for karebushi) mold-cured skipjack. Makurazaki alone made about 53% of Japan's output in 2023, Ibusuki (Yamakawa) about 24%, and Makurazaki, Ibusuki and Yaizu together about 98%. Makurazaki katsuobushi is a GI product. Two schools: Satsuma-type (Makurazaki) and Yaizu-type.",
  flavor: "Arabushi: punchy and smoky. Karebushi: clear and clean.",
  use: "Arabushi for miso soup and udon or soba tsuyu. Hon-karebushi with kombu for ichiban dashi in clear soups.",
  craft: "Arabushi is smoked (baigan) with no mold, ready in about 20 to 30 days. Karebushi is arabushi with the surface shaved and mold applied at least twice. Ninben counts hon-karebushi as four or more rounds of mold and sun-drying, taking four to six months; other houses define it as two or three. The mold breaks down fat, so the dashi is clear. Let the shavings sink on their own, do not stir.",
  src: [["Ninben: how hon-karebushi is made", "https://www.ninben.co.jp/about/making/"], ["Kobayashi Foods: 98% producers", "https://www.kobayashi-foods.co.jp/washoku-no-umami/bonito-famous-production-area"], ["MAFF GI: Makurazaki katsuobushi", "https://www.maff.go.jp/j/shokusan/gi_act/register/0168/index.html"], ["Katsuobushi Association: arabushi and karebushi", "http://www.kezuribushi.or.jp/arabushi.html"]] });
P("Kanto vs Kansai dashi", {
  text: "Kanto leans on katsuobushi and dark koikuchi shoyu for a strong, dark broth. Kansai builds on kombu with niboshi and katsuo blended, and usukuchi shoyu used lightly. The boundary is often quoted as lying around Sekigahara, but sources differ.",
  src: [["Tabizine: Kanto and Kansai udon culture", "https://tabizine.jp/2021/01/09/374282/"]] });
ITEMS.push({ id: "i_dashitech", cat: "dashi", name: "Kombu dashi: the working method", ja: "昆布だしの取り方", prefs: [26, 27], text: "A starting ratio is 1 L of water to 10 g of kombu (12 to 15 g if the dashi will go into miso soup or stews). Cold-brew for 8 to 12 hours in the fridge (3 hours at minimum), or use the pot method: soak 30 minutes, bring to the point of boiling over about 10 minutes, then remove the kombu. For ichiban dashi add katsuobushi after the kombu comes out and let it settle without stirring. Reports of maximum extraction at about 60 C for an hour sit alongside quick methods at 60-70 C for 5 minutes, so the sources do not agree on a single optimum.", flavor: "Glutamate-led, clear and sweet.", use: "Base for suimono, yudofu and kombu-jime.", craft: "Never boil the kombu. Use soft water: hardness of 50 or below is the guide in Kyoto.", src: [["Hokkaido Gyoren: kombu dashi", "https://www.gyoren.or.jp/cooking/howto/konbu01.html"], ["Odashi: ichiban dashi", "https://odashi.co.jp/odashi-howto/"], ["Kobayashi Foods: 6 kombu", "https://www.kobayashi-foods.co.jp/washoku-no-umami/kind-of-kelp"]] });

/* ---------- SALT & MORE ---------- */
P("Ako salt", {
  text: "Ako on the Seto Inland Sea was a great salt-farm region. The modern brand 'Ako no Amashio' is made from Australian solar-evaporated salt (two years of sun and wind), which is dissolved and recrystallised in Ako, with bittern returned by the 'sashi-shio' method.",
  craft: "A reminder that a famous salt town may now work with imported raw salt: always ask where the sea salt comes from.",
  src: [["Amashio: how Ako no Amashio is made", "https://www.amashio.co.jp/akoamashio/method/"], ["Amashio Q&A", "https://www.amashio.co.jp/akoamashio/deep/"]] });
P("Noto agehama salt", {
  text: "At Suzu, the Kakuhana house has worked an agehama salt farm since before 1596. Seawater is carried up by hand to sand beds, raked (komazarae) and sun-dried for about 8 hours, then boiled in kettles. Production runs from late April to mid October, effectively half a year.",
  craft: "Sources differ on the boiling schedule: one gives 6 hours of rough boiling then 17 hours of 'honiki'; another gives about 3 hours of arakaki. The saying for apprentices is 'shio-kumi 3 years, shio-maki 10 years'.",
  src: [["Agehama salt: making salt", "https://enden.jp/making_salt/"], ["Sato-umi: agehama salt", "https://sato-umi.com/agehama-salt-making-noto/"], ["Kono Shinkin: Kakuhana house", "https://www.kono-shinkin.co.jp/network/12705/"]] });
P("Mirin", {
  text: "Hon-mirin is made from glutinous rice, rice koji and shochu or brewing alcohol, saccharified and aged, at about 14% alcohol. Koji enzymes break rice starch into glucose and oligosaccharides and protein into amino acids.",
  craft: "Industrial runs take about 40 to 60 days; traditional ones age 1 to 3 years.",
  src: [["Japan Honmirin Association", "https://www.honmirin.org/knowledge/"], ["Kobayashi Foods: mirin", "https://www.kobayashi-foods.co.jp/washoku-no-umami/sweet-sake"]] });

/* ---------- RAMEN ---------- */
P("Sapporo miso ramen", {
  text: "Credited to Omiya Morito of Aji no Sanpei, who developed miso ramen around 1954-55 (sources differ). Nishiyama Seimen's thick, springy noodle was curled to catch the miso soup. 'Ramen rice' also began at the shop. The story that tonjiru inspired it is denied by the second-generation owner.",
  craft: "Egg-enriched curled noodle, miso broth finished in a wok with lard.",
  src: [["Sapporo Travel: Nishiyama Seimen", "https://magazine.sapporo.travel/article/nishiyamaseimen/"], ["Smart Magazine: Aji no Sanpei", "https://www.smartmagazine.jp/hokkaido/article/meal/13184/"]] });
P("Asahikawa shoyu ramen", {
  text: "A double soup of pork bones and fish, a floating layer of lard and low-hydration, thin curly noodles. Hachiya opened in 1947 and uses a toasted lard; one report says pork spine and bones with horse mackerel are simmered for 8 hours.",
  craft: "Low-hydration noodles absorb broth but over-cook quickly, so serve fast.",
  src: [["Sasaru: Hachiya", "https://sasaru.media/article/gourmet/20220411_003/"], ["Mogtrip: Hachiya main shop", "https://akj.mogtrip.jp/hachiya-main/"]] });
P("Kitakata ramen", {
  text: "Flat, curly, thick, high-hydration noodles (reported at about 38-43% water, cut 12-14) that are aged, in a clear pork and niboshi shoyu soup.",
  src: [["Cookpit: Sano and Kitakata compared", "https://cookpit.jp/local-ramen-guide/gotochi-list/sanoramen/ra08/"]] });
P("Sano ramen", {
  text: "Aodake-uchi (bamboo-pole pressed) flat noodles in a clear shoyu soup. Sources disagree on thickness: some describe flat, high-hydration noodles, others medium-thin straight ones.",
  src: [["Cookpit: Sano and Kitakata compared", "https://cookpit.jp/local-ramen-guide/gotochi-list/sanoramen/ra08/"]] });
P("Tokyo shoyu ramen", {
  text: "Considered to descend from Rairaiken, which opened in Asakusa in 1910, and the model for chuka soba.",
  src: [["Jalan: regional ramen guide", "https://www.jalan.net/news/article/218551/"]] });
P("Toyama Black", {
  text: "A very dark, very salty shoyu soup with coarse black pepper and thick noodles. The original Taiki is noted for its salty soup, meant to be eaten with rice.",
  src: [["Info Toyama: Toyama Black", "https://www.info-toyama.com/articles/kamojima-toyamablack"]] });
P("Wakayama chuka soba", {
  text: "Two lines: 'Shako-mae' and 'Ide' (after Ide Shoten, about 1953). The tonkotsu-shoyu arose by accident: the clear shoyu soup clouded as it simmered. Reported ratio: pork bone 10 to chicken 1, boiled strongly for a day. Hayazushi sits beside it.",
  src: [["Ramen Museum: Ide Shoten", "https://www.raumen.co.jp/shop/ideshoten.html"], ["Cookpit: Ide Shoten recipe", "https://cookpit.jp/local-ramen/155/"]] });
P("Onomichi ramen", {
  text: "A clear shoyu soup of chicken and small fish, with minced pork back fat floating on top. Medium-thin straight noodles with low hydration (25-32%). Traces to the Showa 20s dining halls.",
  src: [["Ramen Museum: Onomichi ramen", "https://www.raumen.co.jp/rapedia/study_japan/study_raumen_onomichi.html"], ["Cookpit: Onomichi ramen", "https://cookpit.jp/ramen-jouhoukyoku/ramen-jouhoukyoku-82457/"]] });
P("Tokushima ramen", {
  text: "A pork-bone shoyu soup with sweet-simmered pork belly and raw egg, eaten with rice. Three styles: white, yellow and brown. Noodles medium-thin at 27-32% hydration. One explanation for the pork-bone supply is Tokushima's ham industry.",
  src: [["Ramen Museum: Tokushima ramen", "https://www.raumen.co.jp/rapedia/study_japan/study_raumen_tokushima.html"], ["Cookpit: Tokushima ramen", "https://cookpit.jp/local-ramen-guide/gotochi-list/tokushimaramen/"]] });
P("Hakata tonkotsu", {
  text: "Cloudy pork-bone broth with extra-thin, low-hydration, straight noodles in a small portion (about 100 g). Kaedama likely began at Nagahama for market workers, though the exact shop is not settled. The 'bari-kata' hardness names date only from the 1980s. Kurume claims the origin: Nankin Senryo in 1937 (a clear tonkotsu soup), with the cloudy broth said to appear by accident in 1947.",
  craft: "In Kurume 'yobimodoshi', topping up the broth with older stock, builds the soup. Hakata noodles are thin so they cook in seconds and go soft quickly.",
  src: [["Ramen Japan: Hakata ramen", "https://ramen-japan.jp/gotouchi/hakata-ramen/"], ["Cookpit: Kurume ramen", "https://cookpit.jp/local-ramen-guide/gotochi-list/kurumeramen/"], ["Gastrohistory: Hakata ramen", "https://gastrohistory.com/hakatara-men/"]] });

/* ---------- NOODLES ---------- */
P("Sanuki udon", {
  text: "Kagawa's firm, chewy udon. A trade standard cited for the name: made in Kagawa, by hand or in a hand-made manner, water 40% or more of flour weight, salt 3% or more, rested for 2 hours or more.",
  craft: "Seasonal brine tables: spring and autumn 48% water with 12% brine, summer 47% and 13%, winter 49% and 11%. The old rule 'do-san, kan-roku, jo-go' sets salt to water at 1 to 3 in the dog days, 1 to 6 in the cold and 1 to 5 normally. Foot-treading (ashibumi), then resting, then treading again before cutting.",
  src: [["Flour-net: ashibumi", "https://flour-net.com/column/flour_udon/column_udon/post_109.html"], ["Shimazen: process", "https://shimazen.co.jp/udon/process"], ["Marron: Sanuki udon", "https://marron-dietrecipe.com/soba_udon/sobaudon_sanukiudon1.html"]] });
P("Inaniwa udon", {
  text: "Akita's hand-rolled (tenai) udon, wrapped round two rods in a figure of eight and dried. One maker's standard cites brine of 55% or more of the flour, a one-night rest and 3-4 days to finish. No oil is used. One house, the seventh Sato Yosuke, opened its method in 1972.",
  src: [["Kanbun Gonendo: process", "https://www.kanbun.co.jp/udon/process/"], ["MAFF: noodle culture", "https://www.maff.go.jp/j/pr/aff/1607/n_search.html"]] });
P("Ise udon", {
  text: "Fat, very soft noodles in a thin, dark tare of tamari and katsuo dashi (no soup). Mie's registered standard calls for boiling 25 minutes or more; the fresh noodle is about 1 cm thick, so up to an hour is cited. Softness is explained either as serving pilgrims quickly or as gentle on tired travellers.",
  src: [["MAFF: Ise udon", "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/iseudon_mie.html"], ["Ise Jingu info: why soft", "https://ise-sengu.com/ja/gourmet/ise-udon-futoku-yawarakai-riyu/"]] });
P("Kishimen & miso-nikomi udon", {
  text: "JAS defines kishimen as a band at least 4.5 mm wide and under 2.0 mm thick; Nagoya's are about 1 mm thick and 7-8 mm wide, and boil in about half the time of udon. Miso-nikomi udon is simmered in a clay pot of Hatcho miso.",
  src: [["MAFF: noodle culture", "https://www.maff.go.jp/j/pr/aff/1607/n_search.html"], ["Tabemaro: kishimen", "https://www.tabemaro.jp/gourmet/kishimen/"]] });
P("Hoto", {
  text: "Wide flat noodles simmered raw in miso soup with pumpkin and vegetables. No salt is added to the dough and it is not rested; the floury noodle is cooked as is, which thickens the soup and keeps it hot.",
  src: [["MAFF: hoto", "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/houtou_yama_nashi.html"], ["Delish Kitchen: hoto", "https://delishkitchen.tv/articles/2309"]] });
P("Kanto vs Kansai noodle culture", {
  text: "Kanto prefers soba with a dark dipping sauce; Kansai prefers udon in a light broth. Names differ: in Kanto 'kitsune' is the fried tofu topping on udon or soba, and 'tanuki' is tenkasu. In Osaka 'kitsune' means fried tofu on udon only, and fried tofu on soba is 'tanuki'. In Kyoto 'tanuki' is shredded fried tofu in a kuzu-thickened sauce.",
  src: [["Macaroni: tanuki in Kansai", "https://macaro-ni.jp/65584"], ["Otonanswer: kitsune and tanuki", "https://otonanswer.jp/post/147101/"], ["Tabizine: Kanto and Kansai udon culture", "https://tabizine.jp/2021/01/09/374282/"]] });
P("Echizen oroshi soba", {
  text: "Cold soba topped with grated spicy daikon (karami daikon), katsuobushi and scallion, with the dashi poured over. Linked to 1601, when Honda Tomimasa brought soba makers from Fushimi to Fukui.",
  src: [["Fukui Tourism: oroshi soba", "https://www.fuku-e.com/feature/oroshisoba"], ["Echizen Tourism: soba", "https://www.echizen-tourism.jp/soba"]] });
P("Hegi soba", {
  text: "Soba bound with funori seaweed, served in a wooden hegi tray. Said to have come from Uonuma, where weaving and soba culture met.",
  src: [["MAFF: hegi soba", "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/hegisoba_niigata_niigata.html"]] });
P("Izumo warigo soba", {
  text: "Whole-kernel milled soba (hikigurumi) with about 20% wheat binder, served cold in three stacked round lacquer warigo bowls; you pour the tsuyu over each tier. Warm kamaage soba also exists.",
  src: [["MAFF: Izumo soba", "https://www.maff.go.jp/j/keikaku/syokubunka/traditional-foods/menu/izumo_soba.html"], ["Honda Shoten: Izumo soba", "https://www.sobahonda.co.jp/blog/izumosoba-toha/"]] });
P("Okinawa soba", {
  text: "Wheat noodles with no buckwheat. In 1976 the Fair Trade Commission objected to calling it 'soba'; on 17 October 1978 the name 'Honba Okinawa soba' was approved, and 17 October is now Okinawa Soba Day. Classed as a chuka noodle: kansui, water 34-36% of flour weight, and boiled noodles often oiled.",
  src: [["Okinawa Prefecture Archives: Okinawa Soba Day", "https://www.archives.pref.okinawa.jp/news/that_day/4923"], ["Okinawa Raw Noodle Cooperative", "https://oki-soba.jp/about/"], ["MAFF: Okinawa soba", "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/47_20_okinawa.html"]] });

/* ---------- MEAT ---------- */
P("Kobe & Tajima beef", {
  text: "Tajima cattle that are virgin heifers or steers, BMS 6 or higher, yield A or B, carcass 499.9 kg or less, and 28 to 60 months old. Tajima is the bloodline behind most wagyu.",
  craft: "Carcass weight floors differ by source and year, so check the current rule from the Kobe Meat Distribution Promotion Association.",
  src: [["Kobe Beef: criteria", "https://www.kobe-niku.jp/contents/about/criteria.html"], ["JA Zen-noh Hyogo: Kobe beef", "https://www.hg.zennoh.or.jp/agriculture/niku/kobe-beef.html"]] });
P("Matsusaka beef", {
  text: "Virgin heifers only, raised in the 22 municipalities of the old Matsusaka production area and registered in the individual identification system.",
  src: [["Matsusaka beef: difference between brands", "https://www.matsusakaushi.co.jp/news/2012/04/03/%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E7%89%9B%E3%81%AE%E9%81%95%E3%81%84%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/"]] });
P("Omi beef", {
  text: "Defined by being Japanese Black cattle raised longest in Shiga. The certified 'Ninsho Omi beef' is Omi beef graded A4/B4 or higher from member producers.",
  src: [["Beef-tongue.com: Omi and Hida", "https://www.beef-tongue.com/oumi-beef-hida-beef/"]] });
P("Hida beef", {
  text: "Raised longest in Gifu by producers registered under the Hida Beef brand council; meat grades 3, 4 or 5.",
  src: [["Beef-tongue.com: Omi and Hida", "https://www.beef-tongue.com/oumi-beef-hida-beef/"]] });

/* ---------- SEAWEED ---------- */
P("Ariake nori", {
  text: "Saga has led Japan in nori production for many years. Stake (shichu) cultivation lets the nets rise out of the water and submerge with the large tides, and river inflow lowers salinity, giving soft, melting nori. Setouchi nori is mostly floating-net grown and firmer, with better tear resistance. Reports on colour conflict.",
  craft: "'Ariake Ichiban' uses only first picks of the autumn and winter harvests and limits the yield per net.",
  src: [["Pride Fish: Saga nori", "https://www.pride-fish.jp/JPF/pref/detail.php?pk=1412933727"], ["Magokoro Nori: Ariake vs Setouchi vs Sanriku", "https://note.com/magokoronori/n/n904960cb9a2a"], ["San Nori: about Saga nori", "https://sannori.com/about/"]] });
P("Gagome kombu", {
  text: "A Hakodate kelp with a basket-weave pattern on the surface and unusually strong stickiness (tororo). Mostly eaten, shredded into soup and Matsumae-zuke.",
  src: [["Kombu Net: kombu types", "https://kombu.or.jp/power/shurui"], ["Kurakon: kombu regions and types", "https://www.kurakon.jp/ency_kombu/03.html"]] });

/* ---------- PICKLES ---------- */
P("Narazuke", {
  text: "Gourds pickled in sake lees, repacked with fresh lees several times. One maker re-packs every 3 months, four times, so it is at least a year; another counts five changes including the salting.",
  craft: "A home batch takes months; a craft one takes a year or more. Washing the lees off and slicing thinly is how it is served.",
  src: [["Ginza Yamau: narazuke", "https://www.ginzayama-u.co.jp/item/157/"], ["Sawanotsuru: narazuke", "https://www.sawanotsuru.co.jp/site/nihonshu-columm/enjoy/naraduke/"]] });
P("Kyoto tsukemono", {
  text: "Senmaizuke is made from Shogoin turnip sliced very thin and pressed with kombu, in season from November to March. Industrial method: 2 days under weight, then a cedar barrel, and 2 to 3 days to settle. Shelf life is only a few days.",
  src: [["MAFF: senmaizuke", "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/semmaizuke_kyoto.html"]] });
P("Iburigakko", {
  text: "Daikon smoked above a fire of oak or cherry for 2 to 5 days, then pickled in rice bran, salt and sugar for at least a couple of months (one report says 40 days or more).",
  src: [["MAFF: iburigakko", "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/29_1_akita.html"], ["Delish Kitchen: iburigakko", "https://delishkitchen.tv/articles/322"]] });
P("Funa-zushi", {
  text: "Nigorobuna from Lake Biwa, salted until the Doyo summer period (3 months or more), then packed in rice for a year or more. One old house cites two years of salting and one in rice, the 'thousand-day' method. Best eaten from late November to December.",
  src: [["Serai: funa-zushi", "https://serai.jp/gourmet/1169382"], ["Shiga Prefecture: funazushi method", "https://www.pref.shiga.lg.jp/file/attachment/1012053.pdf"]] });
P("Heshiko & fugu ovary in bran", {
  text: "Fukui's heshiko is mackerel salted, then kept in rice bran, at least 6 months and often a year or more. Ishikawa's fugu ovaries are salted about a year then bran-cured about two more, which is said to neutralise the toxin; the mechanism is unexplained, and some makers cite three years.",
  craft: "Do not attempt at home: the detoxification is not understood.",
  src: [["Fukui Tourism: heshiko", "https://www.fuku-e.com/feature/heshiko"], ["Aburayo: fugu no ko", "https://www.aburayo.jp/%E3%81%B5%E3%81%90%E3%81%AE%E5%AD%90/"], ["Otoko Nakamura: fugu ovary", "https://otokonakamura.com/pufferfishroe/"]] });

/* ---------- SWEETS ---------- */
P("Wasanbon sugar", {
  text: "Fine sugar of Tokushima (Awa) and Kagawa (Sanuki), refined by repeated 'togi' (kneading to remove molasses) and pressing in the 'oshibune'. The name is tied to doing this three times, but today four or five rounds are normal. Some mills still press with weights, others use centrifuges, and Awa and Sanuki differ in how much molasses is removed.",
  src: [["Okada Seitosho: togi", "http://www.wasanbon.co.jp/method/togi2.html"], ["Baikodo: wasanbon", "https://www.baikodo.com/temahima/"], ["Pearl Ace: wasanbon", "https://www.pearlace.co.jp/know-and-fun/tips/post-129.html"]] });
P("Yoshino kuzu", {
  text: "Starch from kudzu roots, dug by hand and washed repeatedly in cold water in winter ('kanzarashi', 5 to 6 times), then air-dried for 2 to 3 months. Yield from the root is only 6 to 10%. By one definition 'honkuzu' is 100% kudzu, and 50% kudzu with 50% sweet potato starch is called 'Yoshino kuzu'.",
  src: [["Nara Prefecture: Yoshino honkuzu", "https://www.pref.nara.lg.jp/n128/item319203.html"], ["Dancyu: Yoshino honkuzu", "https://dancyu.jp/read/2020_00002824.html"]] });
P("Castella", {
  text: "Fukusaya (founded 1624) bakes with eggs, flour, sugar, zarame (coarse sugar) and mizuame; no honey, milk or water is added. The zarame is partly ground into the batter and partly kept whole, leaving a crunchy layer at the base, and the batter is mixed by hand.",
  src: [["Fukusaya: how castella is made", "https://www.fukusaya.co.jp/castella/make.html"]] });
P("Yatsuhashi", {
  text: "Rice flour, sugar and nikki (cinnamon-type bark spice) steamed, rolled thin and baked into a curved tile. Soft nama-yatsuhashi without filling appeared in the 1960s, much later. The origin is usually tied to the koto master Yatsuhashi Kengyo, but nothing has been proven.",
  src: [["Hugkum: yatsuhashi", "https://hugkum.sho.jp/525839"], ["Sweets Village: yatsuhashi", "https://shop.sweetsvillage.com/blogs/knowledge/yatsuhashi"]] });
P("Kibi dango", {
  text: "Created in 1856 by the first Koeido (Asajiro), who turned the millet dumplings sold at the Kibitsu Shrine teahouse into a tea-ceremony gyuhi sweet. Glutinous rice flour, sugar and starch syrup are cooked until translucent, with a little glutinous millet flour. Origins are debated.",
  src: [["Koeido: Mukashi Kibi dango", "https://koeido.co.jp/products/mukashi_kibi/"], ["NDL Reference: origin of kibi dango", "https://crd.ndl.go.jp/reference/entry/index.php?id=1000196866&page=ref_view"]] });
P("Fukui mizu-yokan", {
  text: "Fukui's winter sweet, made from koshian, agar and sugar, and sold from about November to March. The lower sugar meant it did not keep, so it was chilled in corridors in winter. The 'dechi' yokan name recalls apprentices bringing yokan home for New Year.",
  src: [["Fukui Tourism: mizu-yokan", "https://www.fuku-e.com/feature/mizuyoukan"], ["MAFF: decchi yokan", "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/decchi_youkan_fukui.html"]] });

/* ---------- SAKE ---------- */
P("Niigata: tanrei-karakuchi", {
  text: "Niigata has the most sake breweries in Japan and ranks third in volume. Cold winters, very soft snowmelt water and Gohyakumangoku rice (bred in Niigata) gave the clean, dry style.",
  craft: "Gohyakumangoku has a smaller shinpaku (white core) than Yamada Nishiki and tends to crack when polished below 50%, so it shines in junmai and junmai ginjo.",
  src: [["Tabiiro: breweries by prefecture", "https://nomitabi.tabiiro.jp/article/200/"], ["Sake rice comparison", "https://liquorpage.com/sake-rice-comparison/"], ["Sipory: Nada, Fushimi, Saijo", "https://sipory.jp/blog/sansyu-sake-guide"]] });
P("Nada (Hyogo)", {
  text: "Hyogo is first in sake production (76,957 kL in the latest year), and the five Nada-go alone make about 56,000 kL, over 70% of it, roughly a quarter of the national total. Miyamizu has a hardness near 100 (Fushimi near 80): 'hard' by sake-trade convention though medium on the world scale. Yamada Nishiki, bred in 1923 with a large shinpaku and resistance to breaking at high polish, is mainly grown here.",
  craft: "Mineral-rich water drives fermentation hard, hence the dry, firm 'male sake'.",
  src: [["Linxas: production by prefecture", "https://linx-as.store/blogs/pedia/jizake"], ["Sakestreet: sake water", "https://sakestreet.com/ja/media/learn-water-used-for-sake"], ["Sake rice comparison", "https://liquorpage.com/sake-rice-comparison/"]] });
P("Fushimi (Kyoto)", {
  text: "Fushimi's water is softer (hardness near 80) and finer in texture, producing a gentle, rounded 'female sake'. Kyoto is second in national production.",
  src: [["Sakestreet: sake water", "https://sakestreet.com/ja/media/learn-water-used-for-sake"], ["Sipory: Nada, Fushimi, Saijo compared", "https://sipory.jp/blog/nada-fushimi-saijo-comparison-guide"]] });
P("Saijo (Hiroshima)", {
  text: "Miura Senzaburo devised soft-water brewing in 1887, with careful koji making and cool, slow fermentation, and published an improved method in 1898. It gave a sweeter, softer sake than Nada's dry style, and he is called the father of ginjo.",
  src: [["Hiroshima Prefecture: why Hiroshima is a great sake region", "https://www.pref.hiroshima.lg.jp/lab/topics/20221118/01/"], ["Sakestreet: Miura Senzaburo", "https://sakestreet.com/ja/media/learn-sake-great-people-1"]] });
P("Akita: Kyokai No. 6 yeast", {
  text: "No. 6 yeast, isolated at the Aramasa (Shinsei) brewery, is still called 'Shinsei yeast'; sources date it between 1930 and about 1935. It keeps fermenting at 10-12 C and makes mild, soft, clean sake.",
  src: [["Sakestreet: Kyokai yeast", "https://sakestreet.com/ja/media/what-is-kyokai-yeast"], ["Sake Times: Kyokai yeast", "https://jp.sake-times.com/knowledge/word/sake_g_kyoukaikoubo_1"]] });
P("Fukushima", {
  text: "Fukushima took the most gold medals at the National New Sake Awards in 2025 and again in 2026 (20 brands in 2026), with Niigata and Nagano next at 16 each. Hyogo, the volume leader, fell to fourth with 14.",
  src: [["Fukushima Minyu: 2026 result", "https://www.minyu-net.com/news/detail/2026052010191849989"], ["Shokuhin.net: 2026 gold medals", "https://shokuhin.net/145106/2026/05/21/inryou/sake/"]] });
P("Yamagata ginjo", {
  text: "In 2016 Yamagata became the first prefecture to receive a geographical indication (GI) for sake.",
  src: [["Sake-5: sake by prefecture", "https://sake-5.jp/sake-by-region-prefecture/"]] });
P("Nagano: Kyokai No. 7 yeast", {
  text: "No. 7 yeast comes from Masumi (Miyasaka Brewery) in Suwa. Strong fermentation with apple and pear-like fragrance; one of the two most-used Kyokai yeasts, with No. 9.",
  src: [["Sakestreet: Kyokai yeast", "https://sakestreet.com/ja/media/what-is-kyokai-yeast"]] });
P("Kumamoto: Kyokai No. 9 yeast", {
  text: "No. 9 ('Kumamoto yeast') was isolated in Kumamoto (one account: from the Koro brewery in 1953) and favoured for ginjo: high ginjo aroma in a short mash.",
  src: [["Sakestreet: Kyokai yeast", "https://sakestreet.com/ja/media/what-is-kyokai-yeast"], ["Sake Times: Kyokai yeast", "https://jp.sake-times.com/knowledge/word/sake_g_kyoukaikoubo_1"]] });
P("Okayama: Omachi rice", {
  text: "Omachi, discovered in 1859, is regarded as Japan's oldest pure (non-crossbred) sake rice, grown mainly in Okayama. Rich, full-flavoured sake.",
  src: [["Sake rice comparison", "https://liquorpage.com/sake-rice-comparison/"], ["Sakura WKS: sake rice", "https://sakura-wks.com/blog/sake-rice/"]] });
ITEMS.push({ id: "i_yeast", cat: "sake", name: "Kyokai yeast map", ja: "協会酵母の地図", prefs: [5, 20, 43, 17], text: "No. 6 is from Akita (Shinsei/Aramasa), No. 7 from Nagano (Masumi), No. 9 from Kumamoto and No. 14 from Kanazawa (Ishikawa, selected at the Kanazawa tax bureau, about 1996). A '01' suffix (601, 701, 901, 1401) means a non-foaming mutant. No. 10 ('Ogawa' or 'Meiri' yeast) is low in acid with a high ginjo aroma, but weaker alcohol tolerance makes late-mash control harder.", flavor: "No. 6 mild and soft; No. 7 apple and pear; No. 9 high ginjo aroma; No. 14 banana, melon and muscat.", use: "Read the yeast number on a label to predict aroma.", craft: "Brewing conditions change the result a lot, so the numbers describe tendencies.", src: [["Sakestreet: Kyokai yeast", "https://sakestreet.com/ja/media/what-is-kyokai-yeast"], ["Sake Times: Kyokai yeast", "https://jp.sake-times.com/knowledge/word/sake_g_kyoukaikoubo_1"]] });

/* ---------- SHOCHU ---------- */
P("Imo-jochu (Kagoshima)", {
  text: "Sweet-potato shochu is about half of all shochu output, with Kagoshima and Miyazaki the two main producers. The Satsuma GI requires Kagoshima-grown sweet potatoes, rice koji or potato koji, single (pot) distillation and excludes Amami.",
  craft: "Kogane-sengan is the most-used variety, with a rounded sweetness; others include purple and orange-fleshed potatoes and Joy White. White koji is the most common, black koji is used for awamori and some shochu, and yellow koji gives sake-like fruit.",
  src: [["Kokubu: GI regions", "http://shochu.kokubu.co.jp/article/chiritekihyouji.html"], ["Honkaku Shochu & Awamori: ingredients", "https://www.honkakushochu-awamori.jp/about-shochu-and-awamori/shochu-ingredients/"], ["Shochu Kikou: GI", "https://www.shochu-kikou.com/chishiki/nyumon13.html"]] });
P("Iki shochu", {
  text: "GI-protected barley shochu: the tradition is rice koji and barley at 1 to 2, with water sourced only from Iki. It is often called the birthplace of barley shochu.",
  src: [["Shochu Next: Iki shochu", "https://shochu-next.com/article/8186"], ["Kokubu: GI regions", "http://shochu.kokubu.co.jp/article/chiritekihyouji.html"]] });
P("Kuma shochu", {
  text: "GI rice shochu of Hitoyoshi and Kuma in Kumamoto: local groundwater, rice koji, and a mash of primary moromi plus added rice. A cold basin with large temperature swings.",
  src: [["Denshogura: Kuma shochu", "https://www.denshogura.jp/kumashochu/"], ["Kokubu: GI regions", "http://shochu.kokubu.co.jp/article/chiritekihyouji.html"]] });
P("Amami kokuto shochu", {
  text: "A special exception allows brown-sugar shochu only if made in the Amami islands, using pure kokuto and rice koji. Without rice koji it would count as rum.",
  src: [["Hotel The Scene: Amami kokuto shochu", "https://hotelthescene.com/column/86.php"], ["Honkaku Shochu & Awamori: ingredients", "https://www.honkakushochu-awamori.jp/about-shochu-and-awamori/shochu-ingredients/"]] });
P("Awamori", {
  text: "Ryukyu awamori GI: made in Okinawa from rice and a specified black koji (all-koji, no second mash), with Okinawan water, single distillation. Black koji produces more citric acid, suited to the hot, humid climate.",
  src: [["Okinawa Awamori GI", "https://okinawa-awamori.or.jp/gi/?lang=en"], ["Honkaku Shochu & Awamori: ingredients", "https://www.honkakushochu-awamori.jp/about-shochu-and-awamori/shochu-ingredients/"]] });

/* ---------- WHISKY ---------- */
P("Yamazaki", {
  text: "Suntory's first malt distillery (1923) in Shimamoto, Osaka, with pot stills of varied shapes to make many types of spirit in one place. Mizunara cask notes feature in the house character.",
  src: [["Tomijaz: Japanese whisky", "https://www.tomijaz.jp/media/japanese-whiskey-guide/"], ["Mizu no Bunka: casks", "https://www.mizu.gr.jp/kikanshi/no63/04.html"]] });
P("Hakushu", {
  text: "At the foot of the Southern Alps at about 700 m, with soft water (hardness about 30) filtered through granite, and multiple still shapes.",
  src: [["Tomijaz: Japanese whisky", "https://www.tomijaz.jp/media/japanese-whiskey-guide/"]] });
P("Chichibu", {
  text: "Venture Whisky's Chichibu distillery uses water from the Ookechi gorge system and runs its own cooperage, making about 200 Mizunara casks a year since there is no specialist supplier in Japan.",
  src: [["Whisky Magazine Japan: Chichibu", "https://whiskymag.jp/chichibu_j/"], ["Whisky Magazine Japan: Chichibu and wood", "https://whiskymag.jp/ccb_d2/"]] });
P("Yoichi", {
  text: "Nikka's first distillery; it still distils with direct coal firing. The founding year is given as 1934 in some sources and 1936 in others. Sea air and sub-zero winters shape the maturation.",
  src: [["Nihonmono: Nikka", "https://nihonmono.jp/article/53980/"], ["Ritocamp: Japanese whisky basics", "https://www.ritocamp.com/entry/639"]] });
P("Miyagikyo", {
  text: "Nikka's Sendai distillery, opened in 1969, uses bulge-shaped stills with indirect steam heating for a soft, fruity spirit.",
  src: [["Nihonmono: Nikka", "https://nihonmono.jp/article/53980/"]] });
P("Fuji Gotemba", {
  text: "Kirin's distillery at about 600-620 m, using Fuji's underground water. It makes both malt and grain whisky, with a four-column multi-column still, a beer column, doubler and kettle, and matures in 180 L casks for more contact.",
  src: [["Whisky Magazine Japan: Fuji Gotemba", "https://whiskymag.jp/%E5%AF%8C%E5%A3%AB%E5%BE%A1%E6%AE%BF%E5%A0%B4/"], ["JWIC: Fuji Gotemba", "https://jwic.jp/distillery/fuji_gotemba/"]] });

/* ---------- FISH (corrected from Japanese sources) ---------- */
FP("bluefin", {
  intro: "Names change with growth, and the stages and weights vary by source. Kanto commonly uses Meji; Kansai uses Yokowa. Sizes below are rough guides from several sources, not rules.",
  seasons: [{ m: [10, 2], n: "Winter tuna", j: "寒マグロ", t: "Fattiest in cold water: Oma's season runs from autumn into winter." }],
  systems: [
    { label: "East: Tohoku, Kanto, Hokuriku", prefs: [3, 4, 5, 6, 7, 8, 12, 13, 14, 15, 16, 17, 22], names: [{ n: "Mameji / Komeji", j: "マメジ・コメジ", s: "small (Tohoku: Mameji)", t: "The youngest stage in Tohoku and the Kanto line." }, { n: "Meji", j: "メジ", s: "to about 20 kg", t: "Meji-maguro, young bluefin; some sources cap it near 20 kg." }, { n: "Maguro / Hon-maguro", j: "マグロ・本鮪", s: "adult", t: "Full-grown." }, { n: "Oo-maguro", j: "オオマグロ", s: "largest", t: "The Kanto ladder's last name." }] },
    { label: "Aomori (Oma)", prefs: [2], names: [{ n: "Oma-maguro", j: "大間まぐろ", s: "brand", t: "Line-caught in the Tsugaru Strait." }] },
    { label: "West: Kansai to Kyushu", prefs: [24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], names: [{ n: "Shinmae / Shinko", j: "新子", s: "about 0.5-1 kg, 1 yr", t: "The youngest stage in the western line." }, { n: "Yokowa", j: "ヨコワ", s: "to about 10 kg", t: "Named for the horizontal stripes (or the slim body, by another theory)." }, { n: "Hissage", j: "ヒッサゲ", s: "about 6-10 kg+", t: "Intermediate stage; the weight where it starts varies by source." }, { n: "Shibi", j: "シビ", s: "large", t: "Large fish; one source uses Shibi-maguro for fish over 100 kg." }, { n: "Hon-maguro", j: "本鮪", s: "adult", t: "Full-grown." }] }
  ],
  craft: "Because the thresholds are not fixed, ask the market what a name means that day: a 'meji' may be 5 kg in one shop and 20 kg in another.",
  src: [["Honda fishing picture book: kuromaguro", "https://www.honda.co.jp/fishing/picture-book/kuromaguro/"], ["Hachimenroppi: kuromaguro", "https://hachimenroppi.com/wiki/details/kuromaguro/"], ["Utsunomiya: yokowa", "https://utsunomiya-store.com/young-bluefin-tuna-yokowa/"], ["Fishing Japan: maguro", "https://fishingjapan.jp/fishing/8332"]] });

FP("buri", {
  intro: "The textbook shusse-uo. Size limits are guides from several sources and differ at the edges. Note too that 'Hamachi' means a 40-60 cm wild fish in Kansai, but in Kanto and in trade it usually means farmed yellowtail.",
  systems: [
    { label: "Kanto", prefs: [3, 4, 7, 8, 12, 13, 14], names: [{ n: "Mojako", j: "モジャコ", s: "fry", t: "Young fish drifting with seaweed (mo)." }, { n: "Wakashi", j: "ワカシ", s: "to 35 cm", t: "Some sources give 10-30 cm." }, { n: "Inada", j: "イナダ", s: "35-60 cm", t: "" }, { n: "Warasa", j: "ワラサ", s: "60-80 cm", t: "" }, { n: "Buri", j: "ブリ", s: "80 cm+", t: "" }] },
    { label: "Shizuoka & Tokai", prefs: [22, 23], names: [{ n: "Wakanago", j: "ワカナゴ", s: "young", t: "Shizuoka's name for the youngest fish." }, { n: "Inada", j: "イナダ", s: "", t: "" }, { n: "Warasa", j: "ワラサ", s: "", t: "" }, { n: "Buri", j: "ブリ", s: "adult", t: "" }] },
    { label: "Kansai & Setouchi", prefs: [24, 25, 26, 27, 28, 29, 30, 33, 34, 36, 37, 38, 39], names: [{ n: "Wakana", j: "ワカナ", s: "young (Hyogo, Seto)", t: "Some areas of Hyogo's Inland Sea side." }, { n: "Tsubasu", j: "ツバス", s: "to 40 cm", t: "" }, { n: "Hamachi", j: "ハマチ", s: "40-60 cm", t: "Also the trade name for farmed yellowtail." }, { n: "Mejiro", j: "メジロ", s: "60-80 cm", t: "" }, { n: "Buri", j: "ブリ", s: "80 cm+", t: "" }] },
    { label: "Hokuriku", prefs: [15, 16, 17, 18], names: [{ n: "Tsubaiso / Kozukura", j: "ツバイソ・コズクラ", s: "to 35 cm", t: "Toyama says Tsubaiso; Ishikawa says Kozukura." }, { n: "Fukuragi", j: "フクラギ", s: "35-60 cm", t: "Popular for sashimi." }, { n: "Gando", j: "ガンド", s: "60-80 cm", t: "Gandoburi in some places." }, { n: "Buri", j: "ブリ", s: "80 cm+", t: "Winter fish from Himi." }] },
    { label: "San'in", prefs: [31, 32], names: [{ n: "Tsubasu", j: "ツバス", s: "small", t: "One listing: Tsubasu, Hamachi, Marugo, Buri." }, { n: "Hamachi", j: "ハマチ", s: "", t: "" }, { n: "Marugo", j: "マルゴ", s: "", t: "Sources disagree on the San'in order, so check locally." }, { n: "Buri", j: "ブリ", s: "adult", t: "" }] },
    { label: "Kyushu & Yamaguchi", prefs: [35, 40, 41, 42, 43, 44, 45, 46], names: [{ n: "Wakanago / Tsubasu", j: "ワカナゴ・ツバス", s: "small", t: "Fukuoka lists Tsubasu; another source Wakanago." }, { n: "Yazu", j: "ヤズ", s: "medium", t: "Sometimes the size of Inada to Warasa." }, { n: "Hamachi / Warasa", j: "ハマチ・ワラサ", s: "", t: "" }, { n: "Buri", j: "ブリ", s: "adult", t: "" }] }
  ],
  craft: "Kan-buri is the winter fat fish, but buri sold as 'Hamachi' in Kanto is often farmed: always check the label before judging fat or price.",
  src: [["Hakken Kurashi: buri names", "https://hakkenkurashi.com/buri-shusseuo-names/"], ["Suisan Navi: shusse-uo list", "https://suisan-navi.jp/fish-knowledge/shusseuo-list-order/"], ["Medaka Suisan: buri by region", "https://medakasuisan.com/sea-food/post-3000/"], ["Oretsuri: buri names", "https://oretsuri.com/yellowtail"]] });

FP("suzuki", {
  intro: "The sizes below are approximate. Kanto: Seigo, Fukko, Suzuki. Kansai: Seigo, Hane, Suzuki. Tokai simply splits at about 60 cm. There is no unified standard.",
  systems: [
    { label: "Kanto & Tohoku", prefs: [4, 7, 8, 12, 13, 14], names: [{ n: "Koppa / Hakura", j: "コッパ・ハクラ", s: "to 15 cm", t: "Fry; in Ariake Bay locals say Hakura." }, { n: "Seigo", j: "セイゴ", s: "about 25 cm, 1-2 yr", t: "" }, { n: "Fukko", j: "フッコ", s: "40-60 cm, 2-3 yr", t: "Some sources say about 35 cm at 2 years." }, { n: "Suzuki", j: "スズキ", s: "60 cm+, 4 yr+", t: "Tokyo calls very large fish Ootaro." }] },
    { label: "Tokai", prefs: [22, 23, 24], names: [{ n: "Seigo", j: "セイゴ", s: "to about 60 cm", t: "Tokai tends to call everything up to about 60 cm Seigo." }, { n: "Madaka", j: "マダカ", s: "mature, larger", t: "Mature fish above that size." }] },
    { label: "Kansai & Setouchi", prefs: [27, 28, 30, 33, 34, 36, 37, 38], names: [{ n: "Seigo", j: "セイゴ", s: "small", t: "" }, { n: "Hane", j: "ハネ", s: "about 60 cm", t: "Kansai's substitute for Fukko." }, { n: "Suzuki", j: "スズキ", s: "adult", t: "" }] },
    { label: "Shimane", prefs: [32], names: [{ n: "Chuhan", j: "チュウハン", s: "20-50 cm", t: "A local name for mid-size fish." }, { n: "Suzuki", j: "鱸", s: "adult", t: "Lake Shinji's hosho-yaki is paper-steamed." }] }
  ],
  craft: "Summer is the season in the east; wash thin slices in iced water (arai) to firm them for sashimi.",
  src: [["Kanagawa Gyoren: suzuki", "https://www.kngyoren.com/pages/242/"], ["Chisou Media: suzuki names", "https://chisou-media.jp/posts/3237"], ["Fishing Japan: suzuki", "https://fishingjapan.jp/fishing/3244"]] });

FP("bora", {
  intro: "A classic Edo-era ladder whose last name, Todo, gives 'todo no tsumari' (in the end). Names and sizes differ by region and by source.",
  seasons: [{ m: [10, 12], n: "Roe season", j: "子持ちボラ", t: "Karasumi is made from the roe in autumn and winter." }],
  systems: [
    { label: "Kanto", prefs: [12, 13, 14], names: [{ n: "Oboko / Inakko", j: "オボコ・イナッコ", s: "to about 10 cm", t: "Kanto says Inakko." }, { n: "Subashiri", j: "スバシリ", s: "10-20 cm", t: "" }, { n: "Ina", j: "イナ", s: "20-30 cm", t: "Gave us 'ina-se', a dandy's hairstyle." }, { n: "Bora", j: "ボラ", s: "30-40 cm", t: "" }, { n: "Todo", j: "トド", s: "50 cm+", t: "'Todo no tsumari': the end of the line." }] },
    { label: "Kansai", prefs: [27, 28, 30, 33, 34], names: [{ n: "Haku", j: "ハク", s: "fry", t: "" }, { n: "Oboko", j: "オボコ", s: "", t: "" }, { n: "Subashiri", j: "スバシリ", s: "", t: "" }, { n: "Ina", j: "イナ", s: "", t: "" }, { n: "Bora → Todo", j: "ボラ・トド", s: "", t: "" }] },
    { label: "Kochi", prefs: [39], names: [{ n: "Ikinago", j: "イキナゴ", s: "fry", t: "" }, { n: "Kobora", j: "コボラ", s: "", t: "" }, { n: "Ina", j: "イナ", s: "", t: "" }, { n: "Bora → Oobora", j: "ボラ・オオボラ", s: "", t: "" }] },
    { label: "Tohoku", prefs: [3, 5], names: [{ n: "Kotsubura", j: "コツブラ", s: "", t: "" }, { n: "Tsubo", j: "ツボ", s: "", t: "" }, { n: "Myogechi", j: "ミョウゲチ", s: "", t: "" }, { n: "Bora", j: "ボラ", s: "", t: "" }] },
    { label: "Nagasaki (karasumi)", prefs: [42], names: [{ n: "Karasumi", j: "からすみ", s: "cured roe", t: "A Takano Yusuke design from 1675 at Nomozaki: salted 3-10 days, desalted overnight, sun-dried 1-2 weeks." }] }
  ],
  craft: "Karasumi: salt the roe sacs, desalt (removing the blood vessels), then dry in sun. Salting days vary: 3-6 days in some sources, 10 days at an old Nagasaki house.",
  src: [["Medaka Suisan: bora", "https://medakasuisan.com/sea-food/post-3029/"], ["Syoku-life: bora", "https://syoku-life-labo.com/bora-syuseuo/"], ["Takanoya: Nagasaki karasumi", "https://www.karasumi.jp/?mode=f2"], ["Onohara: Nagasaki and karasumi", "https://onohara.co.jp/pages/nagasaki-karasumi"]] });

FP("tai", {
  intro: "A fish of celebration with two peak seasons and names for each state of the fish. The young are called Kasugo, a name used loosely for small sea bream (madai, chidai and kidai) of about 10-15 cm.",
  seasons: [{ m: [3, 5], n: "Sakura-dai", j: "桜鯛", t: "Pre-spawning spring bream with a pink blush." }, { m: [5, 6], n: "Mugiwara-dai", j: "麦わら鯛", t: "After spawning, flavour dips; named for the barley harvest." }, { m: [10, 12], n: "Momiji-dai", j: "紅葉鯛", t: "The autumn recovery, fat before winter." }],
  systems: [
    { label: "Nationwide", prefs: [12, 13, 14, 22, 23, 24, 27, 30, 33, 34, 35, 38, 39, 40, 41, 42, 43, 44, 45, 46], names: [{ n: "Kasugo", j: "カスゴ", s: "about 10-15 cm, 1 yr", t: "Edomae sushi uses it as 'kasugo-dai'." }, { n: "Madai", j: "真鯛", s: "adult", t: "" }] },
    { label: "Naruto & Akashi", prefs: [28, 36, 37], names: [{ n: "Naruto-dai", j: "鳴門鯛", s: "brand", t: "Fast tides produce a muscle ridge, the 'Naruto bone', mostly in fish over 1 kg." }, { n: "Akashi-dai / Awaji Ebisu-dai", j: "明石鯛", s: "brand", t: "Landed autumn to winter; some insist the summer fish is best." }] }
  ],
  craft: "Sources differ on the flesh of Seto fish: some praise firmness from strong tides, others call it softer than Genkai Sea fish. These are sales claims with no scientific basis.",
  src: [["Tokushima: Naruto-dai", "https://www.tokushima-mice.jp/jpn/omotenashi/narutotai"], ["Washoku Style: madai", "https://washoku-style.jp/hibikore/3526"], ["Hamazon: kasugodai", "https://www.hamazonspecial.com/sushi-kasugodai/"], ["Sushi Kaneki: tai", "https://sushi-kaneki.co.jp/archives/4226"]] });

FP("katsuo", {
  intro: "Two seasons, two characters: Hatsu-gatsuo is lean and fresh, Modori-gatsuo is fatty. Per Japan's food composition table, the fat is about 0.5 g in Hatsu against 6.2 g in Modori per 100 g (roughly twelve-fold; shops say 1-2% against 10%+).",
  seasons: [{ m: [3, 5], n: "Hatsu-gatsuo", j: "初鰹", t: "March to May in Kochi: lean, firm, grassy; best as tataki." }, { m: [9, 11], n: "Modori-gatsuo", j: "戻り鰹", t: "September to November: fatty, rich; best raw." }],
  craft: "Hatsu: tataki. Modori: sashimi. In Sanriku, September is the peak for modori-gatsuo.",
  src: [["Sakanato: hatsu vs modori fat", "https://sakanato.jp/38799/"], ["Nanawa: Kochi katsuo season", "https://nanawa.co.jp/blog/column/kochi-katsuo-season/"], ["Katsuo-tataki.com: Kochi", "https://katuo-tataki.com/hatukatuo-modorikatuo/"]] });

FP("sawara", {
  intro: "In the Seto Inland Sea it is the spring fish (the kanji 鰆), while in the east it is best from autumn into winter, as 'kan-sawara' in January and February.",
  seasons: [{ m: [4, 5], n: "Haru-sawara", j: "春鰆", t: "The spawning run into the Seto Inland Sea." }, { m: [1, 2], n: "Kan-sawara", j: "寒鰆", t: "Fat winter fish, especially valued in Kanto and the Sea of Japan." }],
  systems: [
    { label: "Kanto", prefs: [4, 7, 8, 12, 13, 14], names: [{ n: "Sagochi / Sagoshi", j: "サゴチ・サゴシ", s: "to about 50 cm", t: "Kanto splits at about 50 cm." }, { n: "Nagi", j: "ナギ", s: "50-60 cm", t: "Listed in some tables." }, { n: "Sawara", j: "サワラ", s: "60 cm+", t: "" }] },
    { label: "West: Hokuriku, Kansai, Setouchi", prefs: [15, 16, 17, 18, 26, 27, 28, 30, 31, 32, 33, 34, 35, 38], names: [{ n: "Sagoshi", j: "サゴシ", s: "40-50 cm", t: "" }, { n: "Yanagi", j: "ヤナギ", s: "medium", t: "" }, { n: "Sawara", j: "サワラ", s: "about 70 cm+ in Kansai", t: "" }] },
    { label: "Shikoku", prefs: [36, 37, 39], names: [{ n: "Goshi / Shimauma", j: "ゴシ・シマウマ", s: "small (Kochi)", t: "Kochi's name for the smallest." }, { n: "Sagoshi → Yanagi → Sawara", j: "サゴシ・ヤナギ・サワラ", s: "", t: "Tokushima: Sagoshi, Yanagi, Sawara." }] }
  ],
  craft: "Main producers: Kyushu (Nagasaki), San'in and Hokuriku. Setouchi catches have dropped sharply.",
  src: [["Nagasaki-uo: sawara", "https://www.nagasaki-uo.co.jp/sawara_page.htm"], ["Tsuttarou: sawara names by region", "https://tsuttarou.net/archives/204442"], ["Olive Hitomawashi: sawara", "https://www.olive-hitomawashi.com/column/2020/02/post-8549.html"]] });

FP("zuwai", {
  intro: "One species under many port brands. West of Toyama the season opens on 6 November: males until 20 March, females only until 10 January. North of Niigata it opens on 1 October. Tags show the landing port.",
  seasons: [{ m: [11, 3], n: "Crab season", j: "解禁", t: "Opens 6 November on the Sea of Japan (west of Toyama); males to 20 March." }],
  systems: [
    { label: "Fukui (Echizen)", prefs: [18], names: [{ n: "Echizen-gani", j: "越前ガニ", s: "male", t: "Yellow tag on the leg." }, { n: "Seiko-gani", j: "セイコガニ", s: "female", t: "The female season is much shorter." }] },
    { label: "Ishikawa (Kano)", prefs: [17], names: [{ n: "Kano-gani", j: "加能ガニ", s: "male", t: "Blue tag." }, { n: "Kobako-gani", j: "香箱ガニ", s: "female", t: "Season ends 29 December to protect stocks." }] },
    { label: "Kyoto (Tango)", prefs: [26], names: [{ n: "Taiza-gani", j: "間人ガニ", s: "male", t: "A premium brand from Taiza port." }] },
    { label: "San'in (Tajima, Tottori, Shimane)", prefs: [28, 31, 32], names: [{ n: "Matsuba-gani", j: "松葉ガニ", s: "male", t: "Tags vary by port: Hyogo's Tsuiyama blue, Shibayama pink, Kasumi green, Hamasaka light blue; Tottori white; Shimane blue." }, { n: "Seko-gani", j: "セコガニ", s: "female", t: "Local name for the female." }] }
  ],
  craft: "Check the tag's port and boat name, not just the colour: the same colour is used by different prefectures.",
  src: [["Sato-umi: Kano-gani and kobako-gani", "https://sato-umi.com/kanougani-koubakogani-kaikin-2026/"], ["Matsubishi: Matsuba-gani opening", "https://matsubishi.online/blogs/article/matsuba-gani_kaikinbi"], ["Zenryoku: crab seasons", "https://zenryokuhp.com/kani/kaikinbikanichiakiganiryoukiichiran.html"], ["Crio: tag colours", "https://crio-official.com/kanikani/zuwaikaikin/"]] });

FP("fugu", {
  intro: "Shimonoseki says 'fuku' (fortune) instead of 'fugu', Osaka says 'teppo' (gun: a risk of dying), and Tokyo says fugu. Hideyoshi banned fugu after soldiers were poisoned at Nagoya Castle in Hizen, and Choshu (Yamaguchi) enforced the ban harshly, which pushed 'teppo' into slang.",
  seasons: [{ m: [11, 2], n: "Winter fugu", j: "冬のふぐ", t: "In season from about November." }],
  craft: "Fugu from across Japan are auctioned at Haedomari market in Shimonoseki, famous for the bag auction (fukuro-seri) in which bidding is done by hand signals inside a cloth bag.",
  src: [["Fugusho: why 'teppo'", "https://www.fugusho.jp/news/436928.html"], ["Seki Tora: tecchiri origin", "https://www.fuku.ski/html/page7.html"], ["Rakuten Travel: Shimonoseki fugu", "https://travel.rakuten.co.jp/mytrip/howto/shimonoseki-fugu-guide"]] });

FP("sake", {
  intro: "Salmon (shake) carries names for season and maturity. Tokishirazu ('out-of-season') is caught in early summer, Aki-aji in autumn, and the rarest, Keiji, comes from immature fish.",
  seasons: [{ m: [5, 7], n: "Tokishirazu", j: "時知らず", t: "'Caught out of its time': a fat early-summer fish. Its origin is debated, one view being the Amur River." }, { m: [9, 11], n: "Aki-aji", j: "秋味", t: "The autumn run of fish returning to spawn, September to November." }, { m: [10, 11], n: "Keiji", j: "鮭児", t: "Immature fish, about one in 10,000, landed mainly October to mid-November, notably at Rausu." }],
  systems: [{ label: "Hokkaido & Tohoku", prefs: [1, 2, 3, 4, 5, 15], names: [{ n: "Tokishirazu", j: "時知らず", s: "May-Aug", t: "Spring and early-summer fish." }, { n: "Aki-aji", j: "秋味", s: "Sep-Nov", t: "Autumn fish." }, { n: "Mejika", j: "メジカ", s: "late autumn", t: "A near-mature fish at the end of the run (the usage differs by source)." }, { n: "Keiji", j: "鮭児", s: "rare", t: "Immature and fat." }] }],
  craft: "Ginke (silver bright fish) means a fresh-run fish with the silvery guanine layer, and 'buna' is a dark spawning-coloured fish.",
  src: [["Hokkaido Gyoren: autumn salmon", "https://www.gyoren.or.jp/ikura/index.html"], ["Pride Fish: Hokkaido tokishirazu", "https://www.pride-fish.jp/JPF/pref/detail.php?pk=1403253786"], ["Sakanada Mart: mejika, tokishirazu, keiji", "https://sakanadamart.net/siteinfo/zatsugaku/medika-tokishirazu-keiji.html"], ["MAFF: tokishirazu", "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/tokishirazu_hokkaido.html"]] });

/* ---------- NEW CATEGORY: SEAFOOD CRAFT ---------- */
CATS.splice(1, 0, { id: "seafood", label: "Seafood craft", ja: "魚介の技" });
CAT_INTRO.seafood = "Technique matters as much as the catch. Eel is split and grilled differently east and west, mullet roe becomes karasumi in Nagasaki, and the fugu trade has its own rituals.";
ITEMS.push(
  { id: "i_unagi", cat: "seafood", name: "Kanto vs Kansai unagi", ja: "うなぎの関東風と関西風", prefs: [13, 27, 22], text: "Kanto splits eel along the back (seabiraki), grills it plain, steams it, then grills with tare. Kansai splits along the belly (haraabiraki) and grills it directly without steaming, on metal skewers with the head still on. Kansai eel is crisp and fragrant, Kanto eel soft and fluffy. The reasons given are mixed: samurai avoided a belly cut that recalled seppuku; Kansai merchants favoured belly-opening as 'speaking frankly'; a back cut suits skewering a thick back when steamed; and steaming took the fat off for Edo tastes and allowed fast service. The boundary is said to fall near Hamamatsu, where both styles appear.", flavor: "Kanto: soft and fluffy. Kansai: crisp, fragrant and rich.", use: "Kabayaki and una-ju.", craft: "Many Osaka shops now serve Kanto-style eel. Kyushu, the biggest eel region, tends toward Kansai-style grilling.", src: [["Unagi Koubou: why back or belly", "https://www.unagi-koubou.jp/contents/unagi_trivia/2134.html"], ["Nikkei: grilling eel", "https://www.nikkei.com/article/DGXMZO47629730S9A720C1AA1P00/"], ["Hamanako Eel Cooperative", "https://www.hamanako-eel.jp/kumiai-blog/%E3%81%86%E3%81%AA%E3%81%8E%E3%81%AE%E8%92%B2%E7%84%BC%E3%81%8D%E3%80%81%E9%96%A2%E6%9D%B1%E9%A2%A8%E3%81%A8%E9%96%A2%E8%A5%BF%E9%A2%A8/"]] },
  { id: "i_karasumi", cat: "seafood", name: "Nagasaki karasumi", ja: "長崎からすみ", prefs: [42], text: "Cured mullet roe, introduced from Ming China in the Azuchi-Momoyama period and made from local mullet in Nagasaki from 1675, when Takano Yusuke devised it at Nomozaki. The roe sacs are salted, desalted overnight in a wooden tub (blood vessels removed) and sun-dried. Salting is 3 to 6 days in some accounts and 10 days at an old Nagasaki house; drying is about 1 to 2 weeks.", flavor: "Salty, sweet, deeply savoury.", use: "Sliced thin with sake, grated over pasta or rice.", craft: "The weather and the size of the sac change the days needed, so treat figures as guides.", src: [["Takanoya: Nagasaki karasumi", "https://www.karasumi.jp/?mode=f2"], ["Onohara: Nagasaki and karasumi", "https://onohara.co.jp/pages/nagasaki-karasumi"]] },
  { id: "i_fugu_auction", cat: "seafood", name: "Shimonoseki fugu and the bag auction", ja: "下関のふくと袋セリ", prefs: [35], text: "Fugu from around Japan arrives at Haedomari market in Shimonoseki, where brokers bid using finger signals inside a bag. Yamaguchi writes 'fuku' (fortune) in hiragana. The fugu ban of Hideyoshi's time, with Choshu among the strictest domains, explains the slang 'teppo' elsewhere.", flavor: "Lean, firm flesh with subtle sweetness.", use: "Tessa, tecchiri, karaage, hirezake.", craft: "Fugu preparation requires a licence in Japan.", src: [["Rakuten Travel: Shimonoseki fugu", "https://travel.rakuten.co.jp/mytrip/howto/shimonoseki-fugu-guide"], ["Fugusho: why 'teppo'", "https://www.fugusho.jp/news/436928.html"]] }
);
