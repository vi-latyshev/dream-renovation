import { handleFormsAPI } from 'lib/api/routes/forms';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { HandleFormsRes } from 'lib/api/routes/forms';

export default async function forms(
    req: NextApiRequest,
    res: NextApiResponse<HandleFormsRes>,
) {
    const { method } = req;

    switch (method) {
        case 'POST':
            await handleFormsAPI(req, res);
            break;
        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}
