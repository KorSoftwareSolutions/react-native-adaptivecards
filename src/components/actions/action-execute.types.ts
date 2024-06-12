import { AssociatedInputs } from "./action.types";
import { IActionWrapper } from "./components/action-wrapper.types";

export interface IActionExecuteProps {
  verb?: string;
  data?: string | object;
  associatedInputs?: AssociatedInputs;
}

export interface IActionExecute extends IActionExecuteProps, IActionWrapper {
  type: "Action.Execute";
}
