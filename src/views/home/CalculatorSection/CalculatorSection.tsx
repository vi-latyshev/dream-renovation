import { Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import { SectionWithContainer } from 'components/Section';

import { Calculator } from './Calculator';
import { Footer } from './Footer';

export const CALCULATOR_SECTION_ID = 'calculator';

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
        <SectionWithContainer
            id={CALCULATOR_SECTION_ID}
            withoutCenter
            className={classes.calculator}
        >
            <Typography variant="h1" className={classes.title}>
                Калькулятор ремонта
            </Typography>
            <Calculator />
            <Footer />
        </SectionWithContainer>
    );
};
