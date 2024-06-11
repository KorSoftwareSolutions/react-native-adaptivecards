import { Spacing } from "../../utils/design-tokens";
import { IHostConfig } from "../../utils/host-config-models";
import { ICardElement } from "./card-element.types";

export class CardElementStyles {
  constructor(public props: ICardElement, public hostConfig: IHostConfig) {}

  getSpacing = (amount?: Spacing) => {
    if (!amount) return this.hostConfig.spacing?.default;
    return this.hostConfig.spacing?.[amount];
  };
}
