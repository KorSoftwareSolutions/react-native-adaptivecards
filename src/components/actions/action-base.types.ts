export interface IActionBase {
  title?: string;
  iconUrl?: string;
  id?: string;
  style?: ActionStyle;
  fallback?: any; // TODO: Define a type for this
  tooltip?: string;
  isEnabled?: boolean;
  mode?: ActionMode;
  requires?: Record<string, string>;
}

export enum ActionStyle {
  Default = "default",
  Positive = "positive",
  Destructive = "destructive",
}

export enum ActionMode {
  Primary = "primary",
  Secondary = "secondary",
}
