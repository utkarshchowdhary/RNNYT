import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Byline from "./Byline";
import BaseText from "./BaseText";
import Thumbnail from "./Thumbnail";
import * as globalStyles from "../styles/global";

const NewsItem = ({
  index,
  style,
  imageUrl,
  title,
  author,
  date,
  location,
  description,
}) => {
  const accentColor =
    globalStyles.ACCENT_COLORS[index % globalStyles.ACCENT_COLORS.length];

  return (
    <TouchableOpacity style={style}>
      <Thumbnail
        url={imageUrl}
        titleText={title}
        accentColor={accentColor}
        style={styles().thumbnail}
      />
      <View style={styles({ accentColor }).content}>
        <Byline author={author} date={date} location={location} />
        <BaseText>{description}</BaseText>
      </View>
    </TouchableOpacity>
  );
};

NewsItem.propTypes = {
  style: PropTypes.any,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  author: PropTypes.string.isRequired,
  location: PropTypes.string,
  index: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = ({ accentColor } = {}) =>
  StyleSheet.create({
    thumbnail: {
      marginBottom: 5,
    },
    content: {
      backgroundColor: accentColor,
      padding: 5,
    },
  });

export default NewsItem;
