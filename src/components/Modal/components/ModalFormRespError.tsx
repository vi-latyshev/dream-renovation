import { Typography } from '@material-ui/core';

import { CONTACTS } from 'constants/contacts';
import { Link } from 'components/controls';

import { ModalTitle } from './ModalTitle';

export const ModalFormRespError = () => (
    <>
        <ModalTitle isError>
            Произошла ошибка
        </ModalTitle>
        <Typography variant="h3">
            Попробуйте отправить заявку ещё раз, или свяжитесь с нами через{' '}
            <Link
                variant="h3"
                underline="always"
                href={`mailto:${CONTACTS.email}`}
            >
                {CONTACTS.email}
            </Link>
        </Typography>
    </>
);
