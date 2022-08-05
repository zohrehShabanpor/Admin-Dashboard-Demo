export const addComma = (number: string): string => {
  var temp = "";

  for (var i = 0; i < number.length; i++) {
    temp += number[i];
    if ((i + 1) % 3 === number.length % 3 && i !== number.length - 1) {
      temp += ",";
    }
  }

  return temp;
};

export * from "./types/user";
export * from "./types/withStyle";
export * from "./enums";
export { default as withStyle } from "./types/withStyle";
export type { User } from "./types/user";
export { default as uuid } from "./uuid";
export { default as entry } from "./entry";
export * from "./date";
