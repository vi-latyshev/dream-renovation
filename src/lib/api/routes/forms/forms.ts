import { APIError } from 'lib/api/error';
import { serverSchemaResolver } from 'lib/superstruct';

import { FormNames } from './constants';
import { contactUsSchema } from './schemas';

import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';
import type { StructDataValues } from 'lib/superstruct';

export type HandleFormsRes = void;

type FormHandlerType = {
    [T in FormNames]: {
        schema: StructDataValues;
    };
};

const formsHandler: FormHandlerType = {
    [FormNames.CONTACT_US_FORM]: {
        schema: contactUsSchema,
    },
};

export const handleFormsAPI = async (req: Req, res: Res<HandleFormsRes>) => {
    try {
        const { query, body } = req;

        const formName = query.form;
        const foundForm = formsHandler[formName as FormNames];

        if (foundForm === undefined) {
            throw new APIError(`Invalid form name: '${formName}'`, 400);
        }
        const { schema } = foundForm;

        serverSchemaResolver(schema, body);

        // @TODO send mail with parsed values by formName

        res.status(200).end();
    } catch (e) {
        APIError.handle(e, res);
    }
};
