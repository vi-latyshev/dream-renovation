import { makeStyles } from '@material-ui/core';
import { Link } from 'components/controls';

import { SOCIALS } from 'constants/socials';
import { InstagramIcon } from './icons/Instagram';
import { WhatsappIcon } from './icons/Whatsapp';
import { YoutubeIcon } from './icons/Youtube';

const SOCIALS_LINKS = [
    { href: SOCIALS.intagram, icon: InstagramIcon },
    { href: SOCIALS.youtube, icon: YoutubeIcon },
    { href: SOCIALS.whatsapp, icon: WhatsappIcon },
];

const useStyles = makeStyles(({ palette }) => ({
    socials: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 30,
    },
    link: {
        display: 'flex',
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
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
        width: 52,
        height: 52,
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
