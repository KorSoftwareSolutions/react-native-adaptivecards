import { BlockElementHeight, HorizontalAlignment, ImageSize } from "../../utils/design-tokens";
import { IHostConfig } from "../../utils/host-config-models";
import { IImage } from "./image.types";
import { ImageStyle as RNImageStyle } from "react-native";

export class ImageStyles {
  constructor(public imageProps: IImage, public hostConfig: IHostConfig) {}

  getHeight(actualImageHeight?: number): `${number}%` | number | undefined {
    if (this.imageProps.height === BlockElementHeight.Auto) {
      if (actualImageHeight === undefined) return this.hostConfig.imageSet?.maxImageHeight;
      if (this.hostConfig.imageSet?.maxImageHeight === undefined) return actualImageHeight;
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
      return this.getHeightFromSize(actualImageHeight);
    }
  }

  private getHeightFromSize(actualImageHeight?: number): number | undefined {
    if (!this.imageProps.size) return;
    else if (this.imageProps.size === ImageSize.Auto) return actualImageHeight;
    else if (this.imageProps.size === ImageSize.Stretch) return actualImageHeight;
    return this.hostConfig.imageSizes?.[this.imageProps.size];
  }

  getWidth(maxWidth?: number): RNImageStyle["width"] {
    if (this.imageProps.width === "auto") return maxWidth;
    else if (typeof this.imageProps.width === "string") {
      if (this.imageProps.width.endsWith("px")) return parseInt(this.imageProps.width);
      return this.imageProps.width as `${number}%`;
    } else if (typeof this.imageProps.width === "number") {
      return this.imageProps.width;
    } else {
      return this.getWidthFromSize(maxWidth);
    }
  }

  private getWidthFromSize(maxWidth?: number): number | undefined {
    if (!this.imageProps.size) return;
    else if (this.imageProps.size === ImageSize.Auto) return maxWidth;
    else if (this.imageProps.size === ImageSize.Stretch) return maxWidth;
    return this.hostConfig.imageSizes?.[this.imageProps.size];
  }

  getResizeMode(): RNImageStyle["resizeMode"] {
    if (this.imageProps.width === "auto" || this.imageProps.size === ImageSize.Stretch) return "stretch";
    return "contain";
  }

  getAlignSelf(): RNImageStyle["alignSelf"] {
    if (this.imageProps.horizontalAlignment === HorizontalAlignment.Center) return "center";
    if (this.imageProps.horizontalAlignment === HorizontalAlignment.Right) return "flex-end";
    return "flex-start";
  }

  getMaxWidth(parentWidth?: number, imageWidth?: number): number | undefined {
    if (parentWidth === undefined) return;
    if (imageWidth === undefined) return parentWidth;
    return Math.min(parentWidth, imageWidth);
  }
}
