import helm1 from '../../IconPack/128x128/helmet.png'
import helm2 from '../../IconPack/128x128/helmet2.png'

import armor1 from '../../IconPack/128x128/leather.png'
import armor2 from '../../IconPack/128x128/leather2.png'
import armor3 from '../../IconPack/128x128/armor.png'
import armor4 from '../../IconPack/128x128/armor2.png'

import boots from '../../IconPack/128x128/Boots.png'

import bow1 from '../../IconPack/128x128/bow.png'
import bow2 from '../../IconPack/128x128/bow2.png'
import dagger1 from '../../IconPack/128x128/dagger.png'
import dagger2 from '../../IconPack/128x128/dagger2.png'
import sword1 from '../../IconPack/128x128/woodSword.png'
import sword2 from '../../IconPack/128x128/sword.png'
import sword3 from '../../IconPack/128x128/sword2.png'
import axe1 from '../../IconPack/128x128/axe.png'
import axe2 from '../../IconPack/128x128/axe2.png'
import axe3 from '../../IconPack/128x128/axeDouble.png'
import axe4 from '../../IconPack/128x128/axeDouble2.png'
import hammer1 from '../../IconPack/128x128/hammer.png'
import hammer2 from '../../IconPack/128x128/hammer2.png'
import wand1 from '../../IconPack/128x128/wand.png'
import wand2 from '../../IconPack/128x128/wand2.png'

import shield1 from '../../IconPack/128x128/shieldWood.png'
import shield2 from '../../IconPack/128x128/shield.png'
import shield3 from '../../IconPack/128x128/shieldSemi.png'
import shield4 from '../../IconPack/128x128/shield2.png'
import tome from '../../IconPack/128x128/tome.png'

export const dataWeapons = {
  dataTitle: 'Broń',
  itemList: [
    {
      title: 'Toporki',
      items: [
        {title: 'Epicki Toporek', dmg: 15, des: 'Epicki i już.', img: axe1},
        {title: 'Ładniejszy Epicki Toporek', dmg: 15, des: 'Potworom spodoba się Twoj nowy design.', img: axe2},
        {title: 'Podówjy Epicki Toporek', dmg: 30, des: 'Zdwojona moc epickiego toporka. ', img: axe3},
        {
          title: 'Super Mega Epicki Toporek',
          dmg: 30,
          des: 'Potwory zlękną się samego widoku podwójonej siły i piękna Twojego oręża. ',
          img: axe4
        }
      ],
    },
    {
      title: 'Miecze',
      items: [
        {title: 'Drewniany Miecz', dmg: 15, des: 'Siekaj podwory drewnianą potęgą. ', img: sword1},
        {
          title: 'Stalowy Miecz',
          dmg: 15,
          des: 'Chcesz siekać potwory nicznym Geralt utopce? Zdobądź stalowy miecz i poczuj jego moc! ',
          img: sword2
        },
        {
          title: 'Złoty Miecz',
          dmg: 30,
          des: 'Wieźmińska moc Ci już nie wystarcza? Wyróbuj miecz tchnięty mocą egipskiego boga... z pewnością żadem potwór nie oprze się jego blasku.',
          img: sword3
        }
      ],
    },
    {
      title: 'Młoty',
      items: [
        {title: 'Fajny Młot', dmg: 15, des: 'Chcesz kogoś zmiażdżyć? Nie ma problemu...', img: hammer1},
        {
          title: 'Fajniejszy Młot Thora',
          dmg: 20,
          des: 'A jednak wolisz miażdżyć i razić prądem... Thor jest z Cibie dumny, a potwory czmychją z miejsca. ',
          img: hammer2
        },
      ],
    },
    {
      title: 'Sztylety',
      items: [
        {
          title: 'Sztylecik',
          dmg: 15,
          des: 'Zbliż się do potwora i zaproś go do tańca! A później wygiągnij sztylet...',
          img: dagger1
        },
        {title: 'Luksusowy Sztylecik', dmg: 16, des: 'Czyżby to była valyrińska stal...? ', img: dagger2},
      ],
    },
    {
      title: 'Łuki',
      items: [
        {title: 'Łuk Tropiciela', dmg: 15, des: 'Zaskocz kogoś!', img: bow1},
        {
          title: 'Łuk Wyśmienitego Myśliwego',
          dmg: 17,
          des: 'Z tym łukiem Twoja potworna kolekcja nad kominiek powiększy się w zatrważającym tempie. ',
          img: bow2
        },
      ],
    },
  ],
};

