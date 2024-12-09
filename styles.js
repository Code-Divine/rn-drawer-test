import { StyleSheet } from "react-native";
import ColorPalette from "./constants/ColorPalette";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // alignItems: "center",
    justifyContent: "center",
    rowGap: 16,
    flexDirection: "column",
    backgroundColor: ColorPalette.background.page,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
