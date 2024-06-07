import { Image } from "react-native";
const getSize = (uri: string) => {
  return new Promise<{ width: number; height: number }>((resolve, reject) => {
    Image.getSize(
      uri,
      (width, height) => {
        resolve({ width, height });
      },
      reject
    );
  });
};
export const imageUtils = { getSize };
