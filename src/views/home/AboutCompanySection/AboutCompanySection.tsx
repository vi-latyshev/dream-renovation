import Image from 'next/image';
import { makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { Section } from 'components/Section';

const useStyles = makeStyles(({ palette }) => ({
    containerBox: {
        display: 'flex',
        backgroundColor: palette.primary.main,
        borderRadius: 16,
        color: palette.common.white,
    },
    textContainer: {
        padding: 40,
    },
    text: {
        marginBottom: 60,
    },
    textBlock: {
        width: 530,
    },
    lastTextBlock: {
        width: 440,
    },
    imageContainer: {
        display: 'flex',
        marginTop: 20,
        marginRight: 20,
        marginLeft: -100,
    },
}));

export const AboutCompanySection = () => {
    const classes = useStyles();

    return (
        <Section>
            <div className={classes.containerBox}>
                <div className={classes.textContainer}>
                    <Typography variant="h2" className={classes.text}>
                        Немного о нашей компании
                    </Typography>
                    <Typography className={clsx(classes.text, classes.textBlock)}>
                        Наша компания занимается ремонтом и отделкой квартир
                        “под ключ”. Высокая квалификация и профессионализм
                        нашим мастеров позволяет нам работать с любыми типами
                        домов, разрабатывать дизайн-проект с учётом всех ваших
                        пожеланий и выполнять работу по всем указанным срокам.
                    </Typography>
                    <Typography className={clsx(classes.text, classes.lastTextBlock)}>
                        При составлении сметы мы учитываем все особенности
                        вашей квартиры и гарантируем вам многоуровневую поддержку
                        начиная от выезда замерщика до сдачи готового проекта.
                    </Typography>
                </div>
                <div className={classes.imageContainer}>
                    <Image
                        width="458"
                        height="504"
                        layout="fixed"
                        src="/img/about-image.png"
                        alt="about"
                    />
                </div>
            </div>
        </Section>
    );
};
