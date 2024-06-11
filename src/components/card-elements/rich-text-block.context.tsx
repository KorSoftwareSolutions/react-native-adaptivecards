import React from "react";
import { HorizontalAlignment } from "../../utils/design-tokens";

export interface IRichTextBlockContext {
  horizontalAlignment: HorizontalAlignment;
}

export const RichTextBlockContext = React.createContext<IRichTextBlockContext | undefined>(undefined);

export const RichTextBlockProvider = ({ children, horizontalAlignment }: React.PropsWithChildren<IRichTextBlockContext>) => {
  return <RichTextBlockContext.Provider value={{ horizontalAlignment }}>{children}</RichTextBlockContext.Provider>;
};

export const useRichTextBlockContext = () => {
  const context = React.useContext(RichTextBlockContext);
  if (!context) {
    throw new Error("useRichTextBlockContext must be used within a RichTextBlockProvider");
  }
  return context;
};
