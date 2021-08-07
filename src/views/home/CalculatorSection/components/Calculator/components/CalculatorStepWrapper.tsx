import {
    Typography,
    Button,
    Slider,
    makeStyles,
} from '@material-ui/core';

import { ArrowLeftIcon } from 'icons/ArrowLeft';

import { useCalculatorSteps } from '../context/steps';

interface CalculatorStepWrapperProps {
    required?: boolean;
    title: string;
    children: React.ReactNode;
}

const useStyles = makeStyles(({ breakpoints }) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    description: {
        marginBottom: 100,
    },
    title: {
        marginBottom: 50,
    },
    stepper: {
        display: 'flex',
        alignItems: 'center',
        width: breakpoints.width('md'),
        '& > *:not(:last-child)': {
            marginRight: 40,
        },
    },
    slider: {
        cursor: 'auto',
    },
    backStepButton: {
        minWidth: 'auto',
        padding: '15px 15px',
    },
}));

const valueLabelSliderFormat = (value: number) => `${Math.round(value)}%`;

export const CalculatorStepWrapper = ({
    title,
    required,
    children,
}: CalculatorStepWrapperProps) => {
    const classes = useStyles();
    const {
        step,
        countSteps,
        prevStep,
        nextStep,
    } = useCalculatorSteps();

    return (
        <div className={classes.wrapper}>
            <Typography className={classes.description}>
                Рассчитайте стоимость вашего будущего ремонта
                максимальноточно при помощи нашего калькулятора
            </Typography>
            <Typography variant="h3" className={classes.title}>
                {title}
            </Typography>
            {children}
            <div className={classes.stepper}>
                <Slider
                    min={0}
                    max={100}
                    value={(step / countSteps) * 100}
                    valueLabelDisplay="on"
                    valueLabelFormat={valueLabelSliderFormat}
                    className={classes.slider}
                />
                {(step > 0) && (
                    <Button
                        color="default"
                        variant="outlined"
                        onClick={prevStep}
                        className={classes.backStepButton}
                    >
                        <ArrowLeftIcon />
                    </Button>
                )}
                <Button
                    color="primary"
                    variant="contained"
                    onClick={nextStep}
                >
                    Далее
                </Button>
            </div>
        </div>
    );
};
