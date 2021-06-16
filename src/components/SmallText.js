import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import BaseText from "./BaseText";

const SmallText = ({ children, style, ...rest }) => (
  <BaseText style={[styles.small, style]} {...rest}>
    {children}
  </BaseText>
);

SmallText.propTypes = {
  style: PropTypes.any,
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  small: {
    fontSize: 11,
  },
});

export default SmallText;
