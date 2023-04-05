import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import Alert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import { PROMPT_TYPES } from "../constants";
import Result from "./Result";

const Prompt = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleButtonClick = (promptType) => {
    if (!text) {
      setError("Please enter your text");
      setResult("");
      return;
    }

    setLoading(promptType);

    setResult(`${text} and type: ${promptType}`);
  };

  const handleOnInputChange = (event) => {
    if (error || loading) {
      setError("");
      setLoading("");
    }

    setText(event.target.value);
  };

  return (
    <Container maxWidth='md'>
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
          margin: "3rem auto",
          display: "flex",
          justifyContent: isSmallScreen ? "flex-start" : "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <LoadingButton
          variant='contained'
          size='large'
          onClick={() => handleButtonClick(PROMPT_TYPES.REVIEW)}
          loading={loading === PROMPT_TYPES.REVIEW}
        >
          Review my text
        </LoadingButton>

        <LoadingButton
          variant='contained'
          size='large'
          onClick={() => handleButtonClick(PROMPT_TYPES.CORRECT)}
          loading={loading === PROMPT_TYPES.CORRECT}
        >
          Correct my text
        </LoadingButton>

        <LoadingButton
          variant='contained'
          size='large'
          onClick={() => handleButtonClick(PROMPT_TYPES.REWRITE)}
          loading={loading === PROMPT_TYPES.REWRITE}
        >
          Rewrite my text
        </LoadingButton>
      </Container>

      {result && <Result response={result} />}
    </Container>
  );
};

export default Prompt;
