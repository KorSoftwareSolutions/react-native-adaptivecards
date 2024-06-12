import React from "react";
import { TextBlock } from "../components/card-elements/text-block";
import { ICardBody } from "../components/cards/adaptive-card.types";
import { Image } from "../components/card-elements/image";
import { Media } from "../components/card-elements/media";
import { RichTextBlock } from "../components/card-elements/rich-text-block";
import { ActionOpenUrl } from "../components/actions/action-openurl";
import { IAction } from "../components/actions/action.types";
import { ActionExecute } from "../components/actions/action-execute";
import { ActionShowCard } from "../components/actions/action-showcard";
import { ActionSubmit } from "../components/actions/action-submit";

const getCardElement = (type: ICardBody[number]["type"]) => {
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

const getActionElement = (type: IAction["type"]) => {
  switch (type) {
    case "Action.OpenUrl":
      return ActionOpenUrl;
    case "Action.Execute":
      return ActionExecute;
    case "Action.Submit":
      return ActionSubmit;
    case "Action.ShowCard":
      return ActionShowCard;
    case "Action.ToggleVisibility":
      return null;
    default:
      return null;
  }
};

export const elementFactory = { getCardElement, getActionElement };
