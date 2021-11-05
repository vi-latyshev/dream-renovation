import { Container, makeStyles, Typography } from '@material-ui/core';
import { KeyboardBackspaceRounded } from '@material-ui/icons';

import { Link } from 'components/controls';
import { SERVICES_SECTION_ID } from 'views/home';

export interface ServicesContainerProps {
    title: string;
    children: React.ReactNode;
}

const useStyles = makeStyles(() => ({
    service: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 120,
        paddingBottom: 120,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 100,
    },
    iconBack: {
        fontSize: '5rem',
        marginRight: 40,
    },
}));

export const ServicesContainer = ({ title, children }: ServicesContainerProps) => {
    const classes = useStyles();

    return (
        <div className={classes.service}>
            <Container
                component={Link}
                href={`/#${SERVICES_SECTION_ID}`}
                className={classes.container}
            >
                <KeyboardBackspaceRounded color="inherit" className={classes.iconBack} />
                <Typography variant="h1">
                    {title}
                </Typography>
            </Container>
            {children}
        </div>
    );
};
