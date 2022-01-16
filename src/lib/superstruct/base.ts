import * as S from 'superstruct';

export * from 'superstruct';

// redefine default functions of superstruct for change some logic

type MinBaseParams = Parameters<typeof S.min>;
type MaxBaseParams = Parameters<typeof S.max>;
type PatternBaseParams = Parameters<typeof S.pattern>;

export type MinErrorType = {
    min?: MinBaseParams[1];
};

export type MaxErrorType = {
    max?: MaxBaseParams[1];
};

export type SizeErrorType = MinErrorType & MaxErrorType;

export type PatternErrorType = {
    example?: PatternBaseParams[1] | string;
};

export type ValidationValues = MinErrorType | MaxErrorType | SizeErrorType | PatternErrorType;

export type Failure = S.Failure & {
    validationValues?: ValidationValues;
};

export declare class StructError extends S.StructError {
    failures: () => Array<Failure>;
    constructor(failure: Failure, failures: () => Generator<Failure>);
}

const getSize = (value: unknown): number => {
    if (value instanceof Map || value instanceof Set) {
        return value.size;
    }
    if (typeof value === 'number') {
        return value;
    }
    try {
        return (value as string | unknown[]).length ?? 0;
    } catch (e) {
        // @TODO handle it
        return 0;
    }
};

/**
 * VERY SCARY CODE!
 *
 * superstruct haven`t validationValues (as like ajv) but we needs to get validationValues from server for client side
 *
 *  @TODO find another way mb?
 */
const redefineRefine = <T, S>(struct: S.Struct<T, S>, refinement: string, fields: ValidationValues) => {
    const structRefinerOrig = struct.refiner;

    struct.refiner = function newRefiner(...params) {
        const result: Failure[] = [...structRefinerOrig(...params)];

        return result.map((failure) => {
            if (failure.refinement === refinement) {
                failure.validationValues = fields;
            }

            return failure;
        });
    };
};

type MaxBaseType = number | Date;

export const max = <T extends MaxBaseType, S extends unknown>(
    struct: S.Struct<T, S>, threshold: T, options: { exclusive?: boolean; } = {},
): S.Struct<T, S> => {
    const baseStruct = S.max(struct, threshold, options);

    redefineRefine(baseStruct, 'max', { max: threshold });

    return baseStruct;
};

type MinBaseType = number | Date;

export const min = <T extends MinBaseType, S extends unknown>(
    struct: S.Struct<T, S>, threshold: T, options: { exclusive?: boolean; } = {},
): S.Struct<T, S> => {
    const baseStruct = S.max(struct, threshold, options);

    redefineRefine(baseStruct, 'min', { min: threshold });

    return baseStruct;
};

type PatternBaseType = string;

export const pattern = <T extends PatternBaseType, S extends unknown>(
    struct: S.Struct<T, S>, regexp: RegExp, example?: PatternErrorType['example'],
) => {
    const baseStruct = S.pattern(struct, regexp);

    redefineRefine(baseStruct, 'pattern', { example });

    return baseStruct;
};

type SizeBaseType = string | number | Date | unknown[] | Map<unknown, unknown> | Set<unknown>;

export const size = <T extends SizeBaseType, S extends unknown>(
    struct: S.Struct<T, S>, minVal: number, maxVal: number = minVal,
) => {
    const baseStruct = S.size(struct, minVal, maxVal);

    redefineRefine(baseStruct, 'size', { min: minVal, max: maxVal });

    return baseStruct;
};

export const optional = <T, S>(struct: S.Struct<T, S>): S.Struct<T | undefined, S> => new S.Struct({
    ...struct,
    validator: (value, ctx) => (
        value === undefined || getSize(value) === 0 || struct.validator(value, ctx)
    ),
    refiner: (value, ctx) => (
        value === undefined || getSize(value) === 0 || struct.refiner(value, ctx)
    ),
});
