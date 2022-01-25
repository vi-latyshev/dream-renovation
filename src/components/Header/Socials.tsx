import { makeStyles } from '@material-ui/core';
import { WhatsApp } from '@material-ui/icons';

import { Link } from 'components/controls';
import { SOCIALS } from 'constants/socials';

const SOCIALS_LINKS = [
    { href: SOCIALS.whatsapp, icon: WhatsApp },
];

const useStyles = makeStyles(({ palette, mixins, spacing }) => ({
    socials: {
        display: 'flex',
        marginLeft: 'auto',
        '& > *:not(:first-child)': {
            marginLeft: spacing(2),
        },
    },
    link: {
        ...mixins.flexCenter,
        '&:hover': {
            '& $linkBackground': {
                backgroundColor: palette.primary.dark,
            },
            '& $linkIcon path': {
                fill: palette.primary.dark,
            },
        },
    },
    linkBackground: {
        transition: '.3s',
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: palette.primary.main,
        opacity: 0.1,
    },
    linkIcon: {
        position: 'absolute',
        '& path': {
            transition: '.3s',
        },
    },
}));

export const Socials = () => {
    const classes = useStyles();

    return (
        <div className={classes.socials}>
            {SOCIALS_LINKS.map(({ href, icon: IconComponent }) => (
                <Link
                    key={href}
                    href={href}
                    className={classes.link}
                    aria-label={href}
                >
                    <div className={classes.linkBackground} />
                    <IconComponent className={classes.linkIcon} />
                </Link>
            ))}
        </div>
    );
};
