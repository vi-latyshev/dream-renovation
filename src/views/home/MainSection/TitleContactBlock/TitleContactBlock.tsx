import { Button, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { AlternateEmail } from '@mui/icons-material';
import { scroller } from 'react-scroll';
import clsx from 'clsx';

import { theme } from 'styles';
import { CONTACTS } from 'constants/contacts';
import { Link } from 'components/controls';
import { PhoneContact } from 'components/PhoneContact';

import { CONTACT_US_SECTION_ID } from '../../ContactUsSection';

const useStyles = makeStyles(({ palette }) => ({
    contactBlock: {
        display: 'flex',
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '40px 90px 20px',
        marginLeft: -90,
        backgroundColor: palette.background.default,
    },
    title: {
        marginBottom: 50,
    },
    benefits: {
        '& > *': {
            marginBottom: 30,
        },
    },
    contactsContaner: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 40,
    },
    contacts: {
        display: 'flex',
        marginBottom: 20,
        '& > *:not(:last-child)': {
            marginRight: 80,
        },
    },
    contact: {
        display: 'flex',
        alignItems: 'center',
    },
    contactIcon: {
        marginRight: 10,
    },
    contactEmail: {
        marginLeft: 'auto',
    },
}));

export const TitleContactBlock = () => {
    const classes = useStyles();

    const handleContactUs = () => {
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
            <Button onClick={handleContactUs}>
                Связаться с нами
            </Button>
            <div className={classes.contactsContaner}>
                <div className={classes.contacts}>
                    <PhoneContact />
                    <div className={classes.contact}>
                        <Typography color="secondary">
                            {CONTACTS.workTimeString}
                        </Typography>
                        &nbsp;
                        <Typography>
                            Без выходных
                        </Typography>
                    </div>
                </div>
                <div className={classes.contacts}>
                    <Link
                        href={`mailto:${CONTACTS.email}`}
                        className={clsx(classes.contact, classes.contactEmail)}
                    >
                        <AlternateEmail color="secondary" className={classes.contactIcon} />
                        {CONTACTS.email}
                    </Link>
                </div>
            </div>
        </div>
    );
};
