import { useCallback, useEffect, useState } from 'react';
import {
    Fade,
    Button,
    Typography,
    makeStyles,
} from '@material-ui/core';

import { Loading } from 'components/Loading';
import { PhoneContact } from 'components/PhoneContact';

import { useCalculatorSteps } from '../../context/steps';
import { useCalculatorData } from '../../context/data';
import { useControlsData } from '../../context/controls_data';
import { relativeTimeWithPlural } from '../../utils/relativeTimeWithPlural';

import { DataValueBlock } from './DataValueBlock';

const useStyles = makeStyles(({ breakpoints }) => ({
    finish: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: breakpoints.values.md,
    },
    title: {
        marginTop: 40,
        marginBottom: 40,
    },
    totalContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 40,
    },
    totalTime: {
        marginLeft: 'auto',
        justifyContent: 'flex-end',
        marginBottom: 0,
    },
    footer: {
        display: 'flex',
        marginTop: 'auto',
    },
    contactQuestions: {
        display: 'flex',
        flexDirection: 'column',
        '& > *:first-child': {
            marginBottom: 25,
        },
    },
    stepButton: {
        alignSelf: 'flex-end',
        marginLeft: 'auto',
    },
}));

export const FinishStep = () => {
    const classes = useStyles();

    const { restartSteps } = useCalculatorSteps();
    const { data, resetData } = useCalculatorData();
    const { resetValues } = useControlsData();

    const {
        price,
        dirtyMaterialsPrice,
        clearlyMaterialsPrice,
        days,
    } = data;

    const [relativeDays, setRelativeDays] = useState<string | null>(null);

    useEffect(() => {
        const getRelativeDays = async () => {
            const relatDays = await relativeTimeWithPlural(days);
            setRelativeDays(relatDays);
        };

        getRelativeDays();
    }, [days]);

    const resetCalculator = useCallback(() => {
        resetValues();
        resetData();
        restartSteps();
    }, [resetValues, resetData, restartSteps]);

    if (relativeDays === null) {
        return <Loading />;
    }

    return (
        <Fade in>
            <div className={classes.finish}>
                <Typography variant="h3" className={classes.title}>
                    Ваш расчёт:
                </Typography>
                <DataValueBlock label="Стоимость работ" data={`от ${price} руб/м2`} />
                <DataValueBlock label="Черновые материалы" data={`от ${dirtyMaterialsPrice} руб/м2`} />
                <DataValueBlock label="Чистовые материалы" data={`от ${clearlyMaterialsPrice} руб/м2`} />
                <div className={classes.totalContainer}>
                    <Typography variant="h3">
                        <Typography variant="h3" component="span" color="primary">
                            Итого:
                        </Typography>{' '}
                        от {price + dirtyMaterialsPrice + clearlyMaterialsPrice} руб/м2
                    </Typography>
                    <DataValueBlock
                        label="Срок ремонта"
                        data={`~ ${relativeDays}`}
                        classNames={classes.totalTime}
                    />
                </div>
                <div className={classes.footer}>
                    <div className={classes.contactQuestions}>
                        <Typography variant="h3">
                            Остались вопросы?
                        </Typography>
                        <PhoneContact />
                    </div>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={resetCalculator}
                        className={classes.stepButton}
                    >
                        Пересчитать
                    </Button>
                </div>
            </div>
        </Fade>
    );
};
