import React from "react";
import { Container, Grid, Typography, Divider, Box } from "@mui/material";

import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";

const SharingComponent = ({ url }) => {
  React.useEffect(() => {
    console.log(url);
  }, []);
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        p={1}
        m={1}
      >
        <Box p={1}>Compartir</Box>
        <Box p={1}>
          <FacebookShareButton url={url}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </Box>
        <Box p={1}>
          <WhatsappShareButton url={url}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </Box>
        <Box p={1}>
          <TwitterShareButton url={url}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </Box>
      </Box>
    </>
  );
};

export default SharingComponent;
