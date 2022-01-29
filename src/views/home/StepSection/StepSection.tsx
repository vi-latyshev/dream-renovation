import { Grid, makeStyles, Typography } from '@material-ui/core';

import { SectionWithContainer } from 'components/Section';

import { BigRulerIcon } from './icons/BigRuler';
import { StepItem } from './components';

const useStyles = makeStyles(({ spacing }) => ({
    stepsContainer: {
        margin: spacing(8, 0),
        maxWidth: `calc(100% - ${spacing(7)}px)`,
    },
    ruleIcon: {
        width: '100%',
        height: '100%',
    },
}));

export const StepSection = () => {
    const classes = useStyles();

    return (
        <SectionWithContainer>
            <Typography variant="h1" component="h2">
                Пройдём следующие этапы:
            </Typography>
            <Grid container className={classes.stepsContainer}>
                <Grid
                    container
                    spacing={10}
                    justifyContent="flex-start"
                >
                    <StepItem step="1" title="Заявка на услуги">
                        Перед началом работы вы оставляете нам заявку по форме ниже
                        либо набрав нам по телефону.
                    </StepItem>
                    <StepItem step="3" title="Разработка проекта">
                        После составления сметы вместе с дизайнером составляется
                        проект по вашему собственному ТЗ либо на заказ по вашим предпочтениям.
                    </StepItem>
                    <StepItem step="5" title="Ремонтные работы">
                        Оформление потолков, отделка поверхностей, монтаж межкомнатных
                        дверей, освещение и остальные типа работ.
                    </StepItem>
                </Grid>
                <Grid
                    container
                    spacing={10}
                    justifyContent="flex-end"
                >
                    <StepItem step="2" title="Выезд замерщика">
                        После подтверждения заявки по адресу выезжает наш замерщик
                        для уточнения всевозможных деталей и составления сметы.
                    </StepItem>
                    <StepItem step="4" title="Подготовительные работы">
                        После разработки  наши сотрудники займутся подготовкой объекта
                        к работам, Закупкой материалов, демонтажем старой отделки и пр.
                    </StepItem>
                    <StepItem step="6" title="Сдача объекта">
                        Бригада займётся уборкой помещений, выносом мусора, финишной
                        отделочной работой, проведут работу с краской и декоративными элементами.
                    </StepItem>
                </Grid>
            </Grid>
            <BigRulerIcon color="secondary" className={classes.ruleIcon} />
        </SectionWithContainer>
    );
};
