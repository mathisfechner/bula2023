import {reactive} from 'vue'

let Store = reactive({
    i18n: {
        willkommen: [
            "Ovitaquam quis sum quaeperae modipis eatiorum soluptis et dolupta diore landemquisi ra se ne moluptatem ulluptam exped ma doluptu rehentiur, sequia ea velendae voloris sinvellorias aut lat.",
            "Uciis dempos volest venimet liqui te pratquodit abor sum et eat quunt, in enimus es sumqui dolo mod esequi accabori dolupta tquosam facia digent.",
            "Os moloribus alibusant ea volupti sitio. Poriam dendae. Xim evelesequae volorro ilique cusa di odia volut et fugit fugit fugite odis delis es dolorepe voluptaque optatate nam, qui te voloriam eostin etur?"
        ]
    },
    Team: [
        {name: "Rike", position: "BuLa-Leitung"},
        {name: "Melisa", position: "BuLa-Leitung"},
        {name: "Theresa", position: "BuLa-Leitung"},
        {name: "Harald", position: "BuLa-Leitung"},
        {name: "Harald", position: "BuLa-Leitung"},
        {name: "Harald", position: "BuLa-Leitung"}
    ],
    FAQ: {
        categories: [
            {title: "Ich will teilnehmen!", description: "Anmeldung. Nützliche Infos. Und vieles mehr."},
            {title: "Mein Kind will teilnehmen.", description: "Infos für Eltern. Packlisten. Ansprechpersonen"},
            {title: "faqs für Mitarbeitende in den Stämmen", description: "Gruppenanmeldungen. Material zum Download. Und viele Infos zur Vorbereitung."},
            {title: "Ich will euch unterstützen!", description: "Wundervoll :) Infos und Möglichkeiten zum Sponsoring."},
            {title: "ich will Mitarbeiten!", description: "Fantastisch! Alles zu den Aufgaben und Jobs."}
        ]
    },
    Jobs: [],
    Sponsoren: []
});

export default Store