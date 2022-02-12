import { APIError } from './error';

import type { ServerResponse } from 'http';

/**
 * @TODO add Sentry or smth else
 */
const sendError = (e: APIError, res: ServerResponse) => {
    const internalError = e.internalError ? `${JSON.stringify(e.internalError)}\n` : '';
    console.error(`API ${e.code}:\n${internalError}${e.stack}`); // eslint-disable-line no-console

    const stringified = JSON.stringify(e);

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = e.code;
    res.end(stringified);
};

export const handleApiError = (e: unknown, res: ServerResponse, internalError?: Object) => {
    if (e instanceof APIError) {
        e.internalError = internalError;

        return sendError(e, res);
    }
    if (e instanceof Error) {
        return sendError(new APIError(e.message, undefined, undefined, internalError), res);
    }
    if (typeof e === 'string') {
        return sendError(new APIError(e, undefined, undefined, internalError), res);
    }

    return sendError(new APIError(`Unhandled error: ${e}`, undefined, undefined, internalError), res);
};
