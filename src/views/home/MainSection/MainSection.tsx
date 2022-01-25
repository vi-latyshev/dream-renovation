import Image from 'next/image';
import {
    alpha,
    makeStyles,
} from '@material-ui/core';

import homeBackgroundImg from './images/home-background.jpg';

import { Section } from 'components/Section';

import { TitleContactBlock } from './TitleContactBlock';

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
    section: {
        paddingTop: spacing(8),
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    background: {
        position: 'absolute',
        overflow: 'hidden',
        width: '100%',
        marginTop: -66 * 2, // header height * 2, idk why
        zIndex: -1,
        '& > span': {
            zIndex: -2,
            '&::after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage:
                    `radial-gradient(85.29% 396.44% at 14.4% 31.81%, ${palette.background.default} 51.56%,
                    ${alpha(palette.background.default, 0.7)} 91.15%, ${palette.background.default} 100%)`,
            },
        },
    },
    backgroundCard: {
        width: breakpoints.values.lg,
        marginLeft: 'auto', // idk how with flex and next/Image
        marginRight: 'auto',
        '& > span': {
            boxShadow: '0px 10px 50px rgba(0, 0, 0, 0.2)',
        },
    },
}));

export const MainSection = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.background}>
                <Image
                    width="1920"
                    height="1080"
                    layout="fixed"
                    placeholder="blur"
                    src={homeBackgroundImg}
                    alt="home background"
                />
            </div>
            <Section className={classes.section}>
                <div className={classes.backgroundCard}>
                    <Image
                        placeholder="blur"
                        layout="responsive"
                        src={homeBackgroundImg}
                        alt="home"
                    />
                </div>
                <TitleContactBlock />
            </Section>
        </>
    );
};
