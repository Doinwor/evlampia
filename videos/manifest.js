// СПИСОК ВИДЕО ДЛЯ ПЛЕЕРА
//
// Чтобы добавить видео:
//   1. Положи файл в папку videos
//   2. Добавь блок в список по образцу:
//      { id: "уникальный-id", title: "Название серии", file: "имя-файла.mp4",
//        desc: "Описание (необязательно)", thumb: "img/превью.jpg" (необязательно) }
//
// Необязательные поля titles и descs — переводы названия и описания по кодам языков
// (en, de, be, uk, zh, es, ja, fr, pt, pl). Если перевода нет — используется title/desc.
window.EVLAMPIA_VIDEOS = [
    {
        id: "evlampia-stala-kitom",
        title: "Евлампия стала китом",
        file: "evlampia-stala-kitom.mp4",
        thumb: "img/thumb-evlampia-stala-kitom.jpg",
        desc: "У Евлампии опять глюки: теперь она точно кит 🐋 Предсказания сбываются, карты врут, а смех не заканчивается. Смотрите новый смешной выпуск веб-сериала «Евлампия»!",
        titles: {
            en: "Evlampia Became a Whale",
            de: "Evlampia wurde zum Wal",
            be: "Еўлампія стала кітом",
            uk: "Євлампія стала китом",
            zh: "叶芙兰皮娅变成了鲸鱼",
            es: "Evlampia se convirtió en ballena",
            ja: "エヴランピヤはクジラになった",
            fr: "Evlampia est devenue une baleine",
            pt: "Evlampia virou baleia",
            pl: "Evlampia została wielorybem"
        },
        descs: {
            en: "Evlampia is glitching again: this time she is definitely a whale 🐋 The predictions come true, the cards lie, and the laughter never stops. Watch the new funny episode of the web series “Evlampia”!",
            de: "Bei Evlampia gibt es schon wieder Glitches: Diesmal ist sie ganz sicher ein Wal 🐋 Die Prophezeiungen gehen in Erfüllung, die Karten lügen und das Lachen endet nicht. Schau dir die neue lustige Folge der Webserie „Evlampia“ an!",
            be: "У Еўлампіі зноў глюкі: цяпер яна дакладна кіт 🐋 Прадказанні спраўджваюцца, карты хлусцяць, а смех не сканчаецца. Глядзіце новы смешны выпуск вэб-серыяла «Еўлампія»!",
            uk: "У Євлампії знову глюки: тепер вона точно кит 🐋 Передбачення збуваються, карти брешуть, а сміх не закінчується. Дивіться новий смішний випуск веб-серіалу «Євлампія»!",
            zh: "叶芙兰皮娅又出bug了：这次她绝对是一头鲸鱼🐋预言成真，纸牌撒谎，笑声不断。来看网络剧《叶芙兰皮娅》的新一集搞笑更新吧！",
            es: "A Evlampia le vuelven a fallar los circuitos: ahora está segura de que es una ballena 🐋 Las predicciones se cumplen, las cartas mienten y la risa no se acaba. ¡Mira el nuevo y divertido episodio de la serie web «Evlampia»!",
            ja: "エヴランピヤの調子がまたおかしい：今度は間違いなくクジラです🐋 予言は当たり、カードは嘘をつき、笑いは止まらない。ウェブシリーズ『エヴランピヤ』の新しい面白い回をご覧ください！",
            fr: "Evlampia déraille encore : cette fois, elle est sûre d'être une baleine 🐋 Les prédictions se réalisent, les cartes mentent et le fou rire ne s'arrête pas. Regardez le nouvel épisode hilarant de la web-série « Evlampia » !",
            pt: "A Evlampia está falhando de novo: agora ela tem certeza de que é uma baleia 🐋 As previsões se cumprem, as cartas mentem e o riso não acaba. Assista ao novo episódio engraçado da websérie «Evlampia»!",
            pl: "U Evlampii znów glitche: teraz to na pewno wieloryb 🐋 Przepowiednie się spełniają, karty kłamią, a śmiech nie ustaje. Obejrzyj nowy zabawny odcinek serialu internetowego „Evlampia”!"
        }
    },
    {
        id: "gospodi-rap",
        title: "Господи — рэп от Евлампии",
        file: "gospodi-rap.mp4",
        thumb: "img/thumb-gospodi-rap.jpg",
        desc: "Евлампия выпустила трек. «Господи» — это не молитва, а крик души гадалки, которой снова не заплатили 🎤 Бит жёсткий, карты лгут, а соседи стучат по батарее в ритме. Слушать громко!",
        titles: {
            en: "Oh Lord — a rap by Evlampia",
            de: "O Gott — ein Rap von Evlampia",
            be: "Госпадзі — рэп ад Еўлампіі",
            uk: "Господи — реп від Євлампії",
            zh: "上帝啊——叶芙兰皮娅的说唱",
            es: "Señor — un rap de Evlampia",
            ja: "主よ — エヴランピヤのラップ",
            fr: "Ô Seigneur — un rap d'Evlampia",
            pt: "Ó Senhor — um rap da Evlampia",
            pl: "Panie — rap od Evlampii"
        },
        descs: {
            en: "Evlampia dropped a track. “Oh Lord” is not a prayer — it is the cry of a fortune-teller who got stiffed on payment again 🎤 Hard beat, lying cards, and the neighbors banging the radiator to the rhythm. Play it loud!",
            de: "Evlampia hat einen Track rausgebracht. „O Gott“ ist kein Gebet — es ist der Schrei einer Wahrsagerin, die schon wieder nicht bezahlt wurde 🎤 Harter Beat, lügende Karten und Nachbarn, die im Takt auf die Heizung klopfen. Laut hören!",
            be: "Еўлампія выпусціла трэк. «Госпадзі» — гэта не малітва, а крык душы варажбіткі, якой зноў не заплацілі 🎤 Біт жорсткі, карты хлусяць, а суседзі стукаюць па батарэі ў такт. Слухаць гучна!",
            uk: "Євлампія випустила трек. «Господи» — це не молитва, а крик душі ворожки, якій знову не заплатили 🎤 Біт жорсткий, карти брешуть, а сусіди стукають по батареї в ритмі. Слухати голосно!",
            zh: "叶芙兰皮娅发了新歌。《上帝啊》不是祈祷，而是一位又没拿到钱的占卜师的灵魂呐喊🎤 节奏硬核，纸牌撒谎，邻居跟着节拍敲暖气。请调大音量！",
            es: "Evlampia ha sacado una canción. «Señor» no es una plegaria: es el grito del alma de una vidente a la que otra vez no le pagaron 🎤 Ritmo duro, cartas mentirosas y vecinos que golpean el radiador a ritmo. ¡Súbele al volumen!",
            ja: "エヴランピヤが曲をリリース。「主よ」は祈りではなく、また報酬をもらえなかった占い師の魂の叫びです🎤 ハードなビート、嘘をつくカード、リズムに合わせて近所が暖房を叩く。音量大めでどうぞ！",
            fr: "Evlampia a sorti un morceau. « Ô Seigneur », ce n'est pas une prière : c'est le cri du cœur d'une voyante qui n'a encore une fois pas été payée 🎤 Beat costaud, cartes menteuses et voisins qui tapent le rythme sur le radiateur. À écouter fort !",
            pt: "A Evlampia lançou uma música. «Ó Senhor» não é uma oração: é o grito da alma de uma vidente que mais uma vez não recebeu 🎤 Batida pesada, cartas mentindo e vizinhos batendo no radiador no ritmo. Ouça alto!",
            pl: "Evlampia wydała kawałek. „Panie” to nie modlitwa, tylko krzyk duszy wróżbitki, która znów nie dostała zapłaty 🎤 Twardy bit, karty kłamią, a sąsiedzi łomocą w rytm w kaloryfer. Słuchać głośno!"
        }
    },
    {
        id: "superchasy",
        title: "Все суперточные часы",
        file: "superchasy.mp4",
        thumb: "img/thumb-superchasy.jpg",
        desc: "У Евлампии пять часов — и все суперточные. Просто точность у каждого своя 🕰️ Перед сеансом она обязательно сверяет их: совпадут три из пяти — можно гадать, совпадут все пять — «Господи», что-то точно будет!",
        titles: {
            en: "All the Super-Accurate Clocks",
            de: "All die supergenauen Uhren",
            be: "Усе суперточныя гадзіннікі",
            uk: "Усі суперточні годинники",
            zh: "所有超级准的时钟",
            es: "Todos los relojes súper exactos",
            ja: "超正確な時計ぜんぶ",
            fr: "Toutes les montres super précises",
            pt: "Todos os relógios superexatos",
            pl: "Wszystkie superdokładne zegarki"
        },
        descs: {
            en: "Evlampia has five clocks — and every single one is super-accurate. Each is just accurate in its own way 🕰️ Before every reading she checks them against each other: three out of five agree — time to tell fortunes; all five agree — “Oh Lord”, something is definitely coming!",
            de: "Evlampia hat fünf Uhren — und alle sind supergenau. Jede ist einfach auf ihre eigene Art genau 🕰️ Vor jeder Sitzung vergleicht sie sie miteinander: Stimmen drei von fünf überein, darf gewahrsagt werden; stimmen alle fünf — „O Gott“, da kommt bestimmt etwas!",
            be: "У Еўлампіі пяць гадзіннікаў — і ўсе суперточныя. Проста дакладнасць у кожнага свая 🕰️ Перад сеансам яна абавязкова зяраўняе іх: супадуць тры з пяці — можна варажыць, супадуць усе пяць — «Госпадзі», нешта дакладна будзе!",
            uk: "У Євлампії п'ять годинників — і всі суперточні. Просто точність у кожного своя 🕰️ Перед сеансом вона обов'язково звіряє їх: збігуться три з п'яти — можна ворожити, збігуться всі п'ять — «Господи», щось точно буде!",
            zh: "叶芙兰皮娅有五个时钟——个个都超级准，只不过每个的“准”都不一样🕰️ 每次占卜前她都要互相对时：五个里对了三个就能开算，五个全对——上帝啊，肯定要出大事了！",
            es: "Evlampia tiene cinco relojes — y todos son súper exactos. Cada uno es exacto a su manera 🕰️ Antes de cada sesión los coteja: si coinciden tres de cinco, se puede leer el futuro; si coinciden los cinco — «¡Señor!», algo grande se acerca.",
            ja: "エヴランピヤの時計は5つ。どれも超正確——ただし正確さの基準はそれぞれ🕰️ セッションの前に必ず照合します。5個中3个合えば占い開始、5個全部合えば「主よ」——何かが絶対起こる！",
            fr: "Evlampia possède cinq montres — et toutes sont super précises. Chacune est simplement précise à sa manière 🕰️ Avant chaque séance, elle les compare : si trois sur cinq concordent, elle peut tirer les cartes ; si les cinq concordent — « Ô Seigneur », quelque chose va forcément arriver !",
            pt: "A Evlampia tem cinco relógios — e todos são superexatos. Cada um é exato do seu jeito 🕰️ Antes de cada sessão ela os compara: se três dos cinco coincidem, dá para ler o futuro; se os cinco coincidem — «Ó Senhor», alguma coisa vem aí!",
            pl: "Evlampia ma pięć zegarków — i wszystkie są superdokładne. Każdy po prostu dokładny na swój sposób 🕰️ Przed każdą sesją porównuje je ze sobą: zgodzą się trzy z pięciu — można wróżyć; zgodzą się wszystkie pięć — „Panie”, na pewno coś się wydarzy!"
        }
    },
    {
        id: "aloha",
        title: "АЛОХА (пьяная Евлампия)",
        file: "aloha.mp4",
        thumb: "img/thumb-aloha.jpg",
        desc: ("АЛОХА ").repeat(32).trim(),
        titles: {
            en: "ALOHA (drunk Evlampia)",
            de: "ALOHA (betrunkene Evlampia)",
            be: "АЛОХА (п'яная Еўлампія)",
            uk: "АЛОХА (п'яна Євлампія)",
            zh: "阿罗哈（喝醉的叶芙兰皮娅）",
            es: "ALOHA (Evlampia borracha)",
            ja: "アロハ（酔っ払ったエヴランピヤ）",
            fr: "ALOHA (Evlampia ivre)",
            pt: "ALOHA (a Evlampia bêbada)",
            pl: "ALOHA (pijana Evlampia)"
        },
        descs: {
            en: ("ALOHA ").repeat(32).trim(),
            de: ("ALOHA ").repeat(32).trim(),
            be: ("АЛОХА ").repeat(32).trim(),
            uk: ("АЛОХА ").repeat(32).trim(),
            zh: ("阿罗哈 ").repeat(32).trim(),
            es: ("ALOHA ").repeat(32).trim(),
            ja: ("アロハ ").repeat(32).trim(),
            fr: ("ALOHA ").repeat(32).trim(),
            pt: ("ALOHA ").repeat(32).trim(),
            pl: ("ALOHA ").repeat(32).trim()
        }
    }
];
