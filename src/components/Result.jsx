import React, { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Result = ({ response }) => {
  const ref = useRef();
  const [isCopied, setIsCopied] = useState(false);

  const handleOnButtonClick = () => {
    navigator.clipboard.writeText(response);
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      setIsCopied(false);
    }

    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [response]);

  return (
    <Container style={{ margin: "5rem auto" }} ref={ref}>
      <Typography variant='h2' fontSize={24} fontWeight={600} marginBottom={3}>
        You asked for it, and here it is:
      </Typography>

      <Typography variant='body1' marginBottom={3}>
        {response}
      </Typography>

      <Button
        variant='outlined'
        size='small'
        startIcon={<ContentCopyIcon />}
        onClick={handleOnButtonClick}
      >
        {isCopied ? "Copied!" : "Copy"}
      </Button>
    </Container>
  );
};

export default Result;
