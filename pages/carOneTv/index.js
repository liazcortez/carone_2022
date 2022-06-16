import React from "react";
import { Container, Box } from "@mui/material";
import Meta from "../../components/Meta";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	container:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center'
 }
}));

const index = () => {
  const classes = useStyles();
  var player;
  const onYouTubeIframeAPIReady = () => {
    player = new YT.Player("live-video", {
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  };
  const onPlayerReady = () => {
    var url = player.getVideoUrl();
    var match = url.match(/[?&]v=([^&]+)/);
    var videoId = match[1];
    var livevid = document.createElement("iframe");
    livevid.src =
      "https://www.youtube.com/live_chat?v=" +
      videoId +
      "&embed_domain=https://https://carone.com.mx/";
    livevid.width = "100%";
    livevid.height = "400px";
    document.getElementById("chatframe").appendChild(livevid);
  };
  function onPlayerStateChange() {
  }

  React.useEffect(() => {
    onYouTubeIframeAPIReady();
  }, []);


  return (
    <>
      <Meta title="Car One TV - Car One Group" description="Car One TV" />

      <Container className='VideoContainer' maxWidth="lg">
        <Box className="VideoBox">
          <iframe
            id="live-video"
            src="https://www.youtube.com/embed/live_stream?channel=UC2a1x5-U84V1vvT9WRNfG1w&enablejsapi=1&version=3&origin=https://https://carone.com.mx/"
            width="100%"
            height="100%"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            enablejsapi="1"
          ></iframe>
        </Box>
      </Container>
    </>
  );
};

export default index;
