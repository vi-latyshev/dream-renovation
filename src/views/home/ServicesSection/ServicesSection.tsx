import { makeStyles, Typography } from '@material-ui/core';

import { SectionWithContainer } from 'components/Section';

export const SERVICES_SECTION_ID = 'services';

const useStyles = makeStyles(() => ({
    services: {},
    title: {
        marginBottom: 60,
    },
}));

export const ServicesSection = () => {
    const classes = useStyles();

    return (
        <SectionWithContainer
            maxWidth="xl"
            id={SERVICES_SECTION_ID}
            className={classes.services}
        >
            <Typography variant="h1" className={classes.title}>
                Наши услуги
            </Typography>
            <Typography variant="h3">
                Какую комнату нужно преобразить?
            </Typography>
            <Typography variant="h3">
                Определённые типы работ
            </Typography>
        </SectionWithContainer>
    );
};
