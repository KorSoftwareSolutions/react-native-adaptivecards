import { IAdaptiveCard } from "../cards/adaptive-card.types";
import { IActionWrapper } from "./components/action-wrapper.types";

export interface IActionShowCardProps {
  card: IAdaptiveCard;
}

export interface IActionShowCard extends IActionShowCardProps, IActionWrapper {
  type: "Action.ShowCard";
}
