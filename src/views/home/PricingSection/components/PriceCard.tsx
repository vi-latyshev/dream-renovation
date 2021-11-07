import Image from 'next/image';
import { useState, useCallback } from 'react';
import {
    Grid,
    Paper,
    Button,
    Collapse,
    Typography,
    makeStyles,
} from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';

import { PriceFeatureItem } from './PriceFeatureItem';
import { PriceOptionsFeatureItem } from './PriceOptionsFeatureItem';

interface PriceCardProps {
    image: StaticImageData;
    title: string;
    price: string;
    optionsFeatures: string[];
}

const useStyles = makeStyles(({ spacing, typography }) => ({
    pricePaper: {
        width: 365,
        textAlign: 'center',
        padding: spacing(4),
    },
    title: {
        margin: spacing(2, 0),
    },
    price: {
        margin: spacing(2, 0),
    },
    types: {
        margin: spacing(2, 0),
        fontWeight: typography.fontWeightBold,
    },
    featuresList: {
        justifySelf: 'flex-start',
        margin: spacing(3, 0),
    },
    optionsFeatureButton: {
        width: '100%',
        cursor: 'pointer',
    },
}));

const featuresItems = [
    'Демонтажные работы',
    'Монтаж стен и перегородок',
    'Электромонтажные работы',
    'Вентиляционные работы',
    'Звукоизоляционные работы',
    'Теплоизоляционные работы',
    'Устройство гидроизоляции пола',
    'Устройство стяжки пола',
    'Штукатурка стен и потолков',
    'Шпаклёвка стен и потолков',
];

export const PriceCard = ({
    image,
    title,
    price,
    optionsFeatures,
}: PriceCardProps) => {
    const classes = useStyles();

    const [isOpened, setIsOpened] = useState(false);

    const handleClickOpen = useCallback(() => {
        setIsOpened((state) => !state);
    }, []);

    return (
        <Grid item>
            <Paper className={classes.pricePaper}>
                <Image
                    src={image}
                    alt={title}
                    width={305}
                    height={200}
                    objectFit="cover"
                />
                <Typography variant="h3" className={classes.title}>
                    {title}
                </Typography>
                <Typography
                    variant="h3"
                    color="primary"
                    className={classes.price}
                >
                    от {price} руб м<sup>2</sup>
                </Typography>
                <Typography className={classes.types}>
                    Какие работы входят:
                </Typography>
                <div className={classes.featuresList}>
                    {featuresItems.map((feature) => (
                        <PriceFeatureItem key={feature}>
                            {feature}
                        </PriceFeatureItem>
                    ))}
                </div>
                <AddOutlined
                    color="primary"
                    fontSize="large"
                    className={classes.optionsFeatureButton}
                    onClick={handleClickOpen}
                />
                <Collapse in={isOpened}>
                    <div className={classes.featuresList}>
                        {optionsFeatures.map((feature) => (
                            <PriceOptionsFeatureItem key={feature}>
                                {feature}
                            </PriceOptionsFeatureItem>
                        ))}
                    </div>
                    <Button variant="outlined">
                        Выбрать
                    </Button>
                </Collapse>
            </Paper>
        </Grid>
    );
};
