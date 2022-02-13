import {
    Slider,
    Button,
    Typography,
    makeStyles,
    InputAdornment,
} from '@material-ui/core';
import { Input } from 'components/controls';

import { useFormBase } from 'components/controls/hooks';
import { useModal } from 'components/Modal';
import { useCallback } from 'react';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    grid: {
        display: 'grid',
        width: '100%',
        gridTemplateColumns: 'repeat(3, 348px)',
        gridTemplateRows: 'repeat(2, 1fr)',
        justifyContent: 'space-between',
        gap: spacing(3, 10),
        // gridAutoColumns: 350,
        [breakpoints.down('lg')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
        },
    },
    title: {
        marginBottom: spacing(3),
    },
    priceContainer: {
        gridRowStart: 'span 2',
        [breakpoints.down('lg')]: {
            gridRowStart: 'auto',
            gridRowEnd: -1,
            gridColumn: 'span 2',
        },
    },
    areaContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: spacing(2),
    },
    priceNumber: {
        whiteSpace: 'nowrap',
    },
    submitButton: {
        marginTop: spacing(5),
    },
}));

const valueLabelSliderFormat = (value: number) => (<>{value} м<sup>2</sup></>);

export const CalculatorForm = () => {
    const classes = useStyles();
    const { showModal } = useModal();

    const { control, handleSubmit, formState } = useFormBase({
        // schema: contactUsSchema,
    });

    const handleCalculatorForm = useCallback(handleSubmit((formData) => {
        console.log(formData, 'formData');
        // showModal();
    }), []);

    return (
        <form onSubmit={handleCalculatorForm} className={classes.form}>
            <div className={classes.grid}>
                <div>
                    <Typography variant="h3" className={classes.title}>
                        Где делаем ремонт?
                    </Typography>
                    <Input
                        control={control}
                        className={classes.input}
                    />
                </div>
                <div>
                    <Typography variant="h3" className={classes.title}>
                        Вид ремонта?
                    </Typography>
                    <Input
                        control={control}
                        className={classes.input}
                    />
                </div>
                <div className={classes.priceContainer}>
                    <Typography variant="h3" className={classes.title}>
                        Стоимость:
                    </Typography>
                    <Typography>
                        Ваша квартира мечты обойдется вам в{' '}
                        <Typography
                            color="secondary"
                            variant="h3"
                            component="span"
                            className={classes.priceNumber}
                        >
                            170 000
                        </Typography> рублей
                    </Typography>
                </div>
                <div>
                    <Typography variant="h3" className={classes.title}>
                        Площадь помещения:
                    </Typography>
                    <Input
                        control={control}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">м<sup>2</sup></InputAdornment>,
                        }}
                        className={classes.input}
                    />
                </div>
                <div className={classes.areaContainer}>
                    <Slider
                        valueLabelDisplay="on"
                        valueLabelFormat={valueLabelSliderFormat}
                    />
                </div>

            </div>
            <Button
                type="submit"
                disabled={formState.isSubmitting}
                className={classes.submitButton}
            >
                Связаться с нами
            </Button>
        </form>
    );
};
