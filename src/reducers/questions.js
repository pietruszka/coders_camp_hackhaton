export default [
  {
    question: `Przy połączeniu szeregowym dwóch ruterów, adres interfejsu szeregowego jednego z ruterów to 28.3.81.97/30. Jaki jest adres interfejsu szeregowego drugiego rutera:`,
    answear: [
      {
        content: '28.3.81.100',
        correct: false,
      },
      {
        content: '28.3.81.99',
        correct: false,
      },
      {
        content: '28.3.81.98',
        correct: true,
      },
      {
        content: '28.3.81.96',
        correct: false,
      },
    ],
  },
  {
    question:
      'Administrator dysponuje zakresem adresowym 100.100.110.192/26. Potrzebuje przydzielić adresy dla sieci zawierającej: 11 komputerów, 1 drukarkę i 3 rutery. Jaki jest ostatni użyteczny adres projektowanej podsieci przy założeniu, że administrator stosuje VLSM:',
    answear: [
      {
        content: '100.100.110.223',
        correct: false,
      },
      {
        content: '100.100.110.222',
        correct: true,
      },
      {
        content: '100.100.110.206',
        correct: false,
      },
      {
        content: '100.100.110.207',
        correct: false,
      },
    ],
  },
  {
    question: 'Warstwa łącza danych jest dzielona na podwarstwy:',
    answear: [
      {
        content: 'LLC i MAC',
        correct: true,
      },
      {
        content: 'MAC i IP',
        correct: false,
      },
      {
        content: 'LLC i IP',
        correct: false,
      },
      {
        content: 'LLC i TCP',
        correct: false,
      },
    ],
  },
  {
    question: 'Skalowalność to właściwość sieci polegająca na:',
    answear: [
      {
        content: 'skalowaniu każdej usługi, tzn. zapewnieniu jej odpowiedniej jakości',
        correct: false,
      },
      {
        content:
          'wprowadzenie do sieci nowych urządzeń i usług nie wpływa negatywnie na już istniejące',
        correct: true,
      },
      {
        content:
          'wprowadzenie do sieci nowych urządzeń i usług wpływa negatywnie na już istniejące',
        correct: false,
      },
      {
        content:
          'każda sieć ma określoną skalę liczoną w liczbie użytkowników na jednostkę powierzchni',
        correct: false,
      },
    ],
  }, //
  {
    question:
      'Do interfejsu rutera został przypisany ostatni adres użyteczny sieci 172.16.1.240/29. Adres ten to:',
    answear: [
      {
        content: '172.16.1.247',
        correct: false,
      },
      {
        content: '172.16.1.246',
        correct: true,
      },
      {
        content: '172.16.1.241',
        correct: false,
      },
      {
        content: '172.16.1.254',
        correct: false,
      },
    ],
  },
  {
    question: 'Jedną z ról warstwy sieciowej jest:',
    answear: [
      {
        content: 'wyznaczenie najlepszej trasy przesłania pakietu od źródła do celu',
        correct: true,
      },
      {
        content: 'opis metod wymiany ramek pomiędzy urządzeniami połączonymi wspólnym medium',
        correct: false,
      },
      {
        content: 'segmentacja, transferu oraz składania danych',
        correct: false,
      },
      {
        content: 'umożliwienie komunikacji pomiędzy stacją roboczą w cieci a człowiekiem',
        correct: false,
      },
    ],
  },
  {
    question: 'Ile maksymalnie urządzeń można zaadresować w sieci z maską 255.255.255.192?',
    answear: [
      {
        content: '32',
        correct: false,
      },
      {
        content: '62',
        correct: true,
      },
      {
        content: '30',
        correct: false,
      },
      {
        content: '64',
        correct: false,
      },
    ],
  },
  {
    question: 'Pole czas życia (TTL) zawarte w nagłówku protokołu IP:',
    answear: [
      {
        content: 'jest dekrementowane przy przejściu przez router',
        correct: false,
      },
      {
        content: 'jest inkrementowane przy przejściu przez router',
        correct: true,
      },
      {
        content: 'jest dekrementowane przy przejściu przez przełącznik',
        correct: false,
      },
      {
        content: 'jest inkrementowane przy przejściu przez przełącznik',
        correct: false,
      },
    ],
  },
];
