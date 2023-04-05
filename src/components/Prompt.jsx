import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { PROMPT_TYPES } from "../constants";

const Prompt = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleButtonClick = (promptType) => {
    if (!text) {
      setError("Please enter your text");
      return;
    }

    console.log(text, promptType);
  };

  const handleOnInputChange = (event) => {
    if (error) setError("");
    setText(event.target.value);
  };

  return (
    <Container style={{ margin: "5rem auto" }}>
      {error && (
        <Alert severity='error' style={{ margin: "1rem auto" }}>
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        label='Enter your text'
        multiline
        rows={10}
        value={text}
        onChange={handleOnInputChange}
      />

      <Container
        style={{
          margin: "3rem auto",
          display: "flex",
          justifyContent: isSmallScreen ? "flex-start" : "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <Button
          variant='contained'
          size='large'
          onClick={() => handleButtonClick(PROMPT_TYPES.REVIEW)}
        >
          Review my text
        </Button>

        <Button
          variant='contained'
          size='large'
          onClick={() => handleButtonClick(PROMPT_TYPES.CORRECT)}
        >
          Correct my text
        </Button>

        <Button
          variant='contained'
          size='large'
          onClick={() => handleButtonClick(PROMPT_TYPES.REWRITE)}
        >
          Rewrite my text
        </Button>
      </Container>
    </Container>
  );
};

export default Prompt;
