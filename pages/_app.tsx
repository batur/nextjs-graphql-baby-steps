import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { graphql as graphqlLib } from "@app/lib";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={graphqlLib.apolloClient}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}
