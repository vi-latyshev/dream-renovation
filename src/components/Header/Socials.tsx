import { makeStyles } from '@material-ui/core';
import { Link } from 'components/controls';

import { SOCIALS } from 'constants/socials';
import { InstagramIcon } from 'icons/socials/Instagram';
import { WhatsappIcon } from 'icons/socials/Whatsapp';
import { YoutubeIcon } from 'icons/socials/Youtube';

const SOCIALS_LINKS = [
    { href: SOCIALS.intagram, icon: InstagramIcon },
    { href: SOCIALS.youtube, icon: YoutubeIcon },
    { href: SOCIALS.whatsapp, icon: WhatsappIcon },
];

const useStyles = makeStyles(({ palette }) => ({
    socials: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 50,
    },
    link: {
        display: 'flex',
        position: 'relative',
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
                >
                    <div className={classes.linkBackground} />
                    <IconComponent className={classes.linkIcon} />
                </Link>
            ))}
        </div>
    );
};
