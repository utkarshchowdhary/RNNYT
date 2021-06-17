import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import SmallText from "./SmallText";
import * as globalStyles from "../styles/global";

const Byline = ({ category, date, author, location }) => (
  <>
    <View style={styles.row}>
      <SmallText>{date.toLocaleDateString()}</SmallText>
      <SmallText>By {author}</SmallText>
    </View>
    <View style={styles.row}>
      {location ? <SmallText style={styles.mute}>{location}</SmallText> : null}
      <SmallText style={styles.mute}>{category}</SmallText>
    </View>
  </>
);

Byline.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  author: PropTypes.string.isRequired,
  location: PropTypes.string,
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  mute: {
    color: globalStyles.MUTED_COLOR,
  },
});

export default Byline;
