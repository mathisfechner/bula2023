import { Fragment, reactive } from "vue";

let Store = reactive({
  i18n: {
    willkommen: [
      "Nach zwei Jahren Pandemie hast du genug davon, in deinem Zimmer vorm Computer zu hocken? Du willst endlich wieder raus? Abenteuer erleben? Pfadfinder aus anderen Stämmen kennenlernen? Neue Freunde finden? Bis tief in die Nacht singen? Beim Großen Spiel dein Bestes geben? Mit dem ganzen BuLa Gottesdienst feiern? Deiner Kreativität in Workshops und bei Lagerbauten freien Lauf lassen?",
      "Wenn du auch nur eine dieser Fragen mit „Ja!“ beantwortet hast, bist du auf dieser Website genau richtig – und noch viel mehr auf dem nächsten Bundeslager der <a href='https://bps-pfadfinder.de' target='blank'>BPS</a>! Stattfinden wird es vom 29. Juli bis zum 06. August 2023 in Reinwarzhofen. Wir freuen uns auf dich!",
    ],
  },
  Team: [
    {
      name: "Rike",
      position: "Lagerleitung",
      text: "Gilt in der Pfadfinderschaft als lebende Legende und hat immer eine Geschichte parat. Auf dem BuLa hätte sie gern ein eigenes Trampolin.",
      mail: "bula2023@bps-pfadfinder.de",
    },
    {
      name: "Melisa",
      position: "Lagerleitung",
      text: "Bekannt für ihre hohen Qualitätsansprüche. Wünscht sich für das BuLa ein richtiges Schwert und hofft, dass sie auch mal auf Rikes Trampolin darf.",
      mail: "bula2023@bps-pfadfinder.de",
    },
    {
      name: "Theresa",
      position: "Lagerleitung",
      text: "Mag Zahlen. Hat daher ein Auge auf die Finanzen, wenn sich Rike und Melisa ständig teuren Schwachsinn für’s BuLa wünschen.",
      mail: "bula2023@bps-pfadfinder.de",
    },
    {
      name: "Justus",
      position: "Küche",
      text: "Kocht auch nur mit Wasser. Dafür geben noch Mia, Caro und Mathis aus Hannover ihren Senf dazu.",
    },
    {
      name: "Jonathan",
      position: "Geistliches",
      text: "Leidenschaftlicher Theologe und Maultaschenliebhaber. Predigt gern mit einer Axt in der Hand.",
    },
    {
      name: "mena",
      position: "Sichere Pfadfinderarbeit",
      text: "Sorgt dafür, dass Kinderschutz beim BuLa groß geschrieben wird – nicht nur aus orthografischen Gründen.",
    },
    {
      name: "Mara",
      position: "Großes Spiel",
      text: "Will doch nur spielen. Wird dabei von Christopher und dem größten Stamm der BPS unterstützt.",
    },
    {
      name: "Christopher",
      position: "Großes Spiel",
      text: "Will doch nur spielen. Wird dabei von Mara und dem größten Stamm der BPS unterstützt.",
    },
    {
      name: "Marten",
      position: "Design",
      text: "Unser Mann für’s Schöne. Außerdem für die Gestaltung der Website und das Corporate Design zuständig.",
    },
    {
      name: "Mathis",
      position: "Website",
      text: "Hätte als Einziger verhindern können, dass er hier erwähnt wird. Empfiehlt außerdem bei technischen Notfällen, das Gerät aus- und wieder anzuschalten.",
    },
    {
      name: "Mello",
      position: "Brieffreundschaften",
      text: "Knüpft lieber Kontakte als Knoten. Vernetzt Briefmarkensammler und Schreiberlinge quer durch den Bund.",
    },
    {
      name: "Lotte",
      position: "Brieffreundschaften",
      text: "Knüpft lieber Kontakte als Knoten. Vernetzt Briefmarkensammler und Schreiberlinge quer durch den Bund.",
    },
    {
      name: "woody",
      position: "Großbauten",
      text: "Begeisterter Hochstapler. Arbeitet vorzugsweise mit Holz, Seil und Schwarzzeltmaterial.",
    },
    {
      name: "malu",
      position: "Bau- und Brennholz",
      text: "Kann alles, außer nein sagen. Ist quasi der Blitzableiter der Lagerleitung.",
    },
  ],
  FAQ: {
    categories: {
      teilnehmende: {
        title: "Ich will teilnehmen!",
        description: "Anmeldung. Nützliche Infos. Und vieles mehr.",
        class: "bubble1 hoverYellow",
        questions: [
          {
            question: "Wer ist eingeladen?",
            answer:
              "Alle Stämme und Siedlungen und verstreute Rover und Altpfadfinder der BPS und befreundeter Pfadfinderbünde. Teilnehmende sollten zum Zeitpunkt des Lagers mindestens zehn Jahre alt sein. Ausnahmen gelten für die Kinder von Mitarbeitenden.",
          },
          {
            question: "Wie läuft die Anmeldung?",
            answer:
              "Die Anmeldung wird im Laufe der zweiten Jahreshälfte 2022 herauskommen. Dann werdet ihr hier auch genauere Infos zum Anmeldeprozess finden.",
          },
          {
            question:
              "Ich bin derzeit in keinem Stamm aktiv. Kann ich trotzdem teilnehmen?",
            answer:
              "Na klar. Wenn du gerne bei einem bestimmten Stamm oder einer bestimmten Siedlung unterkommen möchtest, gib das einfach bei der Anmeldung an (und sprich das am besten mit denjenigen vorher ab). Ansonsten wirst du irgendwo zugeteilt.",
          },
          {
            question: "Ich bin kein BPS-Pfadi. Kann ich trotzdem teilnehmen?",
            answer:
              "Pfadis aus mit der BPS befreundeten Bünden im In- und Ausland sind ebenfalls herzlich eingeladen.",
          },
          {
            question:
              "Ich bin (noch) kein Pfadi, finde die Pfadfinderei aber total spannend. Kann ich vorbeischauen?",
            answer:
              "Wenn du schon volljährig bist: auf jeden Fall! Nimm am besten direkt Kontakt mit der Lagerleitung auf, dann schauen wir, wie und wann es am besten passt. Falls du U18 bist, schau mal auf unserer <a href='https://www.bps-pfadfinder.de/kontakt/karte-aller-staemme/' target='blank'>Website</a> nach - vielleicht gibt es ja einen Stamm in deiner Nähe, dem du dich anschließen kannst",
          },
          {
            question:
              "Kann ich meine Kinder mitbringen, auch wenn sie noch keine zehn Jahre alt sind?",
            answer:
              "Selbstverständlich. Wir werden diesmal sogar eine BuLa-Kita für die Kinder von Mitarbeitenden haben. Für Familien mit sehr kleinen Kindern wird es auch die Möglichkeit geben, bei Bedarf im Haus zu übernachten. Ein eigenes Familienlager wird es nicht geben, jede Familie wird stattdessen Teil einer Kochgruppe sein.",
          },
          {
            question: "Gibt es die Möglichkeit, in einem Haus zu nächtigen?",
            answer:
              "Ja, die gibt es. Allerdings sind die Plätze begrenzt und daher denen vorbehalten, die mit sehr kleinen Kindern anreisen oder aus gesundheitlichen Gründen z.B. ein Bett oder eine Steckdose benötigen. Bitte beachtet, dass die Lagerbeiträge bei Übernachtung im Haus ein bisschen teurer sind als bei einer Übernachtung im Zelt.",
          },
          {
            question:
              "Stimmt es, dass das Lager ausschließlich digital stattfinden soll?",
            answer:
              "Nein. Das war ein <a href='https://www.bps-pfadfinder.de/aktionen/berichte/artikel/bula-statt-digitala-2023-wie-es-dazu-kam-und-was-nicht-geplant-ist/' target='blank'>Aprilscherz</a>.",
          },
        ],
      },
      eltern: {
        title: "Mein Kind will teilnehmen.",
        description: "Infos für Eltern. Packlisten. Ansprechpersonen",
        class: "bubble2 hoverBlue",
        questions: [
          {
            question: "Wer ist eingeladen?",
            answer:
              "Alle Stämme und Siedlungen und verstreute Rover und Altpfadfinder der BPS und befreundeter Pfadfinderbünde. Teilnehmende sollten zum Zeitpunkt des Lagers mindestens zehn Jahre alt sein. Ausnahmen gelten für die Kinder von Mitarbeitenden. Teilnehmende Kinder müssen Teil einer Gruppe sein.",
          },
          {
            question: "Wie läuft die Anmeldung?",
            answer:
              "Die Anmeldung wird im Laufe der zweiten Jahreshälfte 2022 herauskommen. Dann werdet ihr hier auch genauere Infos zum Anmeldeprozess finden.",
          },
          {
            question: "Habt ihr ein Kinderschutzkonzept?",
            answer:
              "Ja, das haben wir. Das <a href='https://www.bps-pfadfinder.de/downloads/sicheregemeinde/' target='blank'>Kinderschutzkonzept der BPS</a> wird selbstverständlich auch auf dem BuLa gelten. Unser Team für ein Sicheres BuLa wird im Vorfeld die Mitarbeitenden schulen und steht auf dem Lager Kindern und Mitarbeitenden mit einem offenen Ohr sowie Rat und Tat zur Seite.",
          },
        ],
      },
      mitarbeitende: {
        title: "Mein Stamm will teilnehmen",
        description:
          "Infos für Mitarbeitende in den Stämmen. Gruppenanmeldungen. Material zum Download. Alles Wichtige zur Vorbereitung.",
        class: "bubble1 hoverRed",
        questions: [
          {
            question: "Wer ist eingeladen?",
            answer:
              "Alle Stämme und Siedlungen und verstreute Rover und Altpfadfinder der BPS und befreundeter Pfadfinderbünde. Teilnehmende sollten zum Zeitpunkt des Lagers mindestens zehn Jahre alt sein. Ausnahmen gelten für die Kinder von Mitarbeitenden.",
          },
          {
            question: "Wie läuft die Anmeldung?",
            answer:
              "Die Anmeldung wird im Laufe der zweiten Jahreshälfte 2022 herauskommen. Dann werdet ihr hier auch genauere Infos zum Anmeldeprozess finden.",
          },
          {
            question:
              "Ist die Anreise mit öffentlichen Verkehrsmitteln möglich?",
            answer:
              "Ja, die ist möglich. Zwar gibt es in Reinwarzhofen selbst keinen Bahnhof, wir werden aber einen Shuttleservice zum nächstgelegenen Bahnhof einrichten. Bitte sagt vorher Bescheid, wenn ihr diesen Service in Anspruch nehmen möchtet.",
          },
        ],
      },
      support: {
        title: "Ich will euch unterstützen!",
        description: "Wundervoll :) Infos und Möglichkeiten zum Sponsoring.",
        class: "bubble2 hoverBlue",
        questions: [
          {
            question: "Benötigt ihr Spenden?",
            answer:
              "Über Spenden freuen wir uns sehr, denn wir wollen gerne allen Kindern und Mitarbeitenden unabhängig vom Einkommen der Eltern bzw. dem eigenen Einkommen eine Teilnahme ermöglichen.",
          },
          {
            question: "Warum sollte ich spenden?",
            answer:
              "In den letzten Jahren mussten Kinder auf Vieles verzichten, hatten nur wenig Kontakt zu Gleichaltrigen und konnten viele wichtige Erfahrungen nicht machen. Wir möchten ihnen auf unserem BuLa die Gelegenheit geben, sich frei zu entfalten, die eigenen Stärken zu entdecken und zu lernen, für sich und andere Verantwortung zu übernehmen.",
          },
          {
            question: "Wie kann ich spenden?",
            answer:
              "Unsere Kontoverbindung findest du hier:<br>Kontoinhaberin: Baptistische Pfadfinderschaft<br>IBAN: DE34 5009 2100 0000 0726 21<br>BIC: GENODE51BH2<br>Bank: SKB Bad Homburg<br>Stichwort: BuLa 2023",
          },
          {
            question: "Wird eine Spendenbescheinigung ausgestellt?",
            answer:
              "Ja, ab einem Betrag von 20 Euro wird eine Spendenbescheinigung ausgestellt.",
          },
          {
            question: "Benötigt ihr Sachspenden?",
            answer:
              "Auch Sachspenden sind herzlich willkommen, z.B. Lebensmittel, Preise für die Wettbewerbe oder Ausrüstungsgegenstände für Kinder, deren Familien nicht ausreichend finanzielle Mittel haben, um ihr Kind mit Schlafsack, Rucksack etc. auszustatten. Setz dich am besten mit der Lagerleitung in Kontakt, um abzuklären, wie eine konkrete Sachspende aussehen könnte.",
          },
        ],
      },
      jobs: {
        title: "ich will Mitarbeiten!",
        description: "Fantastisch! Alles zu den Aufgaben und Jobs.",
        class: "bubble1 hoverYellow",
        questions: [
          {
            question: "Wo kann ich mich einbringen?",
            answer:
              "Schön, dass du mithelfen möchtest! Es gibt jede Menge Möglichkeiten, sich einzubringen. Für welche Aufgaben wir noch Leute suchen, erfährst du in unserer Jobbörse.",
          },
          {
            question: "Wo soll ich mich melden?",
            answer:
              "Wenn du in der Jobbörse eine passende Aufgabe gefunden hast, schaue doch nach, ob der oder die Zuständige aus dem BuLa-Team auf unserer Kontaktseite aufgelistet sind. Falls nicht, wende dich direkt an die Lagerleitung.",
          },
          {
            question:
              "Ich will gerne mitarbeiten, weiß aber nicht, in welchem Bereich. Habt ihr eine Idee?",
            answer:
              "Auf jeden Fall! Aber dafür müssen wir dich erstmal etwas besser kennenlernen. Schreib eine Mail an die Lagerleitung und erzähl darin, wer du bist, was du gerne tust und welche Erfahrungen du schon hast. Wir finden garantiert den passenden Job für dich.",
          },
          {
            question:
              "Ich kann am BuLa leider nicht teilnehmen, möchte aber gerne im Vorfeld mitarbeiten. Geht das?",
            answer: [
              {
                text: "Na klar geht das! Wir haben auch einige Aufgaben, die im Vorfeld zu erledigen sind und würden uns sehr freuen, wenn du uns helfen könntest. Schau einfach mal in unserer ",
              },
              { link: "/team#jobs", linkText: "Jobbörse" },
              { text: " vorbei." },
            ],
          },
        ],
      },
    },
  },
  Jobs: {
    "SCHREIBEN UND GESTALTEN": [
      {
        title: "Mitarbeitende für das Team „Redaktionelles“",
        description:
          "Egal ob Rüstbrief, Lagerheft oder Texte für die Website - wir brauchen Menschen, die Spaß daran haben, sich auszudrücken und mit Wörtern zu spielen. Es wäre gut, wenn in diesem Bereich bereits Erfahrungen gesammelt wurden, damit sich der Korrekturaufwand in Grenzen hält.",
        efford:
          "Eure Mithilfe wird vor dem Lager benötigt – auf dem Lager selbst habt ihr frei.",
        contact: "Melisa",
      },
      {
        title: "Mitarbeitende für das Instagram-Team",
        description:
          "Du bist gerne in den sozialen Medien unterwegs und hast Spaß daran, dir kreative Texte auszudenken, langfristig zu planen und unseren BuLa-Account zu bespielen? Dann ist das genau die richtige Aufgabe für dich.",
        efford:
          "Vor und/oder auf dem Lager – je mehr mitmachen, desto besser können wir die Arbeit aufteilen.",
        contact: "Theresa",
      },
      {
        title: "Comiczeichner/Comiczeichnerin",
        description:
          "Sowohl vor dem BuLa als währenddessen würden wir die verschiedenen Unterlagen gerne mit lustigen, kunstvollen Bildern schmücken. Wenn du zeichnen kannst und Spaß daran hast, melde dich gerne, wir freuen uns auf tolle Comics und Bilder.",
        efford:
          "Deine Hilfe wird vor dem Lager benötigt, auf dem Lager hast du frei.",
        contact: "Rike",
      },
      {
        title: "Erarbeitung von Sippenstundenentwürfen",
        description:
          "Du hast kreative Ideen für Sippenstunden, mit denen wir im Vorfeld des BuLas Jupfis und Pfadis auf das BuLa-Thema einstimmen können? Du hast Spaß daran, daraus Stundenentwürfe für unterschiedliche Altersstufen zu entwickeln? Dann werde aktiv und hilf mit bei der Erarbeitung von Sippenstundenentwürfen! Damit es nicht zu viel für eine Person wird, planen wir, diese Aufgabe auf mehrere Schultern zu verteilen.",
        efford:
          "Deine Hilfe wird vor dem Lager benötigt, auf dem Lager hast du frei.",
        contact: "Melisa",
      },
      {
        title: "Ausarbeitung der Andachten",
        description:
          "Das Andachtskonzept fürs BuLa hat unser Team für den geistlichen Teil schon erarbeitet – jetzt brauchen sie noch Unterstützung bei der Ausarbeitung der Andachten fürs Lagerheft. Du hast Lust, die Ausarbeitung für einen Lagertag zu übernehmen? Dann werde Teil des Teams und trage mit dazu bei, dass die Arbeit auf vielen Schultern verteilt wird!",
        efford:
          "Deine Hilfe wird vor dem Lager benötigt, auf dem Lager hast du frei.",
        contact: "Theresa",
      },
    ],
    PROGRAMM: [
      {
        title: "Singewettstreit",
        description:
          "Wie vergangenes BuLa würden wir gerne wieder einen Singewettstreit veranstalten. Abgesehen von der Jury brauchen wir dafür Leute, die den Abend organisieren und koordinieren. Das bedeutet die Einteilung in Kategorien, die Annahme von Bewerbungen und die Durchführung an dem Abend. Gerne kann sich hierfür auch eine Gruppe von Freunden oder ein Stamm bereiterklären.",
        efford:
          "Vorbereitung im Vorfeld des Lagers, ansonsten während des Lagers. Nach dem Singewettstreit habt ihr frei.",
        contact: "Melisa",
      },
      {
        title: "Lagerbautenwettbewerb",
        description:
          "Das Stangenholz liegt auf dem Platz schon bereit, nächstes Jahr kann also eifrig gebaut werden. Ohne einen Wettbewerb wäre das aber natürlich langweilig! Daher suchen wir ein oder mehrere Personen für die Koordination des Lagerbautenwettbewerbs. Du hast Lust, die Kategorien zu definieren, die Jury zu berufen und an der Auswahl der Gewinner beteiligt zu sein? Dann melde dich bei uns!",
        efford:
          "Definition der Kategorien und Zusammenstellung der Infos für die Stämme vor dem Lager. Auf dem Lager: Koordination des Wettbewerbs und Wahl der Gewinner.",
        contact: "Rike",
      },
      // {
      //     title: "Markttag",
      //     description: "Ihr kennt das Konzept eines Markttages von diversen Lagern. Jeder Stamm bietet Essen, Workshops oder Spiele an, die Kids können rumlaufen und es sich gut gehen lassen. Wir brauchen eine Person, die diesen Tag organisiert und koordiniert. Wir würden im Vorhinein natürlich alles Notwendige abklären und für Rückfragen zur Verfügung stehen.",
      //     efford: "Vorbereitung im Vorfeld des Lagers, ansonsten während des Lagers. Nach dem Markttag habt ihr frei.",
      //     contact: "Rike"
      // },
      {
        title: "Eröffnungsabend",
        description:
          "Auch für den Eröffnungsabend brauchen wir im besten Fall einen Stamm, der sich um die Abendgestaltung kümmert. Hier dürfen Spiele und die Einführung in die Geschichte natürlich nicht fehlen. Auch hierbei stehen wir euch mit Ideen, Rat und Tat zur Seite.",
        efford:
          "Vorbereitung im Vorfeld des Lagers, ansonsten während des Eröffnungsabends (Sonntagabend). Danach habt ihr frei.",
        contact: "Theresa",
      },
      {
        title: "Morgen- und Abendwachen",
        description:
          "Du kannst dem Motto „In der Kürze liegt die Würze“ viel abgewinnen? Du kannst dir vorstellen, bei einer oder mehreren der Morgen- und Abendwachen einen kurzen Impuls an die Teilnehmenden weiterzugeben? Dann werde Teil des Teams!",
        efford:
          "Impulsvorbereitung vor dem BuLa, Durchführung auf dem BuLa. Da die Wachen recht kurz sind, bleibt viel Zeit für andere Dinge.",
        contact: "Rike",
      },
      // {
      //     title: "Team für den Bunten Abend",
      //     description: "Gemeinsam koordiniert ihr den Bunten Abend zum Abschluss des BuLas: Was soll es für Programmunkte geben? Wen braucht ihr dafür? Wann findet der letzte Show Act statt? Und wann die Siegerehrung? Als Team sorgt ihr dafür, dass der letzte BuLa-Abend ein ganz besonderer wird.",
      //     efford: "Planung vor dem Lager, auf dem Lager vor allem am vorletzten Tag.",
      //     contact: "Rike"
      // },
    ],
    "DIES UND DAS RUND UMS LAGER": [
      {
        title: "Mitarbeitende in der BuLa-Kita",
        description:
          "Erstmals wird es eine BuLa-Kita geben, für die wir noch Mitarbeitende suchen. Wenn du eine pädagogische Ausbildung hast, wäre das natürlich super, aber auch, wenn du einfach Spaß an der Arbeit mit kleinen Kindern hast, bist du willkommen im Team. Zu welchen Zeiten und für welche Altersgruppen die BuLa-Kita offen hat, wird festgelegt, sobald der Bedarf klar ist.",
        efford:
          "Abgesehen von einer digitalen Vorbesprechung: auf dem Lager. Die Schichten werden so eingeteilt, dass ihr auch euren sonstigen Verpflichtungen nachgehen könnt.",
        contact: "Melisa",
      },
      {
        title: "Organisation des Shuttle-Services für die An- und Abreise",
        description:
          "Auch wenn es keinen Bahnhof direkt am BuLa-Ort gibt, wollen wir allen die Möglichkeit geben, mit öffentlichen Verkehrsmitteln anzureisen. Dafür brauchen wir eine oder mehrere Personen, die den Bedarf im Vorfeld klären und einen Shuttle-Service organisieren.",
        efford:
          "Die Organisation erfolgt im Vorfeld des Lagers. Wenn ihr gut plant, hält sich der Aufwand auf dem Lager (und auch da nur am An- und Abreisetag) in Grenzen ☺",
        contact: "Rike",
      },
      {
        title: "Betreuung der Jupfi- und Pfadi-Reporter",
        description:
          "Die Lagerzeitung wird in diesem Jahr nicht nur von Rovern und Altpfadfindern gestaltet, sondern auch von Jupfi- und Pfadfinderreportern, die sich vor dem BuLa bewerben können. Damit diese nicht völlig auf sich allein gestellt sind, brauchen wir dich! Du betreust die Jupfi- und Pfadireporter, unterstützt sie und stehst ihnen mit Rat und Tat zur Seite.",
        efford:
          "Kurze Vorbereitung vor dem Lager. An einzelnen Tagen auf dem Lager. Je mehr Menschen mitmachen, desto seltener bist du dran.",
        contact: "Melisa",
      },
      {
        title: "Team für den Hindernis-Spenden-Lauf",
        description:
          "Auf dem Lager wird es einen Hindernis-Spenden-Lauf geben, der sich nur als ganze Sippe bewältigen lassen soll. Für jede Sippe, die den Lauf erfolgreich absolviert, werden unsere Sponsoren an ein Projekt spenden. Wir suchen ein Team, dass den Hindernis-Parcours aufbaut und organisiert. Da die Sippen über das Lager verteilt in ihrer freien Zeit teilnehmen können sollen, werdet ihr bei der Betreuung – soweit gewünscht – vom Rover-Bereitschaftsdienst unterstützt.",
        efford:
          "Planung des Konzepts vor dem Lager, ansonsten vor allem auf dem Lager. Aufbau während des Vorlagers wünschenswert, aber kein Muss.",
        contact: "Theresa",
      },
      {
        title: "Leitung Schauspiel-Team",
        description:
          "Die Showacts sind fertig geschrieben, nun müssen sie für das BuLa mit Leben gefüllt werden. Du willst maßgeblich mitgestalten, was auf der Bühne passiert? Wir suchen eine Leitung für das Schauspiel-Team. Zu deinen Aufgaben gehören die Auswahl des Teams vor dem Lager, die Koordination der Proben und der Showacts auf dem Lager.",
        efford:
          "Vorbereitung im Vorfeld des Lagers, ansonsten vor allem während des Lagers",
        contact: "Rike",
      },
      {
        title: "Schauspiel-Team",
        description:
          "Eine Leitung für das Schauspiel-Team ist wichtig. Aber in den Showacts gibt es mehr als nur eine Rolle. Deshalb suchen wir motivierte Pfadis, die Lust haben, auf der Bühne in andere Rollen zu schlüpfen und die Geschichte für die Kinder erlebbar zu machen.",
        efford:
          "Vorbereitung im Vorfeld des Lagers, ansonsten vor allem während des Lagers.",
        contact: "Melisa",
      },
      {
        title: "Organisation der Nachtwachen",
        description:
          "Damit nachts alle gut und sicher schlafen können, wird es auf dem BuLa natürlich wieder eine Nachtwache geben. Doch wer ist wann dran und was genau soll die Nachtwache eigentlich tun? Wenn du all dies koordinieren möchtest, haben wir den passenden Job für dich!",
        efford:
          "Etwas Vorbereitung vor dem Lager. Einteilung und Einweisung der Nachtwachen auf dem Lager.",
        contact: "Rike",
      },
    ],
  },
  Map: {
    description:
      "Nach drei BuLas im Norden geht es 2023 in den Süden, genauer gesagt nach Bayern: Unser BuLa wird dieses Mal auf dem Willy-Brandt-Zeltplatz in Reinwarzhofen stattfinden. Von diesem Ort habt ihr noch nie gehört? Das wird sich ändern! Reinwarzhofen liegt in der südlichen Fränkischen Alb, grob gesagt zwischen Nürnberg und Ingolstadt. Der Lagerplatz ist mit allem ausgestattet, was ein BuLa-Lagerplatz benötigt und wurde vom BuLa-Team bereits mit einer Probe-Übernachtung bei der Besichtigung eingeweiht. Da wir zum Lagerplatz gehajkt sind, können wir euch außerdem schon versprechen: Die Gegend ist eine exzellente Hajk-Gegend! Im Plan unten könnt ihr schon einmal einen Eindruck davon bekommen, wie der Platz aufgebaut ist.",
    undefined:
      "Über die Karte streichen oder einen Ort auswählen, um den Lagerplatz kennenzulernen.",
    Bühne:
      "Hier spielt die Musik – aber nicht nur die: Auch die Gottesdienste, Abendveranstaltungen und Show Acts finden hier statt!",
    ersteHilfe:
      "Die Anlaufstelle bei größeren Wehwehchen – nicht nur nach dem American Eagle-Spielen.",
    Sportplatz:
      "Der Ort für alle, die sich vor dem nächsten Programmpunkt noch mal richtig austoben müssen.",
    Küche:
      "Hier bekommt ihr alles, was euer Magen begehrt. Kochen müsst ihr aber selbst ;-)",
    Waschhaus: "Damit unser BuLa eine saubere Sache wird!",
    Info: "Erste Anlaufstelle für eure Fragen – und für alle, die etwas verloren haben, denn hier findet ihr auch die Fundkiste.",
    Fahnenmast: "Hier versammelt sich das BuLa zur Morgen- und zur Abendwache.",
    Taverne:
      "Das Zentrum der BuLa-Mitarbeitenden: Hier finden morgens die Treffen der Kochgruppenleitungen statt und auch ansonsten wird hier fleißig am BuLa gearbeitet.",
  },
  Sponsoren: [],
});

export default Store;
