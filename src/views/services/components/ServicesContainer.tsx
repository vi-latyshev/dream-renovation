import { Container, makeStyles, Typography } from '@material-ui/core';
import { KeyboardBackspaceRounded } from '@material-ui/icons';

import { Link } from 'components/controls';
import { SERVICES_SECTION_ID } from 'views/home';

export interface ServicesContainerProps {
    title: string;
    children: React.ReactNode;
}

const useStyles = makeStyles(({ spacing }) => ({
    service: {
        display: 'flex',
        flexDirection: 'column',
        margin: spacing(8, 0),
    },
    container: {
        marginBottom: spacing(6),
    },
    link: {
        display: 'flex',
        alignItems: 'center',
    },
    iconBack: {
        fontSize: '5rem',
    },
    title: {
        marginLeft: spacing(5),
    },
}));

export const ServicesContainer = ({ title, children }: ServicesContainerProps) => {
    const classes = useStyles();

    return (
        <div className={classes.service}>
            <Container className={classes.container}>
                <Link href={`/#${SERVICES_SECTION_ID}`} className={classes.link}>
                    <KeyboardBackspaceRounded color="inherit" className={classes.iconBack} />
                    <Typography variant="h1" className={classes.title}>
                        {title}
                    </Typography>
                </Link>
            </Container>
            {children}
        </div>
    );
};
