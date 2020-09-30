
const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const decodedValue = ([colorOne, colorTwo]) => Number(`${getValue(colorOne)}${getValue(colorTwo)}`);

let getValue = (color) => COLORS.indexOf(color);

