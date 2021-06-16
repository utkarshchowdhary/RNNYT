import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import * as globalStyles from "../styles/global";

const BaseText = ({ children, style, ...rest }) => (
  <Text style={[globalStyles.COMMON_STYLES.text, style]} {...rest}>
    {children}
  </Text>
);

BaseText.propTypes = {
  style: PropTypes.any,
  children: PropTypes.node,
};

export default BaseText;
