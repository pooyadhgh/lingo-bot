import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Hero = () => {
  return (
    <Container style={{ margin: "5rem auto" }}>
      <Typography variant='h1' fontSize={40} fontWeight={600} marginBottom={3}>
        Lingo Bot
      </Typography>

      <Typography variant='body1' marginBottom={1}>
        Welcome to Lingo Bot, the AI-powered grammar-checking tool that helps
        you identify and correct grammatical errors with ease.
      </Typography>

      <Typography variant='body1' marginBottom={1}>
        Our app provides feedback on how to improve your writing skills and has
        the capability to suggest corrections, rewrite and paraphrase your text.
        With our intuitive interface, you can quickly polish your writing and
        ensure it's error-free.
      </Typography>

      <Typography variant='body1' marginBottom={1}>
        Try Lingo Bot today and experience the power of AI in writing!
      </Typography>
    </Container>
  );
};

export default Hero;
