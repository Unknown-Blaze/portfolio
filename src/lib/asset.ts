/** Resolves a file in public/ against the deploy base (/portfolio/). */
export const asset = (path: string): string => `${import.meta.env.BASE_URL}${path}`;
