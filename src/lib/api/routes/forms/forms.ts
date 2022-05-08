import { APIError } from 'lib/api/error';
import { handleApiError } from 'lib/api/error/handle-api-error';
import { serverSchemaResolver } from 'lib/superstruct/resolver/server-resolver';
import { sendMail } from 'lib/mail';

import { FormNames, formsHandler } from './constants';
import { formTemplate } from './mails';

import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

export type HandleFormsRes = void;

export const handleFormsAPI = async (req: Req, res: Res<HandleFormsRes>) => {
    try {
        const { query, body } = req;

        const formName = query.form;
        const foundForm = formsHandler[formName as FormNames];

        if (foundForm === undefined) {
            throw new APIError(`Invalid form name: '${formName}'`, 400);
        }
        const { schema, subject, onPrepareSendValues } = foundForm;

        const validatedValues = serverSchemaResolver(schema, body);
        const values = onPrepareSendValues?.(validatedValues) ?? validatedValues;

        const mail = formTemplate({ subject, values });
        await sendMail(mail);

        res.status(200).end();
    } catch (e) {
        handleApiError(e, res, { formName: req.query.form });
    }
};
