import { makeStyles } from '@material-ui/core';

import { CONTACTS } from 'constants/contacts';
import { Link } from 'components/controls';
import { PhoneIcon } from 'icons/Phone';

const useStyles = makeStyles(() => ({
    phone: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    contactIcon: {
        marginRight: 10,
    },
}));

export const PhoneContact = () => {
    const classes = useStyles();

    return (
        <Link href={`tel:${CONTACTS.tel}`} className={classes.phone}>
            <PhoneIcon color="primary" className={classes.contactIcon} />
            {CONTACTS.tel}
        </Link>
    );
};
