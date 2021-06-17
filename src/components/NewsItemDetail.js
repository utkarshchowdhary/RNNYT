import React from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
import SmallText from "./SmallText";
import Title from "./Title";
import * as globalStyles from "../styles/global";

const NewsItemDetail = ({
  title,
  category,
  imageUrl,
  description,
  date,
  author,
  location,
  url,
  onModalClose,
}) => (
  <ScrollView style={styles.container}>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.button} onPress={onModalClose}>
        <SmallText style={styles.buttonText}>CLOSE</SmallText>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(url)}
      >
        <SmallText style={styles.buttonText}>OPEN IN BROWSER</SmallText>
      </TouchableOpacity>
    </View>
    <ImageBackground style={styles.image} source={{ uri: imageUrl }}>
      {location ? (
        <SmallText style={styles.location}>{location}</SmallText>
      ) : null}
      <SmallText style={styles.date}>{date.toLocaleDateString()}</SmallText>
    </ImageBackground>
    <Title style={styles.title}>{title}</Title>
    <View style={styles.byline}>
      <SmallText style={styles.bylineText}>{category}</SmallText>
      <SmallText style={styles.bylineText}>By {author}</SmallText>
    </View>
    <View style={styles.descriptionContainer}>
      <SmallText style={styles.description}>{description}</SmallText>
    </View>
  </ScrollView>
);

NewsItemDetail.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  author: PropTypes.string.isRequired,
  location: PropTypes.string,
  url: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 5,
    borderRadius: 2,
    backgroundColor: globalStyles.BUTTON_COLOR,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: globalStyles.MUTED_COLOR,
  },
  image: {
    height: 260,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  location: {
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: `${globalStyles.DIM_PINK}CC`,
    marginEnd: 2,
  },
  date: {
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: `${globalStyles.DIM_PINK}CC`,
  },
  title: {
    padding: 5,
    fontWeight: "bold",
    textShadowColor: globalStyles.SHADOW_COLOR,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  byline: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bylineText: {
    color: globalStyles.DIM_PINK,
    fontSize: 14,
    fontWeight: "bold",
  },
  descriptionContainer: {
    padding: 12,
  },
  description: {
    fontSize: 18,
    color: globalStyles.MUTED_COLOR,
  },
});

export default NewsItemDetail;
