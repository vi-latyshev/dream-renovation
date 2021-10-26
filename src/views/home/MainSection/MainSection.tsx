import Image from 'next/image';
import makeStyles from '@mui/styles/makeStyles';

import homeBackgroundImg from 'images/home-background.jpg';
import { Section } from 'components/Section';

import { TitleContactBlock } from './TitleContactBlock';

const useStyles = makeStyles(() => ({
    section: {
        paddingTop: 70,
        justifyContent: 'flex-start',
    },
    // background: {
    //     position: 'absolute',
    //     overflow: 'hidden',
    //     width: '120%',
    //     height: '120%',
    //     marginTop: -66,
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
                    placeholder="blur"
                    layout="fixed"
                    src={homeBackgroundImg}
                    alt="home"
                />
            </div> */}
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
    );
};
