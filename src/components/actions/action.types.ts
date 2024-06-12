import { IActionExecute } from "./action-execute.types";
import { IActionOpenUrl } from "./action-openurl.types";
import { IActionShowCard } from "./action-showcard.types";
import { IActionSubmit } from "./action-submit.types";
import { IActionToggleVisibility } from "./action-togglevisibility.types";

export type IAction = IActionExecute | IActionOpenUrl | IActionShowCard | IActionSubmit | IActionToggleVisibility;

export enum AssociatedInputs {
  Auto = "auto",
  None = "none",
}
