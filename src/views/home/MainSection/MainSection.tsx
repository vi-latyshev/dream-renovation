import Image from 'next/image';
import {
    // fade,
    makeStyles,
} from '@material-ui/core';

import { Section } from 'components/Section';

import { TitleContactBlock } from './TitleContactBlock';

const useStyles = makeStyles(() => ({
    section: {
        paddingTop: 70,
        justifyContent: 'flex-start',
    },
    // background: {
    //     // position: 'absolute',
    //     overflow: 'hidden',
    //     width: '100%',
    //     height: '100%',
    //     // marginTop: -66,
    //     '& > div': {
    //         zIndex: -2,
    //         '&::after': {
    //             content: "''",
    //             position: 'absolute',
    //             display: 'inline-block',
    //             left: 0,
    //             top: 0,
    //             width: '100%',
    //             height: '100%',
    //             backgroundImage:
    // `radial-gradient(85.29% 396.44% at 14.4% 31.81%, ${palette.background.default} 51.56%,
    // ${fade(palette.background.default, 0.7)} 91.15%, ${palette.background.default} 100%)`,
    //         },
    //     },
    // },
    backgroundCard: {
        width: '100%',
        '& > div': {
            boxShadow: '0px 10px 50px rgba(0, 0, 0, 0.2)',
        },
    },
}));

export const MainSection = () => {
    const classes = useStyles();

    return (
        <Section className={classes.section}>
            {/* TODO: background image */}
            {/* <div className={classes.background}>
                <Image
                    width="1920"
                    height="1080"
                    // objectFit="cover"
                    layout="responsive"
                    src="/img/home-background.jpg"
                />
            </div> */}
            <div className={classes.backgroundCard}>
                <Image
                    width="1206"
                    height="735"
                    layout="responsive"
                    src="/img/home-background.jpg"
                    alt="home"
                />
            </div>
            <TitleContactBlock />
        </Section>
    );
};
