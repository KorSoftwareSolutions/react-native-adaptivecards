import React, { useMemo } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useHostConfig } from "../../../hooks/useHostConfig";
import { ActionsContainerStyles } from "./actions-container.styles";
import { IAction } from "../action.types";
import { elementFactory } from "../../../utils/element-factory";
import { ActionsDropdown } from "./actions-dropdown";
import { ActionWrapper } from "./action-wrapper";
import { ActionMode } from "./action-wrapper.types";

interface IProps {
  actions: IAction[];
}

export const ActionsContainer = (props: IProps) => {
  /* ******************** Hooks ******************** */
  const { hostConfig } = useHostConfig();
  const styles = new ActionsContainerStyles(hostConfig);

  /* ******************** Variables ******************** */
  const actions = useMemo(() => {
    let result: IAction[] = [];
    if (!hostConfig.actions?.maxActions) result = props.actions;
    else if (props.actions.length <= hostConfig.actions?.maxActions) {
      result = props.actions;
    } else {
      result = props.actions.slice(0, hostConfig.actions?.maxActions);
    }
    const primary: IAction[] = [];
    const secondary: IAction[] = [];
    result.forEach((action) => {
      if (action.mode === ActionMode.Secondary) {
        secondary.push(action);
      } else {
        primary.push(action);
      }
    });
    return { primary, secondary };
  }, [JSON.stringify(props.actions)]);

  /* ******************** Functions ******************** */
  const composedStyles: StyleProp<ViewStyle> = {
    flexDirection: styles.getFlexDirection(),
    alignItems: styles.getAlignItems(),
    justifyContent: styles.getJustifyContent(),
    gap: styles.getGap(),
    flexWrap: "wrap",
  };

  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <View style={composedStyles}>
      {!!actions.primary &&
        actions.primary.map((action, index) => {
          const Element = elementFactory.getActionElement(action.type);
          if (!Element) {
            return null;
          }
          return (
            <ActionWrapper {...action} key={index}>
              <Element {...action} />
            </ActionWrapper>
          );
        })}
      {!!actions.secondary.length && <ActionsDropdown actions={actions.secondary} />}
    </View>
  );
};
