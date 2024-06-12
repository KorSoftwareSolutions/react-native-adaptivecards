import { IActionWrapper } from "./components/action-wrapper.types";

export interface IActionOpenUrlProps {
  url: string;
}

export interface IActionOpenUrl extends IActionOpenUrlProps, IActionWrapper {
  type: "Action.OpenUrl";
}
