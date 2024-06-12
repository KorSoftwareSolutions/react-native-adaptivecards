import React, { useState } from "react";
import { IAction } from "../action.types";
import { Modal, StyleProp, ViewStyle, View, Pressable, LayoutChangeEvent, LayoutRectangle } from "react-native";
import { useHostConfig } from "../../../hooks/useHostConfig";
import { ActionsDropdownStyles } from "./actions-dropdown.styles";
import { elementFactory } from "../../../utils/element-factory";
import { ActionWrapper } from "./action-wrapper";
import { ActionsDropdownButton } from "./actions-dropdown-button";

interface IProps {
  actions: IAction[];
}

export const ActionsDropdown = (props: IProps) => {
  /* ******************** Hooks ******************** */
  const { hostConfig } = useHostConfig();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [buttonPageLayout, setButtonPageLayout] = useState<LayoutRectangle>();
  const [dropdownLayout, setDropdownLayout] = useState<LayoutRectangle>();
  const styles = new ActionsDropdownStyles(hostConfig);

  /* ******************** Variables ******************** */
  const composedContainerStyles: StyleProp<ViewStyle> = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };

  const composedActionsContainerStyles: StyleProp<ViewStyle> = {
    backgroundColor: "white",
    padding: hostConfig.actions?.buttonSpacing,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    gap: hostConfig.actions?.buttonSpacing,
    width: "80%",

    // position: "absolute",
    // right: styles.getRight(buttonPageLayout, dropdownLayout),
    // top: styles.getTop(buttonPageLayout, dropdownLayout),
  };

  /* ******************** Functions ******************** */
  const onButtonLayout = (e: LayoutChangeEvent) => {
    e.target.measure((x, y, width, height, pageX, pageY) => {
      setButtonPageLayout({ x: pageX, y: pageY, width, height });
    });
  };

  const onDropdownLayout = (e: LayoutChangeEvent) => {
    setDropdownLayout(e.nativeEvent.layout);
  };

  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <>
      <ActionsDropdownButton onPress={() => setIsModalVisible(true)} onLayout={onButtonLayout} />
      <Modal visible={isModalVisible} transparent>
        <Pressable onPress={() => setIsModalVisible(false)} style={composedContainerStyles}>
          <View style={composedActionsContainerStyles} onLayout={onDropdownLayout}>
            {props.actions.map((action, index) => {
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
          </View>
        </Pressable>
      </Modal>
    </>
  );
};
