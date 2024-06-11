import { ICardElement } from "../card-elements/card-element.types";
import { IAction } from "../cards/adaptive-card.types";

export interface IActionSetProps {
  actions: IAction[];
}

export interface IActionSet extends IActionSetProps, ICardElement {
  type: "ActionSet";
}
