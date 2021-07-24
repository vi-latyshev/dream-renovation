import { Typography, makeStyles } from '@material-ui/core';

import { CalculatorDataProvider } from './context/data';
import { CalculatorStepsProvider } from './context/steps';
import { STEPS_COUNTS } from './steps';
import { CalculatorSteps } from './CalculatorSteps';
import { CalculatorFooter } from './CalculatorFooter';

const useStyles = makeStyles(() => ({
    calculator: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        marginBottom: 30,
    },
}));

export const Calculator = () => {
    const classes = useStyles();

    return (
        <div className={classes.calculator}>
            <Typography variant="h1" className={classes.title}>
                Калькулятор ремонта
            </Typography>
            <CalculatorStepsProvider countSteps={STEPS_COUNTS}>
                <CalculatorDataProvider>
                    <CalculatorSteps />
                </CalculatorDataProvider>
            </CalculatorStepsProvider>
            <CalculatorFooter />
        </div>
    );
};
