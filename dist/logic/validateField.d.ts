import * as React from 'react';
import { Field } from '../types';
declare const _default: <FormValues extends Record<string, any>>(fieldsRef: React.MutableRefObject<Partial<Record<import("../types").FieldName<FormValues>, Field>>>, validateAllFieldCriteria: boolean, { ref, ref: { type, value, name }, options, required, maxLength, minLength, min, max, pattern, validate, }: Field) => Promise<import("../types").NestDataObject<FormValues>>;
export default _default;
