import { StyleSheet, StatusBar } from "react-native";

export const DIM_PINK = "#ef798a";
export const BG_COLOR = "#a3b18a";
export const BG_COLOR_LIGHT = "#fef9ef";
export const SHADOW_COLOR = "#a3a380";
export const BAR_COLOR = "#4e4d52";
export const TEXT_COLOR = "#ffffff";
export const BUTTON_COLOR = "#c3baba";
export const HEADER_TEXT_COLOR = "#ffffff";
export const MUTED_COLOR = "#646e78";
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
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    backgroundColor: BG_COLOR,
  },
  pageSubContainer: {
    flex: 1,
    padding: 12,
  },
  text: {
    color: TEXT_COLOR,
  },
});
