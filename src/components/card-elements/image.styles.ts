import { BlockElementHeight, ImageSize } from "../../utils/design-tokens";
import { IHostConfig } from "../../utils/host-config-models";
import { IImage } from "./image.types";
import { ImageStyle as RNImageStyle } from "react-native";

export class ImageStyles {
  constructor(public imageProps: IImage, public hostConfig: IHostConfig) {}

  getHeight(actualImageHeight?: number): `${number}%` | number | undefined {
    let imageHeight = actualImageHeight;
    if (this.imageProps.size !== undefined && this.imageProps.size !== ImageSize.Auto && this.imageProps.size !== ImageSize.Stretch) {
      imageHeight = this.hostConfig.imageSizes?.[this.imageProps.size];
    }

    if (this.imageProps.height === BlockElementHeight.Auto) {
      if (actualImageHeight === undefined) return;
      if (this.hostConfig.imageSet?.maxImageHeight === undefined) return;
      return Math.min(actualImageHeight, this.hostConfig.imageSet.maxImageHeight);
    } else if (this.imageProps.height === BlockElementHeight.Stretch) {
      // Stretch might be parent height
      return;
    } else if (typeof this.imageProps.height === "string") {
      if (this.imageProps.height.endsWith("px")) return parseInt(this.imageProps.height);
      if (this.imageProps.height.endsWith("%")) return this.imageProps.height as `${number}%`;
      return;
    } else if (typeof this.imageProps.height === "number") {
      return this.imageProps.height;
    } else {
      this.imageProps.size;
    }
  }

  getResizeMode(): RNImageStyle["resizeMode"] {
    if (this.imageProps.width === "auto" || this.imageProps.size === ImageSize.Stretch) return "stretch";
    return "contain";
  }
}
