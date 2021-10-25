import { Link, makeStyles, Typography } from '@material-ui/core';
import { scroller } from 'react-scroll';

import { theme } from 'styles';

import { RulerIcon } from './icons/RulerIcon';

const useStyles = makeStyles(() => ({
    footer: {
        display: 'flex',
        alignSelf: 'center',
        marginTop: 80,
    },
    link: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 15,
    },
    rulerIcon: {
        marginLeft: 5,
        marginRight: 10,
    },
}));

export const Footer = () => {
    const classes = useStyles();

    // @TODO: change to and open Modal
    const handleContactClick = () => {
        scroller.scrollTo('contact', {
            smooth: true,
            isDynamic: true,
            duration: theme.transitions.duration.enteringScreen,
        });
    };

    return (
        <div className={classes.footer}>
            <Typography>
                или же вы всегда можете
            </Typography>
            <Link
                color="secondary"
                component="button"
                onClick={handleContactClick}
                className={classes.link}
            >
                <RulerIcon color="inherit" className={classes.rulerIcon} />
                Проконсультироваться с замерщиком
            </Link>
        </div>
    );
};
