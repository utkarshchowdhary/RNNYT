import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import BaseText from "./BaseText";
import * as globalStyles from "../styles/global";

const Title = ({ style, children }) => (
  <BaseText style={[styles.title, style]}>{children}</BaseText>
);

Title.propTypes = {
  style: PropTypes.any,
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: globalStyles.TEXT_COLOR,
    backgroundColor: `${globalStyles.BG_COLOR}80`,
  },
});

export default Title;
