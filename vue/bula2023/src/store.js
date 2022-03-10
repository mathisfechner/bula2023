import {Fragment, reactive} from 'vue'

let Store = reactive({
    i18n: {
        willkommen: [
            "Nach zwei Jahren Pandemie hast du genug davon, in deinem Zimmer vorm Computer zu hocken? Du willst endlich wieder raus? Abenteuer erleben? Pfadfinder aus anderen Stämmen kennenlernen? Neue Freunde finden? Bis tief in die Nacht singen? Beim Großen Spiel dein Bestes geben? Mit dem ganzen BuLa Gottesdienst feiern? Deiner Kreativität in Workshops und bei Lagerbauten freien Lauf lassen? ",
            "Wenn du alle oder mehrere dieser Fragen mit „Ja!“ beantwortet hast, bist du auf dieser Website genau richtig – und noch viel mehr auf unserem nächsten Bundeslager! Stattfinden wird es vom 29. Juli bis zum 06. August 2023 in Reinwarzhofen. Wir freuen uns auf dich!",
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
                    {
                        question: "Wer ist eingeladen?",
                        answer: "Alle Stämme und Siedlungen und verstreute Rover und Altpfadfinder der BPS und befreundeter Pfadfinderbünde. Teilnehmende sollten zum Zeitpunkt des Lagers mindestens zehn Jahre alt sein. Ausnahmen gelten für die Kinder von Mitarbeitenden."
                    },
                    {
                        question: "Wie läuft die Anmeldung?",
                        answer: "Die Anmeldung wird im Laufe der zweiten Jahreshälfte 2022 herauskommen. Dann werdet ihr hier auch genauere Infos zum Anmeldeprozess finden."
                    },
                    {
                        question: "Ich bin derzeit in keinem Stamm aktiv. Kann ich trotzdem teilnehmen?",
                        answer: "Na klar. Wenn du gerne bei einem bestimmten Stamm oder einer bestimmten Siedlung unterkommen möchtest, gib das einfach bei der Anmeldung an (und sprich das am besten mit denjenigen vorher ab). Ansonsten wirst du irgendwo zugeteilt."
                    },
                    {
                        question: "Ich bin kein BPS-Pfadi. Kann ich trotzdem teilnehmen?",
                        answer: "Pfadis aus mit der BPS befreundeten Bünden im In- und Ausland sind ebenfalls herzlich eingeladen."
                    },
                    {
                        question: "Ich bin (noch) kein Pfadi, finde die Pfadfinderei aber total spannend. Kann ich vorbeischauen?",
                        answer: "Auf jeden Fall! Nimm am besten direkt Kontakt mit der Lagerleitung auf, dann schauen wir, wie und wann es am besten passt."
                    },
                    {
                        question: "Kann ich meine Kinder mitbringen, auch wenn sie noch keine zehn Jahre alt sind?",
                        answer: "Selbstverständlich. Wir werden diesmal sogar eine BuLa-Kita für die Kinder von Mitarbeitenden haben. Für Familien mit sehr kleinen Kindern wird es auch die Möglichkeit geben, bei Bedarf im Haus zu übernachten. Ein eigenes Familienlager wird es nicht geben, jede Familie wird stattdessen Teil einer Kochgruppe sein."
                    },
                    {
                        question: "Gibt es die Möglichkeit, in einem Haus zu nächtigen?",
                        answer: "Ja, die gibt es. Allerdings sind die Plätze begrenzt und daher denen vorbehalten, die mit sehr kleinen Kindern anreisen oder aus gesundheitlichen Gründen z.B. ein Bett oder eine Steckdose benötigen. Bitte beachtet, dass die Lagerbeiträge bei Übernachtung im Haus ein bisschen teurer sind als bei einer Übernachtung im Zelt."
                    },
                    {
                        question: "Stimmt es, dass das Lager ausschließlich digital stattfinden soll?",
                        answer: "Nein. Das war ein Aprilscherz."
                    }
                ]
            },
            eltern: {
                title: "Mein Kind will teilnehmen.", description: "Infos für Eltern. Packlisten. Ansprechpersonen", class: "bubble2 hoverBlue",
                questions: [
                    {
                        question: "Wer ist eingeladen?",
                        answer: "Alle Stämme und Siedlungen und verstreute Rover und Altpfadfinder der BPS und befreundeter Pfadfinderbünde. Teilnehmende sollten zum Zeitpunkt des Lagers mindestens zehn Jahre alt sein. Ausnahmen gelten für die Kinder von Mitarbeitenden. Teilnehmende Kinder müssen Teil einer Gruppe sein."
                    },
                    {
                        question: "Wie läuft die Anmeldung?",
                        answer: "Die Anmeldung wird im Laufe der zweiten Jahreshälfte 2022 herauskommen. Dann werdet ihr hier auch genauere Infos zum Anmeldeprozess finden."
                    },
                    {
                        question: "Habt ihr ein Kinderschutzkonzept?",
                        answer: "Ja, das haben wir. Das Kinderschutzkonzept der BPS [Link zu Website] wird selbstverständlich auch auf dem BuLa gelten. Unser Team für ein Sicheres BuLa wird im Vorfeld die Mitarbeitenden schulen und steht auf dem Lager Kindern und Mitarbeitenden mit einem offenen Ohr sowie Rat und Tat zur Seite."
                    },
                ]
            },
            mitarbeitende: {
                title: "faqs für Mitarbeitende in den Stämmen", description: "Gruppenanmeldungen. Material zum Download. Und viele Infos zur Vorbereitung.", class: "bubble1 hoverRed",
                questions: [
                    {
                        question: "Wer ist eingeladen?",
                        answer: "Alle Stämme und Siedlungen und verstreute Rover und Altpfadfinder der BPS und befreundeter Pfadfinderbünde. Teilnehmende sollten zum Zeitpunkt des Lagers mindestens zehn Jahre alt sein. Ausnahmen gelten für die Kinder von Mitarbeitenden."
                    },
                    {
                        question: "Wie läuft die Anmeldung?",
                        answer: "Die Anmeldung wird im Laufe der zweiten Jahreshälfte 2022 herauskommen. Dann werdet ihr hier auch genauere Infos zum Anmeldeprozess finden."
                    },
                    {
                        question: "Ist die Anreise mit öffentlichen Verkehrsmitteln möglich?",
                        answer: "Ja, die ist möglich. Zwar gibt es in Reinwarzhofen selbst keinen Bahnhof, wir werden aber einen Shuttleservice zum nächstgelegenen Bahnhof einrichten. Bitte sagt vorher Bescheid, wenn ihr diesen Service in Anspruch nehmen möchtet."
                    },
                ]
            },
            support: {
                title: "Ich will euch unterstützen!", description: "Wundervoll :) Infos und Möglichkeiten zum Sponsoring.", class: "bubble2 hoverBlue",
                questions: [
                    {
                        question: "Benötigt ihr Spenden?",
                        answer: "Über Spenden freuen wir uns sehr, denn wir wollen gerne allen Kindern und Mitarbeitenden unabhängig vom Einkommen der Eltern bzw. dem eigenen Einkommen eine Teilnahme ermöglichen."
                    },
                    {
                        question: "Warum sollte ich spenden?",
                        answer: "In den letzten Jahren mussten Kinder auf Vieles verzichten, hatten nur wenig Kontakt zu Gleichaltrigen und konnten viele wichtige Erfahrungen nicht machen. Wir möchten ihnen auf unserem BuLa die Gelegenheit geben, sich frei zu entfalten, die eigenen Stärken zu entdecken und zu lernen, für sich und andere Verantwortung zu übernehmen."
                    },
                    {
                        question: "Wie kann ich spenden?",
                        answer: "Unsere Kontoverbindung findest du hier:<br>Kontoinhaberin: Baptistische Pfadfinderschaft<br>IBAN: DE34 5009 2100 0000 0726 21<br>BIC: GENODE51BH2<br>Bank: SKB Bad Homburg<br>Stichwort: BuLa 2023"
                    },
                    {
                        question: "Wird eine Spendenbescheinigung ausgestellt?",
                        answer: "Ja, ab einem Betrag von 20 Euro wird eine Spendenbescheinigung ausgestellt."
                    },
                    {
                        question: "Benötigt ihr Sachspenden?",
                        answer: "Auch Sachspenden sind herzlich willkommen, z.B. Lebensmittel, Preise für die Wettbewerbe oder Ausrüstungsgegenstände für Kinder, deren Familien nicht ausreichend finanzielle Mittel haben, um ihr Kind mit Schlafsack, Rucksack etc. auszustatten. Setz dich am besten mit der Lagerleitung in Kontakt, um abzuklären, wie eine konkrete Sachspende aussehen könnte."
                    },
                ]
            },
            jobs: {
                title: "ich will Mitarbeiten!", description: "Fantastisch! Alles zu den Aufgaben und Jobs.", class: "bubble1 hoverYellow",
                questions: [
                    {
                        question: "Wo kann ich mich einbringen?",
                        answer: "Schön, dass du mithelfen möchtest! Es gibt jede Menge Möglichkeiten, sich einzubringen. Für welche Aufgaben wir noch Leute suchen, erfährst du in unserer Jobbörse."
                    },
                    {
                        question: "Wo soll ich mich melden?",
                        answer: "Wenn du in der Jobbörse eine passende Aufgabe gefunden hast, schaue doch nach, ob der oder die Zuständige aus dem BuLa-Team auf unserer Kontaktseite aufgelistet sind. Falls nicht, wende dich direkt an die Lagerleitung."
                    },
                    {
                        question: "Ich will gerne mitarbeiten, weiß aber nicht, in welchem Bereich. Habt ihr eine Idee?",
                        answer: "Auf jeden Fall! Aber dafür müssen wir dich erstmal etwas besser kennenlernen. Schreib eine Mail an die Lagerleitung und erzähl darin, wer du bist, was du gerne tust und welche Erfahrungen du schon hast. Wir finden garantiert den passenden Job für dich."
                    },
                    {
                        question: "Ich kann am BuLa leider nicht teilnehmen, möchte aber gerne im Vorfeld mitarbeiten. Geht das?",
                        answer: "Na klar geht das! Wir haben auch einige Aufgaben, die im Vorfeld zu erledigen sind und würden uns sehr freuen, wenn du uns helfen könntest. Schau einfach mal in unsere Jobbörse vorbei."
                    },
                ]
            }
        }
    },
    Jobs: {
        "SCHREIBEN UND GESTALTEN": [
            {
                title: "Mitarbeitende für das Team „Redaktionelles“", description: "Egal ob Rüstbrief, Lagerheft oder Texte für die Website - wir brauchen Menschen, die Spaß daran haben, sich auszudrücken und mit Wörtern zu spielen. Es wäre gut, wenn in diesem Bereich bereits Erfahrungen gesammelt wurden, damit sich der Korrekturaufwand in Grenzen hält.",
                efford: "Eure Mithilfe wird vor dem Lager benötigt – auf dem Lager selbst habt ihr frei.",
                contact: "Rike"
            },
            {
                title: "Mitarbeitende für das Instagram-Team", description: "Du bist gerne in den sozialen Medien unterwegs und hast Spaß daran, dir kreative Texte auszudenken, langfristig zu planen und unseren BuLa-Account zu bespielen? Dann ist das genau die richtige Aufgabe für dich.",
                efford: "Vor und/oder auf dem Lager – je mehr mitmachen, desto besser können wir die Arbeit aufteilen.",
                contact: "Rike"
            },
            {
                title: "Comiczeichner/Comiczeichnerin",
                description: "Sowohl vor dem BuLa als währenddessen würden wir die verschiedenen Unterlagen gerne mit lustigen, kunstvollen Bildern schmücken. Wenn du zeichnen kannst und Spaß daran hast, melde dich gerne, wir freuen uns auf tolle Comics und Bilder.",
                efford: "Deine Hilfe wird vor dem Lager benötigt, auf dem Lager hast du frei.",
                contact: "Rike"
            }
        ],
        "PROGRAMM": [
            {
                title: "Schauspiel-Team",
                description: "Wir haben die große Freude, woody als den Leiter unseres Schauspielteams gewonnen zu haben. Auch wenn die genauen Rollen noch nicht feststehen, suchen wir dennoch motivierte Pfadis, die Lust haben, auf der Bühne in andere Rollen zu schlüpfen und die Geschichte für die Kinder erlebbar zu machen.",
                efford: "Vorbereitung im Vorfeld des Lagers, ansonsten vor allem während des Lagers.",
                contact: "Rike"
            },
            {
                title: "Singewettstreit",
                description: "Wie vergangenes BuLa würden wir gerne wieder einen Singewettstreit veranstalten. Abgesehen von der Jury brauchen wir dafür Leute, die den Abend organisieren und koordinieren. Das bedeutet die Einteilung in Kategorien, die Annahme von Bewerbungen und die Durchführung an dem Abend. Gerne kann sich hierfür auch eine Gruppe von Freunden oder ein Stamm bereiterklären.",
                efford: "Vorbereitung im Vorfeld des Lagers, ansonsten während des Lagers. Nach dem Singewettstreit habt ihr frei.",
                contact: "Rike"
            },
            {
                title: "Markttag",
                description: "Ihr kennt das Konzept eines Markttages von diversen Lagern. Jeder Stamm bietet Essen, Workshops oder Spiele an, die Kids können rumlaufen und es sich gut gehen lassen. Wir brauchen eine Person, die diesen Tag organisiert und koordiniert. Wir würden im Vorhinein natürlich alles notwenige abklären und für Rückfragen zur Verfügung stehen.",
                efford: "Vorbereitung im Vorfeld des Lagers, ansonsten während des Lagers. Nach dem Markttag habt ihr frei.",
                contact: "Rike"
            },
            {
                title: "Eröffnungsabend",
                description: "Auch für den Eröffnungsabend brauchen wir im besten Fall einen Stamm, der sich um die Abendgestaltung kümmert. Hier dürfen Spiele und die Einführung in die Geschichte natürlich nicht fehlen. Auch hierbei stehen wir euch mit Ideen, Rat und Tat zur Seite.",
                efford: "Vorbereitung im Vorfeld des Lagers, ansonsten während des am Eröffnungsabend (Sonntagabend). Danach habt ihr frei.",
                contact: "Rike"
            },
            {
                title: "Team für den Hindernis-Spenden-Lauf",
                description: "Auf dem Lager wird es einen Hindernis-Spenden-Lauf geben, der sich nur als ganze Sippe bewältigen lassen soll. Für jede Sippe, die den Lauf erfolgreich absolviert, werden unsere Sponsoren an ein Projekt spenden. Wir suchen ein Team, dass den Hindernis-Parcours aufbaut und organisiert. Da die Sippen über das Lager verteilt in ihrer freien Zeit teilnehmen können sollen, werdet ihr bei der Betreuung – soweit gewünscht – vom Rover-Bereitschaftsdienst unterstützt.",
                efford: "Planung des Konzepts vor dem Lager, ansonsten vor allem auf dem Lager. Aufbau während des Vorlagers wünschenswert, aber kein Muss.",
                contact: "Rike"
            },
        ],
        "DIES UND DAS AUF DEM LAGER": [
            {
                title: "Mitarbeitende in der BuLa-Kita",
                description: "Erstmals wird es eine BuLa-Kita geben, für die wir noch Mitarbeitende suchen. Wenn du eine pädagogische Ausbildung hast, wäre das natürlich super, aber auch, wenn du einfach Spaß an der Arbeit mit kleinen Kindern hast, bist du willkommen im Team. Zu welchen Zeiten und für welche Altersgruppen die BuLa-Kita offen hat, wird festgelegt, sobald der Bedarf klar ist.",
                efford: "Abgesehen von einer digitalen Vorbesprechung: auf dem Lager. Die Schichten werden so eingeteilt, dass ihr auch euren sonstigen Verpflichtungen nachgehen könnt.",
                contact: "Rike"
            },
        ]
    },
    Map: {
        description: "Nach drei BuLas im Norden geht es 2023 in den Süden, genauer gesagt nach Bayern: Unser BuLa wird dieses Mal auf dem Willy-Brandt-Zeltplatz in Reinwarzhofen stattfinden. Von diesem Ort habt ihr noch nie gehört? Das wird sich ändern! Reinwarzhofen liegt in der südlichen Fränkischen Alb, grob gesagt zwischen Nürnberg und Ingolstadt. Der Lagerplatz ist mit allem ausgestattet, was ein BuLa-Lagerplatz benötigt und wurde vom BuLa-Team bereits mit einer Probe-Übernachtung bei der Besichtigung eingeweiht. Da wir zum Lagerplatz gehajkt sind, können wir euch außerdem schon versprechen: Die Gegend ist eine exzellente Hajk-Gegend! Im Plan unten könnt ihr schon einmal einen Eindruck davon bekommen, wie der Platz aufgebaut ist.",
        undefined: "Über die Karte streichen oder einen Ort auswählen, um den Lagerplatz kennenzulernen.",
        ersteHilfe: "Hier könnten Informationen zum erste Hilfe Haus stehen",
        Sportplatz: "Hier könnten Informationen zum Sportplatz stehen",
        Küche: "Hier könnten Informationen zur Küche stehen",
        Waschhaus: "Hier könnten Informationen zum Waschhaus stehen",
    },
    Sponsoren: []
});

export default Store