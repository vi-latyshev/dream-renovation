import { CONTACTS } from './contacts';

export const SOCIALS = {
    whatsapp: `https://wa.me/${CONTACTS.tel.replace(/\D+/g, '')}`,
    telegram: `https://t.me/${CONTACTS.tel.replace(/\s+/g, '')}`,
};
