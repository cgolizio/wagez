import { extendTheme } from "@chakra-ui/react";

import { Field } from "../components/Field";

export const customTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        background:
          "linear-gradient(45deg, #00FF87 0%, #00FFD0 50%, #60EFFF 100%)",
        userSelect: "none",
        color: "#f8f8ff",
      },
    },
    colors: {},
    components: {
      Field,
    },
    fonts: {},
    textStyles: {},
  },
});
