import { IActionWrapper } from "./components/action-wrapper.types";

export interface IActionToggleVisibilityProps {
  targetElements: string[];
}

export interface IActionToggleVisibility extends IActionToggleVisibilityProps, IActionWrapper {
  type: "Action.ToggleVisibility";
}

export interface ITargetElement {
  elementId: string;
  isVisible?: boolean;
}
