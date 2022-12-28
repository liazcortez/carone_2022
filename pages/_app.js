import React from "react";

import Head from "next/head";
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import Layout from "../components/Layout";
import VehicleState from "../context/vehicle/VehicleState";
import CategoryState from "../context/category/CategoryState";
import MakeState from "../context/make/MakeState";
import JobState from "../context/job/JobState";
import AuthState from "../context/auth/AuthState";
import MediaState from "../context/media/MediaState";
import AlertState from "../context/alert/AlertState";
import ApplicantState from "../context/applicant/ApplicantState";
import StoreState from "../context/store/StoreState";
import PreownedState from "../context/preowned/PreownedState";
import CampaignState from "../context/campaign/CampaignState";

import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import '../styles/styles.css'

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
        <title>Car One Group</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AuthState>
          <Layout>
            <AlertState>
              <ApplicantState>
                <StoreState>
                  <VehicleState>
                    <PreownedState>
                      <MakeState>
                        <JobState>
                          <CategoryState>
                            <CampaignState>
                            <MediaState>
                              <SnackbarProvider dense maxSnack={3}>
                                <Component {...pageProps} />
                              </SnackbarProvider>
                            </MediaState>
                            </CampaignState>
                          </CategoryState>
                        </JobState>
                      </MakeState>
                    </PreownedState>
                  </VehicleState>
                </StoreState>
              </ApplicantState>
            </AlertState>
          </Layout>
        </AuthState>
      </ThemeProvider>
    </React.Fragment>
  );
}


