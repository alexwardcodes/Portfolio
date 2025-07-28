import { Root } from "./components/Root";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export const App = () => {
  const theme = extendTheme({
    config: {
      cssVarPrefix: "ck",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        50: "#f7fafc",
        900: "#171923",
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Root />
    </ChakraProvider>
  );
};

export default App;
