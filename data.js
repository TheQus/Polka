const learningData = {
    A1: {
        vocabulary: [
            { polish: 'tak', russian: 'да' },
            { polish: 'nie', russian: 'нет' },
            { polish: 'proszę', russian: 'пожалуйста' },
            { polish: 'dziękuję', russian: 'спасибо' },
            { polish: 'dom', russian: 'дом' },
            { polish: 'kot', russian: 'кот' },
            { polish: 'pies', russian: 'собака' },
            { polish: 'woda', russian: 'вода' },
            { polish: 'chleb', russian: 'хлеб' },
            { polish: 'kobieta', russian: 'женщина' },
            { polish: 'mężczyzna', russian: 'мужчина' },
            { polish: 'iść', russian: 'идти' },
            { polish: 'mieć', russian: 'иметь' },
            { polish: 'być', russian: 'быть' },
        ],
        sentences: [
            { polish: "To jest dom", russian: "Это дом", words: ["To", "jest", "dom"] },
            { polish: "Kot pije mleko", russian: "Кот пьет молоко", words: ["Kot", "pije", "mleko"] },
            { polish: "To jest kobieta", russian: "Это женщина", words: ["To", "jest", "kobieta"] },
            { polish: "Mam pytanie", russian: "У меня есть вопрос", words: ["Mam", "pytanie"] },
        ]
    },
    A2: {
        vocabulary: [
            { polish: 'sklep', russian: 'магазин' },
            { polish: 'restauracja', russian: 'ресторан' },
            { polish: 'bilet', russian: 'билет' },
            { polish: 'dworzec', russian: 'вокзал' },
            { polish: 'lotnisko', russian: 'аэропорт' },
            { polish: 'lekarz', russian: 'врач' },
            { polish: 'pogoda', russian: 'погода' },
            { polish: 'wczoraj', russian: 'вчера' },
            { polish: 'jutro', russian: 'завтра' },
            { polish: 'rozmawiać', russian: 'разговаривать' },
            { polish: 'podróżować', russian: 'путешествовать' },
            { polish: 'zamówić', russian: 'заказать' },
        ],
        sentences: [
            { polish: "Chciałbym zamówić kawę", russian: "Я хотел бы заказать кофе", words: ["Chciałbym", "zamówić", "kawę"] },
            { polish: "Gdzie jest najbliższy sklep?", russian: "Где ближайший магазин?", words: ["Gdzie", "jest", "najbliższy", "sklep?"] },
            { polish: "Jaka jest dziś pogoda?", russian: "Какая сегодня погода?", words: ["Jaka", "jest", "dziś", "pogoda?"] },
            { polish: "Muszę iść do lekarza", russian: "Мне нужно идти к врачу", words: ["Muszę", "iść", "do", "lekarza"] },
        ]
    },
    B1: {
        vocabulary: [
            { polish: 'zdanie', russian: 'мнение' },
            { polish: 'możliwość', russian: 'возможность' },
            { polish: 'problem', russian: 'проблема' },
            { polish: 'rozwiązanie', russian: 'решение' },
            { polish: 'wykształcenie', russian: 'образование' },
            { polish: 'praca', russian: 'работа' },
            { polish: 'zainteresowania', russian: 'увлечения' },
            { polish: 'osiągnąć', russian: 'достичь' },
            { polish: 'wyjaśnić', russian: 'объяснить' },
            { polish: 'porównać', russian: 'сравнить' },
            { polish: 'przyszłość', russian: 'будущее' },
        ],
        sentences: [
            { polish: "Moim zdaniem to dobry pomysł", russian: "По моему мнению, это хорошая идея", words: ["Moim", "zdaniem", "to", "dobry", "pomysł"] },
            { polish: "Musimy znaleźć rozwiązanie tego problemu", russian: "Мы должны найти решение этой проблемы", words: ["Musimy", "znaleźć", "rozwiązanie", "tego", "problemu"] },
            { polish: "Jakie masz plany na przyszłość?", russian: "Какие у тебя планы на будущее?", words: ["Jakie", "masz", "plany", "na", "przyszłość?"] },
            { polish: "Potrafię płynnie mówić po angielsku", russian: "Я могу свободно говорить по-английски", words: ["Potrafię", "płynnie", "mówić", "po", "angielsku"] },
        ]
    },
    B2: {
        vocabulary: [
            { polish: 'świadomość', russian: 'осознание' },
            { polish: 'społeczeństwo', russian: 'общество' },
            { polish: 'gospodarka', russian: 'экономика' },
            { polish: 'środowisko', russian: 'окружающая среда' },
            { polish: 'wpływ', russian: 'влияние' },
            { polish: 'analizować', russian: 'анализировать' },
            { polish: 'krytykować', russian: 'критиковать' },
            { polish: 'argument', russian: 'аргумент' },
            { polish: 'zaawansowany', russian: 'продвинутый' },
            { polish: 'skuteczny', russian: 'эффективный' },
        ],
        sentences: [
            { polish: "Należy analizować wpływ technologii na społeczeństwo", russian: "Следует анализировать влияние технологий на общество", words: ["Należy", "analizować", "wpływ", "technologii", "na", "społeczeństwo"] },
            { polish: "Ochrona środowiska jest kluczowym wyzwaniem", russian: "Защита окружающей среды является ключевым вызовом", words: ["Ochrona", "środowiska", "jest", "kluczowym", "wyzwaniem"] },
            { polish: "Twoje argumenty są bardzo przekonujące", russian: "Твои аргументы очень убедительны", words: ["Twoje", "argumenty", "są", "bardzo", "przekonujące"] },
        ]
    },
    C1: {
        vocabulary: [
            { polish: 'subtelny', russian: 'тонкий, деликатный' },
            { polish: 'jednoznaczny', russian: 'однозначный' },
            { polish: 'wszechstronny', russian: 'всесторонний' },
            { polish: 'konsekwencja', russian: 'последствие' },
            { polish: 'interpretować', russian: 'интерпретировать' },
            { polish: 'kwestionować', russian: 'ставить под сомнение' },
            { polish: 'hipoteza', russian: 'гипотеза' },
            { polish: 'paradygmat', russian: 'парадигма' },
            { polish: 'retoryka', russian: 'риторика' },
            { polish: 'syntéza', russian: 'синтез' },
        ],
        sentences: [
            { polish: "Jego retoryka była subtelna, ale skuteczna", russian: "Его риторика была тонкой, но эффективной", words: ["Jego", "retoryka", "była", "subtelna", "ale", "skuteczna"] },
            { polish: "Należy wszechstronnie zbadać konsekwencje tej decyzji", russian: "Следует всесторонне изучить последствия этого решения", words: ["Należy", "wszechstronnie", "zbadać", "konsekwencje", "tej", "decyzji"] },
            { polish: "Ta hipoteza wymaga dalszych badań empirycznych", russian: "Эта гипотеза требует дальнейших эмпирических исследований", words: ["Ta", "hipoteza", "wymaga", "dalszych", "badań", "empirycznych"] },
        ]
    },
    C2: {
        vocabulary: [
            { polish: 'ambiwalentny', russian: 'амбивалентный' },
            { polish: 'dywagacja', russian: 'отвлеченное рассуждение' },
            { polish: 'efemeryczny', russian: 'эфемерный' },
            { polish: 'kognitywistyka', russian: 'когнитивистика' },
            { polish: 'prekursor', russian: 'предшественник' },
            { polish: 'par excellence', russian: 'в высшей степени' },
            { polish: 'erudycja', russian: 'эрудиция' },
            { polish: 'solipsyzm', russian: 'солипсизм' },
            { polish: 'onomatopeja', russian: 'ономатопея' },
        ],
        sentences: [
            { polish: "Jego erudycyjne dywagacje były fascynujące dla słuchaczy", russian: "Его эрудированные отвлеченные рассуждения были увлекательны для слушателей", words: ["Jego", "erudycyjne", "dywagacje", "były", "fascynujące", "dla", "słuchaczy"] },
            { polish: "Jego stosunek do tej kwestii był wysoce ambiwalentny", russian: "Его отношение к этому вопросу было весьма амбивалентным", words: ["Jego", "stosunek", "do", "tej", "kwestii", "był", "wysoce", "ambiwalentny"] },
            { polish: "Był to artysta par excellence, prawdziwy prekursor swojego nurtu", russian: "Это был художник в высшей степени, настоящий предшественник своего течения", words: ["Był", "to", "artysta", "par excellence", "prawdziwy", "prekursor", "swojego", "nurtu"] },
        ]
    }
};