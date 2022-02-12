import { Button, makeStyles, Typography } from '@material-ui/core';
import { AlternateEmail } from '@material-ui/icons';

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
        marginTop: spacing(6),
        padding: spacing(5, 18, 5, 11),
        borderRadius: 5,
        backgroundColor: palette.background.default,
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.07)',
    },
    title: {
        marginBottom: spacing(4),
    },
    benefits: {
        marginBottom: spacing(4),
        '& > *:not(:last-child)': {
            marginBottom: spacing(3),
        },
    },
    contactsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: spacing(4),
        '& > *:not(:last-child)': {
            marginRight: spacing(8),
        },
    },
    contacts: {
        display: 'flex',
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
        marginRight: spacing(1),
    },
}));

export const TitleContactBlock = () => {
    const classes = useStyles();

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
            <Button component={Link} href={`#${CONTACT_US_SECTION_ID}`}>
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
