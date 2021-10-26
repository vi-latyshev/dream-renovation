import makeStyles from '@mui/styles/makeStyles';
import { Instagram, WhatsApp, YouTube } from '@mui/icons-material';
import { Link } from 'components/controls';

import { SOCIALS } from 'constants/socials';

const SOCIALS_LINKS = [
    { href: SOCIALS.intagram, icon: Instagram },
    { href: SOCIALS.youtube, icon: YouTube },
    { href: SOCIALS.whatsapp, icon: WhatsApp },
];

const useStyles = makeStyles(({ palette, mixins }) => ({
    socials: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 30,
    },
    link: {
        ...mixins.flexCenter,
        marginRight: 15,
        '&:hover': {
            '& $linkBackground': {
                transition: '.3s',
                backgroundColor: palette.primary.dark,
            },
            '& $linkIcon path': {
                transition: '.3s',
                fill: palette.primary.dark,
            },
        },
    },
    linkBackground: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: palette.primary.main,
        opacity: 0.1,
    },
    linkIcon: {
        position: 'absolute',
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
