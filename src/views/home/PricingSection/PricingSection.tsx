import { Grid, makeStyles, Typography } from '@material-ui/core';

import { SectionWithContainer } from 'components/Section';

import { PriceCard } from './components';

import majorImg from './images/major.jpg';
import renovationImg from './images/renovation.jpg';
import designImg from './images/design.jpg';

export const PRICING_SECTION_ID = 'pricing';

const useStyles = makeStyles(({ spacing }) => ({
    itemsContainer: {
        margin: spacing(10),
    },
}));

const priceCards = [
    {
        image: majorImg,
        title: 'Капитальный ремонт',
        price: '7-10 000',
        optionsFeatures: [
            'Натяжные потолки',
            'Окраска потолков',
            'Поклейка простых обоев',
            'Укладка линолеума, ламината',
            'Установка плинтусов',
            'Облицовка стен и полов простой плиткой, керамогранитом',
        ],
    },
    {
        image: renovationImg,
        title: 'Евроремонт',
        price: '10-12 000',
        optionsFeatures: [
            'Потолки из ГКЛ 1-2 уровня',
            'Окраска потолков',
            'Окраска стен в/э краской',
            'Поклейка обоев разных видов',
            'Укладка ламината, паркетной, массивной доски',
            'Установка плинтусов',
            'Облицовка стен и полов простой плиткой, керамогранитом',
        ],
    },
    {
        image: designImg,
        title: 'Дизайнерский ремонт',
        price: '12-18 000',
        optionsFeatures: [
            'Потолки из ГКЛ 1-2 уровня со скрытой подсветкой',
            'Окраска потолков',
            'Нанесение декоративной краски или штукатурки, шелкография',
            'Укладка массивной доски, штучного паркета',
            'Установка плинтусов',
            'Облицовка стен и полов простой плиткой, керамогранитом, мозаикой, мрамором, гранитом',
        ],
    },
];

export const PricingSection = () => {
    const classes = useStyles();

    return (
        <SectionWithContainer maxWidth="xl" id={PRICING_SECTION_ID}>
            <Typography variant="h1">
                Доступные пакеты
            </Typography>
            <Grid
                container
                spacing={6}
                direction="row"
                justifyContent="center"
                className={classes.itemsContainer}
            >
                {priceCards.map((card) => (
                    <PriceCard key={card.title} {...card} />
                ))}
            </Grid>
        </SectionWithContainer>
    );
};
