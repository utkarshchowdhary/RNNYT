import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, ImageBackground, View } from "react-native";
import Title from "./Title";

const Thumbnail = ({ imageUrl, titleText, accentColor, style }) => (
  <View style={[styles({ accentColor }).container, style]}>
    {imageUrl ? (
      <ImageBackground
        style={styles().image}
        source={{
          uri: imageUrl,
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
  imageUrl: PropTypes.string,
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
