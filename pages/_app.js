import React from "react";

import Head from "next/head";
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import Layout from "../components/Layout";
import VehicleState from "../context/vehicle/VehicleState";
import CategoryState from "../context/category/CategoryState";
import MakeState from "../context/make/MakeState";
import JobState from "../context/job/JobState";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    /// Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <VehicleState>
            <MakeState>
              <JobState>
                <CategoryState>
                  <SnackbarProvider dense maxSnack={3}>
                    <Component {...pageProps} />
                  </SnackbarProvider>
                </CategoryState>
              </JobState>
            </MakeState>
          </VehicleState>
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}


