import React from "react";
import { Text } from "react-native";
import { useHostConfig } from "./useHostConfig";
import { FontType } from "../utils/design-tokens";

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

export const useMarkdownFormatter = (fontType: FontType) => {
  const { hostConfig } = useHostConfig();

  const fontFamily = hostConfig?.fontFamily?.[fontType];

  const ComponentMap: Record<string, React.FC<React.PropsWithChildren>> = {
    italic: (props) => <Text style={{ fontFamily: fontFamily?.italic }}>{props.children}</Text>,
    bold: (props) => <Text style={{ fontWeight: "bold", fontFamily: fontFamily?.bold }}>{props.children}</Text>,
    text: (props) => <Text style={{ fontFamily: fontFamily?.regular }}>{props.children}</Text>,
    link: (props) => <Text style={{ color: "blue", fontFamily: fontFamily?.regular }}>{props.children}</Text>,
    list: (props) => <Text style={{ fontFamily: fontFamily?.regular }}>{props.children}</Text>,
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
