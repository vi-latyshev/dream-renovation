import { Container, makeStyles, Typography } from '@material-ui/core';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons';

import { ArrowButton, DescriptionBlock } from './components';

import { numberSplitTo3 } from 'utils/numberSplitTo3';

import { expamplesWorks } from './contants';
import { PhotosList } from './PhotosList';
import { WorksList } from './WorksList';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
    slider: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        margin: spacing(8, 0, 4, 0),
    },
    sliderContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    descriptonContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: spacing(5),
    },
    description: {
        display: 'grid',
        gap: spacing(2, 4),
        gridTemplateColumns: 'repeat(4, 300px)',
        justifyContent: 'flex-start',
        [breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(2, 300px)',
            gridTemplateRows: 'repeat(2, 1fr)',
        },
    },
    works: {
        marginTop: spacing(6),
    },
}));

export const ExamplesSlider = () => {
    const classes = useStyles();

    const {
        adress,
        styleRepair,
        price,
        time,
        squareArea,
        photos,
        works,
    } = expamplesWorks[0];

    return (
        <div className={classes.slider}>
            <Typography className={classes.title}>
                {adress}
            </Typography>
            <div className={classes.sliderContainer}>
                <ArrowButton
                    Icon={ArrowBackIosRounded}
                />
                <PhotosList photos={photos} />
                <ArrowButton
                    Icon={ArrowForwardIosRounded}
                />
            </div>
            <Container maxWidth="lg">
                <div className={classes.descriptonContainer}>
                    <div className={classes.description}>
                        <DescriptionBlock title="Тип ремонта:" desc={styleRepair} />
                        <DescriptionBlock title="Стоимость:" desc={`${numberSplitTo3(price)} руб.`} />
                        <DescriptionBlock title="Срок:" desc={time} />
                        <DescriptionBlock title="Площадь:" desc={`${squareArea} м2`} />
                    </div>
                    <div className={classes.works}>
                        <Typography variant="h3">
                            Виды работ:
                        </Typography>
                        <WorksList works={works} />
                    </div>
                </div>
            </Container>
        </div>
    );
};
