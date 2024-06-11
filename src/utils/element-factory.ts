import React from "react";
import { TextBlock } from "../components/card-elements/text-block";
import { ICardBody } from "../components/cards/adaptive-card.types";
import { Image } from "../components/card-elements/image";
import { Media } from "../components/card-elements/media";
import { RichTextBlock } from "../components/card-elements/rich-text-block";

const getElement = (type: ICardBody[number]["type"]) => {
  switch (type) {
    case "TextBlock":
      return TextBlock;
    case "Image":
      return Image;
    case "Media":
      return Media;
    case "RichTextBlock":
      return RichTextBlock;
    default:
      return null;
  }
};

export const elementFactory = { getElement };
