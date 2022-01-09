import { makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { CONTACTS } from 'constants/contacts';
import { Link } from 'components/controls';

const useStyles = makeStyles(({ typography, spacing }) => ({
    contact: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
    },
    contactName: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            fontWeight: typography.fontWeightBold,
        },
        marginRight: spacing(3),
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    contactLine: {
        '& > *': {
            marginTop: spacing(2),
        },
    },
    contactInfoTime: {
        display: 'flex',
        flexDirection: 'row',
        '& > *:not(:last-child)': {
            marginRight: spacing(2),
        },
    },
    contactInfoTimeDescr: {
        fontWeight: typography.fontWeightBold,
    },
}));

export const ContactsBlock = () => {
    const classes = useStyles();

    return (
        <div className={classes.contact}>
            <div className={clsx(classes.contactLine, classes.contactName)}>
                <Typography>Телефон для связи:</Typography>
                <Typography>Почта:</Typography>
                <Typography>Время работы:</Typography>
            </div>
            <div className={clsx(classes.contactLine, classes.contactInfo)}>
                <Link href={`tel:${CONTACTS.tel}`} className={classes.contactInfo}>{CONTACTS.tel}</Link>
                <Link href={`mailto:${CONTACTS.email}`} className={classes.contactInfo}>{CONTACTS.email}</Link>
                <div className={classes.contactInfoTime}>
                    <Typography>{CONTACTS.workTimeString}</Typography>
                    <Typography
                        color="secondary"
                        className={classes.contactInfoTimeDescr}
                    >
                        Без выходных
                    </Typography>
                </div>
            </div>
        </div>
    );
};
