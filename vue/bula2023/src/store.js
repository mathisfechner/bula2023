import {Fragment, reactive} from 'vue'

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
        {name: "Harald", position: "Sichere-Gemeinde"},
        {name: "Harald", position: "Sichere-Gemeinde"},
        {name: "Harald", position: "Sichere-Gemeinde"}
    ],
    FAQ: {
        categories: {
            teilnehmende: {
                title: "Ich will teilnehmen!", description: "Anmeldung. Nützliche Infos. Und vieles mehr.", class: "bubble1 hoverYellow",
                questions: [
                    {question: "Wie kann ich mich anmelden?", answer: "Über folgenden Link oder so. Im Zweifel immer Sippen- oder Stammesführung fragen. Falls du in der Stammesführung bist "}
                ]
            },
            eltern: {
                title: "Mein Kind will teilnehmen.", description: "Infos für Eltern. Packlisten. Ansprechpersonen", class: "bubble2 hoverBlue",
                questions: []
            },
            mitarbeitende: {
                title: "faqs für Mitarbeitende in den Stämmen", description: "Gruppenanmeldungen. Material zum Download. Und viele Infos zur Vorbereitung.", class: "bubble1 hoverRed",
                questions: []
            },
            support: {
                title: "Ich will euch unterstützen!", description: "Wundervoll :) Infos und Möglichkeiten zum Sponsoring.", class: "bubble2 hoverBlue",
                questions: []
            },
            jobs: {
                title: "ich will Mitarbeiten!", description: "Fantastisch! Alles zu den Aufgaben und Jobs.", class: "bubble1 hoverYellow",
                questions: []
            }
        }
    },
    Jobs: [],
    Sponsoren: []
});

export default Store