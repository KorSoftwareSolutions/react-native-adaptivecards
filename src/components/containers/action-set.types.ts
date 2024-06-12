import { IAction } from "../actions/action.types";
import { ICardElement } from "../card-elements/card-element.types";

export interface IActionSetProps {
  actions: IAction[];
}

export interface IActionSet extends IActionSetProps, ICardElement {
  type: "ActionSet";
}
