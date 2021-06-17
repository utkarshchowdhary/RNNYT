import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, SafeAreaView, View, FlatList, Modal } from "react-native";
import NewsItem from "./NewsItem";
import NewsItemDetail from "./NewsItemDetail";
import * as globalStyles from "../styles/global";

const NewsFeed = ({ news }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newsItem, setNewsItem] = useState(null);

  const handleModalOpen = (item) => {
    setNewsItem(item);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setNewsItem(null);
  };

  const renderModal = () => (
    <>
      {modalVisible ? (
        <Modal
          animationType="slide"
          visible
          statusBarTranslucent={true}
          onRequestClose={handleModalClose}
        >
          <SafeAreaView
            style={[
              globalStyles.COMMON_STYLES.pageContainer,
              styles.modalContainer,
            ]}
          >
            <NewsItemDetail onModalClose={handleModalClose} {...newsItem} />
          </SafeAreaView>
        </Modal>
      ) : null}
    </>
  );

  return (
    <SafeAreaView style={globalStyles.COMMON_STYLES.pageContainer}>
      <View style={globalStyles.COMMON_STYLES.pageSubContainer}>
        <FlatList
          data={news}
          renderItem={({ item, index }) => (
            <NewsItem
              style={styles.newsItem}
              onModalOpen={() => handleModalOpen(item)}
              index={index}
              {...item}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        {renderModal()}
      </View>
    </SafeAreaView>
  );
};

export default NewsFeed;

NewsFeed.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};

NewsFeed.defaultProps = {
  news: [
    {
      id: "yvZWm-3-A2jrFsK1GEZHN",
      title:
        "Channel Kristin Cavallari’s Cabo Style With This Ultra-Similar Sun Hat",
      category: "CELEB STYLE",
      imageUrl:
        "https://www.usmagazine.com/wp-content/uploads/2021/06/kristin-cavallari-sun-hat.jpg",
      description:
        "We have the same conversation with ourselves every year. It always goes a little something like this: “Sun hats are so chic and cool. But will they look good on me? Are they too much? But they’ll protect my eyes and skin too, so that’s a huge plus. But how much do they cost? How do you wear one?” And we basically go on and on until summer is over and we’ve lost our chance yet again.",
      date: new Date(),
      author: "Suzy Forman",
      location: "US",
      url: "https://www.usmagazine.com/shop-with-us/news/kristin-cavallari-straw-sun-hat-wide-brim-beach-celebrity-fashion-amazon/",
    },
    {
      id: "xjED84TaQEtlg6KE6_E_V",
      title:
        "Dread Wearing Bathing Suits? This ‘Miracle’ One-Piece Is a Dream for Hourglass Shapes",
      category: "SWIM STYLE",
      imageUrl:
        "https://i0.wp.com/www.usmagazine.com/wp-content/uploads/2021/06/miraclesuit-swimsuit.jpg",
      description:
        "We love the beach. We love the sun. We love the sound of the waves. We love the warm, white sand. We love sitting back with a lighthearted book or taking a nap under the shade of an umbrella. The one thing we don’t love quite as much? Swimsuits. We want to be wearing a swimsuit for all of the above activities, but the problem is, we’re usually too busy being worried about how we look in our swimwear to even enjoy them properly!",
      date: new Date(),
      author: "Suzy Forman",
      location: "UK",
      url: "https://www.usmagazine.com/shop-with-us/news/miraclesuit-one-piece-swimsuit-bathing-suit-hourglass-shaping-flattering/",
    },
    {
      id: "ecqOSFxvzjjaJ61XbrdJx",
      title:
        "Emily Hampshire Reflects on Investing in ‘Therapy’ After Heartbreak, Finding a Relationship With Herself",
      category: "EXCLUSIVE",
      imageUrl:
        "https://www.usmagazine.com/wp-content/uploads/2021/06/Emily-Hampshire-Talks-Investing-Therapy-After-Heartbreak-Self-Love-001.jpg",
      description:
        "Self-love is everything! Emily Hampshire admitted that investing in herself after heartbreak made the tough stuff worth it.",
      date: new Date(),
      author: "Sophia Vilensky",
      location: "Menlo Park, California",
      url: "https://www.usmagazine.com/celebrity-news/news/emily-hampshire-reflects-on-investing-in-therapy-after-heartbreak/",
    },
    {
      id: "XuTGnspslBN2BsUQifw1-",
      title:
        "Pregnant Halsey’s Baby Bump Album Ahead of 1st Child’s Arrival: Photos",
      category: "PREGNANCIES",
      imageUrl:
        "https://www.usmagazine.com/wp-content/uploads/2021/02/Pregnant-Halsey-Shares-Baby-Bump-Pics-Ahead-of-1st-Childs-Arrival-3.jpg",
      description:
        "Happy for Halsey! The singer announced their pregnancy news in January and has been showing their baby bump ever since.",
      date: new Date(),
      author: "Riley Cardoza",
      location: "Birmingham, UK",
      url: "https://www.usmagazine.com/celebrity-moms/pictures/pregnant-halseys-baby-bump-album-ahead-of-1st-childs-arrival-pics/",
    },
    {
      id: "ta1o8CFh2zwWR3sYA2ll7",
      title:
        "‘Here for the Right Reasons’: Tayshia and Kaitlyn React to How Katie Handles ‘Bachelorette’ Drama",
      category: "EXCLUSIVE",
      imageUrl:
        "https://www.usmagazine.com/wp-content/uploads/2021/06/Here-Right-Reasons-Tayshia-Kaitlyn-Katie-Handling-Drama-001.jpg",
      description:
        "The drama is just getting started! Katie Thurston was forced to lay down the law during the Monday, June 14, episode of The Bachelorette, and cohosts Tayshia Adams and Kaitlyn Bristowe are weighing in on the drama on Us Weekly’s Here for the Right Reasons.",
      date: new Date(),
      author: "Sarah Hearon",
      location: "Menlo Park, California",
      url: "https://www.usmagazine.com/entertainment/news/tayshia-and-kaitlyn-on-how-katie-handles-bachelorette-drama/",
    },
  ],
};

const styles = StyleSheet.create({
  newsItem: {
    marginBottom: 20,
  },
  modalContainer: {
    backgroundColor: globalStyles.BG_COLOR_LIGHT,
  },
});
