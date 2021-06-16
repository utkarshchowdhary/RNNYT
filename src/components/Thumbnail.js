import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, ImageBackground, View } from "react-native";
import Title from "./Title";

const Thumbnail = ({ url, titleText, accentColor, style }) => (
  <View style={[styles({ accentColor }).container, style]}>
    {url.length > 0 ? (
      <ImageBackground
        style={styles({ accentColor }).image}
        source={{
          uri: url,
        }}
      >
        <Title style={styles().title}>{titleText}</Title>
      </ImageBackground>
    ) : (
      <View style={[styles({ accentColor: `${accentColor}77` }).image]}>
        <Title style={styles().title}>{titleText}</Title>
      </View>
    )}
  </View>
);

Thumbnail.propTypes = {
  style: PropTypes.any,
  url: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  accentColor: PropTypes.string.isRequired,
};

const styles = ({ accentColor } = {}) =>
  StyleSheet.create({
    container: {
      borderBottomWidth: 3,
      borderStyle: "solid",
      borderColor: accentColor,
    },
    image: {
      minHeight: 180,
      backgroundColor: accentColor,
      justifyContent: "flex-end",
    },
    title: {
      padding: 5,
    },
  });

export default Thumbnail;
