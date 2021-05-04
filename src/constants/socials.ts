import { CONTACTS } from './contacts';

export const SOCIALS = {
    intagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
    whatsapp: `https://wa.me/${CONTACTS.tel.replace(/\D+/g, '')}`,
};
