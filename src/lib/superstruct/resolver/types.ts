import type { Struct, Infer } from '../base';

export type StructDataValues = Struct<any, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

export type DataValues = Infer<StructDataValues>;
