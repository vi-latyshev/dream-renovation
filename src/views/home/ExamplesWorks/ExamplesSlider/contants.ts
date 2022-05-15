import federativny1 from './images/federativny/federativny1.jpeg';
import federativny2 from './images/federativny/federativny2.jpeg';
import federativny3 from './images/federativny/federativny3.jpeg';
import federativny4 from './images/federativny/federativny4.jpeg';

import pytnic_shosse1 from './images/pytnic_shosse/pytnic_shosse1.jpg';
import pytnic_shosse2 from './images/pytnic_shosse/pytnic_shosse2.jpg';
import pytnic_shosse3 from './images/pytnic_shosse/pytnic_shosse3.jpg';
import pytnic_shosse4 from './images/pytnic_shosse/pytnic_shosse4.jpg';

// @TODO move to self folder and merge with calucator
export enum StyleRepair {
    cosmetic = 'Косметический',
    euro = 'Евроремонт',
    design = 'Дизайнерский',
}

export type ExampleWorkPhoto = StaticImageData;
export type ExampleWorkPhotos = StaticImageData[];

export type ExampleWorkWorks = string[];

export type ExampleWorkType = {
    adress: string;
    styleRepair: StyleRepair;
    price: number;
    time: string;
    squareArea: number;
    photos: ExampleWorkPhotos;
    works: ExampleWorkWorks;
};

export type ExamplesWorksType = ExampleWorkType[];

export const expamplesWorks: ExamplesWorksType = [
    {
        adress: 'Федеративный проспект дом 12',
        styleRepair: StyleRepair.euro,
        price: 1_140_000,
        time: '3 месяца',
        squareArea: 76,
        photos: [federativny1, federativny2, federativny3, federativny4],
        works: [
            'Демонтаж-Монтаж стен',
            'Выравнивание под ноль',
            'Электрика',
            'Сантехника',
            'Укладка кафеля',
            'Стяжка',
            'Паркетная доска',
            'Установка дверей',
            'Поклейка обоев',
            'Установка плинтусов',
        ],
    },
    {
        adress: 'Пятницкое шоссе, ул. Конная дом 6',
        styleRepair: StyleRepair.design,
        price: 800_000,
        time: '2 месяца',
        squareArea: 40,
        photos: [pytnic_shosse1, pytnic_shosse2, pytnic_shosse3, pytnic_shosse4],
        works: [
            'Демонтаж-Монтаж стен',
            'Выравнивание под ноль',
            'Электрика',
            'Сантехника',
            'Укладка кафеля',
            'Стяжка',
            'Массивная доска',
            'Установка дверей',
            'Декоративная штукатурка',
            'Установка плинтусов',
        ],
    },
];
