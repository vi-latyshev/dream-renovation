import type { ServerResponse } from 'http';

export interface APIErrorJSON<E extends Object = Object> {
    message: string;
    errors?: E;
    code: number;
}

const sendError = (e: APIError, res: ServerResponse) => {
    console.error(`API ${e.code}: ${e.stack}`); // eslint-disable-line no-console
    const stringified = JSON.stringify(e);

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Content-Length', Buffer.byteLength(stringified));
    res.statusCode = e.code;
    res.end(stringified);
};

/**
 * https://github.com/tutorbookapp/tutorbook/blob/3f6d19450cc44577024e68d18e0a5618914b3583/lib/model/error.ts
 */
export class APIError extends Error {
    public static handle = (e: unknown, res: ServerResponse) => {
        if (e instanceof APIError) {
            return sendError(e, res);
        }
        if (e instanceof Error) {
            return sendError(new APIError(e.message), res);
        }
        if (typeof e === 'string') {
            return sendError(new APIError(e), res);
        }

        return sendError(new APIError(`Unhandled error: ${e}`), res);
    };

    public constructor(
        message: string,
        public readonly code: number = 500,
        public readonly errors?: Object,
    ) {
        super(message);
    }

    public toJSON(): APIErrorJSON {
        return {
            message: this.message,
            errors: this.errors,
            code: this.code,
        };
    }
}
