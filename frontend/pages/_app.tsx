import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import "../src/styles/globals.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchInterval: 10000,
    },
  },
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          breakpoints: {
            xs: 400,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
          },
          fontFamily: "Roboto",
          headings: { fontFamily: "Roboto" },
          colors: {
            primary: ["#F4F6F8"],
            secondary: ["#2B2C34"],
          },
        }}
      >
        <QueryClientProvider client={queryClient}>
          <ModalsProvider>
            <NotificationsProvider>
              <Component {...pageProps} />
            </NotificationsProvider>
          </ModalsProvider>
        </QueryClientProvider>
      </MantineProvider>
    </>
  );
}
