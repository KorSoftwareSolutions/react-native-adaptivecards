import { AssociatedInputs } from "./action.types";
import { IActionWrapper } from "./components/action-wrapper.types";

export interface IActionSubmitProps {
  data?: string | object;
  associatedInputs?: AssociatedInputs;
}

export interface IActionSubmit extends IActionSubmitProps, IActionWrapper {
  type: "Action.Submit";
}
