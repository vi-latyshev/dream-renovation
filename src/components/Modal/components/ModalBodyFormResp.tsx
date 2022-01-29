import { Typography } from '@material-ui/core';

import { CONTACTS } from 'constants/contacts';
import { Link } from 'components/controls';

import { ModalTitle } from './ModalTitle';

import type { ModalComponentProps } from '../types';

interface ModalBodyFormRespProps extends ModalComponentProps { }

const ErrorMessage = () => (
    <>
        Попробуйте отправить заявку ещё раз, или свяжитесь с нами через{' '}
        <Link
            variant="h3"
            underline="always"
            href={`mailto:${CONTACTS.email}`}
        >
            {CONTACTS.email}
        </Link>
    </>
);

export const ModalBodyFormResp = ({ isError }: ModalBodyFormRespProps) => (
    <>
        <ModalTitle isError={isError}>
            {isError ? 'Произошла ошибка' : 'Спасибо за заявку'}
        </ModalTitle>
        <Typography variant="h3">
            {(isError
                ? <ErrorMessage />
                : 'Мы свяжемся с вами в ближайшее рабочее время'
            )}
        </Typography>
    </>
);
