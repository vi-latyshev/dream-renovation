import { Typography, makeStyles } from '@material-ui/core';

import { SectionWithContainer } from 'components/Section';

import { Calculator } from './Calculator';
import { Footer } from './Footer';

const useStyles = makeStyles(({ palette }) => ({
    calculator: {
        paddingTop: 100,
        paddingBottom: 50,
        borderWidth: '80px 40px',
        borderStyle: 'solid',
        borderColor: palette.secondary.main,
    },
    title: {
        marginBottom: 30,
    },
}));

export const CalculatorSection = () => {
    const classes = useStyles();

    return (
        <SectionWithContainer withoutCenter className={classes.calculator}>
            <Typography variant="h1" className={classes.title}>
                Калькулятор ремонта
            </Typography>
            <Calculator />
            <Footer />
        </SectionWithContainer>
    );
};
