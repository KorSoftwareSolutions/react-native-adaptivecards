import { Text } from "react-native";

export interface IRule {
  name: string;
  pattern: RegExp;
}

const ComponentMap: Record<string, React.FC<React.PropsWithChildren>> = {
  italic: (props) => <Text style={{ fontStyle: "italic" }}>{props.children}</Text>,
  bold: (props) => <Text style={{ fontWeight: "bold" }}>{props.children}</Text>,
  text: (props) => <Text>{props.children}</Text>,
  heading1: (props) => <Text style={{ fontSize: 32 }}>{props.children}</Text>,
  heading2: (props) => <Text style={{ fontSize: 24 }}>{props.children}</Text>,
  link: (props) => <Text style={{ color: "blue" }}>{props.children}</Text>,
  list: (props) => <Text>{props.children}</Text>,
};

const RULES: IRule[] = [
  { name: "bold", pattern: /\*\*(.*?)\*\*/g },
  { name: "italic", pattern: /_(.*?)_/g },
  { name: "link", pattern: /\[(.*?)\]\((.*?)\)/g },
  { name: "list", pattern: /\n\d\.(.*?)/g },
  { name: "list", pattern: /\n\d\)(.*?)/g },
];

export interface ISegment {
  text: string;
  name: string;
}

export const markdownFormatter = (markdown?: string): JSX.Element[] => {
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
