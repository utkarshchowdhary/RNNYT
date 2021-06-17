import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Byline from "./Byline";
import Thumbnail from "./Thumbnail";
import * as globalStyles from "../styles/global";

const NewsItem = ({
  style,
  title,
  category,
  imageUrl,
  date,
  author,
  location,
  index,
  onModalOpen,
}) => {
  const accentColor =
    globalStyles.ACCENT_COLORS[index % globalStyles.ACCENT_COLORS.length];

  return (
    <TouchableOpacity style={style} onPress={onModalOpen}>
      <Thumbnail
        imageUrl={imageUrl}
        titleText={title}
        accentColor={accentColor}
        style={styles().thumbnail}
      />
      <View style={styles({ accentColor }).content}>
        <Byline
          category={category}
          author={author}
          date={date}
          location={location}
        />
      </View>
    </TouchableOpacity>
  );
};

NewsItem.propTypes = {
  style: PropTypes.any,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  author: PropTypes.string.isRequired,
  location: PropTypes.string,
  index: PropTypes.number.isRequired,
  onModalOpen: PropTypes.func.isRequired,
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
