import React from "react";
import { Text } from "react-native";
import { useHostConfig } from "./useHostConfig";
import { FontWeight } from "../utils/design-tokens";
import { ITextBlock } from "../components/card-elements/text-block.types";
import { TextBlockStyles } from "../components/card-elements/text-block.styles";

interface IRule {
  name: string;
  pattern: RegExp;
}
interface ISegment {
  text: string;
  name: string;
}

const RULES: IRule[] = [
  { name: "bold", pattern: /\*\*(.*?)\*\*/g },
  { name: "italic", pattern: /_(.*?)_/g },
  { name: "link", pattern: /\[(.*?)\]\((.*?)\)/g },
  { name: "list", pattern: /\n\d\.(.*?)/g },
  { name: "list", pattern: /\n\d\)(.*?)/g },
];

export const useMarkdownFormatter = (textBlockProps: Required<ITextBlock>) => {
  const { hostConfig } = useHostConfig();

  const ComponentMap: Record<string, React.FC<React.PropsWithChildren>> = {
    italic: (props) => {
      const textBlockStyles = new TextBlockStyles(textBlockProps, hostConfig);
      return <Text style={{ fontFamily: textBlockStyles.getFontFamily(true) }}>{props.children}</Text>;
    },
    bold: (props) => {
      const textBlockPropsTemp = { ...textBlockProps, weight: FontWeight.Bolder };
      const textBlockStyles = new TextBlockStyles(textBlockPropsTemp, hostConfig);
      return <Text style={{ fontFamily: textBlockStyles.getFontFamily() }}>{props.children}</Text>;
    },
    text: (props) => {
      const textBlockStyles = new TextBlockStyles(textBlockProps, hostConfig);
      return <Text style={{ fontFamily: textBlockStyles.getFontFamily() }}>{props.children}</Text>;
    },
    link: (props) => {
      const textBlockStyles = new TextBlockStyles(textBlockProps, hostConfig);
      return <Text style={{ color: "blue", fontFamily: textBlockStyles.getFontFamily() }}>{props.children}</Text>;
    },
    list: (props) => {
      const textBlockStyles = new TextBlockStyles(textBlockProps, hostConfig);
      return <Text style={{ fontFamily: textBlockStyles.getFontFamily() }}>{props.children}</Text>;
    },
  };

  const markdownFormatter = (markdown?: string): JSX.Element[] => {
    const elements: JSX.Element[] = [];
    if (!markdown) return elements;
    let segments: ISegment[] = [{ text: markdown, name: "text" }];
    for (const rule of RULES) {
      let newSegments: ISegment[] = [];
      for (const segment of segments) {
        const parts = segment.text.split(rule.pattern);
        for (let i = 0; i < parts.length; i++) {
          if (i % 2 === 0) {
            newSegments.push({ text: parts[i], name: segment.name });
          } else {
            newSegments.push({ text: parts[i], name: rule.name });
          }
        }
      }
      segments = newSegments;
    }
    return segments.map((segment, index) => {
      const Component = ComponentMap[segment.name];
      return <Component key={index}>{segment.text}</Component>;
    });
  };

  return { markdownFormatter };
};
