/**
 * console.log abstraction function to be used in node applications.
 */
export declare const log: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
/**
 * console.error abstraction function to be used in node applications.
 */
export declare const error: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
