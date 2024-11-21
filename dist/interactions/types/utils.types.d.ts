export type TpLiteralUnion<T extends U, U = string> = T | (U & Record<never, never>);
export type TpCssClassMap = {
    [className: string]: boolean;
};
type UnderscoreToCamelCase<S extends string> = S extends `${infer First}_${infer Rest}` ? `${First}${Capitalize<UnderscoreToCamelCase<Rest>>}` : S;
export type TransformKeys<T> = {
    [K in keyof T as UnderscoreToCamelCase<string & K>]: T[K];
};
export {};
