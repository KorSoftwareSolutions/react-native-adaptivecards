import { Colors, FontType, FontSize, FontWeight } from "../../utils/design-tokens";
import { ISelectAction } from "../cards/adaptive-card.types";

export interface ITextRunProps {
  text: string;
  color?: Colors;
  fontType?: FontType;
  highlight?: boolean;
  isSubtle?: boolean;
  italic?: boolean;
  selectAction?: ISelectAction;
  size?: FontSize;
  strikethrough?: boolean;
  underline?: boolean;
  weight?: FontWeight;
}
