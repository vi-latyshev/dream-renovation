import Image from 'next/image';
import { Container, Grid, makeStyles } from '@material-ui/core';

import { ServicesDescription, ServicesTypesTitle } from '../components';

import kitchenImg from './images/kitchen.jpg';
import corridorImg from './images/corridor.jpg';

const useStyles = makeStyles(({ spacing }) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    description: {
        paddingLeft: spacing(8),
    },
}));

const images = [
    {
        src: kitchenImg,
        alt: 'Кухня',
    },
    {
        src: corridorImg,
        alt: 'Коридор',
    },
];

const description = [
    'Демонтаж полов, стен и потолков',
    'Штробление стен под провода и прокладка кабеля в гофре',
    'Стяжка полов',
    'Выравнивание стен, потолков под ноль',
    'Подготовка чистовой шпаклевкой стен и потолков, для покраски и обоев',
    'Монтаж гипсокартонных потолков',
    'Монтаж натяжных потолков',
    'Поклейка обоев, покраска стен и потолков',
    'Укладка ламината и паркетной доски',
    'Укладки плитки',
    'Установка розеток',
    'Установка дверей',
    'Монтаж напольных плинтусов',
];

export const KitchenView = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid
                item
                lg={5}
                container
                spacing={3}
                direction="column"
            >
                {images.map(({ src, alt }) => (
                    <Grid item key={alt}>
                        <Image
                            width={384}
                            height={430}
                            src={src}
                            alt={alt}
                            objectFit="cover"
                        />
                    </Grid>
                ))}
            </Grid>
            <Grid
                item
                lg={9}
                container
                direction="column"
            >
                <Grid item>
                    <ServicesTypesTitle />
                </Grid>
                <ServicesDescription
                    description={description}
                    className={classes.description}
                />
            </Grid>
        </Container>
    );
};
