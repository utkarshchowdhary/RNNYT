import { StyleSheet, StatusBar } from "react-native";

export const BG_COLOR = "#a3b18a";
export const BAR_COLOR = "#4e4d52";
export const TEXT_COLOR = "#ffffff";
export const HEADER_TEXT_COLOR = "#ffffff";
export const MUTED_COLOR = "#736f72";
export const LINK_COLOR = "#48e9d9";
export const ACCENT_COLORS = [
  "#a4c3b2",
  "#9cafb7",
  "#9ec1a3",
  "#70a9a1",
  "#84a59d",
];

export const COMMON_STYLES = StyleSheet.create({
  pageContainer: {
    backgroundColor: BG_COLOR,
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  pageSubContainer: {
    padding: 10,
  },
  text: {
    color: TEXT_COLOR,
  },
});
