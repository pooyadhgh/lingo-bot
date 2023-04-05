import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Container style={{ margin: "15rem auto 0", textAlign: "center" }}>
      <Typography variant='body1' marginBottom={1}>
        Developed with ❤️ by{" "}
        <Link href='https://pooyadhgh.com/'>Pooya Dehghani</Link>
      </Typography>

      <Typography variant='body1' marginBottom={1}>
        Powered by <Link href='https://openai.com/'>Open AI</Link> API
      </Typography>
    </Container>
  );
};

export default Footer;
