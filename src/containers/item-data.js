import EqItem from './item';
import helm1 from './../IconPack/128x128/helmet.png'
import helm2 from './../IconPack/128x128/helmet2.png'

import armor1 from './../IconPack/128x128/leather.png'
import armor2 from './../IconPack/128x128/leather2.png'
import armor3 from './../IconPack/128x128/armor.png'
import armor4 from './../IconPack/128x128/armor2.png'

import boots from './../IconPack/128x128/Boots.png'

import bow1 from './../IconPack/128x128/bow.png'
import bow2 from './../IconPack/128x128/bow2.png'
import dagger1 from './../IconPack/128x128/dagger.png'
import dagger2 from './../IconPack/128x128/dagger2.png'
import sword1 from './../IconPack/128x128/woodSword.png'
import sword2 from './../IconPack/128x128/sword.png'
import sword3 from './../IconPack/128x128/sword2.png'
import axe1 from './../IconPack/128x128/axe.png';
import axe2 from './../IconPack/128x128/axe2.png'
import axe3 from './../IconPack/128x128/axeDouble.png'
import axe4 from './../IconPack/128x128/axeDouble2.png'
import hammer1 from './../IconPack/128x128/hammer.png'
import hammer2 from './../IconPack/128x128/hammer2.png'
import wand1 from './../IconPack/128x128/wand.png'
import wand2 from './../IconPack/128x128/wand2.png'

import shield1 from './../IconPack/128x128/shieldWood.png'
import shield2 from './../IconPack/128x128/shield.png'
import shield3 from './../IconPack/128x128/shieldSemi.png'
import shield4 from './../IconPack/128x128/shield2.png'
import tome from './../IconPack/128x128/tome.png'
export const dataWeapons = {
  dataTitle: 'weapons',
  itemList: [
    {
      title: 'Axes',
      items: [
        {title: 'Zwyka siekiera', dmg: 15, des: 'Zabijaj swoich wrogów i potwory podstawowym wariantem siekierki.', img: axe1, id: 1 },
        {title: 'ładniejsza zwykła siekierka', dmg: 15, des: 'Potworom spodoba się Twoj nowy design podstawowej sieierki', img: axe2, id: 0},
        {title: 'Podówjy toporek', dmg: 30, des: 'Podwójna moc toporka' ,img: axe2, id: 0},
        {title: 'Epicki podówjy toporek', dmg: 30, des: 'Potwory zlękną się podwojonej siły i piękna Twojego oręża ',img: axe2, id: 0 }
      ],
    },
    {
      title: 'Miecze',
      items: [
        { title: 'swords', dmg: 15, des: 'opis', img: '', id: 3 },
        { title: 'axe1', dmg: 15, des: 'opis', img: '', id: 4 },
      ],
    },
    {
      title: 'Hammers',
      items: [
        { title: 'axe1', dmg: 15, des: 'opis', img: '', id: 5 },
        { title: 'axe1', dmg: 15, des: 'opis', img: '', id: 6 },
      ],
    },
    {
      title: 'Daggers',
      items: [
        { title: 'axe1', dmg: 15, des: 'opis', img: '', id: 7 },
        { title: 'axe1', dmg: 15, des: 'opis', img: '', id: 8 },
      ],
    },
    {
      title: 'Bows',
      items: [
        { title: 'axe1', dmg: 15, des: 'opis', img: '', id: 9 },
        { title: 'axe1', dmg: 15, des: 'opis', img: '', id: 10 },
      ],
    },
  ],
};

export const dataShield = [
  {
    title: 'Shields',
  },
];
export const dataArmor = [
  {
    title: 'Armors',
  },
  {
    title: 'Boots',
  },
  {
    title: 'Helmets',
  },
];
