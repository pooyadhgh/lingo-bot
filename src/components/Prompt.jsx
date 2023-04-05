import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { PROMPT_TYPES } from "../constants";
import Result from "./Result";

const Prompt = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleButtonClick = (promptType) => {
    if (!text) {
      setError("Please enter your text");
      setResult("");
      return;
    }

    setResult(`${text} and type: ${promptType}`);
  };

  const handleOnInputChange = (event) => {
    if (error) setError("");
    setText(event.target.value);
  };

  return (
    <Container>
      {error && (
        <Alert severity='error' style={{ margin: "2rem auto" }}>
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
          margin: "2rem auto",
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

      {result && <Result response={result} />}
    </Container>
  );
};

export default Prompt;
