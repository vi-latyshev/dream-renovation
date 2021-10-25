import { makeStyles } from '@material-ui/core';
import { PhoneEnabledSharp } from '@material-ui/icons';

import { CONTACTS } from 'constants/contacts';
import { Link } from 'components/controls';

const useStyles = makeStyles(({ typography }) => ({
    phone: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: typography.fontWeightBold,
    },
    contactIcon: {
        marginRight: 10,
    },
}));

export const PhoneContact = () => {
    const classes = useStyles();

    return (
        <Link href={`tel:${CONTACTS.tel}`} className={classes.phone}>
            <PhoneEnabledSharp className={classes.contactIcon} />
            {CONTACTS.tel}
        </Link>
    );
};
