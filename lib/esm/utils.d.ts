import { FieldState, StatePropType, FieldStateNested, FormSchema } from './FormHooks';
export declare const validateField: (fields: StatePropType["fields"], target: any, customMessage?: string | null | undefined) => FieldState | Record<string, FieldState> | {
    [x: number]: any;
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): Record<string, FieldState> | undefined;
    push(...items: Record<string, FieldState>[]): number;
    concat(...items: ConcatArray<Record<string, FieldState>>[]): Record<string, FieldState>[];
    concat(...items: (Record<string, FieldState> | ConcatArray<Record<string, FieldState>>)[]): Record<string, FieldState>[];
    join(separator?: string | undefined): string;
    reverse(): Record<string, FieldState>[];
    shift(): Record<string, FieldState> | undefined;
    slice(start?: number | undefined, end?: number | undefined): Record<string, FieldState>[];
    sort(compareFn?: ((a: Record<string, FieldState>, b: Record<string, FieldState>) => number) | undefined): Record<string, FieldState>[];
    splice(start: number, deleteCount?: number | undefined): Record<string, FieldState>[];
    splice(start: number, deleteCount: number, ...items: Record<string, FieldState>[]): Record<string, FieldState>[];
    unshift(...items: Record<string, FieldState>[]): number;
    indexOf(searchElement: Record<string, FieldState>, fromIndex?: number | undefined): number;
    lastIndexOf(searchElement: Record<string, FieldState>, fromIndex?: number | undefined): number;
    every<S extends Record<string, FieldState>>(predicate: (value: Record<string, FieldState>, index: number, array: Record<string, FieldState>[]) => value is S, thisArg?: any): this is S[];
    every(predicate: (value: Record<string, FieldState>, index: number, array: Record<string, FieldState>[]) => unknown, thisArg?: any): boolean;
    some(predicate: (value: Record<string, FieldState>, index: number, array: Record<string, FieldState>[]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: Record<string, FieldState>, index: number, array: Record<string, FieldState>[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: Record<string, FieldState>, index: number, array: Record<string, FieldState>[]) => U, thisArg?: any): U[];
    filter<S_1 extends Record<string, FieldState>>(predicate: (value: Record<string, FieldState>, index: number, array: Record<string, FieldState>[]) => value is S_1, thisArg?: any): S_1[];
    filter(predicate: (value: Record<string, FieldState>, index: number, array: Record<string, FieldState>[]) => unknown, thisArg?: any): Record<string, FieldState>[];
    reduce(callbackfn: (previousValue: Record<string, FieldState>, currentValue: Record<string, FieldState>, currentIndex: number, array: Record<string, FieldState>[]) => Record<string, FieldState>): Record<string, FieldState>;
    reduce(callbackfn: (previousValue: Record<string, FieldState>, currentValue: Record<string, FieldState>, currentIndex: number, array: Record<string, FieldState>[]) => Record<string, FieldState>, initialValue: Record<string, FieldState>): Record<string, FieldState>;
    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: Record<string, FieldState>, currentIndex: number, array: Record<string, FieldState>[]) => U_1, initialValue: U_1): U_1;
    reduceRight(callbackfn: (previousValue: Record<string, FieldState>, currentValue: Record<string, FieldState>, currentIndex: number, array: Record<string, FieldState>[]) => Record<string, FieldState>): Record<string, FieldState>;
    reduceRight(callbackfn: (previousValue: Record<string, FieldState>, currentValue: Record<string, FieldState>, currentIndex: number, array: Record<string, FieldState>[]) => Record<string, FieldState>, initialValue: Record<string, FieldState>): Record<string, FieldState>;
    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: Record<string, FieldState>, currentIndex: number, array: Record<string, FieldState>[]) => U_2, initialValue: U_2): U_2;
    find<S_2 extends Record<string, FieldState>>(predicate: (this: void, value: Record<string, FieldState>, index: number, obj: Record<string, FieldState>[]) => value is S_2, thisArg?: any): S_2 | undefined;
    find(predicate: (value: Record<string, FieldState>, index: number, obj: Record<string, FieldState>[]) => unknown, thisArg?: any): Record<string, FieldState> | undefined;
    findIndex(predicate: (value: Record<string, FieldState>, index: number, obj: Record<string, FieldState>[]) => unknown, thisArg?: any): number;
    fill(value: Record<string, FieldState>, start?: number | undefined, end?: number | undefined): Record<string, FieldState>[];
    copyWithin(target: number, start: number, end?: number | undefined): Record<string, FieldState>[];
    [Symbol.iterator](): IterableIterator<Record<string, FieldState>>;
    entries(): IterableIterator<[number, Record<string, FieldState>]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<Record<string, FieldState>>;
    [Symbol.unscopables](): {
        copyWithin: boolean;
        entries: boolean;
        fill: boolean;
        find: boolean;
        findIndex: boolean;
        keys: boolean;
        values: boolean;
    };
    includes(searchElement: Record<string, FieldState>, fromIndex?: number | undefined): boolean;
    flatMap<U_3, This = undefined>(callback: (this: This, value: Record<string, FieldState>, index: number, array: Record<string, FieldState>[]) => U_3 | readonly U_3[], thisArg?: This | undefined): U_3[];
    flat<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[];
} | {
    [x: number]: any;
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): FieldState | undefined;
    push(...items: FieldState[]): number;
    concat(...items: ConcatArray<FieldState>[]): FieldState[];
    concat(...items: (FieldState | ConcatArray<FieldState>)[]): FieldState[];
    join(separator?: string | undefined): string;
    reverse(): FieldState[];
    shift(): FieldState | undefined;
    slice(start?: number | undefined, end?: number | undefined): FieldState[];
    sort(compareFn?: ((a: FieldState, b: FieldState) => number) | undefined): FieldState[];
    splice(start: number, deleteCount?: number | undefined): FieldState[];
    splice(start: number, deleteCount: number, ...items: FieldState[]): FieldState[];
    unshift(...items: FieldState[]): number;
    indexOf(searchElement: FieldState, fromIndex?: number | undefined): number;
    lastIndexOf(searchElement: FieldState, fromIndex?: number | undefined): number;
    every<S_3 extends FieldState>(predicate: (value: FieldState, index: number, array: FieldState[]) => value is S_3, thisArg?: any): this is S_3[];
    every(predicate: (value: FieldState, index: number, array: FieldState[]) => unknown, thisArg?: any): boolean;
    some(predicate: (value: FieldState, index: number, array: FieldState[]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: FieldState, index: number, array: FieldState[]) => void, thisArg?: any): void;
    map<U_4>(callbackfn: (value: FieldState, index: number, array: FieldState[]) => U_4, thisArg?: any): U_4[];
    filter<S_4 extends FieldState>(predicate: (value: FieldState, index: number, array: FieldState[]) => value is S_4, thisArg?: any): S_4[];
    filter(predicate: (value: FieldState, index: number, array: FieldState[]) => unknown, thisArg?: any): FieldState[];
    reduce(callbackfn: (previousValue: FieldState, currentValue: FieldState, currentIndex: number, array: FieldState[]) => FieldState): FieldState;
    reduce(callbackfn: (previousValue: FieldState, currentValue: FieldState, currentIndex: number, array: FieldState[]) => FieldState, initialValue: FieldState): FieldState;
    reduce<U_5>(callbackfn: (previousValue: U_5, currentValue: FieldState, currentIndex: number, array: FieldState[]) => U_5, initialValue: U_5): U_5;
    reduceRight(callbackfn: (previousValue: FieldState, currentValue: FieldState, currentIndex: number, array: FieldState[]) => FieldState): FieldState;
    reduceRight(callbackfn: (previousValue: FieldState, currentValue: FieldState, currentIndex: number, array: FieldState[]) => FieldState, initialValue: FieldState): FieldState;
    reduceRight<U_6>(callbackfn: (previousValue: U_6, currentValue: FieldState, currentIndex: number, array: FieldState[]) => U_6, initialValue: U_6): U_6;
    find<S_5 extends FieldState>(predicate: (this: void, value: FieldState, index: number, obj: FieldState[]) => value is S_5, thisArg?: any): S_5 | undefined;
    find(predicate: (value: FieldState, index: number, obj: FieldState[]) => unknown, thisArg?: any): FieldState | undefined;
    findIndex(predicate: (value: FieldState, index: number, obj: FieldState[]) => unknown, thisArg?: any): number;
    fill(value: FieldState, start?: number | undefined, end?: number | undefined): FieldState[];
    copyWithin(target: number, start: number, end?: number | undefined): FieldState[];
    [Symbol.iterator](): IterableIterator<FieldState>;
    entries(): IterableIterator<[number, FieldState]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<FieldState>;
    [Symbol.unscopables](): {
        copyWithin: boolean;
        entries: boolean;
        fill: boolean;
        find: boolean;
        findIndex: boolean;
        keys: boolean;
        values: boolean;
    };
    includes(searchElement: FieldState, fromIndex?: number | undefined): boolean;
    flatMap<U_7, This_1 = undefined>(callback: (this: This_1, value: FieldState, index: number, array: FieldState[]) => U_7 | readonly U_7[], thisArg?: This_1 | undefined): U_7[];
    flat<A_1, D_1 extends number = 1>(this: A_1, depth?: D_1 | undefined): FlatArray<A_1, D_1>[];
};
export declare const findOrCreateField: ({ defaultValue, ...state }?: FormSchema) => any;
export declare const immutableFields: (fields: StatePropType["fields"]) => {};
export declare const immutableFieldArray: (arrayFields: FieldState[] | FieldStateNested[]) => FieldState[] | FieldStateNested[];
export declare const resetFields: (fields: StatePropType["fields"]) => {};
export declare const transformDefaultFields: (fields: Record<string, FormSchema | FormSchema[]>) => StatePropType["fields"];
export declare const getChainedField: (name: string) => {
    index: undefined;
    field: string;
    subFields: string[];
};
export declare const validateAllFields: (fields: StatePropType["fields"], fieldsData: ReturnType<typeof transformFieldsToJSON>) => {};
export declare const transformFieldsToJSON: (fields: StatePropType["fields"]) => Record<string, any>;
export declare const validateAndMutateField: (currentField: FieldState, fieldsData: ReturnType<typeof transformFieldsToJSON>) => FieldState;
export declare const computeFieldWhenReady: (fields: StatePropType["fields"]) => boolean;
export declare const getClosestScrolled: (container: any) => any;
export declare const isFieldState: (item: any) => boolean;
