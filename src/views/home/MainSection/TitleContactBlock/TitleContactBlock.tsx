import { Button, makeStyles, Typography } from '@material-ui/core';
import { AlternateEmail } from '@material-ui/icons';
import { scroller } from 'react-scroll';

import { theme } from 'styles';
import { CONTACTS } from 'constants/contacts';
import { Link } from 'components/controls';
import { PhoneContact } from 'components/PhoneContact';

import { CONTACT_US_SECTION_ID } from '../../ContactUsSection';

const useStyles = makeStyles(({ palette, spacing }) => ({
    contactBlock: {
        display: 'flex',
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '40px 90px 20px',
        marginLeft: -90,
        borderRadius: 5,
        backgroundColor: palette.background.default,
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.07)',
    },
    title: {
        marginBottom: 50,
    },
    benefits: {
        '& > *': {
            marginBottom: 30,
        },
    },
    contactsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        '& > *:not(:last-child)': {
            marginRight: spacing(8),
        },
    },
    contacts: {
        display: 'flex',
        marginBottom: 20,
        flexDirection: 'column',
        '& > *:not(:first-child)': {
            marginTop: spacing(2),
        },
    },
    contact: {
        display: 'flex',
        alignItems: 'center',
    },
    contactIcon: {
        marginRight: 10,
    },
}));

export const TitleContactBlock = () => {
    const classes = useStyles();

    const handleClickContactUs = () => {
        scroller.scrollTo(CONTACT_US_SECTION_ID, {
            smooth: true,
            isDynamic: true,
            duration: theme.transitions.duration.enteringScreen,
        });
    };

    return (
        <div className={classes.contactBlock}>
            <Typography variant="h1" className={classes.title}>
                Ремонт квартир
                <br />
                и домов под ключ
            </Typography>
            <div className={classes.benefits}>
                <Typography color="textSecondary">
                    Строгое соблюдение ТЗ
                </Typography>
                <Typography color="textSecondary">
                    Не выходим за рамки составленной сметы
                </Typography>
                <Typography color="textSecondary">
                    Профессионалы с многолетним опытом работы
                </Typography>
            </div>
            <Button onClick={handleClickContactUs}>
                Связаться с нами
            </Button>
            <div className={classes.contactsContainer}>
                <div className={classes.contacts}>
                    <PhoneContact />
                </div>
                <div className={classes.contacts}>
                    <div className={classes.contact}>
                        <Typography color="secondary">
                            {CONTACTS.workTimeString}
                        </Typography>
                        &nbsp;&nbsp;
                        <Typography>
                            Без выходных
                        </Typography>
                    </div>
                    <Link href={`mailto:${CONTACTS.email}`} className={classes.contact}>
                        <AlternateEmail color="secondary" className={classes.contactIcon} />
                        {CONTACTS.email}
                    </Link>
                </div>
            </div>
        </div>
    );
};
