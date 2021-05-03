import { makeStyles, Typography } from '@material-ui/core';

import { LogoIcon } from 'icons/Logo';
import { CONTACTS } from 'constants/contacts';

const useStyles = makeStyles(({ typography }) => ({
    contact: {
        display: 'flex',
        flexDirection: 'column',
    },
    contactLine: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 14,
        '& :not(:last-child)': {
            marginRight: 24,
        },
    },
    contactInfo: {
        fontWeight: typography.fontWeightBold,
    },
}));

export const ContactsBlock = () => {
    const classes = useStyles();
    return (
        <div className={classes.contact}>
            <LogoIcon />
            <div className={classes.contactLine}>
                <Typography>Телефон для связи:</Typography>
                <Typography className={classes.contactInfo}>{CONTACTS.tel}</Typography>
            </div>
            <div className={classes.contactLine}>
                <Typography>Почта:</Typography>
                <Typography className={classes.contactInfo}>{CONTACTS.email}</Typography>
            </div>
            <div className={classes.contactLine}>
                <Typography>Время работы:</Typography>
                <Typography className={classes.contactInfo}>{CONTACTS.workTimeString}</Typography>
                <Typography color="secondary">Без выходных</Typography>
            </div>
        </div>
    );
};
