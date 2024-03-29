import React from 'react';
import { FormSchema } from './FormHooks';
declare type SetFieldArray = (name: string, schema: FormSchema | Record<string, FormSchema>, multiple?: boolean) => void;
declare type RemoveFieldArray = (name: string, index?: number, except?: boolean) => void;
declare type SetFieldValue = (name: string, value: any) => void;
declare type SetFieldError = (name: string, errorMessage: string) => void;
declare type ClearFieldError = (name: string) => void;
declare type SetFieldArrays = (name: string, schema: FormSchema[] | Record<string, FormSchema>[], multiple?: boolean) => void;
declare type RemoveFieldArrays = (name: string, indexes: number[]) => void;
declare type SetFieldValues = (fieldValues: Record<string, any>) => void;
declare type SetFieldErrors = (fieldErrors: Record<string, string>) => void;
declare type ClearFieldErrors = (names: string[]) => void;
declare type SetDirty = (value: boolean) => void;
export declare class FormEvent {
    target: any;
    fieldStates: Record<string, any>;
    resetForm: () => void;
    originalEvent?: React.SyntheticEvent<any>;
    setFieldArray: SetFieldArray;
    removeFieldArray: RemoveFieldArray;
    setFieldValue: SetFieldValue;
    setFieldError: SetFieldError;
    clearFieldError: ClearFieldError;
    setFieldArrays: SetFieldArrays;
    removeFieldArrays: RemoveFieldArrays;
    setFieldValues: SetFieldValues;
    setFieldErrors: SetFieldErrors;
    clearFieldErrors: ClearFieldErrors;
    setDirty: SetDirty;
    constructor(props: any);
    locateFailed(correction?: number, autoscroll?: boolean): any;
    erroredFieldStates(): Record<string, any>;
    isReady(): boolean;
    forEach(callback: (...args: any[]) => void): void;
    json(): any;
    paramArray(): {
        name: string;
        value: any;
    }[];
    param(): string;
    formData(): FormData;
}
export {};