export const dataShield = {
  dataTitle: 'Tarcze',
  itemList: [
    {
      title: 'Tarcze',
      items: [
        {
          title: 'Drewniana Tarcza',
          dmg: 15,
          des: 'Trzymając taką tarczę, Twoja postać nabierze nordyckich cech.',
          img: shield1
        },
        {
          title: 'Metalowa Tarcza',
          dmg: 17,
          des: 'Ładna uniwersalna tarcza pogromcy potworów.',
          img: shield2
        },
        {
          title: 'Tarcza Mix',
          dmg: 20,
          des: 'Chrupiąca na zewnątrz, miękka w środku.',
          img: shield3
        },
        {
          title: 'Złota Tarcza',
          dmg: 25,
          des: 'Tarcza prawdziwego dżentelmena.',
          img: shield4
        },
      ],
    },

  ]

};
export const dataArmor = {
  dataTitle: 'Ubranie',
  itemList: [
    {
      title: 'Pancerze',
      items: [
        {
          title: 'Skórzany Pancerz Uniwersalny',
          dmg: 15,
          des: 'Idealny na walkę z potworami',
          img: armor1
        },
        {
          title: 'Ulepszony Skórzany Pancerz Uniwersalny',
          dmg: 17,
          des: ' I na walkę z potworami i na obiad z uratowaną księżniczką.',
          img: armor2
        },
        {
          title: 'Stalowy pancerz',
          dmg: 20,
          des: 'Wytwarzany przez krasnoludzkich rzemieślników z prawdziwej błyszczącej stali.',
          img: armor3
        },
        {
          title: 'Złoty Pancerz',
          dmg: 25,
          des: 'Szkoda pobrudzić.',
          img: armor4
        },
      ],
    },
    {
      title: 'Hełmy',
      items: [
        {
          title: 'Stalowy Hełm',
          dmg: 15,
          des: 'Komponuje się ze stalowym pancerzem.',
          img: helm1
        },
        {
          title: 'Złoty Hełm',
          dmg: 17,
          des: ' Legeda głosi, że nałożony podczas walki z mitycznym potworem  pozwala posiąść jego mądrść. ',
          img: helm2
        },
      ],
    },
    {
      title: 'Buty',
      items: [
        {
          title: 'Buty Niewiarygodnej Szybkości',
          dmg: 15,
          des: 'Z nimi możesz zawsze uciec... ale czy przystoi to prawdziwemu wojownikowi...?',
          img: boots
        },
      ],
    },

  ]
};

export const dataMagic = {
  dataTitle: 'Magiczne',
  itemList: [
    {
      title: 'Różdżki',
      items: [
        {
          title: 'Magiczna Różdżka Pierwszego Stopnia',
          dmg: 15,
          des: 'Proste zaklęcia udadzą się nawet zwykłemu wojownikowi...',
          img: wand1
        },
        {
          title: 'Magiczna Różdżka Najwyższego Stopnia',
          dmg: 40,
          des: 'Tylko potężny wojownik może skorzystać z jej niewiarygodnej mocy. ',
          img: wand2
        },
        {
          title: 'Wielka Księga Zaklęć',
          dmg: 20,
          des: 'Odważysz się do niej zajrzeć i zawrzeć pakt z demonami? ',
          img: tome
        },
      ]
    }
  ]
};


