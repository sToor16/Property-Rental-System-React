import titleize from "titleize";
export const propertyType = isShared => isShared ? 'shared' : 'entire';
export const toUpperCase = value => value ? titleize(value): ''
