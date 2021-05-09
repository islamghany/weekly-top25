import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { client } from "../hooks";
import Head from "../components/head";
import theme from "../utils/theme";
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <Head
          title="Weekly Top25"
          description="a blog fetcher for the 25 top articles in a week"
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
