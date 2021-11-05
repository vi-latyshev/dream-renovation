import Image from 'next/image';
import { Container, Grid, makeStyles } from '@material-ui/core';

import { ServicesDescription, ServicesTypesTitle } from '../components';

import livingRoomImg from './images/livingroom.jpg';
import bedroomImg from './images/bedroom.jpg';
import childroomImg from './images/childroom.jpg';

const useStyles = makeStyles(({ spacing }) => ({
    container: {
        marginBottom: spacing(4),
    },
}));

const images = [
    {
        img: livingRoomImg,
        alt: 'livingroom',
    },
    {
        img: bedroomImg,
        alt: 'bedroom',
    },
    {
        img: childroomImg,
        alt: 'childroom',
    },
];

const leftDescription = [
    'Демонтаж полов, стен и потолков',
    'Штробление стен под провода и прокладка кабеля в гофре',
    'Стяжка полов',
    'Выравнивание стен, потолков под ноль',
    'Подготовка чистовой шпаклевкой стен и потолков, для покраски и обоев',
    'Монтаж гипсокартонных потолков',
];

const rightDescription = [
    'Монтаж натяжных потолков',
    'Поклейка обоев, покраска стен и потолков',
    'Укладка ламината и паркетной доски',
    'Установка розеток',
    'Установка дверей',
    'Монтаж напольных плинтусов',
];

export const LivingRoomView = () => {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.container}>
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                >
                    {images.map(({ img, alt }) => (
                        <Grid item key={alt}>
                            <Image
                                src={img}
                                alt={alt}
                                width={350}
                                height={240}
                                objectFit="cover"
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <ServicesTypesTitle />
            <Container>
                <Grid container>
                    <ServicesDescription lg={8} description={leftDescription} />
                    <ServicesDescription lg={4} description={rightDescription} />
                </Grid>
            </Container>
        </>
    );
};
