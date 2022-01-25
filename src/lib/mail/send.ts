import { renderToStaticMarkup } from 'react-dom/server';
import nodemailer from 'nodemailer';

import { APIError } from 'lib/api/error';

import {
    TO,
    HOST,
    PORT,
    ACCOUNT,
    ACCOUNT_PASS,
    FROM_TITLE_DEFAULT,
} from './constants';

export interface SendMailProps {
    fromTitle?: string;
    subject: string;
    template: React.ReactElement;
}

export const sendMail = async ({ fromTitle, subject, template }: SendMailProps) => {
    try {
        const transporter = nodemailer.createTransport({
            host: HOST,
            port: PORT,
            secure: true,
            auth: {
                user: ACCOUNT,
                pass: ACCOUNT_PASS,
            },
        });
        await transporter.sendMail({
            from: `${fromTitle ?? FROM_TITLE_DEFAULT} <${ACCOUNT}>`,
            to: TO,
            subject,
            html: renderToStaticMarkup(template),
        });
    } catch (e) {
        throw new APIError(`Error in sending mail (${subject}): ${e}`);
    }
};
