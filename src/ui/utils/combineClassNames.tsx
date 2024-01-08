// todo.. filter undefined and booleans
export const combineClasses = (...args: Array<string | undefined | boolean>): string => args.join(' ');