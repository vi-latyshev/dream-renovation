import designPushkina from './images/design_pushkina.jpg';

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
        photos: [designPushkina, designPushkina, designPushkina],
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
        photos: [designPushkina],
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
